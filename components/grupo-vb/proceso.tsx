"use client"

import { SectionReveal, RevealItem, RevealGrid, GridItem } from "@/components/motion/Reveal"

const steps = [
  { num: "01", title: "Relevamiento", desc: "Visitamos la obra, evaluamos la planimetría existente y definimos el alcance real de la instalación. Detectamos interferencias con otros gremios antes de que sean un problema.", active: false },
  { num: "02", title: "Presupuesto", desc: "Presupuesto detallado por rubros, con materiales y mano de obra discriminados. Sin ítems genéricos ni costos que aparecen después.", active: false },
  { num: "03", title: "Ejecución", desc: "Equipo propio, herramientas adecuadas y supervisor en obra. Coordinamos con los demás gremios y respetamos el cronograma acordado con la dirección.", active: true },
  { num: "04", title: "Seguimiento", desc: "Reportes de avance periódicos a la dirección de obra. Sabés qué se hizo, qué resta y cuándo esperamos terminar. Sin tener que perseguir al contratista.", active: false },
  { num: "05", title: "Entrega", desc: "Pruebas finales, documentación técnica completa, planos as-built y gestión del certificado de habilitación. Legajo cerrado y en regla.", active: false },
]

export function Proceso() {
  return (
    <section className="py-20 px-[5%] bg-card">
      <SectionReveal>
        <RevealItem>
          <div className="section-tag">Cómo trabajamos</div>
        </RevealItem>
        <RevealItem>
          <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-foreground mb-4">
            El proceso que elimina la incertidumbre.
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="text-base text-ink-muted max-w-[560px] leading-[1.75] font-light mb-12">
            Cada proyecto sigue una secuencia clara. Nada queda librado a la improvisación ni a la buena voluntad.
          </p>
        </RevealItem>
      </SectionReveal>
      <RevealGrid className="grid grid-cols-1 gap-0 mt-12">
        {steps.map((s, i) => (
          <GridItem key={s.num} className={`grid grid-cols-[64px_1fr] gap-5 items-start py-7 ${i < steps.length - 1 ? "border-b border-border" : ""}`}>
            <div className={`w-[54px] h-[54px] flex items-center justify-center font-serif text-xl font-bold flex-shrink-0 ${
              s.active ? "bg-primary text-primary-foreground" : "bg-card border-[1.5px] border-primary text-primary"
            }`}>
              {s.num}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1.5">{s.title}</h4>
              <p className="text-[13px] text-ink-muted leading-[1.6]">{s.desc}</p>
            </div>
          </GridItem>
        ))}
      </RevealGrid>
    </section>
  )
}
