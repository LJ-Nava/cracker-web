import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  Zap,
  Home,
  Warehouse,
  Building2,
  Paintbrush,
  HardHat,
  ArrowRight,
  Sparkles,
  Images,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Play,
  Pause,
} from 'lucide-react'

// Import project images
import obras1 from '../../assets/images/obras1.jpeg'
import obras2 from '../../assets/images/obras2.jpeg'
import obras3 from '../../assets/images/obras3.jpeg'
import obras4 from '../../assets/images/obras4.jpeg'
import obras5 from '../../assets/images/obras5premium.jpeg'
import obras6 from '../../assets/images/obras6.jpeg'
import obras7 from '../../assets/images/obras7.jpeg'

const projectImages = [
  { src: obras1, title: 'Edificio Residencial', category: 'Fachadas' },
  { src: obras2, title: 'Torre Corporativa', category: 'Edificación' },
  { src: obras3, title: 'Complejo Habitacional', category: 'Terminaciones' },
  { src: obras4, title: 'Proyecto Altura', category: 'Obra Gruesa' },
  { src: obras5, title: 'Centro Comercial', category: 'Estructura' },
  { src: obras6, title: 'Torre Premium', category: 'Edificación' },
  { src: obras7, title: 'Detalles Balcones', category: 'Terminaciones' },
]

const services = [
  {
    id: 1,
    number: '01',
    icon: Home,
    title: 'Remodelaciones',
    subtitle: 'Reinventa tu espacio',
    description:
      'Convertimos tu visión en realidad. Remodelaciones integrales para hogares, oficinas y locales comerciales con diseños que impresionan y perduran.',
    features: [
      'Ampliaciones',
      'Cocinas',
      'Baños de lujo',
      'Espacios comerciales',
      'Oficinas',
      'Restaurantes',
    ],
    featured: true,
    gridClass: 'crk-services__card--featured',
  },
  {
    id: 2,
    number: '02',
    icon: Building2,
    title: 'Edificaciones',
    subtitle: 'Proyectos de alto impacto',
    description:
      'Edificaciones innovadoras con arquitectura de vanguardia. Creamos espacios únicos que definen el paisaje urbano y superan expectativas.',
    features: [
      'Edificios residenciales',
      'Centros comerciales',
      'Infraestructura',
      'Proyectos mixtos',
      'Llave en mano',
    ],
    featured: true,
    gridClass: 'crk-services__card--featured',
  },
  {
    id: 3,
    number: '03',
    icon: Zap,
    title: 'Obras Menores',
    subtitle: 'Soluciones rápidas',
    description:
      'Transformamos espacios con trabajos especializados. Electricidad, gasfitería, pintura y más con calidad premium.',
    features: [
      'Electricidad',
      'Gasfitería',
      'Pintura',
      'Tabiquería',
      'Cerámica',
    ],
    featured: false,
    gridClass: '',
  },
  {
    id: 4,
    number: '04',
    icon: Warehouse,
    title: 'Galpones',
    subtitle: 'Estructuras industriales',
    description:
      'Construcción de galpones y estructuras metálicas de alto rendimiento para la industria.',
    features: [
      'Galpones industriales',
      'Cierres perimetrales',
      'Bodegas',
      'Techumbre',
    ],
    featured: false,
    gridClass: '',
  },
  {
    id: 5,
    number: '05',
    icon: Paintbrush,
    title: 'Terminaciones',
    subtitle: 'El arte del detalle',
    description:
      'Acabados premium que transforman espacios ordinarios en extraordinarios.',
    features: [
      'Estuco veneziano',
      'Pulido de pisos',
      'Cielos',
      'Molduras',
      'Revestimientos',
    ],
    featured: false,
    gridClass: '',
  },
  {
    id: 6,
    number: '06',
    icon: HardHat,
    title: 'Obras Integrales',
    subtitle: 'Proyectos completos',
    description:
      'Gestión integral de construcción. Desde planificación hasta entrega con precisión absoluta.',
    features: [
      'Project management',
      'Control de calidad',
      'Coordinación',
      'Garantía total',
    ],
    featured: false,
    gridClass: '',
  },
]

const stats = [
  { number: '13+', label: 'Años de experiencia' },
  { number: '500+', label: 'Proyectos completados' },
  { number: '100%', label: 'Clientes satisfechos' },
  { number: '24/7', label: 'Soporte dedicado' },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // Showcase state
  const [currentImage, setCurrentImage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [isPlaying])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % projectImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + projectImages.length) % projectImages.length)

  return (
    <section id="servicios" className="crk-services" ref={sectionRef}>
      {/* Dramatic Background */}
      <div className="crk-services__bg">
        <div className="crk-services__bg-noise" />
        <motion.div
          className="crk-services__bg-grid"
          style={{ y: backgroundY }}
        />
        <div className="crk-services__bg-glow-1" />
        <div className="crk-services__bg-glow-2" />
        <div className="crk-services__bg-glow-3" />
        <div className="crk-services__bg-lines" />
        <div className="crk-services__bg-shape crk-services__bg-shape--1" />
        <div className="crk-services__bg-shape crk-services__bg-shape--2" />
      </div>

      {/* Intro Section */}
      <div className="crk-services__intro">
        <div className="crk-services__container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="crk-services__header"
          >
            <div className="crk-services__eyebrow">
              <span className="crk-services__eyebrow-line" />
              <span className="crk-services__eyebrow-text">Nuestros Servicios</span>
              <span className="crk-services__eyebrow-line" />
            </div>

            <h2 className="crk-services__title">
              Construimos
              <span className="crk-services__title-highlight">Excelencia</span>
            </h2>

            <p className="crk-services__subtitle">
              Más de una década perfeccionando el arte de construir.
              Cada proyecto es una oportunidad de superar expectativas.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="crk-services__stats"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="crk-services__stat"
              >
                <div className="crk-services__stat-number">{stat.number}</div>
                <div className="crk-services__stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="crk-services__container">
        <motion.div
          className="crk-services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                  },
                },
              }}
              className={`crk-services__card ${service.gridClass}`}
            >
              {/* Background number */}
              <span className="crk-services__card-number">{service.number}</span>

              {/* Glow effect */}
              <div className="crk-services__card-glow" />

              {/* Shine effect */}
              <div className="crk-services__card-shine" />

              {/* Featured badge */}
              {service.featured && (
                <div className="crk-services__card-badge">
                  <Sparkles size={12} />
                  Destacado
                </div>
              )}

              {/* Content */}
              <div className="crk-services__card-content">
                <div className="crk-services__card-icon">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="crk-services__card-title">{service.title}</h3>
                <span className="crk-services__card-subtitle">{service.subtitle}</span>

                <p className="crk-services__card-description">
                  {service.description}
                </p>

                <div className="crk-services__card-features">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="crk-services__card-feature"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a href="#contacto" className="crk-services__card-footer">
                  <span className="crk-services__card-cta">
                    Cotizar servicio
                  </span>
                  <span className="crk-services__card-arrow">
                    <ArrowRight size={18} />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}

          {/* ===== SHOWCASE CARD - Nuestras Obras ===== */}
          <motion.article
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                },
              },
            }}
            className="crk-services__showcase"
          >
            {/* Background glow */}
            <div className="crk-services__showcase-glow" />

            {/* Header */}
            <div className="crk-services__showcase-header">
              <div className="crk-services__showcase-icon">
                <Images size={24} strokeWidth={1.5} />
              </div>
              <div className="crk-services__showcase-titles">
                <h3 className="crk-services__showcase-title">Nuestras Obras</h3>
                <span className="crk-services__showcase-subtitle">Proyectos que hablan por sí solos</span>
              </div>
              <div className="crk-services__showcase-counter">
                <span className="crk-services__showcase-current">{String(currentImage + 1).padStart(2, '0')}</span>
                <span className="crk-services__showcase-separator">/</span>
                <span className="crk-services__showcase-total">{String(projectImages.length).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="crk-services__showcase-carousel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="crk-services__showcase-image-wrapper"
                >
                  <img
                    src={projectImages[currentImage].src}
                    alt={projectImages[currentImage].title}
                    className="crk-services__showcase-image"
                  />
                  <div className="crk-services__showcase-image-overlay" />
                </motion.div>
              </AnimatePresence>

              {/* Image info overlay */}
              <div className="crk-services__showcase-info">
                <motion.span
                  key={`cat-${currentImage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="crk-services__showcase-category"
                >
                  {projectImages[currentImage].category}
                </motion.span>
                <motion.h4
                  key={`title-${currentImage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="crk-services__showcase-image-title"
                >
                  {projectImages[currentImage].title}
                </motion.h4>
              </div>

              {/* Navigation */}
              <div className="crk-services__showcase-nav">
                <button
                  onClick={prevImage}
                  className="crk-services__showcase-btn"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="crk-services__showcase-btn crk-services__showcase-btn--play"
                  aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button
                  onClick={nextImage}
                  className="crk-services__showcase-btn"
                  aria-label="Siguiente"
                >
                  <ChevronRightIcon size={20} />
                </button>
              </div>

              {/* Progress dots */}
              <div className="crk-services__showcase-dots">
                {projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`crk-services__showcase-dot ${idx === currentImage ? 'crk-services__showcase-dot--active' : ''}`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="crk-services__showcase-thumbs">
              {projectImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`crk-services__showcase-thumb ${idx === currentImage ? 'crk-services__showcase-thumb--active' : ''}`}
                >
                  <img src={img.src} alt={img.title} />
                </button>
              ))}
            </div>
          </motion.article>
        </motion.div>

        {/* CTA Section */}
        <div className="crk-services__cta-section">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="crk-services__cta"
          >
            <div className="crk-services__cta-pattern" />

            <div className="crk-services__cta-content">
              <h3 className="crk-services__cta-title">
                ¿Listo para transformar tu espacio?
              </h3>
              <p className="crk-services__cta-text">
                Conversemos sobre cómo podemos hacer realidad tu visión.
                Cotización personalizada sin compromiso.
              </p>
            </div>

            <motion.a
              href="#contacto"
              className="crk-services__cta-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Solicitar Cotización</span>
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
