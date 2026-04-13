"use client"

const pasos = [
  {
    num: "01",
    title: "Relevamiento",
    description: "Visitamos la obra, evaluamos el proyecto arquitectónico y definimos el alcance real de la instalación. Detectamos interferencias antes de que sean un problema.",
  },
  {
    num: "02",
    title: "Presupuesto",
    description: "Presupuesto detallado por rubros, con materiales y mano de obra claramente discriminados. Sin items genéricos ni costos ocultos.",
  },
  {
    num: "03",
    title: "Ejecución",
    description: "Equipo propio, herramientas adecuadas y supervisor en obra. Coordinamos con los demás gremios y respetamos el cronograma acordado.",
    active: true,
  },
  {
    num: "04",
    title: "Seguimiento",
    description: "Reportes de avance periódicos. Sabés qué se hizo, qué resta y cuándo esperamos terminar. Comunicación directa, sin intermediarios.",
  },
  {
    num: "05",
    title: "Entrega",
    description: "Pruebas y verificación final, documentación técnica completa y gestión del certificado de habilitación. Obra cerrada en regla.",
  },
]

export function Proceso() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-gold" />
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
          Cómo trabajamos
        </span>
      </div>
      
      <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-ink mb-4">
        El proceso que elimina la incertidumbre.
      </h2>
      
      <p className="text-base text-ink-muted max-w-[560px] leading-relaxed font-light mb-12">
        Cada proyecto sigue una secuencia clara. Nada queda librado a la improvisación.
      </p>
      
      <div className="grid grid-cols-1 gap-0 mt-12">
        {pasos.map((paso) => (
          <div
            key={paso.num}
            className="grid grid-cols-[64px_1fr] gap-5 items-start py-7 border-b border-border-custom last:border-b-0"
          >
            <div
              className={`w-[54px] h-[54px] flex items-center justify-center font-serif text-xl font-bold shrink-0 ${
                paso.active
                  ? 'bg-gold text-ink'
                  : 'bg-white border-[1.5px] border-gold text-gold'
              }`}
            >
              {paso.num}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink mb-1.5">{paso.title}</h4>
              <p className="text-[13px] text-ink-muted leading-relaxed">{paso.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
