"use client"

const servicios = [
  {
    title: "Instalaciones eléctricas completas",
    description: "Diseño, cálculo y ejecución de instalaciones nuevas en viviendas, edificios y locales. Desde la acometida hasta los puntos terminales, con criterio técnico y coordinación de obra.",
    tags: "Residencial · Comercial · Edificios",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-gold fill-none stroke-[1.5]">
        <rect x="2" y="3" width="20" height="18" rx="1" />
        <line x1="8" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="16" y2="21" />
        <line x1="2" y1="9" x2="8" y2="9" />
        <line x1="2" y1="15" x2="8" y2="15" />
        <line x1="16" y1="9" x2="22" y2="9" />
        <line x1="16" y1="15" x2="22" y2="15" />
      </svg>
    ),
  },
  {
    title: "Reformas y adecuaciones",
    description: "Adecuación de instalaciones existentes a nuevos usos, ampliaciones de capacidad o actualización normativa. Con diagnóstico previo y plan de intervención.",
    tags: "Reciclajes · Ampliaciones · Cambios de uso",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-gold fill-none stroke-[1.5]">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Tableros eléctricos",
    description: "Proyecto, fabricación e instalación de tableros de distribución y seccionales. Dimensionamiento correcto, protecciones adecuadas y documentación técnica incluida.",
    tags: "Tableros · Subtableros · Alimentadores",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-gold fill-none stroke-[1.5]">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="13" y2="14" />
        <circle cx="16" cy="17" r="3" />
      </svg>
    ),
  },
  {
    title: "Mantenimiento programado",
    description: "Inspección, mantenimiento preventivo y correctivo de instalaciones. Para propietarios que quieren una instalación segura, habilitada y sin sorpresas.",
    tags: "Preventivo · Correctivo · Auditoría",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-gold fill-none stroke-[1.5]">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0z" />
        <path d="M5 20L2 22l2-3 9.4-9.4" />
        <path d="M10 14l-3 3" />
        <circle cx="6" cy="18" r="1" />
      </svg>
    ),
  },
]

export function Servicios() {
  return (
    <section className="py-20 px-[5%] bg-ink">
      <div className="flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-gold" />
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
          Servicios
        </span>
      </div>
      
      <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-white mb-4">
        Lo que hacemos.
      </h2>
      
      <p className="text-base text-white/60 max-w-[560px] leading-relaxed font-light mb-12">
        Instalaciones eléctricas de mediana y gran escala, ejecutadas con estándares de empresa.
      </p>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-0 border border-white/[0.08] max-sm:grid-cols-1">
        {servicios.map((servicio) => (
          <div
            key={servicio.title}
            className="p-10 px-8 border-r border-b border-white/[0.08]"
          >
            <div className="w-[46px] h-[46px] border border-gold/40 flex items-center justify-center mb-5">
              {servicio.icon}
            </div>
            <h3 className="font-serif text-[19px] text-white mb-2.5 font-semibold">
              {servicio.title}
            </h3>
            <p className="text-[13px] text-white/50 leading-relaxed">
              {servicio.description}
            </p>
            <span className="inline-block mt-4 text-[10px] tracking-[0.12em] uppercase text-gold border-b border-gold/40 pb-0.5">
              {servicio.tags}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
