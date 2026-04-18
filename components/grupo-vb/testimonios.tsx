"use client"

import { SectionReveal, RevealItem, RevealGrid, GridItem } from "@/components/motion/Reveal"

const testimonials = [
  {
    quote: "Lo que más me sorprendió fue la coordinación. Me avisaban antes de cada etapa, mandaban reporte de avance sin pedirlo. Cuando coordinás seis gremios, eso vale más que cualquier otra cosa.",
    initials: "MA", name: "Martín A.", role: "Director de proyecto · Palermo, CABA",
  },
  {
    quote: "Los sumamos en etapa de proyecto y llegaron a obra con el plano compatibilizado. Primera vez que el eléctrico no me genera un replanteo. Al cierre me entregaron el legajo completo.",
    initials: "LC", name: "Lucía C.", role: "Responsable de obra · Zona Norte",
  },
  {
    quote: "Tuvimos un imprevisto con los alimentadores y lo resolvieron en el día, sin cobrar extra. Eso me dice cómo trabaja una empresa cuando las cosas no salen como se planeó.",
    initials: "RV", name: "Roberto V.", role: "Desarrollador inmobiliario · Vicente López",
  },
]

const Stars = () => (
  <div className="flex gap-0.5 mb-3.5">
    {[...Array(5)].map((_, i) => <span key={i} className="text-primary text-[13px]">★</span>)}
  </div>
)

export function Testimonios() {
  return (
    <section className="py-20 px-[5%] bg-background">
      <SectionReveal>
        <RevealItem>
          <div className="section-tag">Clientes</div>
        </RevealItem>
        <RevealItem>
          <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-foreground mb-4">
            Lo que dicen quienes ya trabajaron con nosotros.
          </h2>
        </RevealItem>
      </SectionReveal>
      <RevealGrid className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-12">
        {testimonials.map((t, i) => (
          <GridItem key={i} className="bg-card p-9 border-l-[3px] border-primary">
            <Stars />
            <p className="font-serif text-base text-foreground leading-[1.6] italic mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] bg-gold-pale rounded-full flex items-center justify-center font-serif text-sm font-bold text-primary flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-foreground mb-0.5">{t.name}</div>
                <div className="text-xs text-slate">{t.role}</div>
              </div>
            </div>
          </GridItem>
        ))}
      </RevealGrid>
    </section>
  )
}
