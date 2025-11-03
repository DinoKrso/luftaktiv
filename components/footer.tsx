"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

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
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-20 mb-12">
            {/* 1. LUFTAKTIV Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/luftaktivwhite.png"
                  alt="LUFTAKTIV Logo"
                  width={200}
                  height={64}
                  className="object-contain h-8 md:h-10 w-auto"
                />
              </div>
            </motion.div>

            {/* 2. Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-start gap-3"
            >
              <a
                href="mailto:info@luftaktiv.com"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 group-hover:bg-primary/30 border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base">info@luftaktiv.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 group-hover:bg-primary/30 border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base">+123 456 7890</span>
              </a>
            </motion.div>

            {/* 3. OLX with Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider">OLX</p>
              <div className="relative h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/olxLogo.svg"
                  alt="OLX Logo"
                  width={200}
                  height={80}
                  className="object-contain h-16 md:h-20 w-auto brightness-0 invert"
                />
              </div>
            </motion.div>

            {/* 4. ECHODAH with Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider">ECHODAH</p>
              <div className="relative h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/EhoFooter.png"
                  alt="Eho Logo"
                  width={200}
                  height={80}
                  className="object-contain h-16 md:h-20 w-auto brightness-0 invert"
                />
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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

