"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Wind, Layers, ShieldCheck, ChevronLeft } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    id: "bs",
    icon: Layers,
    title: "LUFTAKTIV",
    titleHighlight: "BS",
    subtitle: "Krovne membrane",
    description: "Vrhunske difuzione membrane za optimalnu zaštitu krovne konstrukcije",
    products: [
      {
        id: "bs150pro",
        image: "/products/bsPro.png",
        title: "BS",
        titleHighlight: "150PRO",
        description: "Krovna membrana sa integrisanom obostranom ljepljivom trakom (150 g)",
        features: [
          "Uštede na vremenu i materijalu",
          "10 godina garancije",
          "Rolna: 75 m²",
          "Težina: 150 g/m²",
          "Širina: 1.50 m",
          "Dužina: 50 m",
        ],
      },
      {
        id: "bsultra",
        image: "/products/bsUltra.png",
        title: "BS",
        titleHighlight: "ULTRA",
        description: "Krovna membrana sa integrisanom zaptivanjem eksera (220 g PES filc)",
        features: [
          "Obostrana ljepljiva traka",
          "Otpornost na temperature do 150 °C",
          "20 godina garancije",
          "Rolna: 75 m²",
          "Težina: 220 g/m²",
          "Širina: 1.50 m",
          "Dužina: 50 m",
        ],
      },
    ],
  },
  {
    id: "aeroll",
    icon: Wind,
    title: "LUFTAKTIV",
    titleHighlight: "AEROLL",
    subtitle: "Odzračivanje krovišta",
    description: "Inovativni sistemi ventilacije za produženi životni vijek krova",
    products: [
      {
        id: "aeroll-ak-v320",
        image: "/products/aerol.png",
        title: "AEROLL",
        titleHighlight: "AK V320",
        description: "Odzračna traka 5 mm",
        features: [
          "Odzračivanje cca. 1700 cm²/m",
          "Širina: 320 mm",
          "Dužina: 5 m",
        ],
      },
      {
        id: "aeroll-ak-a260-alu",
        image: "/products/aerollAlu.png",
        title: "AEROLL",
        titleHighlight: "AK A260 ALU",
        description: "Aluminijska odzračna traka 5 mm",
        features: [
          "Odzračivanje cca. 1700 cm²/m",
          "Širina: 260 mm",
          "Dužina: 5 m",
        ],
      },
    ],
  },
  {
    id: "safex",
    icon: ShieldCheck,
    title: "LUFTAKTIV",
    titleHighlight: "SAFEX",
    subtitle: "Sigurnosni krovni elementi",
    description: "Pouzdani sigurnosni elementi za maksimalnu zaštitu",
    products: [
      {
        id: "safex-univerzalni-drzac-sljem-letve",
        image: "/products/drzac.png",
        title: "Univerzalni držač sljem. greb. letve",
        titleHighlight: "",
        description: "",
        features: [],
      },
      {
        id: "safex-kopca-za-sljemenjak",
        image: "/products/kopca.png",
        title: "Kopča za sljemenjak",
        titleHighlight: "",
        description: "",
        features: [],
      },
      {
        id: "safex-zvonasti-vijak",
        image: "/products/vijak.png",
        title: "Zvonasti vijak",
        titleHighlight: "",
        description: "110 mm sa dihtungom",
        features: [],
      },
      {
        id: "safex-kopca-za-bocni-utor-kaci-se",
        image: "/products/kopcaUtor.png",
        title: "Kopča za bočni utor (kači se)",
        titleHighlight: "",
        description: "",
        features: [],
      },
      {
        id: "safex-kopca-za-bocni-utor-zakiva-se",
        image: "/products/kopcaUtor2.png",
        title: "Kopča za bočni utor (zakiva se)",
        titleHighlight: "",
        description: "",
        features: [],
      },
      {
        id: "safex-kopce-protiv-nevremena-za-greben-i-uvalu",
        image: "/products/kopcaUvala.png",
        title: "Kopče protiv nevremena za greben i uvalu (sa žicom)",
        titleHighlight: "",
        description: "",
        features: [],
      },
      {
        id: "safex-zastitna-mrezica-za-ptice",
        image: "/products/mrezica.png",
        title: "Zaštitna mrežica za ptice",
        titleHighlight: "",
        description: "5 m",
        features: [],
      },
      {
        id: "safex-snjegobrani-za-sve-vrste-crijepa",
        image: "/products/snjegobran.png",
        title: "Snjegobrani za sve vrste crijepa",
        titleHighlight: "",
        description: "",
        features: [],
      },
      {
        id: "safex-kopca-za-prvi-red",
        image: "/products/kopcaPrvi.png",
        title: "Kopča za prvi red",
        titleHighlight: "",
        description: "",
        features: [],
      },
    ],
  },
]

export function ProductCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const handleCategoryClick = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    if (category && category.products.length > 0) {
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
    }
  }

  const selectedCategory = categories.find((c) => c.id === expandedCategory)
  const isSafeX = selectedCategory?.id === "safex"

  return (
    <section id="products" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Grid pattern like roof structure */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 text-balance"
        >
          Naši Proizvodi
        </motion.h2>

        <AnimatePresence mode="wait">
          {!expandedCategory ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Card
                    onClick={() => handleCategoryClick(category.id)}
                    className={`group relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-50/95 to-white/95 backdrop-blur-sm border-2 transition-all duration-500 overflow-hidden ${
                      category.products.length > 0
                        ? "border-slate-200/50 hover:border-primary cursor-pointer"
                        : "border-slate-200/50"
                    }`}
                  >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    {/* 2x2 color grid in top right corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 z-30 rounded-tr-3xl overflow-hidden pointer-events-none">
                      <div className="relative h-full w-full">
                        <div className="grid grid-cols-2 h-full">
                          <div className="bg-[#5068b1]" />
                          <div className="bg-black" />
                          <div className="bg-transparent" />
                          <div className="bg-transparent" />
                        </div>
                        {/* Red square with reduced height */}
                        <div className="absolute top-1/2 right-0 w-1/2 h-2 bg-red-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 transition-all duration-500 border border-primary/30 group-hover:border-primary/50"
                      >
                        <category.icon className="w-8 h-8 text-white transition-colors duration-500" />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {category.title}
                        {category.titleHighlight && (
                          <>
                            {" "}
                            <span className="text-red-600">{category.titleHighlight}</span>
                          </>
                        )}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-4 transition-colors duration-500">
                        {category.subtitle}
                      </p>
                      <p className="text-slate-700 leading-relaxed transition-colors duration-500">
                        {category.description}
                      </p>
                      {category.products.length > 0 && (
                        <p className="text-xs text-primary/70 mt-4">
                          Kliknite za detalje →
                        </p>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="products"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              {/* Back button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setExpandedCategory(null)}
                className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Nazad na kategorije</span>
              </motion.button>

              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedCategory?.title}
                  {selectedCategory?.titleHighlight && (
                    <>
                      {" "}
                      <span className="text-red-600">{selectedCategory?.titleHighlight}</span>
                    </>
                  )}
                </h3>
                <p className="text-xl text-white/80">{selectedCategory?.description}</p>
              </motion.div>

              {/* Products grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedCategory?.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Card className={`group relative h-full ${isSafeX ? "p-4" : "p-6"} rounded-3xl bg-gradient-to-br from-slate-50/95 to-white/95 backdrop-blur-sm border-2 border-slate-200/50 hover:border-primary transition-all duration-500 overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                      {/* 2x2 color grid in top right corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 z-30 rounded-tr-3xl overflow-hidden pointer-events-none">
                        <div className="relative h-full w-full">
                          <div className="grid grid-cols-2 h-full">
                            <div className="bg-[#5068b1]" />
                            <div className="bg-black" />
                            <div className="bg-transparent" />
                            <div className="bg-transparent" />
                          </div>
                          {/* Red square with reduced height */}
                          <div className="absolute top-1/2 right-0 w-1/2 h-2 bg-red-600" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        {/* Product Image */}
                        <div className={`relative w-full ${isSafeX ? "h-48" : "h-64"} mb-6 rounded-2xl overflow-hidden bg-white`}>
                          <Image
                            src={product.image}
                            alt={`${product.title} ${product.titleHighlight}`}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        {/* Product Title */}
                        <div className="mb-4">
                          <h4 className={`${isSafeX ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"} font-bold text-slate-900 inline`}>
                            {product.title}
                            {product.titleHighlight && (
                              <>
                                {" "}
                                <span className="text-red-600">{product.titleHighlight}</span>
                              </>
                            )}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="text-slate-700 mb-6 leading-relaxed">{product.description}</p>

                        {/* Features */}
                        <div className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-slate-700 text-sm md:text-base">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
