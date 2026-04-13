"use client"

export function Footer() {
  return (
    <footer className="bg-[#080808] py-10 px-[5%] flex justify-between items-center flex-wrap gap-4 border-t border-white/[0.06]">
      <div className="font-serif text-lg text-white">
        GRUPO <span className="text-gold">V&B</span>
      </div>
      <div className="text-xs text-white/30 leading-relaxed">
        Instalaciones eléctricas · CABA y Zona Norte GBA
        <br />
        Buenos Aires, Argentina
      </div>
    </footer>
  )
}
