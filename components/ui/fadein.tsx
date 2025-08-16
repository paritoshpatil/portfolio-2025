"use client"

import { motion, useAnimationControls } from "framer-motion"
import { forwardRef, ReactNode, useEffect, useImperativeHandle } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const FadeIn = forwardRef(function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "" 
}: FadeInProps, ref) {

  const controls = useAnimationControls()
  
  function rerender() {
    controls.set({opacity: 0})
    controls.start({opacity: 1})
  }

  useImperativeHandle(ref, () => ({
    rerender
  }))

  useEffect(() => {
    controls.start({opacity: 1})
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})