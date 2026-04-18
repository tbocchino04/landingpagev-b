"use client"

import { SectionReveal, RevealItem, RevealGrid, GridItem } from "@/components/motion/Reveal"
import { ContactForm } from "@/components/grupo-vb/contact-form"

const checks = [
  { title: "Interlocutor único en toda la obra", desc: "Un responsable técnico que coordina con la dirección de obra y con el resto de los gremios. Sin intermediarios." },
  { title: "Planificación desde la etapa de proyecto", desc: "Relevamos, diseñamos y compatibilizamos antes de ejecutar. La instalación sigue un plan aprobado sobre la planimetría real." },
  { title: "Documentación técnica completa", desc: "Memorias descriptivas, planos as-built, certificados de habilitación. Todo lo que el comitente y la dirección van a necesitar." },
  { title: "Seguimiento y reporte de avance", desc: "Sabés exactamente en qué etapa está la instalación. Sin tener que llamar para preguntar ni perseguir al contratista." },
  { title: "Matrícula profesional propia", desc: "No tercerizamos la habilitación técnica. Nuestro socio técnico firma con matrícula activa ante el ente regulador." },
]

const CheckIcon = () => (
  <div className="w-[22px] h-[22px] bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
    <svg className="w-3 h-3 stroke-foreground fill-none" strokeWidth="2.5" viewBox="0 0 12 12">
      <polyline points="2,6 5,9 10,3" />
    </svg>
  </div>
)

export function Solucion() {
  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <SectionReveal>
          <RevealItem>
            <div className="section-tag">Nuestra solución</div>
          </RevealItem>
          <RevealItem>
            <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-foreground mb-4">
              Un contratista eléctrico que funciona como parte del equipo de obra.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-ink-muted max-w-[560px] leading-[1.75] font-light mb-12">
              No somos un servicio de apoyo. Entramos al proyecto desde la etapa ejecutiva y coordinamos como un gremio más del equipo.
            </p>
          </RevealItem>
          <RevealGrid className="list-none">
            {checks.map((c, i) => (
              <GridItem key={i} className={`flex gap-3.5 py-5 border-b border-border ${i === 0 ? "border-t" : ""}`}>
                <CheckIcon />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{c.title}</h4>
                  <p className="text-[13px] text-ink-muted leading-[1.6]">{c.desc}</p>
                </div>
              </GridItem>
            ))}
          </RevealGrid>
        </SectionReveal>
        <SectionReveal>
          <RevealItem>
            <div id="contacto" className="bg-ink p-9 scroll-mt-24">
              <div className="text-[10px] tracking-[0.18em] uppercase text-primary mb-5">Solicitar contacto</div>
              <h3 className="font-serif text-xl text-secondary-foreground mb-3 leading-[1.3]">
                Contanos tu proyecto y te respondemos en menos de 24 horas.
              </h3>
              <p className="text-[13px] text-secondary-foreground/60 leading-[1.7] mb-6">
                Trabajamos en obras de mediana y gran escala en CABA y zona norte del GBA.
              </p>
              <ContactForm />
            </div>
          </RevealItem>
        </SectionReveal>
      </div>
    </section>
  )
}
