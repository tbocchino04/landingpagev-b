export const WHATSAPP_NUMBER = "5491166626167"

const DEFAULT_MESSAGE = "Hola, me gustaría coordinar una visita para un proyecto eléctrico."

export const buildWhatsAppUrl = (message: string = DEFAULT_MESSAGE): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const scrollToContactForm = () => {
  const el = document.getElementById("contacto")
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}
