"use client"

import { SectionReveal, RevealItem } from "@/components/motion/Reveal"
import { buildWhatsAppUrl, scrollToContactForm } from "@/lib/contact"

const stats = [
  { num: "100%", label: "Habilitaciones propias" },
  { num: "CABA + GBA", label: "Zona de operación" },
  { num: "Integral", label: "Proyecto, permiso y ejecución" },
]

export function Hero() {
  return (
    <section className="min-h-screen bg-ink flex flex-col justify-center px-[5%] pt-[100px] pb-20 relative overflow-hidden">
      <SectionReveal>
        <RevealItem>
          <div className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-primary mb-6 flex items-center gap-2.5">
            <span className="block w-8 h-px bg-primary" />
            Instalaciones eléctricas · Proyecto, ejecución y habilitación
          </div>
        </RevealItem>
        <RevealItem>
          <h1 className="font-serif text-[clamp(36px,5.5vw,72px)] text-secondary-foreground leading-[1.08] font-bold max-w-[780px] mb-7">
            La instalación eléctrica que<br />
            <em className="text-primary not-italic">no va a frenar</em><br />
            tu obra.
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="text-base text-secondary-foreground/60 max-w-[520px] leading-[1.7] mb-12 font-light">
            Coordinamos con la dirección de obra, compatibilizamos planimetría y entregamos legajo completo. Un contratista eléctrico que entra al proyecto desde el día uno.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="flex gap-3.5 flex-wrap items-center">
            <button onClick={scrollToContactForm} className="btn-primary">Solicitar presupuesto</button>
            <a
              href={buildWhatsAppUrl("Hola, vi la web y quería hacer una consulta sobre un proyecto eléctrico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Escribir por WhatsApp →
            </a>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="flex gap-0 mt-16 border-t border-secondary-foreground/10 pt-9 flex-wrap max-sm:flex-col max-sm:gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`flex-1 min-w-[120px] pr-7 mb-4 ${
                  i < stats.length - 1
                    ? "border-r border-secondary-foreground/10 max-sm:border-r-0 max-sm:border-b max-sm:border-secondary-foreground/10 max-sm:pb-4"
                    : "pl-7 max-sm:pl-0"
                }`}
              >
                <span className="font-serif text-[32px] text-primary font-semibold block leading-none">{s.num}</span>
                <span className="text-[11px] text-secondary-foreground/40 tracking-[0.08em] uppercase mt-1.5 block">{s.label}</span>
              </div>
            ))}
          </div>
        </RevealItem>
      </SectionReveal>
    </section>
  )
}
