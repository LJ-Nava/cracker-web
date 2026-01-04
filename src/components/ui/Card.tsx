import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.3 }}
      className={`bg-card border border-sand rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  )
}
