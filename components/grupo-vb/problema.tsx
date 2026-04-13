"use client"

const problemas = [
  {
    num: "01",
    title: "Obra parada por replanteos",
    description: "Un electricista que trabaja sin plano coordenado obliga a demoler, corregir y retrasar. El costo lo absorbe el proyecto entero.",
  },
  {
    num: "02",
    title: "Sin documentación ni certificados",
    description: "Al momento de habilitar o vender, la instalación eléctrica no tiene respaldo técnico. Trámites que no cierran, responsabilidades difusas.",
  },
  {
    num: "03",
    title: "Comunicación fragmentada",
    description: "Nadie sabe qué se hizo, qué falta y cuándo. El director coordina por WhatsApp con cuatro personas distintas sin interlocutor claro.",
  },
  {
    num: "04",
    title: "Ejecución sin criterio técnico",
    description: "Tendidos improvisados, tableros incompletos, cables subdimensionados. Problemas que se descubren tarde y se corrigen caros.",
  },
]

export function Problema() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-gold" />
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
          El problema
        </span>
      </div>
      
      <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-ink mb-4">
        Lo que sale mal cuando
        <br />
        elegís mal al electricista.
      </h2>
      
      <p className="text-base text-ink-muted max-w-[560px] leading-relaxed font-light mb-12">
        Contratar por precio o por disponibilidad inmediata casi siempre termina igual.
      </p>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-0 border border-border-custom max-sm:grid-cols-1">
        {problemas.map((item) => (
          <div
            key={item.num}
            className="p-8 border-r border-b border-border-custom"
          >
            <div className="font-serif text-[40px] font-bold text-red-risk/10 leading-none mb-3.5">
              {item.num}
            </div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2.5">
              {item.title}
            </h3>
            <p className="text-[13px] text-ink-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
        
        <div className="bg-ink p-10 col-span-full border-b-0">
          <p className="font-serif text-[clamp(17px,2vw,24px)] text-white leading-[1.5] italic">
            {'"Un proveedor eléctrico sin planificación no solo falla en su rubro. '}
            <span className="text-gold">Frena a todos los demás.</span>
            {' Yeseros, plomeros, terminaciones. El eléctrico marca el ritmo de la obra."'}
          </p>
        </div>
      </div>
    </section>
  )
}
