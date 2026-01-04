import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '56912345678'
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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
    >
      <MessageCircle size={26} className="text-white" />
    </motion.a>
  )
}
