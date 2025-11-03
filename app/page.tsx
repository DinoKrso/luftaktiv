import { HeroSection } from "@/components/hero-section"
import { MarathonAnalogy } from "@/components/marathon-analogy"
import { RoofEquipment } from "@/components/roof-equipment"
import { ProductCategories } from "@/components/product-categories"
import { SafetySection } from "@/components/safety-section"
import { Footer } from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import Script from "next/script"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen">
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "LUFTAKTIV",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "https://luftaktiv.ba"),
              potentialAction: {
                "@type": "SearchAction",
                target: `${process.env.NEXT_PUBLIC_SITE_URL || "https://luftaktiv.ba"}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script id="ld-json-organization" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LUFTAKTIV",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "https://luftaktiv.ba"),
              logo: "/luftaktivlogo.png",
            }),
          }}
        />
        <HeroSection />
        <MarathonAnalogy />
        <RoofEquipment />
        <ProductCategories />
        <SafetySection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
