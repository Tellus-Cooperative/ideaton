import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { HowToParticipateSection } from "@/components/sections/how-to-participate-section"
import { TracksAndPrizesSection } from "@/components/sections/tracks-and-prizes-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <HowToParticipateSection />
      <TracksAndPrizesSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
