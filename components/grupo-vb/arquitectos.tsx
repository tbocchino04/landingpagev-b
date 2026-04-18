"use client"

import { SectionReveal, RevealItem, RevealGrid, GridItem } from "@/components/motion/Reveal"
import { scrollToContactForm } from "@/lib/contact"

const features = [
  {
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
    title: "Compatibilización con la planimetría existente",
    desc: "Trabajamos sobre los planos del proyecto. Detectamos y resolvemos interferencias con otros gremios antes de que lleguen a obra.",
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></>,
    title: "Respeto del cronograma de gremios",
    desc: "No somos el cuello de botella. Coordinamos para estar donde hay que estar, cuando hay que estar. Sin retrasos que impacten al resto.",
  },
  {
    icon: <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></>,
    title: "Comunicación directa y estructurada",
    desc: "Un único interlocutor por proyecto. Reportes de avance periódicos a la dirección de obra. Sin dispersión.",
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    title: "Legajo técnico para habilitación y post-obra",
    desc: "Planos as-built, memoria descriptiva, certificados. Todo lo que el comitente va a necesitar para habilitar, escriturar o vender.",
  },
]

const checklist = [
  "Compatibilizamos con el plano del proyecto",
  "Calculamos cargas y dimensionamos tableros",
  "Gestionamos la documentación ante el ente regulador",
  "Coordinamos con instalaciones termomecánicas y estructuras",
  "Entregamos legajo técnico completo al cierre de obra",
]

export function Arquitectos() {
  return (
    <section className="py-20 px-[5%] bg-card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-16 items-start">
        <SectionReveal>
          <RevealItem>
            <div className="section-tag">Integración en obra</div>
          </RevealItem>
          <RevealItem>
            <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-foreground mb-4">
              El contratista eléctrico que tu obra necesita.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-ink-muted max-w-[560px] leading-[1.75] font-light mb-9">
              Entendemos cómo se coordina una obra. No somos un gremio que hay que perseguir: somos un partner que entra al proyecto desde la etapa ejecutiva.
            </p>
          </RevealItem>
          <RevealGrid className="list-none mt-9">
            {features.map((f, i) => (
              <GridItem key={i} className={`py-5 border-b border-border flex gap-4 items-start ${i === 0 ? "border-t" : ""}`}>
                <div className="w-[30px] h-[30px] bg-gold-pale flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 stroke-primary fill-none" strokeWidth="2" viewBox="0 0 24 24">{f.icon}</svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{f.title}</h4>
                  <p className="text-[13px] text-ink-muted leading-[1.6]">{f.desc}</p>
                </div>
              </GridItem>
            ))}
          </RevealGrid>
        </SectionReveal>
        <SectionReveal>
          <RevealItem>
            <div className="bg-background p-9 border border-border">
              <div className="text-[10px] tracking-[0.16em] uppercase text-primary mb-4">Propuesta de trabajo conjunto</div>
              <h3 className="font-serif text-xl text-foreground mb-3.5">¿Tenés un proyecto en etapa ejecutiva o licitación?</h3>
              <p className="text-[13px] text-ink-muted leading-[1.7] mb-5">
                Es el momento ideal para sumar al equipo eléctrico. Entramos temprano, aportamos criterio técnico y evitamos replanteos costosos durante la ejecución.
              </p>
              <ul className="list-none">
                {checklist.map((item, i) => (
                  <li key={i} className="text-[13px] text-ink-muted py-2 border-b border-border flex gap-2.5 items-center">
                    <span className="block w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContactForm} className="btn-primary w-full py-4 text-[13px] mt-6">Presentar mi proyecto</button>
            </div>
          </RevealItem>
        </SectionReveal>
      </div>
    </section>
  )
}
