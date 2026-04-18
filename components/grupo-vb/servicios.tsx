"use client"

import { SectionReveal, RevealItem, RevealGrid, GridItem } from "@/components/motion/Reveal"

const services = [
  {
    icon: <><rect x="2" y="3" width="20" height="18" rx="1"/><line x1="8" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="21"/><line x1="2" y1="9" x2="8" y2="9"/><line x1="2" y1="15" x2="8" y2="15"/><line x1="16" y1="9" x2="22" y2="9"/><line x1="16" y1="15" x2="22" y2="15"/></>,
    title: "Obra nueva completa",
    desc: "Proyecto, cálculo y ejecución integral. Desde la acometida hasta los puntos terminales, coordinando con la dirección de obra y los demás gremios involucrados.",
    tag: "Obra nueva · Edificios · Viviendas",
  },
  {
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
    title: "Reciclajes y adecuaciones",
    desc: "Adecuación de instalaciones existentes a nuevos usos o normativa vigente. Con diagnóstico previo, compatibilización de planos y plan de intervención coordinado.",
    tag: "Reciclajes · Cambios de uso · Ampliaciones",
  },
  {
    icon: <><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="13" y2="14"/><circle cx="16" cy="17" r="3"/></>,
    title: "Tableros y alimentadores",
    desc: "Proyecto, fabricación e instalación de tableros de distribución y seccionales. Dimensionamiento correcto, protecciones adecuadas y documentación técnica para legajo.",
    tag: "Tableros · Subtableros · Alimentadores",
  },
  {
    icon: <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0z"/><path d="M5 20L2 22l2-3 9.4-9.4"/><path d="M10 14l-3 3"/><circle cx="6" cy="18" r="1"/></>,
    title: "Mantenimiento y auditoría",
    desc: "Inspección, mantenimiento preventivo y correctivo. Para mantener la instalación segura, habilitada y documentada a lo largo de toda la vida útil del edificio.",
    tag: "Preventivo · Correctivo · Auditoría",
  },
]

export function Servicios() {
  return (
    <section className="py-20 px-[5%] bg-ink">
      <SectionReveal>
        <RevealItem>
          <div className="section-tag">Servicios</div>
        </RevealItem>
        <RevealItem>
          <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-secondary-foreground mb-4">Lo que hacemos.</h2>
        </RevealItem>
        <RevealItem>
          <p className="text-base text-secondary-foreground/60 max-w-[560px] leading-[1.75] font-light mb-12">
            Instalaciones eléctricas de mediana y gran escala, con planificación, documentación y coordinación de obra.
          </p>
        </RevealItem>
      </SectionReveal>
      <RevealGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-secondary-foreground/[0.08]">
        {services.map((s, i) => (
          <GridItem key={i} className="p-10 px-8 border-r border-b border-secondary-foreground/[0.08] hover:bg-secondary-foreground/[0.04] transition-colors">
            <div className="w-[46px] h-[46px] border border-primary/40 hover:border-primary/70 flex items-center justify-center mb-5 transition-colors">
              <svg className="w-5 h-5 stroke-primary fill-none" strokeWidth="1.5" viewBox="0 0 24 24">{s.icon}</svg>
            </div>
            <h3 className="font-serif text-[19px] text-secondary-foreground mb-2.5 font-semibold">{s.title}</h3>
            <p className="text-[13px] text-secondary-foreground/50 leading-[1.7]">{s.desc}</p>
            <span className="inline-block mt-[18px] text-[10px] tracking-[0.12em] uppercase text-primary border-b border-primary/40 pb-0.5">{s.tag}</span>
          </GridItem>
        ))}
      </RevealGrid>
    </section>
  )
}
