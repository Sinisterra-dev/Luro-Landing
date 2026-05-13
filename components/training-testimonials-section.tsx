"use client"

import { useState } from "react"
import Image from "next/image"

interface ClientTestimonial {
  id: number
  name: string
  company: string
  role: string
  comment: string
  rating: number
  avatar: string
}

const clientTestimonials: ClientTestimonial[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    company: "Bancolombia",
    role: "Director de Cumplimiento",
    comment: "La agudeza legal y la rapidez de respuesta de Luro Legal han sido determinantes en nuestras operaciones en el exterior. Su equipo demostro un dominio impresionante y adapto las estrategias perfectamente a nuestra industria financiera.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    id: 2,
    name: "Maria Fernanda Torres",
    company: "Nutresa",
    role: "Gerente Legal",
    comment: "Encontrar un despacho que entienda la complejidad del derecho transnacional con tal elegancia es casi imposible. Su enfoque en proteccion de marcas internacionalmente fue muy practico y aplicable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    id: 3,
    name: "Andres Felipe Gomez",
    company: "Bavaria",
    role: "VP de Operaciones",
    comment: "Su vision estrategica no tiene rival. Son mucho mas que abogados; son socios estrategicos de confianza. El enfoque en casos reales hizo que la asesoria fuera muy efectiva para nuestro equipo ejecutivo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
  },
  {
    id: 4,
    name: "Diana Carolina Ruiz",
    company: "Avianca",
    role: "Directora de Contratos",
    comment: "La asesoria en gestion de riesgos legales fue transformadora. Ahora tenemos procesos mucho mas robustos gracias a su experticia y conocimiento del sector aeronautico.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  },
  {
    id: 5,
    name: "Roberto Andres Vargas",
    company: "Ecopetrol",
    role: "Asesor Juridico Senior",
    comment: "Muy profesionales y conocedores. Su representacion en litigio internacional nos preparo para manejar disputas complejas con confianza en multiples jurisdicciones.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-[#cf0688]" : "text-zinc-600"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

export function TrainingTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden" id="testimonios">
      <div 
        className="bg-subtle-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')",
          opacity: 0.05
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-[#cf0688] font-bold uppercase tracking-[0.3em] text-xs block mb-4">Testimonios</span>
          <h2 className="text-4xl md:text-5xl slim-serif mb-6">Perspectivas de Nuestros Aliados</h2>
          <p className="text-[#e2e2e2]/60 max-w-2xl mx-auto">Opiniones de ejecutivos y lideres empresariales que confian en nuestra experiencia legal.</p>
        </div>
        
        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-[#1f1f1f]/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#cf0688]/30">
                <Image
                  src={clientTestimonials[activeIndex].avatar}
                  alt={clientTestimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <StarRating rating={clientTestimonials[activeIndex].rating} />
                <p className="text-xl md:text-2xl slim-serif leading-relaxed my-6 text-[#e2e2e2]/90">
                  {`"${clientTestimonials[activeIndex].comment}"`}
                </p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div>
                    <p className="font-bold text-[#e2e2e2]">{clientTestimonials[activeIndex].name}</p>
                    <p className="text-sm text-[#e2e2e2]/60">{clientTestimonials[activeIndex].role}</p>
                  </div>
                  <div className="hidden md:block w-px h-8 bg-white/10" />
                  <div>
                    <p className="text-[#cf0688] font-bold">{clientTestimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation Cards */}
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x no-scrollbar justify-start md:justify-center">
          {clientTestimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`min-w-[200px] snap-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "bg-[#cf0688]/20 border-[#cf0688]/50"
                  : "bg-[#1f1f1f]/30 border-white/5 hover:border-[#cf0688]/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[#e2e2e2] truncate">{testimonial.name}</p>
                  <p className="text-xs text-[#cf0688]">{testimonial.company}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <StarRating rating={testimonial.rating} />
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl slim-serif font-bold text-[#cf0688]">15+</div>
            <div className="font-label uppercase tracking-widest text-[10px] text-zinc-500 mt-2">Anos de Experiencia</div>
          </div>
          <div>
            <div className="text-3xl slim-serif font-bold text-[#cf0688]">500+</div>
            <div className="font-label uppercase tracking-widest text-[10px] text-zinc-500 mt-2">Casos Exitosos</div>
          </div>
          <div>
            <div className="text-3xl slim-serif font-bold text-[#cf0688]">4.9</div>
            <div className="font-label uppercase tracking-widest text-[10px] text-zinc-500 mt-2">Calificacion Promedio</div>
          </div>
          <div>
            <div className="text-3xl slim-serif font-bold text-[#cf0688]">98%</div>
            <div className="font-label uppercase tracking-widest text-[10px] text-zinc-500 mt-2">Satisfaccion</div>
          </div>
        </div>
      </div>
    </section>
  )
}
