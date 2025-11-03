"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function RoofEquipment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="equipment" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Parallax blueprint grid - lines */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{
          opacity: 0.18,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      />
      {/* Parallax blueprint grid - nodes */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ y: 0 }}
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 36, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{
          opacity: 0.2,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(80,104,177,0.4) 1.2px, transparent 1.3px)",
          backgroundSize: "42px 42px",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      />

      {/* Animated accent elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Big uppercase title at the edge */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            className="lg:sticky lg:top-0 px-4 lg:pl-4 xl:pl-6 2xl:pl-8 lg:pr-12 flex-shrink-0"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase leading-[1.1] tracking-tight">
              <span className="block">Šta je krovna</span>
              <span className="block">oprema?</span>
            </h2>
          </motion.div>

          {/* Right: Description content */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex-1 space-y-8 px-4 lg:px-0 lg:pr-4 xl:pr-8 2xl:pr-12 self-start"
          >
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Najjednostavnije pojašnjeno, krovnu opremu čine građevinski elementi koji nadograđuju i optimiziraju
              krovni sistem i svaki od njegovih aspekata, sigurnost, funkcionalnost, ekonomičnost i estetiku.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-primary/30 shadow-xl shadow-primary/10"
            >
              <p className="text-lg md:text-xl text-white/80 italic leading-relaxed">
                Ehodach svojim kupcima u sklopu LUFTAKTIV programa nudi asortiman esencijalnih krovnih elemenata iznimne
                njemačke kvalitete.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
