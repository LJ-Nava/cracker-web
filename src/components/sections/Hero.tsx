import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Building2, Award, Users, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

// Importar imágenes
import obras1 from '../../assets/images/obras1.jpeg'
import obras2 from '../../assets/images/obras2.jpeg'
import obras3 from '../../assets/images/obras3.jpeg'
import obras4 from '../../assets/images/obras4.jpeg'
import obras5 from '../../assets/images/obras5premium.jpeg'
import obras6 from '../../assets/images/obras6.jpeg'
import obras7 from '../../assets/images/obras7.jpeg'

// Imágenes de fondo HD externas
const backgroundImages = [
  'https://img.freepik.com/foto-gratis/trabajadores-examinando-obra_1122-970.jpg',
  'https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWNjaSVDMyVCM24lMjBkZSUyMGVkaWZpY2lvc3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3RydWNjaSVDMyVCM24lMjBkZSUyMGVkaWZpY2lvc3xlbnwwfHwwfHx8MA%3D%3D',
  'https://wallpapers.com/images/featured/fondos-de-edificios-3hw6cpif81sbnjru.jpg',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=3000&q=80',
]

// Datos de los slides
const slides = [
  {
    id: 1,
    image: obras1,
    background: backgroundImages[0],
    category: 'Construcción Residencial',
    title: 'Excelencia en Cada Proyecto',
    description: 'Transformamos espacios con dedicación y profesionalismo. Cada obra refleja nuestro compromiso con la calidad y la satisfacción del cliente.',
  },
  {
    id: 2,
    image: obras2,
    background: backgroundImages[1],
    category: 'Obras Civiles',
    title: 'Innovación y Experiencia',
    description: 'Más de 13 años construyendo sueños. Combinamos técnicas tradicionales con innovación para resultados excepcionales.',
  },
  {
    id: 3,
    image: obras3,
    background: backgroundImages[2],
    category: 'Remodelaciones',
    title: 'Renovamos tu Espacio',
    description: 'Damos nueva vida a tus ambientes. Desde pequeñas remodelaciones hasta transformaciones completas.',
  },
  {
    id: 4,
    image: obras4,
    background: backgroundImages[3],
    category: 'Proyectos Comerciales',
    title: 'Soluciones Integrales',
    description: 'Construimos espacios que impulsan tu negocio. Diseño funcional y estética moderna en cada proyecto.',
  },
  {
    id: 5,
    image: obras5,
    background: backgroundImages[4],
    category: 'Proyecto Premium',
    title: 'Calidad Superior',
    description: 'Proyectos de alta gama con los mejores materiales y acabados. La excelencia es nuestro estándar.',
  },
]

const stats = [
  { number: '500+', label: 'Proyectos', icon: Building2 },
  { number: '13+', label: 'Años', icon: Award },
  { number: '50+', label: 'Expertos', icon: Users },
]

// Imágenes para el carrusel visual (miniaturas)
const carouselImages = [obras1, obras2, obras3, obras4, obras5, obras6, obras7]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Reanudar autoplay después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const currentData = slides[currentSlide]

  return (
    <section id="inicio" className="crk-hero-carousel">
      {/* Fondo con transición suave crossfade */}
      <div className="crk-hero-carousel__bg-container">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="crk-hero-carousel__bg"
            style={{ backgroundImage: `url(${currentData.background})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
        </AnimatePresence>
        <div className="crk-hero-carousel__bg-overlay" />
      </div>

      {/* Contenido principal */}
      <div className="crk-hero-carousel__content">
        {/* Lado izquierdo - Texto */}
        <div className="crk-hero-carousel__left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="crk-hero-carousel__text-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Categoría */}
              <div className="crk-hero-carousel__category">
                <span className="crk-hero-carousel__category-dot" />
                {currentData.category}
              </div>

              {/* Título */}
              <h1 className="crk-hero-carousel__title">
                {currentData.title}
              </h1>

              {/* Descripción */}
              <p className="crk-hero-carousel__description">
                {currentData.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Botones (fijos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="crk-hero-carousel__buttons"
          >
            <a href="#servicios" className="crk-hero-carousel__btn-primary">
              Descubrir Más
              <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="crk-hero-carousel__btn-secondary">
              Cotizar Proyecto
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="crk-hero-carousel__stats"
          >
            {stats.map((stat, index) => (
              <div key={index} className="crk-hero-carousel__stat">
                <stat.icon size={20} className="crk-hero-carousel__stat-icon" />
                <span className="crk-hero-carousel__stat-number">{stat.number}</span>
                <span className="crk-hero-carousel__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Lado derecho - Carrusel de miniaturas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="crk-hero-carousel__right"
        >
          <div className="crk-hero-carousel__thumbnails">
            {/* Imagen principal del carrusel */}
            <div className="crk-hero-carousel__main-thumb">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={carouselImages[currentSlide]}
                  alt={currentData.title}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            {/* Miniaturas siguientes */}
            <div className="crk-hero-carousel__next-thumbs">
              {[1, 2].map((offset) => {
                const index = (currentSlide + offset) % carouselImages.length
                return (
                  <motion.div
                    key={`thumb-${offset}`}
                    className="crk-hero-carousel__thumb"
                    onClick={() => goToSlide(index % slides.length)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={carouselImages[index]} alt={`Proyecto ${index + 1}`} />
                    <div className="crk-hero-carousel__thumb-overlay">
                      <span className="crk-hero-carousel__thumb-label">
                        {slides[index % slides.length]?.category || 'Proyecto'}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="crk-hero-carousel__nav">
            <button
              className="crk-hero-carousel__nav-btn"
              onClick={prevSlide}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="crk-hero-carousel__nav-btn"
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Indicadores (dots) */}
      <div className="crk-hero-carousel__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`crk-hero-carousel__dot ${index === currentSlide ? 'crk-hero-carousel__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="crk-hero-carousel__scroll"
      >
        <span className="crk-hero-carousel__scroll-text">Descubre más</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="crk-hero-carousel__scroll-icon"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}
