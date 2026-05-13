export function ContactSection() {
  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden" id="contacto">
      <div 
        className="bg-subtle-overlay" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')"}}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl md:text-7xl font-display italic leading-tight">Estas interesado en que te contactemos?</h2>
          <p className="text-[#e2e2e2]/60 max-w-md text-lg leading-relaxed">Permitanos entender su desafio y proponerle una ruta de exito. Nuestra primera consulta define el estandar de nuestra relacion.</p>
          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-4 text-[#e2e2e2]/80">
              <svg className="text-[#cf0688] w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>executive@lurolegal.com</span>
            </div>
            <div className="flex items-center gap-4 text-[#e2e2e2]/80">
              <svg className="text-[#cf0688] w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Avenida Reforma, Distrito Financiero, 01010</span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#1f1f1f]/30 backdrop-blur-md p-8 md:p-16 rounded-xl shadow-2xl border border-white/5">
          <form className="space-y-12">
            <div className="relative group">
              <input 
                className="peer block w-full bg-transparent border-0 border-b border-[#58404a] py-3 px-0 focus:ring-0 focus:border-[#cf0688] transition-all placeholder-transparent text-[#e2e2e2]" 
                id="nombre" 
                placeholder=" " 
                type="text"
              />
              <label 
                className="absolute left-0 top-3 text-xs uppercase tracking-widest text-zinc-500 font-label transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#cf0688]" 
                htmlFor="nombre"
              >
                Nombre Completo
              </label>
            </div>
            <div className="relative group">
              <input 
                className="peer block w-full bg-transparent border-0 border-b border-[#58404a] py-3 px-0 focus:ring-0 focus:border-[#cf0688] transition-all placeholder-transparent text-[#e2e2e2]" 
                id="email" 
                placeholder=" " 
                type="email"
              />
              <label 
                className="absolute left-0 top-3 text-xs uppercase tracking-widest text-zinc-500 font-label transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#cf0688]" 
                htmlFor="email"
              >
                Correo Electronico
              </label>
            </div>
            <div className="relative group">
              <textarea 
                className="peer block w-full bg-transparent border-0 border-b border-[#58404a] py-3 px-0 focus:ring-0 focus:border-[#cf0688] transition-all placeholder-transparent resize-none text-[#e2e2e2]" 
                id="mensaje" 
                placeholder=" " 
                rows={1}
              />
              <label 
                className="absolute left-0 top-3 text-xs uppercase tracking-widest text-zinc-500 font-label transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#cf0688]" 
                htmlFor="mensaje"
              >
                Mensaje Breve
              </label>
            </div>
            <button 
              type="submit"
              className="w-full fuchsia-gradient text-white py-4 rounded-lg font-label font-bold uppercase tracking-[0.2em] text-sm hover:brightness-125 transition-all shadow-[0_0_20px_rgba(207,6,136,0.2)] hover:shadow-[0_0_30px_rgba(207,6,136,0.4)]"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
