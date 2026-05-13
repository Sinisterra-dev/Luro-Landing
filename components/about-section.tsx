export function AboutSection() {
  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden" id="quienes-somos">
      <div 
        className="bg-subtle-overlay" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&h=1080&fit=crop&q=80')"}}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#cf0688] font-label uppercase tracking-[0.3em] text-xs font-bold block mb-4">Sobre la firma</span>
            <h2 className="text-4xl md:text-6xl slim-serif leading-tight">Excelencia que trasciende fronteras.</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12 space-y-10">
            <p className="text-xl md:text-2xl text-[#e2e2e2]/80 font-light leading-relaxed">
              Luro Legal representa la vanguardia de la practica juridica privada. Con un enfoque meticuloso y una comprension profunda de los mercados internacionales, brindamos soluciones que no solo resuelven conflictos, sino que blindan el futuro de nuestros clientes.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="space-y-2">
                <div className="text-3xl slim-serif font-bold text-[#cf0688]">15+</div>
                <div className="font-label uppercase tracking-widest text-[10px] text-zinc-500">Anos de Trayectoria</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl slim-serif font-bold text-[#cf0688]">500+</div>
                <div className="font-label uppercase tracking-widest text-[10px] text-zinc-500">Casos Exitosos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
