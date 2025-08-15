'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Snap from 'lenis/snap'
import LatestProject from './latest-project'
import Possession from './possession'

export default function LeftPane() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    // Create Lenis instance for smooth scrolling
    const lenis = new Lenis({
      wrapper: scrollRef.current,
      content: scrollRef.current,
      smoothWheel: true,
      lerp: 0.1,
      autoRaf: false,
    })

    // Animation loop
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Create Snap instance
    const snap = new Snap(lenis, {
      type: 'mandatory',      // always snap
      duration: 0.6,          // snap animation duration (seconds)
    })

    const snapSize = 440
    snap.add(0)
    snap.add(snapSize)
    snap.add(snapSize * 2)
    snap.add(snapSize * 3)
    snap.add(snapSize * 4)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      className="w-1/2 max-h-1/2 overflow-hidden"
    >
      <section className='mb-16'>
        <LatestProject id="latest" />
      </section>
      <section className='mb-16'>
        <Possession id="possession" />
      </section>
      <section  className='mb-16'>
        <LatestProject id="latest2" />
      </section>
      <section  className='mb-16'>
        <Possession id="latest2" />
      </section>
    </div>
  )
}
