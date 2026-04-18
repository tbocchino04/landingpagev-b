import { Navbar } from "@/components/grupo-vb/navbar"
import { Hero } from "@/components/grupo-vb/hero"
import { Problema } from "@/components/grupo-vb/problema"
import { Solucion } from "@/components/grupo-vb/solucion"
import { Servicios } from "@/components/grupo-vb/servicios"
import { Proceso } from "@/components/grupo-vb/proceso"
import { Testimonios } from "@/components/grupo-vb/testimonios"
import { Faq } from "@/components/grupo-vb/faq"
import { CTAFinal } from "@/components/grupo-vb/cta-final"
import { Footer } from "@/components/grupo-vb/footer"
import { WhatsAppFloat } from "@/components/grupo-vb/whatsapp-float"

export default function GrupoVBLanding() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <Servicios />
        <Proceso />
        <Testimonios />
        <Faq />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
