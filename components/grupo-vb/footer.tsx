"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#080808] py-10 px-[5%] flex justify-between items-center flex-wrap gap-4 border-t border-secondary-foreground/[0.06]">
      <div className="flex min-h-10 items-center justify-center">
        <Image
          src="/logo-vb-clean.png"
          alt="VB Soluciones Eléctricas"
          width={120}
          height={36}
          className="block h-9 w-auto object-contain translate-y-[1px]"
        />
      </div>
      <div className="text-xs text-secondary-foreground/30 leading-[1.8]">
        Instalaciones eléctricas · CABA y Zona Norte GBA<br />Buenos Aires, Argentina
      </div>
    </footer>
  )
}
