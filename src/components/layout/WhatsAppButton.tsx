import { motion } from 'framer-motion'

export function WhatsAppButton() {
  const phoneNumber = '56958798214'
  const message = encodeURIComponent(
    '¡Hola! Me interesa cotizar un proyecto de construcción.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="crk-whatsapp-btn"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.726 30.988 12.75 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.334 22.594c-.39 1.098-1.932 2.01-3.15 2.276-.834.178-1.924.32-5.594-1.202-4.698-1.95-7.72-6.728-7.954-7.04-.226-.31-1.89-2.52-1.89-4.806 0-2.286 1.196-3.412 1.622-3.878.39-.426.918-.622 1.424-.622.172 0 .326.008.466.016.426.018.64.044.92.712.35.834 1.204 2.934 1.308 3.148.106.214.212.498.074.79-.13.3-.246.434-.46.682-.214.248-.418.438-.632.706-.196.232-.416.48-.178.94.238.46 1.058 1.746 2.272 2.83 1.562 1.394 2.878 1.826 3.286 2.028.408.202.646.168.884-.1.246-.276 1.054-1.226 1.334-1.648.272-.422.552-.35.928-.21.38.134 2.404 1.134 2.816 1.34.412.208.686.31.786.482.098.172.098.998-.292 2.096z"/>
      </svg>
    </motion.a>
  )
}
