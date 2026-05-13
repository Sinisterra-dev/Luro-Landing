export function ServicesSection() {
  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden" id="servicios">
      <div 
        className="bg-subtle-overlay" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')"}}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl slim-serif">Especialidades Estrategicas</h2>
          <div className="w-12 h-1 bg-[#cf0688] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group relative bg-[#1f1f1f]/50 backdrop-blur-sm p-10 rounded-xl border border-white/5 border-b-2 border-b-transparent hover:border-b-[#cf0688] transition-all duration-500 hover:-translate-y-2">
            <svg className="text-[#cf0688] w-10 h-10 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            <h3 className="text-xl slim-serif font-bold mb-4">Derecho Corporativo</h3>
            <p className="text-[#e2e2e2]/60 text-sm leading-relaxed">Asesoria integral para la constitucion, fusion y expansion de sociedades en mercados globales.</p>
          </div>
          {/* Card 2 */}
          <div className="group relative bg-[#1f1f1f]/50 backdrop-blur-sm p-10 rounded-xl border border-white/5 border-b-2 border-b-transparent hover:border-b-[#cf0688] transition-all duration-500 hover:-translate-y-2">
            <svg className="text-[#cf0688] w-10 h-10 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <h3 className="text-xl slim-serif font-bold mb-4">Litigio Internacional</h3>
            <p className="text-[#e2e2e2]/60 text-sm leading-relaxed">Representacion de alto nivel en disputas transfronterizas y arbitraje comercial internacional.</p>
          </div>
          {/* Card 3 */}
          <div className="group relative bg-[#1f1f1f]/50 backdrop-blur-sm p-10 rounded-xl border border-white/5 border-b-2 border-b-transparent hover:border-b-[#cf0688] transition-all duration-500 hover:-translate-y-2">
            <svg className="text-[#cf0688] w-10 h-10 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            <h3 className="text-xl slim-serif font-bold mb-4">Propiedad Intelectual</h3>
            <p className="text-[#e2e2e2]/60 text-sm leading-relaxed">Proteccion de activos intangibles y estrategias de patentes para innovadores globales.</p>
          </div>
          {/* Card 4 - Real Estate */}
          <div className="group relative bg-[#1f1f1f]/50 backdrop-blur-sm p-10 rounded-xl border border-white/5 border-b-2 border-b-transparent hover:border-b-[#cf0688] transition-all duration-500 hover:-translate-y-2">
            <svg className="text-[#cf0688] w-10 h-10 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 6.5V14h-2V7.5L14 4 5 4v16h4.5v2H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h9l7 4.5zm-2 5V10h-4V6h-2v4H9v2h4v4h2v-4h4zm-8 7.5c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S11 22.59 11 19zm2 0c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5S13 16.51 13 19z"/>
            </svg>
            <h3 className="text-xl slim-serif font-bold mb-4">Real Estate & Inversiones</h3>
            <p className="text-[#e2e2e2]/60 text-sm leading-relaxed">Gestion de carteras inmobiliarias de lujo y transacciones de activos de alto valor en jurisdicciones clave.</p>
          </div>
          {/* Card 5 - Capacitaciones */}
          <div className="group relative bg-[#1f1f1f]/50 backdrop-blur-sm p-10 rounded-xl border border-white/5 border-b-2 border-b-transparent hover:border-b-[#cf0688] transition-all duration-500 hover:-translate-y-2">
            <svg className="text-[#cf0688] w-10 h-10 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
            <h3 className="text-xl slim-serif font-bold mb-4">Capacitaciones Corporativas</h3>
            <p className="text-[#e2e2e2]/60 text-sm leading-relaxed">Programas de formacion legal especializada para equipos ejecutivos y workshops en compliance y derecho corporativo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
