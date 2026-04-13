"use client"

const testimonios = [
  {
    quote: "Lo que más me sorprendió fue la coordinación. Me avisaban antes de cada etapa, no tuve que ir a buscar información. Para un director de obra, eso es oro.",
    initials: "MA",
    name: "Martín A.",
    role: "Director de obra · Palermo, CABA",
  },
  {
    quote: "Los contraté para una vivienda en Nordelta. Vinieron con plano, trabajaron en tiempo y a la entrega me dieron el legajo completo. Primera vez que me pasa con un electricista.",
    initials: "LC",
    name: "Lucía C.",
    role: "Arquitecta · Zona Norte",
  },
  {
    quote: "Tuvimos un imprevisto con los alimentadores y lo resolvieron en el día, sin cobrar extra. Eso me dice cómo trabaja una empresa cuando las cosas no salen como se planeó.",
    initials: "RV",
    name: "Roberto V.",
    role: "Propietario · Vicente López",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-gold text-[13px]">★</span>
      ))}
    </div>
  )
}

export function Testimonios() {
  return (
    <section className="py-20 px-[5%] bg-bg">
      <div className="flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-gold" />
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
          Clientes
        </span>
      </div>
      
      <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-ink mb-4">
        Lo que dicen quienes ya trabajaron con nosotros.
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-0.5 mt-12 max-sm:grid-cols-1">
        {testimonios.map((testimonio) => (
          <div
            key={testimonio.name}
            className="bg-white p-9 border-l-[3px] border-l-gold"
          >
            <Stars />
            <p className="font-serif text-base text-ink leading-relaxed italic mb-6">
              {`"${testimonio.quote}"`}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] bg-gold-pale rounded-full flex items-center justify-center font-serif text-sm font-bold text-gold shrink-0">
                {testimonio.initials}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-ink mb-0.5">
                  {testimonio.name}
                </div>
                <div className="text-xs text-slate">{testimonio.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
