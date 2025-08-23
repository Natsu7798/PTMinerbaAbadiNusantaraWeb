import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CompanyOverview } from "@/components/company-overview"
import { Capabilities } from "@/components/capabilities"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <CompanyOverview />
        </section>
        <section id="services">
          <Capabilities />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}
