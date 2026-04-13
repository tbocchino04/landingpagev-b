"use client"

export function CTAFinal() {
  return (
    <section className="bg-ink py-[100px] px-[5%] text-center">
      <div className="flex items-center gap-2 mb-4 justify-center">
        <span className="block w-6 h-px bg-gold" />
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
          ¿Empezamos?
        </span>
        <span className="block w-6 h-px bg-gold" />
      </div>
      
      <h2 className="font-serif text-[clamp(30px,4.5vw,56px)] text-white leading-[1.1] mb-5 font-bold">
        Tu próxima obra eléctrica
        <br />
        hecha <em className="text-gold not-italic">bien desde el inicio.</em>
      </h2>
      
      <p className="text-base text-white/55 mb-10 font-light leading-relaxed max-w-[540px] mx-auto">
        Respondemos en menos de 24 horas hábiles. Contanos el proyecto, la ubicación y la etapa en la que está. El resto lo vemos juntos.
      </p>
      
      <div className="flex gap-3.5 justify-center flex-wrap">
        <button className="bg-gold text-ink font-sans text-[15px] font-semibold px-10 py-[18px] border-none cursor-pointer tracking-[0.06em] uppercase hover:bg-gold-light transition-colors">
          Solicitar presupuesto
        </button>
        <button className="bg-transparent text-white font-sans text-[15px] font-medium px-7 py-[18px] border border-white/25 cursor-pointer tracking-[0.04em] hover:border-white/50 transition-colors">
          Escribir por WhatsApp
        </button>
      </div>
      
      <p className="mt-6 text-xs text-white/30 tracking-[0.04em]">
        Sin compromiso · Respondemos en 24hs · CABA y Zona Norte del GBA
      </p>
    </section>
  )
}
