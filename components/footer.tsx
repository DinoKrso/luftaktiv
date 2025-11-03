"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Background pattern */}
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

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Horizontal Structure */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 lg:gap-16 mb-12">
            {/* 1. LUFTAKTIV Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3 w-full md:w-auto"
            >
              <div className="text-sm md:text-base font-semibold text-transparent mb-1 h-6">LUFTAKTIV</div>
              <div className="relative h-6 md:h-8 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/luftaktivwhite.png"
                  alt="LUFTAKTIV Logo"
                  width={200}
                  height={64}
                  className="object-contain h-6 md:h-8 w-auto"
                />
              </div>
            </motion.div>

            {/* 2. Address Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center gap-3 w-full md:w-auto"
            >
              <h3 className="text-sm md:text-base font-semibold text-white mb-1 text-center w-full md:w-auto">Adresa</h3>
              <div className="flex flex-col items-center gap-1 text-white/80">
                <div className="flex flex-col gap-1 text-sm md:text-base text-center">
                  <span>Boce br.11,</span>
                  <span>71240 Hadžići,</span>
                  <span>Bosna i Hercegovina</span>
                </div>
              </div>
            </motion.div>

            {/* 3. Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col items-center gap-3 w-full md:w-auto"
            >
              <h3 className="text-sm md:text-base font-semibold text-white mb-1 text-center w-full md:w-auto">Kontakt</h3>
              <div className="flex flex-col gap-2 items-center">
                <a
                  href="tel:+38733562710"
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/20 group-hover:bg-primary/30 border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">T: +387 33 562 710</span>
                </a>
                <a
                  href="tel:+38733562714"
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/20 group-hover:bg-primary/30 border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">F: +387 33 562 714</span>
                </a>
                <a
                  href="mailto:office@tondach.ba"
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/20 group-hover:bg-primary/30 border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">office@tondach.ba</span>
                </a>
              </div>
            </motion.div>

            {/* 4. OLX with Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-2 w-full md:w-auto"
            >
              <p className="text-sm md:text-base font-semibold text-white mb-1 text-center w-full md:w-auto">OLX</p>
              <a
                href="https://olx.ba/shops/TondachBiH/aktivni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OLX TondachBiH shop"
                className="relative h-20 md:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 mx-auto"
              >
                <Image
                  src="/olxLogo.svg"
                  alt="OLX Logo"
                  width={200}
                  height={80}
                  className="object-contain h-20 md:h-24 w-auto brightness-0 invert"
                />
              </a>
            </motion.div>

            {/* 5. ECHODAH with Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col items-center gap-2 w-full md:w-auto"
            >
              <p className="text-sm md:text-base font-semibold text-white mb-1 text-center w-full md:w-auto">ECHODAH</p>
              <a
                href="https://www.echodah.ba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Echodah web site"
                className="relative h-20 md:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 mx-auto"
              >
                <Image
                  src="/EhoFooter.png"
                  alt="Ehodah Logo"
                  width={200}
                  height={80}
                  className="object-contain h-20 md:h-24 w-auto brightness-0 invert"
                />
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} LUFTAKTIV. Sva prava zadržana.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

