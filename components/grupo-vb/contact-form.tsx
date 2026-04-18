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
  const [sending, setSending] = useState(false)

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
    setSending(true)
    const msg = `Hola, soy ${result.data.nombre}.\nContacto: ${result.data.contacto}\n\nProyecto:\n${result.data.proyecto}`
    setTimeout(() => {
      window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer")
      setSending(false)
    }, 1200)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="cf-nombre" className="sr-only">Nombre</label>
        <input
          id="cf-nombre"
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={(e) => setValues({ ...values, nombre: e.target.value })}
          className="input-field"
          autoComplete="name"
          maxLength={80}
        />
        {errors.nombre && <p className="text-[11px] text-destructive mt-1">{errors.nombre}</p>}
      </div>
      <div>
        <label htmlFor="cf-contacto" className="sr-only">Teléfono o email</label>
        <input
          id="cf-contacto"
          type="text"
          placeholder="Teléfono o email"
          value={values.contacto}
          onChange={(e) => setValues({ ...values, contacto: e.target.value })}
          className="input-field"
          autoComplete="tel"
          maxLength={120}
        />
        {errors.contacto && <p className="text-[11px] text-destructive mt-1">{errors.contacto}</p>}
      </div>
      <div>
        <label htmlFor="cf-proyecto" className="sr-only">Descripción del proyecto</label>
        <textarea
          id="cf-proyecto"
          placeholder="Etapa del proyecto, ubicación y breve descripción"
          value={values.proyecto}
          onChange={(e) => setValues({ ...values, proyecto: e.target.value })}
          className="input-field min-h-[110px] resize-y"
          autoComplete="off"
          maxLength={600}
        />
        {errors.proyecto && <p className="text-[11px] text-destructive mt-1">{errors.proyecto}</p>}
      </div>
      <button type="submit" className="btn-primary w-full text-center block py-4" disabled={sending}>
        {sending ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
      </button>
      <p className="text-[11px] text-secondary-foreground/30 text-center pt-1">
        Respondemos en menos de 24hs hábiles · Sin compromiso
      </p>
    </form>
  )
}
