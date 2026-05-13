"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 bg-black/70 backdrop-blur-[24px] shadow-[0_24px_48px_rgba(0,0,0,0.5)] border-b border-white/5">
      <div className="text-2xl font-headline italic text-zinc-100">Luro Legal</div>
      <div className="hidden md:flex items-center gap-10">
        <Link className="text-zinc-400 font-label uppercase tracking-[0.15em] text-xs hover:text-[#ffafd2] transition-colors duration-300" href="#inicio">Inicio</Link>
        <Link className="text-zinc-400 font-label uppercase tracking-[0.15em] text-xs hover:text-[#ffafd2] transition-colors duration-300" href="#quienes-somos">Quienes somos</Link>
        <Link className="text-zinc-400 font-label uppercase tracking-[0.15em] text-xs hover:text-[#ffafd2] transition-colors duration-300" href="#servicios">Servicios</Link>
        <Link className="text-zinc-400 font-label uppercase tracking-[0.15em] text-xs hover:text-[#ffafd2] transition-colors duration-300" href="#equipo">Equipo</Link>
        <Link className="text-zinc-400 font-label uppercase tracking-[0.15em] text-xs hover:text-[#ffafd2] transition-colors duration-300" href="#testimonios">Testimonios</Link>
        <Link className="text-zinc-400 font-label uppercase tracking-[0.15em] text-xs hover:text-[#ffafd2] transition-colors duration-300" href="#contacto">Contacto</Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-zinc-400 hover:text-zinc-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </button>
        <button className="bg-[#cf0688] text-[#ffebf0] px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest active:scale-95 duration-200 transition-all hover:brightness-110">
          Agendar
        </button>
      </div>
    </nav>
  )
}
