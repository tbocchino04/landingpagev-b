"use client"

import { SectionReveal, RevealItem } from "@/components/motion/Reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿En qué etapa del proyecto conviene contactarlos?",
    a: "Lo ideal es sumarnos en etapa ejecutiva o de licitación. Entrar temprano nos permite compatibilizar planimetría con el resto de los gremios, dimensionar correctamente y evitar replanteos costosos en obra. Igual trabajamos también sobre obras ya iniciadas.",
  },
  {
    q: "¿Trabajan sobre el pliego y la documentación del estudio?",
    a: "Sí. Cotizamos sobre pliego, planos y memorias de la dirección de obra. Si detectamos inconsistencias o mejoras técnicas, las planteamos por escrito antes de ejecutar. Devolvemos el legajo as-built al cierre.",
  },
  {
    q: "¿Cómo es el proceso de cotización?",
    a: "Recibimos la documentación, hacemos una visita técnica sin cargo en CABA y zona norte del GBA, y devolvemos presupuesto detallado por rubros en 48 a 72 horas hábiles. Sin compromiso.",
  },
  {
    q: "¿Cuánto tardan en entregar el legajo técnico?",
    a: "El legajo as-built (planos actualizados, memoria descriptiva, certificados de habilitación y planilla de tableros) se entrega dentro de los 15 días hábiles posteriores a la finalización de la instalación.",
  },
  {
    q: "¿Qué zona cubren?",
    a: "Operamos en CABA y zona norte del GBA. Para obras de mayor escala evaluamos otras zonas según el proyecto. Consultanos por tu ubicación específica.",
  },
  {
    q: "¿Tienen matrícula propia o tercerizan la habilitación?",
    a: "Matrícula propia. Nuestro socio técnico firma con matrícula activa ante el ente regulador. No tercerizamos la responsabilidad técnica del proyecto ni la presentación.",
  },
]

export function Faq() {
  return (
    <section className="py-20 px-[5%] bg-background">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start max-w-[1200px] mx-auto">
        <SectionReveal>
          <RevealItem>
            <div className="section-tag">Preguntas frecuentes</div>
          </RevealItem>
          <RevealItem>
            <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold leading-[1.15] text-foreground mb-4">
              Lo que suelen preguntarnos antes de contratarnos.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-ink-muted leading-[1.75] font-light">
              Si te queda alguna duda específica sobre tu proyecto, escribinos. Respondemos en menos de 24 horas hábiles.
            </p>
          </RevealItem>
        </SectionReveal>
        <SectionReveal>
          <RevealItem>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-ink-muted leading-[1.7] pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealItem>
        </SectionReveal>
      </div>
    </section>
  )
}
