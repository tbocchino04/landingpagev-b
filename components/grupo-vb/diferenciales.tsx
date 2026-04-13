"use client"

const comparaciones = [
  { bad: "Trabaja sin plano", good: "Planimetría antes de ejecutar" },
  { bad: "Sin documentación", good: "Legajo técnico completo" },
  { bad: "Disponibilidad variable", good: "Cronograma y equipo dedicado" },
  { bad: "Habilitación tercerizada", good: "Matrícula profesional propia" },
  { bad: "Comunicación informal", good: "Reporte estructurado de avance" },
  { bad: "Sin interlocutor claro", good: "Un responsable por proyecto" },
]

export function Diferenciales() {
  return (
    <section className="py-20 px-[5%] bg-ink">
      <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1 max-md:gap-9">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-gold" />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
              Por qué elegirnos
            </span>
          </div>
          
          <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] text-white leading-[1.15] mb-4 font-bold">
            Grupo V&B versus el mercado informal.
          </h2>
          
          <p className="mt-4 text-sm text-white/50 leading-relaxed font-light">
            No competimos en precio con quienes no documentan, no planifican y no responden cuando algo falla. Competimos en resultado.
          </p>
        </div>
        
        <div>
          <div className="w-full">
            <div className="grid grid-cols-2 border-b border-white/[0.07] border-t">
              <div className="text-[10px] tracking-[0.14em] uppercase text-slate font-semibold pb-2.5 p-3.5 px-4">
                Electricista común
              </div>
              <div className="text-[10px] tracking-[0.14em] uppercase text-gold font-semibold pb-2.5 p-3.5 px-4">
                Grupo V&B
              </div>
            </div>
            
            {comparaciones.map((item, index) => (
              <div
                key={item.bad}
                className={`grid grid-cols-2 ${index < comparaciones.length - 1 ? 'border-b border-white/[0.07]' : ''}`}
              >
                <div className="p-3.5 px-4 text-[13px] text-white/35">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20 mr-2 align-middle" />
                  {item.bad}
                </div>
                <div className="p-3.5 px-4 text-[13px] text-gold">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-2 align-middle" />
                  {item.good}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
