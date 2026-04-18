"use client"

import { useState, type FormEvent } from "react"
import { z } from "zod"
import { buildWhatsAppUrl } from "@/lib/contact"

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre").max(80),
  contacto: z.string().trim().min(6, "Teléfono o email").max(120),
  proyecto: z.string().trim().min(10, "Contanos brevemente el proyecto").max(600),
})

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>

export function ContactForm() {
  const [values, setValues] = useState({ nombre: "", contacto: "", proyecto: "" })
  const [errors, setErrors] = useState<Errors>({})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = schema.safeParse(values)
    if (!result.success) {
      const fieldErrors: Errors = {}
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Errors
        if (!fieldErrors[k]) fieldErrors[k] = i.message
      })
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    const msg = `Hola, soy ${result.data.nombre}.\nContacto: ${result.data.contacto}\n\nProyecto:\n${result.data.proyecto}`
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer")
  }

  const inputCls =
    "w-full bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/30 px-3.5 py-3 text-sm focus:outline-none focus:border-primary transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={(e) => setValues({ ...values, nombre: e.target.value })}
          className={inputCls}
          maxLength={80}
        />
        {errors.nombre && <p className="text-[11px] text-primary mt-1">{errors.nombre}</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Teléfono o email"
          value={values.contacto}
          onChange={(e) => setValues({ ...values, contacto: e.target.value })}
          className={inputCls}
          maxLength={120}
        />
        {errors.contacto && <p className="text-[11px] text-primary mt-1">{errors.contacto}</p>}
      </div>
      <div>
        <textarea
          placeholder="Etapa del proyecto, ubicación y breve descripción"
          value={values.proyecto}
          onChange={(e) => setValues({ ...values, proyecto: e.target.value })}
          className={`${inputCls} min-h-[110px] resize-y`}
          maxLength={600}
        />
        {errors.proyecto && <p className="text-[11px] text-primary mt-1">{errors.proyecto}</p>}
      </div>
      <button type="submit" className="btn-primary w-full text-center block py-4">
        Enviar por WhatsApp
      </button>
      <p className="text-[11px] text-secondary-foreground/30 text-center pt-1">
        Respondemos en menos de 24hs hábiles · Sin compromiso
      </p>
    </form>
  )
}
