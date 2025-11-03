"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Shield, TrendingUp } from "lucide-react"

const icons = [
  { Icon: Target, label: "Planiranje", color: "text-primary" },
  { Icon: Shield, label: "Sigurnost", color: "text-primary" },
  { Icon: TrendingUp, label: "Kvalitet", color: "text-primary" },
]

export function MarathonAnalogy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="marathon" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Diagonal stripe pattern like roof tiles */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,.1) 40px,
            rgba(255,255,255,.1) 80px
          )`,
          }}
        />
      </div>

      {/* Animated accent shapes */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-16"
          >
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/80 mb-8 shadow-lg shadow-primary/50 mx-auto"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed text-pretty text-center">
              Maratonci znaju da su planiranje i minimiziranje mogućnosti ozljede od krucijalne važnosti za kvalitetan
              rezultat. Upravo nabavka krovne opreme predstavlja planiranje i minimiziranje mogućnosti pojavljivanja
              problema.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {icons.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 flex items-center justify-center mb-2 md:mb-4 shadow-lg shadow-primary/20"
                >
                  <item.Icon className={`w-7 h-7 md:w-10 md:h-10 ${item.color}`} />
                </motion.div>
                <h3 className="text-sm md:text-lg font-semibold text-white">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
