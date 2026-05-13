"use client"

import Image from "next/image"
import { teamMembers, type TeamMember } from "@/lib/team-data"

interface TeamSectionProps {
  onMemberClick: (member: TeamMember) => void
}

export function TeamSection({ onMemberClick }: TeamSectionProps) {
  return (
    <section id="equipo" className="relative py-32 bg-black px-6 md:px-12 overflow-hidden">
      <div 
        className="bg-subtle-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')",
          opacity: 0.04
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#cf0688] font-bold uppercase tracking-[0.3em] text-xs block mb-4">Nuestro Talento</span>
          <h2 className="text-4xl md:text-6xl slim-serif">El Equipo de Luro Legal</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => onMemberClick(member)}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] p-6 text-center text-left transition-all duration-300 hover:border-[#cf0688]/50 hover:shadow-[0_0_30px_rgba(207,6,136,0.15)] cursor-pointer"
            >
              <div className="relative w-full h-80 rounded-lg mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-[#e2e2e2]">{member.name}</h3>
              <p className="text-[#cf0688] text-sm uppercase tracking-widest">{member.role}</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Click para ver mas</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
