"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const parallaxTriggers: ScrollTrigger[] = []
    
    const initParallax = () => {
      // Find all elements with data-speed attribute
      const elements = document.querySelectorAll<HTMLElement>("[data-speed]")
      
      elements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "1")
        
        // Skip if speed is 1 (no parallax needed)
        if (speed === 1) return
        
        // Calculate movement range based on viewport height
        const movement = window.innerHeight * (speed - 1) * 0.8 // Increased parallax intensity
        
        // Create ScrollTrigger for parallax
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            // Calculate parallax offset
            const progress = self.progress
            const offset = movement * (1 - progress * 2) // Goes from +movement to -movement
            
            gsap.set(element, {
              y: offset,
              force3D: true,
            })
          },
          invalidateOnRefresh: true,
        })
        
        parallaxTriggers.push(trigger)
      })
      
      ScrollTrigger.refresh()
    }

    // Initialize after DOM is ready
    const timeoutId = setTimeout(initParallax, 200)
    
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    
    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", handleResize)
      parallaxTriggers.forEach(trigger => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
