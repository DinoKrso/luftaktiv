"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { gsap } from "gsap"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const textRef2 = useRef<HTMLParagraphElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headingRef.current || !textRef.current || !textRef2.current || !scrollIndicatorRef.current) return

    // Create timeline for smooth sequential animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Heading animation
    tl.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    )

    // Text animation
    tl.fromTo(textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )

    // Second text animation
    tl.fromTo(textRef2.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    )

    // Scroll indicator animation
    gsap.fromTo(scrollIndicatorRef.current,
      { opacity: 0, y: -10 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        delay: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }
    )

    return () => {}
  }, [])

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - No parallax, static */}
      <div className="absolute inset-0">
        <Image
          src="/luftaktivhero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Left aligned on all screen sizes */}
      <div className="relative z-10 flex flex-col items-start justify-center text-left px-4 md:pl-6 lg:pl-8 xl:pl-12 md:pr-4 max-w-7xl w-full pt-20">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance"
        >
          NA DUGE STAZE
        </h1>

        <p
          ref={textRef}
          className="text-base md:text-lg lg:text-xl text-white/90 max-w-4xl leading-relaxed text-pretty mb-6"
        >
          Mnogi kažu da život i posao nisu sprint, već maraton. Prenesimo ovu analogiju na sam životni vijek krova;
          maraton će biti uspješno istrčan ukoliko je obavljen trening (odluka o gradnji) i trčanje nakon pucnja iz
          startnog pištolja (gradnja krova).
        </p>

        <p
          ref={textRef2}
          className="text-base md:text-lg lg:text-xl text-white/90 max-w-4xl leading-relaxed text-pretty"
        >
          Maratonci znaju da su planiranje i minimiziranje mogućnosti ozljede od krucijalne važnosti za kvalitetan rezultat. Upravo nabavka krovne opreme predstavlja planiranje i minimiziranje mogućnosti pojavljivanja problema.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}
