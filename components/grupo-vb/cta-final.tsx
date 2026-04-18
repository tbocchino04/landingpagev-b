"use client"

import { SectionReveal, RevealItem } from "@/components/motion/Reveal"
import { ContactForm } from "@/components/grupo-vb/contact-form"

export function CTAFinal() {
  return (
    <section id="contacto-final" className="bg-ink py-[100px] px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-[1100px] mx-auto">
        <SectionReveal>
          <RevealItem>
            <div className="section-tag">¿Empezamos?</div>
          </RevealItem>
          <RevealItem>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] text-secondary-foreground leading-[1.1] mb-5 font-bold">
              Tu próxima obra eléctrica<br />hecha <em className="text-primary not-italic primary-glow">bien desde el proyecto.</em>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-secondary-foreground/[0.55] mb-6 font-light leading-[1.7] max-w-[480px]">
              Contanos el proyecto, la ubicación y la etapa en la que está. Respondemos en menos de 24 horas hábiles.
            </p>
          </RevealItem>
          <RevealItem>
            <ul className="space-y-2.5 text-[13px] text-secondary-foreground/60">
              <li className="flex gap-2.5 items-center"><span className="w-1.5 h-1.5 bg-primary block" /> Visita técnica sin cargo en CABA y GBA Norte</li>
              <li className="flex gap-2.5 items-center"><span className="w-1.5 h-1.5 bg-primary block" /> Presupuesto detallado en 48 a 72hs hábiles</li>
              <li className="flex gap-2.5 items-center"><span className="w-1.5 h-1.5 bg-primary block" /> Sin compromiso ni costo de cotización</li>
            </ul>
          </RevealItem>
        </SectionReveal>
        <SectionReveal>
          <RevealItem>
            <div className="bg-secondary-foreground/[0.07] border border-secondary-foreground/20 p-8">
              <div className="text-[10px] tracking-[0.18em] uppercase text-primary mb-5">Formulario de contacto</div>
              <ContactForm />
            </div>
          </RevealItem>
        </SectionReveal>
      </div>
    </section>
  )
}
