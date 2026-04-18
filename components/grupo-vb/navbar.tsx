"use client"

import Image from "next/image"
import { scrollToContactForm } from "@/lib/contact"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-secondary/[0.97] px-[5%] h-16 flex items-center justify-between border-b border-primary/20">
      <div className="flex h-16 items-center justify-center">
        <Image
          src="/logo-vb-clean.png"
          alt="VB Soluciones Eléctricas"
          width={120}
          height={32}
          className="block h-8 w-auto object-contain translate-y-[1px]"
        />
      </div>
      <button onClick={scrollToContactForm} className="btn-primary text-[13px] px-[18px] py-2 flex-shrink-0">Solicitar presupuesto</button>
    </nav>
  )
}
