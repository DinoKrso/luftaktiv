"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Diagonal roof pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,.1) 50px,
            rgba(255,255,255,.1) 52px
          )`,
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary/10 blur-3xl rounded-full"
        animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 blur-3xl rounded-full"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Centered Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Kontaktirajte Nas
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            />
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <motion.a
                href="mailto:info@luftaktiv.com"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border-2 border-slate-700/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 backdrop-blur-sm border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/10 mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-wider text-white/60 mb-3 group-hover:text-primary/80 transition-colors duration-300">
                    Email
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    info@luftaktiv.com
                  </p>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                href="tel:+1234567890"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border-2 border-slate-700/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 backdrop-blur-sm border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/10 mb-6">
                  <Phone className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-wider text-white/60 mb-3 group-hover:text-primary/80 transition-colors duration-300">
                    Telefon
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    +123 456 7890
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
