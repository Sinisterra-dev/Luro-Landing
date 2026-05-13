export function ClientsCarousel() {
  const clients = ["ECOPETROL", "BANCOLOMBIA", "NUTRESA", "AVIANCA", "BAVARIA"]
  
  return (
    <section className="relative bg-black overflow-hidden py-24">
      <div 
        className="bg-subtle-overlay" 
        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0SVSxqenuF233TKNPqy0gQrrh_mKFBie0IqIKV6wMpY4RjbLIfZFXEQvOUXpgt8VasNCdtVQcNIiI2Foip-fmyhe_zA3Np3TYbTd7eGpXMtMb0sZQqo-y8lfcXW0o2t2AQ8Ox7Gb9a254DPWp9nRZ3QGJ0s9GekAQ8RiE-AIFyMDegZNif1NaudswF510TPVRAtkkrbND7EK3dPWo9n9wDrmsdVpAWBBNsCdq7WOEVLX1yGNeCF4CT-jqCQBykhC6mqDt23p1-AQ')"}}
      />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-8 text-center">
          <h2 className="text-2xl md:text-3xl slim-serif text-[#e2e2e2]/80 tracking-[0.2em]">Clientes recurrentes</h2>
        </div>
        <div className="py-16 overflow-hidden border-y border-[#58404a]/10">
          <div className="flex infinite-scroll whitespace-nowrap">
            <div className="flex items-center space-x-24 px-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
              {clients.map((client) => (
                <div key={client} className="text-2xl slim-serif font-bold">{client}</div>
              ))}
            </div>
            <div className="flex items-center space-x-24 px-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
              {clients.map((client) => (
                <div key={`${client}-2`} className="text-2xl slim-serif font-bold">{client}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
