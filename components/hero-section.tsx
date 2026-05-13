import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black" id="inicio">
      <div 
        className="bg-subtle-overlay" 
        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzfKV7fMeczBlXYAh_pAsbmxZhyWjsdQSgauqhKe7ZkBobL2ImLgpM80VE1NkVvJ8G9PzHMvRFarpoRHC71yreI2A1mkOcoPiTn9CW77Rx1Gz9-If63KX7pgtMzZcEX6ZTbaQS84QKYDbV5IGQXqtpE-aEM3nr1RLqTYYVIx4IokSUtxo7W3wlVCPxSF4W3wjXJFxmCQFOZu7cxgIDQ18VJTJ_O3QkwZrDcKixvfxRToZ8ptpuUkze2JNTCZEEPpf7VNjG5mA8ytE')"}}
      />
      <div className="absolute inset-0 z-0">
        <Image 
          alt="Majestic neoclassical law court architecture" 
          className="w-full h-full object-cover opacity-20" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6_S3ctC7lEbFr11hzRHuqLHDK7PyCtDz1zPWimchPPsm3BOK_DMGEzoxLeAgmo4WO51YHBfPsNBncAOk-OhVqcK_vLhu1A3FTjaQIvY-Hwdm0t-a306GbTvOuIbpuhxKeo6gw1FO3CgxG_oP4IkKw956DjSCIMGIKFS9KHBpdZeQKjNJQZKti-1ihLSmt-8crnceGLrBlzT5jSrNoizF3KzlYj8uRyySgROs7m-Nyt8HIDN56H3qdAv856go_JaSkgc2RI64JSzY"
          fill
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-9xl slim-serif tracking-tight text-[#e2e2e2] leading-none">
            LURO <br/> LEGAL
          </h1>
          <p className="text-xl md:text-2xl font-display text-[#cf0688] max-w-lg leading-relaxed">
            Estrategia Legal con Vision Internacional
          </p>
          <div className="flex gap-6">
            <Link className="fuchsia-gradient text-white px-10 py-4 rounded-lg font-label font-bold uppercase tracking-[0.2em] text-sm shadow-xl hover:scale-105 transition-transform duration-300" href="#contacto">
              Consultar Ahora
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-96 md:w-96 md:h-[500px] rounded-lg overflow-hidden border border-[#58404a]/10 shadow-2xl">
            <Image 
              alt="Professional portrait of a senior lawyer" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMjabAm2ZBvb2gJAH_t_apyMC1dFHKpsRKGscnwnoMgNsf2Ed-reglt3gtFt2jJg4_MqJvt55SmmxSNt2njezchK4CoMsJWwI0_SG_rPVUKYaqGifdn-lDe1d7udP-99P1ITYflk0Dpdmh3j5b4JR8O-8wrzHYrOY3An2Acd_FYNiI6jXOnUMvxkcI9oD__sOm-SxQB8AAi5tn0FBRDlEG8qoCZ86iwtNy26Wf-ebZ7zdBJ848Jgj98h8Es1dXJSWoyF68DTr5t3s"
              fill
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-[#cf0688] opacity-50 hidden md:block" />
        </div>
      </div>
    </section>
  )
}
