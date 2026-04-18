"use client"

import { SectionReveal, RevealItem, RevealGrid, GridItem } from "@/components/motion/Reveal"

const problems = [
  { num: "01", title: "Replanteos que frenan la obra", desc: "Un eléctrico sin plano coordinado obliga a picar, corregir y retrasar. El costo se traslada al cronograma completo y a los demás gremios." },
  { num: "02", title: "Sin legajo ni certificados", desc: "Al momento de habilitar, escriturar o vender, la instalación eléctrica no tiene respaldo técnico. Trámites que no cierran, responsabilidades que nadie asume." },
  { num: "03", title: "Comunicación dispersa", desc: "La dirección de obra coordina por WhatsApp con cuatro personas distintas. No hay un interlocutor claro ni reportes de avance. Todo se resuelve sobre la marcha." },
  { num: "04", title: "Ejecución sin criterio técnico", desc: "Tendidos improvisados, tableros incompletos, cables subdimensionados. Problemas que se descubren cuando ya hay yeso encima y se corrigen a un costo desproporcionado." },
]

export function Problema() {
  return (
    <section className="py-20 px-[5%] bg-card">
      <SectionReveal>
        <RevealItem>
          <div className="section-tag">El problema</div>
        </RevealItem>
        <RevealItem>
          <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-foreground mb-4">
            Lo que sale mal cuando<br />el eléctrico no está a la altura.
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="text-base text-ink-muted max-w-[560px] leading-[1.75] font-light mb-12">
            Contratar por precio o por disponibilidad inmediata casi siempre termina igual: obra frenada y sobrecostos.
          </p>
        </RevealItem>
      </SectionReveal>
      <RevealGrid className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-0 border border-border">
        {problems.map((p) => (
          <GridItem key={p.num} className="p-8 border-r border-b border-border">
            <div className="font-serif text-[40px] font-bold text-destructive/10 leading-none mb-3.5">{p.num}</div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2.5">{p.title}</h3>
            <p className="text-[13px] text-ink-muted leading-[1.65]">{p.desc}</p>
          </GridItem>
        ))}
        <GridItem className="bg-ink p-10 col-span-full">
          <p className="font-serif text-[clamp(17px,2vw,24px)] text-secondary-foreground leading-[1.5] italic">
            "Un contratista eléctrico sin planificación no solo falla en su rubro. <span className="text-primary">Frena a todos los demás gremios.</span> Yeseros, plomeros, terminaciones. El eléctrico marca el ritmo de la obra."
          </p>
        </GridItem>
      </RevealGrid>
    </section>
  )
}
