"use client"

const features = [
  {
    title: "Compatibilización con el proyecto arquitectónico",
    description: "Trabajamos sobre la planimetría existente. Detectamos y resolvemos interferencias antes de que lleguen a obra.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none stroke-2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Respeto del cronograma de gremios",
    description: "No somos el cuello de botella. Coordinamos para estar donde hay que estar, cuando hay que estar.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none stroke-2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
  {
    title: "Comunicación directa y estructurada",
    description: "Un único interlocutor por proyecto. Reportes de avance periódicos. Sin dispersión.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none stroke-2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Documentación para habilitación y post-obra",
    description: "Legajo técnico completo. Planos as-built, memoria descriptiva, certificados. Todo lo que el comitente va a necesitar.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none stroke-2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

const checklist = [
  "Compatibilizamos con el plano arquitectónico",
  "Calculamos cargas y dimensionamos tableros",
  "Gestionamos la documentación ante el GCBA",
  "Coordinamos con instalaciones termomecánicas y estructuras",
  "Entregamos legajo técnico para escrituración y venta",
]

export function Arquitectos() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1 max-md:gap-9">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-gold" />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">
              Para estudios de arquitectura
            </span>
          </div>
          
          <h2 className="font-serif text-[clamp(26px,3.5vw,46px)] font-bold leading-[1.15] text-ink mb-4">
            El contratista eléctrico que necesita tu obra.
          </h2>
          
          <p className="text-base text-ink-muted max-w-[560px] leading-relaxed font-light mb-9">
            Entendemos cómo se coordina una obra. No somos un servicio que hay que perseguir: somos un partner que entra al proyecto desde el inicio.
          </p>
          
          <ul className="list-none mt-9">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className={`py-5 border-b border-border-custom flex gap-4 items-start ${index === 0 ? 'border-t' : ''}`}
              >
                <div className="w-[30px] h-[30px] bg-gold-pale flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink mb-1">{feature.title}</h4>
                  <p className="text-[13px] text-ink-muted leading-relaxed">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="bg-bg p-9 border border-border-custom">
            <div className="text-[10px] tracking-[0.16em] uppercase text-gold mb-4">
              Propuesta de trabajo conjunto
            </div>
            <h3 className="font-serif text-xl text-ink mb-3.5">
              ¿Tenés un proyecto en etapa ejecutiva o licitación?
            </h3>
            <p className="text-[13px] text-ink-muted leading-relaxed mb-5">
              Es el momento ideal para sumar al equipo eléctrico. Entramos temprano, aportamos criterio técnico y evitamos replanteos costosos durante la ejecución.
            </p>
            
            <ul className="list-none">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="text-[13px] text-ink-muted py-2 border-b border-border-custom flex gap-2.5 items-center"
                >
                  <span className="block w-1.5 h-1.5 bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="bg-gold text-ink font-sans text-[13px] font-semibold w-full py-4 mt-6 border-none cursor-pointer tracking-[0.06em] uppercase hover:bg-gold-light transition-colors text-center">
              Presentar mi proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
