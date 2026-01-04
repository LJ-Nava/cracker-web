import { motion } from 'framer-motion'
import { Compass, Shield, Clock, Award } from 'lucide-react'
import aboutImg from '../../assets/images/aboutus.jpeg'

const values = [
  {
    icon: Compass,
    title: 'Visión',
    description: 'Lideramos cada proyecto con claridad y propósito definido.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Construimos relaciones sólidas basadas en transparencia.',
  },
  {
    icon: Clock,
    title: 'Puntualidad',
    description: 'Respetamos tiempos y cumplimos cada compromiso.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Cada detalle refleja nuestro estándar de calidad.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="crk-about">
      {/* Fondo decorativo */}
      <div className="crk-about__bg-pattern" />

      <div className="crk-about__container">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="crk-about__header"
        >
          <span className="crk-about__label">Sobre Nosotros</span>
          <h2 className="crk-about__title">
            Una década construyendo
            <span className="crk-about__title-accent"> el futuro</span>
          </h2>
          <div className="crk-about__divider">
            <span />
          </div>
        </motion.div>

        {/* Contenido principal */}
        <div className="crk-about__content">
          {/* Columna izquierda - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="crk-about__image-wrapper"
          >
            <div className="crk-about__image-container">
              <img
                src={aboutImg}
                alt="Construcción profesional"
                className="crk-about__image"
              />
              {/* Overlay decorativo */}
              <div className="crk-about__image-overlay" />

              {/* Marco decorativo */}
              <div className="crk-about__image-frame" />
            </div>

            {/* Tarjeta de experiencia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="crk-about__experience-card"
            >
              <span className="crk-about__experience-number">10+</span>
              <span className="crk-about__experience-text">
                Años de<br />Experiencia
              </span>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="crk-about__text"
          >
            <p className="crk-about__intro">
              <strong>Romel Aranda Pastor Construcciones EIRL</strong> es una empresa
              chilena fundada en 2014, dedicada a transformar espacios con pasión,
              profesionalismo y un compromiso inquebrantable con la excelencia.
            </p>

            <p className="crk-about__description">
              Nuestro equipo de más de 50 profesionales trabaja incansablemente
              para materializar los sueños de nuestros clientes. Desde pequeñas
              remodelaciones hasta grandes proyectos de construcción, cada obra
              lleva nuestra firma de calidad.
            </p>

            <blockquote className="crk-about__quote">
              <p>"Construimos más que estructuras, construimos confianza."</p>
              <cite>— Romel Aranda, Fundador</cite>
            </blockquote>

            {/* Valores */}
            <div className="crk-about__values">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="crk-about__value"
                >
                  <div className="crk-about__value-icon">
                    <value.icon size={20} />
                  </div>
                  <div className="crk-about__value-content">
                    <h4 className="crk-about__value-title">{value.title}</h4>
                    <p className="crk-about__value-desc">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
