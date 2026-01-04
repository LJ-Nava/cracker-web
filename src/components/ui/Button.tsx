import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25',
    secondary:
      'bg-secondary text-white hover:bg-secondary/90',
    outline:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  )
}
