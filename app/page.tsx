"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { TrainingTestimonialsSection } from "@/components/training-testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TeamMemberModal } from "@/components/team-member-modal"
import type { TeamMember } from "@/lib/team-data"

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <main className="bg-black text-[#e2e2e2] selection:bg-[#cf0688] selection:text-[#ffebf0]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsCarousel />
      <TrainingTestimonialsSection />
      <TeamSection onMemberClick={setSelectedMember} />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      
      <TeamMemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </main>
  )
}
