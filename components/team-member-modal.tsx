"use client"

import { useEffect } from "react"
import Image from "next/image"
import type { TeamMember } from "@/lib/team-data"

interface TeamMemberModalProps {
  member: TeamMember | null
  onClose: () => void
}

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  // Cerrar con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (member) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [member, onClose])

  if (!member) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1f1f1f] rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#cf0688] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Imagen */}
          <div className="relative h-64 md:h-full min-h-[400px]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Contenido */}
          <div className="p-8 md:p-10 space-y-6">
            <div>
              <p className="text-[#cf0688] text-sm uppercase tracking-widest font-bold mb-2">{member.role}</p>
              <h2 className="text-3xl md:text-4xl slim-serif text-[#e2e2e2]">{member.name}</h2>
            </div>

            <p className="text-[#e2e2e2]/80 leading-relaxed">{member.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Especialidades</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span 
                      key={specialty}
                      className="px-3 py-1 text-xs rounded-full bg-[#cf0688]/10 text-[#cf0688] border border-[#cf0688]/20"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Educacion</h4>
                <p className="text-sm text-[#e2e2e2]/70">{member.education}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Experiencia</h4>
                <p className="text-sm text-[#e2e2e2]/70">{member.experience}</p>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full mt-6 fuchsia-gradient text-white py-3 rounded-lg font-label font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
