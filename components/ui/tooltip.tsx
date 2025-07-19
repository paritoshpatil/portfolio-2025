"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { createPortal } from "react-dom"

interface UseCursorTooltipProps {
  offset?: { x: number; y: number }
  content: ReactNode
  className?: string
  maxWidth?: number
  delay?: number
  smartPositioning?: boolean
}

export function useCursorTooltip<T extends HTMLElement>({
                                   offset = { x: 15, y: -10 },
                                   content,
                                   className = "",
                                   maxWidth = 320,
                                   delay = 0,
                                   smartPositioning = true
                                 }: UseCursorTooltipProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<T>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate smart positioning to keep tooltip in viewport
  const calculatePosition = (mouseX: number, mouseY: number) => {
    if (!smartPositioning || !tooltipRef.current) {
      return { x: mouseX + offset.x, y: mouseY + offset.y }
    }

    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    let x = mouseX + offset.x
    let y = mouseY + offset.y

    // Adjust horizontal position if tooltip would overflow
    if (x + tooltipRect.width > viewport.width - 10) {
      x = mouseX - tooltipRect.width - Math.abs(offset.x)
    }

    // Adjust vertical position if tooltip would overflow
    if (y + tooltipRect.height > viewport.height - 10) {
      y = mouseY - tooltipRect.height - Math.abs(offset.y)
    }

    // Ensure tooltip doesn't go off-screen on the left or top
    x = Math.max(10, x)
    y = Math.max(10, y)

    return { x, y }
  }

  useEffect(() => {
    if (!mounted || !triggerRef.current) return

    const trigger = triggerRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = calculatePosition(e.clientX, e.clientY)
      setPosition(newPosition)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const showTooltip = () => {
        setIsVisible(true)
        const initialPosition = calculatePosition(e.clientX, e.clientY)
        setPosition(initialPosition)
        trigger.addEventListener("mousemove", handleMouseMove)
      }

      if (delay > 0) {
        timeoutRef.current = setTimeout(showTooltip, delay)
      } else {
        showTooltip()
      }
    }

    const handleMouseLeave = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsVisible(false)
      trigger.removeEventListener("mousemove", handleMouseMove)
    }

    trigger.addEventListener("mouseenter", handleMouseEnter)
    trigger.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      trigger.removeEventListener("mouseenter", handleMouseEnter)
      trigger.removeEventListener("mouseleave", handleMouseLeave)
      trigger.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mounted, offset.x, offset.y, delay, smartPositioning])

  const tooltip = mounted && isVisible ? (
      createPortal(
          <div
              ref={tooltipRef}
              className={`fixed z-50 pointer-events-none bg-background border rounded-md shadow-lg animate-in fade-in zoom-in-75 ${className}`}
              style={{
                left: position.x,
                top: position.y,
                maxWidth: `${maxWidth}px`
              }}
          >
            <div className="p-3">
              {content}
            </div>
          </div>,
          document.body
      )
  ) : null

  return { triggerRef, tooltip }
}