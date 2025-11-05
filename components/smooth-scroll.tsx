"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const MOBILE_BREAKPOINT = 768

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    // Check if device is mobile
    const isMobile = () => {
      return window.innerWidth < MOBILE_BREAKPOINT || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    // Don't initialize ScrollSmoother on mobile devices
    if (isMobile()) {
      return
    }

    // Wait for DOM to be ready
    const initScrollSmoother = () => {
      try {
        // Initialize ScrollSmoother only on desktop
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
      // Kill smoother if resizing to mobile, reinitialize if resizing to desktop
      if (isMobile() && smootherRef.current) {
        smootherRef.current.kill()
        smootherRef.current = null
      } else if (!isMobile() && !smootherRef.current) {
        initScrollSmoother()
      } else {
        smootherRef.current?.refresh()
      }
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
