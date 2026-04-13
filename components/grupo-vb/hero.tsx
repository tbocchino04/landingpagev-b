"use client"

const stats = [
  { value: "100%", label: "Habilitaciones propias" },
  { value: "CABA + GBA", label: "Zona de operación" },
  { value: "Integral", label: "Proyecto, permiso y ejecución" },
]

export function Hero() {
  return (
    <section className="min-h-screen bg-ink flex flex-col justify-center px-[5%] pt-[100px] pb-20 relative overflow-hidden">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="block w-8 h-px bg-gold" />
        <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-gold">
          Instalaciones eléctricas · CABA y Zona Norte
        </span>
      </div>
      
      <h1 className="font-serif text-[clamp(36px,5.5vw,72px)] text-white leading-[1.08] font-bold max-w-[780px] mb-7">
        La instalación eléctrica que
        <br />
        <em className="text-gold not-italic">no va a detener</em>
        <br />
        tu obra.
      </h1>
      
      <p className="text-base text-white/60 max-w-[520px] leading-relaxed mb-12 font-light">
        Ejecutamos proyectos eléctricos con planificación rigurosa, documentación completa y coordinación directa con el equipo de obra. Sin improvisaciones.
      </p>
      
      <div className="flex gap-3.5 flex-wrap items-center">
        <button className="bg-gold text-ink font-sans text-sm font-semibold px-8 py-4 border-none cursor-pointer tracking-[0.06em] uppercase hover:bg-gold-light transition-colors">
          Solicitar presupuesto
        </button>
        <button className="bg-transparent text-white font-sans text-sm font-medium px-6 py-4 border border-white/25 cursor-pointer tracking-[0.04em] hover:border-white/50 transition-colors">
          Ver proceso →
        </button>
      </div>
      
      <div className="flex gap-0 mt-16 border-t border-white/10 pt-9 flex-wrap max-sm:flex-col max-sm:gap-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex-1 min-w-[120px] pr-7 border-r border-white/10 mb-4 last:border-r-0 last:pl-7 last:pr-0 max-sm:border-r-0 max-sm:p-0 max-sm:pb-4 max-sm:border-b max-sm:border-white/10 max-sm:last:border-b-0`}
          >
            <span className="font-serif text-[32px] text-gold font-semibold block leading-none">
              {stat.value}
            </span>
            <span className="text-[11px] text-white/40 tracking-[0.08em] uppercase mt-1.5 block">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
