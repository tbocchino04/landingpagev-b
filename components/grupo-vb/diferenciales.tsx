"use client"

import { SectionReveal, RevealItem } from "@/components/motion/Reveal"

const rows = [
  ["Trabaja sin plano coordinado", "Compatibiliza planimetría antes de ejecutar"],
  ["Sin documentación técnica", "Legajo completo con planos as-built"],
  ["Disponibilidad variable", "Cronograma comprometido y equipo dedicado"],
  ["Habilitación tercerizada", "Matrícula profesional propia"],
  ["Comunicación informal", "Reporte estructurado a la dirección de obra"],
  ["Sin interlocutor claro", "Un responsable técnico por proyecto"],
]

export function Diferenciales() {
  return (
    <section className="py-20 px-[5%] bg-ink">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-16 items-start">
        <SectionReveal>
          <RevealItem>
            <div className="section-tag">Por qué elegirnos</div>
          </RevealItem>
          <RevealItem>
            <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] text-secondary-foreground leading-[1.15] mb-4 font-bold">
              VB Soluciones Eléctricas versus el mercado informal.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-sm text-secondary-foreground/50 leading-[1.7] font-light">
              No competimos en precio con quienes no documentan, no planifican y no responden cuando algo falla. Competimos en resultado y en coordinación.
            </p>
          </RevealItem>
        </SectionReveal>
        <SectionReveal className="w-full">
          <RevealItem>
            <div className="grid grid-cols-2 border-b border-secondary-foreground/[0.07] border-t">
              <div className="text-[10px] tracking-[0.14em] uppercase text-slate font-semibold pb-2.5 p-3.5">Contratista común</div>
              <div className="text-[10px] tracking-[0.14em] uppercase text-primary font-semibold pb-2.5 p-3.5">VB Soluciones Eléctricas</div>
            </div>
          </RevealItem>
          {rows.map((r, i) => (
            <RevealItem key={i}>
              <div className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-secondary-foreground/[0.07]" : ""}`}>
                <div className="p-3.5 text-[13px] text-secondary-foreground/55">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-foreground/20 mr-2 align-middle" />{r[0]}
                </div>
                <div className="p-3.5 text-[13px] text-primary">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 align-middle" />{r[1]}
                </div>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  )
}
