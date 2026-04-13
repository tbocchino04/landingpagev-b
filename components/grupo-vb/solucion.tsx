"use client"

const soluciones = [
  {
    title: "Interlocutor único en toda la obra",
    description: "Un responsable técnico que coordina con el director de obra, el arquitecto y el resto de los gremios.",
  },
  {
    title: "Planificación desde el inicio del proyecto",
    description: "Relevamos, diseñamos y coordinamos antes de ejecutar. La instalación sigue un plan aprobado.",
  },
  {
    title: "Documentación técnica completa",
    description: "Memorias, planos actualizados, certificados de habilitación. Todo para el GCBA, el comitente y la post-obra.",
  },
  {
    title: "Seguimiento y reporte de avance",
    description: "Sabés exactamente en qué etapa está la instalación. Sin tener que llamar para preguntar.",
  },
  {
    title: "Matrícula profesional propia",
    description: "No tercerizamos la habilitación técnica. Nuestro socio técnico firma con matrícula activa.",
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" className="w-3 h-3 stroke-ink fill-none stroke-[2.5]">
      <polyline points="2,6 5,9 10,3" />
    </svg>
  )
}

export function Solucion() {
  return (
    <section className="py-20 px-[5%] bg-bg">
      <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1 max-md:gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-gold" />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
              Nuestra solución
            </span>
          </div>
          
          <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-ink mb-4">
            Una empresa eléctrica que trabaja como parte de tu equipo.
          </h2>
          
          <p className="text-base text-ink-muted max-w-[560px] leading-relaxed font-light mb-12">
            No somos un servicio de apoyo. Somos el contratista eléctrico que entra al proyecto desde el inicio.
          </p>
          
          <ul className="list-none">
            {soluciones.map((item, index) => (
              <li
                key={item.title}
                className={`flex gap-3.5 py-5 border-b border-border-custom ${index === 0 ? 'border-t' : ''}`}
              >
                <div className="w-[22px] h-[22px] bg-gold flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink mb-1">{item.title}</h4>
                  <p className="text-[13px] text-ink-muted leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="bg-ink p-9">
            <div className="text-[10px] tracking-[0.18em] uppercase text-gold mb-5">
              Solicitar contacto
            </div>
            <h3 className="font-serif text-xl text-white mb-5 leading-tight">
              Contanos tu proyecto y te respondemos en menos de 24 horas.
            </h3>
            <p className="text-[13px] text-white/60 leading-relaxed mb-7">
              Trabajamos con arquitectos, estudios de arquitectura, constructoras y clientes finales en CABA y zona norte del GBA.
            </p>
            <button className="bg-gold text-ink font-sans text-sm font-semibold w-full py-4 border-none cursor-pointer tracking-[0.06em] uppercase hover:bg-gold-light transition-colors text-center block">
              Solicitar presupuesto
            </button>
            <div className="mt-4 text-xs text-white/30 text-center">
              o escribinos por WhatsApp
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
