import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  center?: boolean
}

export function SectionTitle({
  label,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${center ? 'text-center mx-auto max-w-3xl' : ''}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-earth-dark mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-earth-medium text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
