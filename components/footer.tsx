import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-black w-full pt-24 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div 
        className="bg-subtle-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          opacity: 0.03
        }}
      />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        <div>
          <span className="text-3xl font-headline text-zinc-100 block mb-6 italic">Luro Legal</span>
          <p className="text-zinc-400 font-body leading-relaxed text-sm">Ofreciendo excelencia juridica y soluciones transfronterizas para clientes que exigen discrecion y resultados superiores.</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-zinc-100 font-label uppercase tracking-widest text-xs font-bold mb-4">Explorar</span>
          <Link className="text-zinc-500 font-label uppercase text-xs hover:text-[#ffafd2] transition-all" href="#inicio">Inicio</Link>
          <Link className="text-zinc-500 font-label uppercase text-xs hover:text-[#ffafd2] transition-all" href="#quienes-somos">Quienes somos</Link>
          <Link className="text-zinc-500 font-label uppercase text-xs hover:text-[#ffafd2] transition-all" href="#servicios">Servicios</Link>
          <Link className="text-zinc-500 font-label uppercase text-xs hover:text-[#ffafd2] transition-all" href="#equipo">Equipo</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-zinc-100 font-label uppercase tracking-widest text-xs font-bold mb-4">Legal</span>
          <Link className="text-zinc-500 font-label uppercase text-xs hover:text-[#ffafd2] transition-all" href="#">Privacidad</Link>
          <Link className="text-zinc-500 font-label uppercase text-xs hover:text-[#ffafd2] transition-all" href="#">Terminos de Servicio</Link>
          <Link className="text-zinc-500 font-label uppercase text-xs hover:text-[#ffafd2] transition-all" href="#">Prensa</Link>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center">
          <Link className="text-zinc-500 text-[10px] uppercase tracking-widest hover:text-[#cf0688] transition-colors" href="#">Terminos legales y condiciones de contratacion</Link>
          <Link className="text-zinc-500 text-[10px] uppercase tracking-widest hover:text-[#cf0688] transition-colors" href="#">Politica de cookies</Link>
          <Link className="text-zinc-500 text-[10px] uppercase tracking-widest hover:text-[#cf0688] transition-colors" href="#">Politica de privacidad</Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6">
          <p className="text-zinc-500 text-[10px] font-label uppercase tracking-widest">2024 Luro Legal. Excellence in Law.</p>
          <div className="flex gap-8">
            <Link className="text-zinc-500 hover:text-[#cf0688] transition-colors" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
              </svg>
            </Link>
            <Link className="text-zinc-500 hover:text-[#cf0688] transition-colors" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
