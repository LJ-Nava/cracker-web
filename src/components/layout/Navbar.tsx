import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Users, Wrench, Settings, MessageCircle } from 'lucide-react'

const menuItems = [
  { label: 'Inicio', url: '#inicio', Icon: Home },
  { label: 'Nosotros', url: '#nosotros', Icon: Users },
  { label: 'Servicios', url: '#servicios', Icon: Wrench },
  { label: 'Proceso', url: '#proceso', Icon: Settings },
  { label: 'Contacto', url: '#contacto', Icon: MessageCircle },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="crk-navbar"
      data-scrolled={hasScrolled}
    >
      <div className="crk-navbar__container">
        {/* Logo */}
        <a href="#inicio" className="crk-navbar__logo">
          <img
            src="/images/logo.jpg"
            alt="Construcciones El Cracker"
            className="crk-navbar__logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="crk-navbar__nav">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className="crk-navbar__link"
            >
              <item.Icon size={15} className="crk-navbar__link-icon" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a href="#contacto" className="crk-navbar__cta">
          <span>Cotizar</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="crk-navbar__mobile-btn"
          aria-label="Menú"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="crk-navbar__mobile"
          >
            <div className="crk-navbar__mobile-inner">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  onClick={() => setMobileOpen(false)}
                  className="crk-navbar__mobile-link"
                >
                  <item.Icon size={18} />
                  <span>{item.label}</span>
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="crk-navbar__mobile-cta"
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
