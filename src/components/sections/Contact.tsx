import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  ArrowRight,
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Llámanos',
    content: '+56 9 5879 8214',
    description: 'Atención directa e inmediata',
    link: 'tel:+56958798214',
    primary: true,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '+56 9 5879 8214',
    description: 'Escríbenos ahora',
    link: 'https://wa.me/56958798214?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto',
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contacto@construccioneselcracker.cl',
    description: 'Respuesta en 24 hrs',
    link: 'mailto:contacto@construccioneselcracker.cl',
    primary: false,
  },
  {
    icon: Mail,
    title: 'Email Secundario',
    content: 'romel.aranda.p@gmail.com',
    description: 'Correo alternativo',
    link: 'mailto:romel.aranda.p@gmail.com',
    primary: false,
  },
]

const infoItems = [
  {
    icon: Clock,
    title: 'Horario de Atención',
    content: 'Domingo a Domingo',
    description: 'Disponibles todos los días',
  },
  {
    icon: MapPin,
    title: 'Cobertura',
    content: 'Santiago y Región Metropolitana',
    description: 'Servicio a domicilio',
  },
]

const services = [
  'Construcción General',
  'Remodelación',
  'Ampliación',
  'Terminaciones',
  'Mantención',
  'Obras Menores',
]

export function Contact() {
  return (
    <section id="contacto" className="crk-contact">
      {/* Background */}
      <div className="crk-contact__bg">
        <div className="crk-contact__bg-gradient" />
        <div className="crk-contact__bg-pattern" />
        <div className="crk-contact__bg-accent" />
      </div>

      <div className="crk-contact__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="crk-contact__header"
        >
          <div className="crk-contact__eyebrow">
            <span className="crk-contact__eyebrow-icon">
              <Phone size={16} />
            </span>
            <span className="crk-contact__eyebrow-text">Contacto Directo</span>
          </div>

          <h2 className="crk-contact__title">
            ¿Listo para
            <span className="crk-contact__title-highlight"> construir?</span>
          </h2>

          <p className="crk-contact__subtitle">
            Contáctanos directamente. Sin intermediarios, sin esperas.
            Atención personalizada todos los días.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="crk-contact__layout">
          {/* Left Side - Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="crk-contact__direct"
          >
            {/* Primary Contact Buttons */}
            <div className="crk-contact__buttons">
              {contactMethods.filter(m => m.primary).map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.title === 'WhatsApp' ? '_blank' : undefined}
                  rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`crk-contact__btn crk-contact__btn--${method.title.toLowerCase()}`}
                >
                  <div className="crk-contact__btn-icon">
                    <method.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="crk-contact__btn-content">
                    <span className="crk-contact__btn-title">{method.title}</span>
                    <span className="crk-contact__btn-value">{method.content}</span>
                  </div>
                  <ArrowRight size={20} className="crk-contact__btn-arrow" />
                </motion.a>
              ))}
            </div>

            {/* Emails */}
            <div className="crk-contact__emails">
              {contactMethods.filter(m => !m.primary).map((method, index) => (
                <motion.a
                  key={method.content}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="crk-contact__email"
                >
                  <Mail size={20} strokeWidth={1.5} />
                  <span>{method.content}</span>
                </motion.a>
              ))}
            </div>

            {/* Info Items */}
            <div className="crk-contact__info-grid">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="crk-contact__info-item"
                >
                  <div className="crk-contact__info-icon">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="crk-contact__info-text">
                    <span className="crk-contact__info-label">{item.title}</span>
                    <span className="crk-contact__info-value">{item.content}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Services & Company */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="crk-contact__services-wrapper"
          >
            <div className="crk-contact__services-card">
              {/* Services Header */}
              <div className="crk-contact__services-header">
                <h3 className="crk-contact__services-title">
                  Nuestros Servicios
                </h3>
                <p className="crk-contact__services-subtitle">
                  Cotiza cualquiera de nuestros servicios sin compromiso
                </p>
              </div>

              {/* Services List */}
              <div className="crk-contact__services-list">
                {services.map((service, idx) => (
                  <div key={idx} className="crk-contact__service-tag">
                    {service}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="crk-contact__services-divider" />

              {/* Company Badge */}
              <div className="crk-contact__company">
                <div className="crk-contact__company-icon">
                  <Building2 size={24} strokeWidth={1.5} />
                </div>
                <div className="crk-contact__company-info">
                  <span className="crk-contact__company-name">Construcciones El Cracker</span>
                  <span className="crk-contact__company-legal">Romel Aranda Pastor - EIRL</span>
                </div>
              </div>

              {/* CTA Message */}
              <div className="crk-contact__cta-message">
                <p>
                  Llámanos o escríbenos por WhatsApp para una
                  <strong> cotización gratuita</strong> y sin compromiso.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
