import { motion } from 'framer-motion'
import { ArrowRight, Building2, Award, Users, ChevronDown } from 'lucide-react'
import heroBg from '../../assets/images/WhatsApp Image 2026-01-03 at 6.43.40 PM.jpeg'

const stats = [
  { number: '500+', label: 'Proyectos', icon: Building2 },
  { number: '10+', label: 'Años', icon: Award },
  { number: '50+', label: 'Expertos', icon: Users },
]

export function Hero() {
  return (
    <section id="inicio" className="crk-hero-v2">
      {/* Lado izquierdo - Contenido */}
      <div className="crk-hero-v2__left">
        {/* Líneas decorativas arquitectónicas */}
        <div className="crk-hero-v2__lines">
          <span className="crk-hero-v2__line crk-hero-v2__line--1" />
          <span className="crk-hero-v2__line crk-hero-v2__line--2" />
          <span className="crk-hero-v2__line crk-hero-v2__line--3" />
        </div>

        <div className="crk-hero-v2__content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="crk-hero-v2__badge"
          >
            <span className="crk-hero-v2__badge-dot" />
            Desde 2014 construyendo Chile
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="crk-hero-v2__title"
          >
            <span className="crk-hero-v2__title-line">Romel Aranda</span>
            <span className="crk-hero-v2__title-line crk-hero-v2__title-line--accent">Pastor</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="crk-hero-v2__subtitle"
          >
            CONSTRUCCIONES EIRL
          </motion.p>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="crk-hero-v2__description"
          >
            Transformamos espacios con excelencia, innovación y compromiso.
            Cada proyecto refleja nuestra pasión por construir el futuro de Chile.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="crk-hero-v2__buttons"
          >
            <a href="#servicios" className="crk-hero-v2__btn-primary">
              Explorar Servicios
              <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="crk-hero-v2__btn-secondary">
              Cotizar Proyecto
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="crk-hero-v2__stats"
          >
            {stats.map((stat, index) => (
              <div key={index} className="crk-hero-v2__stat">
                <stat.icon size={20} className="crk-hero-v2__stat-icon" />
                <span className="crk-hero-v2__stat-number">{stat.number}</span>
                <span className="crk-hero-v2__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lado derecho - Imagen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="crk-hero-v2__right"
      >
        <div
          className="crk-hero-v2__image"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="crk-hero-v2__image-overlay" />

        {/* Etiqueta sobre imagen */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="crk-hero-v2__image-tag"
        >
          <span className="crk-hero-v2__image-tag-label">Proyecto Destacado</span>
          <span className="crk-hero-v2__image-tag-title">Torre Empresarial</span>
          <span className="crk-hero-v2__image-tag-location">Santiago, Chile</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="crk-hero-v2__scroll"
      >
        <span className="crk-hero-v2__scroll-text">Descubre más</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="crk-hero-v2__scroll-icon"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}
