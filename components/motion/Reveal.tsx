"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export const SectionReveal = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className={className}
  >
    {children}
  </motion.div>
)

export const RevealItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={fadeUp} className={className}>
    {children}
  </motion.div>
)

export const RevealGrid = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className={className}
  >
    {children}
  </motion.div>
)

export const GridItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
    }}
    className={className}
  >
    {children}
  </motion.div>
)
