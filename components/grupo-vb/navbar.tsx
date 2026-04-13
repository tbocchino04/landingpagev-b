"use client"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/[0.97] px-[5%] h-[60px] flex items-center justify-between border-b border-gold/30">
      <div className="font-serif text-lg text-white tracking-[0.04em]">
        GRUPO <span className="text-gold">V&B</span>
      </div>
      <button className="bg-gold text-ink font-sans text-[13px] font-semibold px-[18px] py-2 border-none cursor-pointer tracking-[0.05em] uppercase hover:bg-gold-light transition-colors">
        Solicitar presupuesto
      </button>
    </nav>
  )
}
