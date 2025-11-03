"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const stormImages = [
  "/nevrijeme/Copyright-FOS-Sturmschaden-01.jpg",
  "/nevrijeme/Copyright-FOS-Sturmschaden-02.jpg",
  "/nevrijeme/Copyright-FOS-Sturmschaden-03.jpg",
  "/nevrijeme/Copyright-FOS-Sturmschaden-04.jpg",
  "/nevrijeme/Copyright-FOS-Sturmschaden-06.jpg",
]

export function SafetySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll carousel
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stormImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated rain/storm effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-16 bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
            }}
            animate={{
              y: ["0vh", "120vh"],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 border-t-4 border-b-4 border-primary/50" />

      {/* Background parallax orbs */}
      <motion.div
        className="absolute top-1/2 left-10 w-96 h-96 bg-primary/10 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-80 h-80 bg-primary/10 blur-3xl rounded-full"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex-shrink-0 lg:sticky lg:top-24 w-full lg:w-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
            >
              ZA SIGURAN KROV
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-pretty max-w-2xl"
            >
              Ne dajte se uvjeriti da je odbijanje ugradnje dodatne opreme ekonomično rješenje. Na maraton ne bi izašli
              kockajući se sa vlastitim zdravljem – zato nemojte to činiti ni sa vašim domom.
            </motion.p>

            {/* Glowing accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mt-8"
            />
          </motion.div>

          {/* Right: Auto-scrolling Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex-1 w-full lg:w-auto"
          >
            <div className="relative w-full lg:w-[450px] xl:w-[500px] h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Carousel */}
              <div className="relative w-full h-full">
                {stormImages.map((image, index) => (
                  <motion.div
                    key={image}
                    initial={false}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      scale: index === currentIndex ? 1 : 1.1,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={image}
                      alt={`Storm damage ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {stormImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
