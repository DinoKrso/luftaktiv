"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    // Wait for DOM to be ready
    const initScrollSmoother = () => {
      try {
        // Initialize ScrollSmoother
        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2, // Smooth scrolling speed (higher = slower, smoother)
          effects: true, // Enable effects for data-speed attributes
          smoothTouch: 0.2, // Smooth scrolling on touch devices
          ignoreMobileResize: true, // Better mobile performance
        })
        
        smootherRef.current = smoother
        return smoother
      } catch (error) {
        console.error("ScrollSmoother initialization error:", error)
        return null
      }
    }
    
    const timeoutId = setTimeout(initScrollSmoother, 100)
    
    // Handle resize
    const handleResize = () => {
      smootherRef.current?.refresh()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", handleResize)
      if (smootherRef.current) {
        smootherRef.current.kill()
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
