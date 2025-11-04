"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const navItems = [
  { label: "Početna", href: "#hero", id: "hero" },
  { label: "Oprema", href: "#equipment", id: "equipment" },
  { label: "Proizvodi", href: "#products", id: "products" },
]

export function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const triggersRef = useRef<ScrollTrigger[]>([])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60)
  })

  // Track active section using GSAP ScrollTrigger (works with ScrollSmoother transforms)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const sections = [...navItems.map(item => document.getElementById(item.id)), document.getElementById("contact")] 
      .filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return
    
    triggersRef.current = sections.map((el) => {
      return ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActiveSection(el.id)
        },
      })
    })

    return () => {
      triggersRef.current.forEach((t) => t.kill())
      triggersRef.current = []
    }
  }, [])

  // Smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    
    // Set active section immediately for better UX
    setActiveSection(targetId)
    
    if (targetElement) {
      const smoother = ScrollSmoother.get()
      const position = "top top+=100" // account for navbar
      if (smoother) {
        smoother.scrollTo(targetElement, true, position)
      } else {
        const navbarOffset = 100
        const absoluteY = window.scrollY + targetElement.getBoundingClientRect().top - navbarOffset
        window.scrollTo({ top: absoluteY, behavior: "smooth" })
      }
    }
    
    // Close mobile menu if open
    setIsOpen(false)
  }

  // Layout-safe transforms (no shifting) using a 3-col grid
  const progress = useTransform(scrollY, [0, 120], [0, 1])
  const pad = useTransform(progress, [0, 1], [20, 12])
  // Remove navY transform as it conflicts with ScrollSmoother fixed positioning
  const pillScale = useTransform(progress, [0, 1], [1, 1.08])
  const logoOpacity = useTransform(progress, [0, 1], [1, 0])
  const logoScale = useTransform(progress, [0, 1], [1, 0.3])
  const kontaktOpacity = useTransform(progress, [0, 1], [1, 0])
  const kontaktScale = useTransform(progress, [0, 1], [1, 0.3])

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        {/* Mobile Glass Effect Background */}
        <motion.div
          className="md:hidden absolute inset-0 backdrop-blur-xl bg-black/40 border-b border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: 'none' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto relative z-10">
          <motion.div className="relative transition-all duration-500 overflow-visible" style={{ paddingTop: pad, paddingBottom: pad }}>
            {/* Desktop Layout: 3-column grid */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              {/* Left: Logo - collapses without impacting layout */}
              <motion.div className="flex items-center" style={{ opacity: logoOpacity, scale: logoScale }}>
                <motion.a 
                  href="#hero" 
                  onClick={(e) => handleNavClick(e, "#hero")}
                  className="relative z-20 flex items-center shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label="LUFTAKTIV početna"
                >
                  <div className="relative h-8 md:h-9 lg:h-10 w-[140px] md:w-[160px] lg:w-[180px]">
                    <Image
                      src="/luftaktivwhite.png"
                      alt="LUFTAKTIV"
                      fill
                      sizes="(min-width: 1024px) 180px, (min-width: 768px) 160px, 140px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.a>
              </motion.div>

              {/* Center: Glass pill with sections */}
              <motion.div className="flex justify-center" style={{ scale: pillScale }}>
                <div className="relative rounded-full bg-white/5 backdrop-blur-2xl px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="flex items-center">
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.id
                      return (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: index * 0.05 }}
                          className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full group ${
                            isActive ? "text-white" : "text-white/80 hover:text-white"
                          }`}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-white/10 ${
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            }`}
                            transition={{ duration: 0.2 }}
                          />
                          {isActive && (
                            <motion.div
                              layoutId="activeSection"
                              className="absolute inset-0 rounded-full bg-white/20 border border-white/30"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Right: Kontakt button - collapses without impacting layout */}
              <motion.div className="flex items-center justify-end" style={{ opacity: kontaktOpacity, scale: kontaktScale }}>
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 text-white text-sm font-semibold rounded-full transition-colors shadow-sm hover:shadow-md relative overflow-hidden ${
                    activeSection === "contact" 
                      ? "bg-red-700 hover:bg-red-800 ring-2 ring-red-400/50" 
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  <span className="relative z-10">Kontakt</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Layout: 2-column flex */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Mobile Logo */}
              <div className="flex items-center flex-shrink-0">
                <motion.a 
                  href="#hero" 
                  onClick={(e) => handleNavClick(e, "#hero")}
                  className="relative z-20 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label="LUFTAKTIV početna"
                >
                  <div className="relative h-8 w-[140px]">
                    <Image
                      src="/luftaktivwhite.png"
                      alt="LUFTAKTIV"
                      fill
                      sizes="140px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white z-50 relative p-2 rounded-xl hover:bg-white/10 transition-colors flex-shrink-0"
                aria-label="Toggle menu"
              >
                <motion.div 
                  animate={{ rotate: isOpen ? 180 : 0 }} 
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-black/95 backdrop-blur-2xl z-40 md:hidden border-l border-white/10 shadow-2xl"
      >
        <div className="flex flex-col h-full pt-28 px-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href)
                  setIsOpen(false)
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : 50,
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative text-lg font-medium py-4 px-5 rounded-xl transition-all group ${
                  isActive 
                    ? "text-white bg-white/10 border-l-4 border-primary" 
                    : "text-white/70 hover:text-white hover:bg-white/5 border-l-4 border-transparent"
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            )
          })}

          <motion.a
            href="#contact"
            onClick={(e) => {
              handleNavClick(e, "#contact")
              setIsOpen(false)
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-8 px-8 py-4 text-white font-semibold text-center rounded-xl transition-all shadow-lg ${
              activeSection === "contact"
                ? "bg-red-700 hover:bg-red-800 ring-2 ring-red-400/50" 
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            Kontaktirajte nas
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black z-30 md:hidden backdrop-blur-sm"
        />
      )}
    </>
  )
}
