import { motion } from 'framer-motion'
import { Star, Quote, MessageSquare } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    initials: 'MG',
    name: 'María González',
    role: 'Propietaria',
    location: 'Las Condes',
    content:
      'Excelente trabajo en la remodelación de nuestra cocina. El equipo fue muy profesional y cumplieron con todos los plazos. Totalmente recomendados.',
    rating: 5,
    project: 'Remodelación',
  },
  {
    id: 2,
    initials: 'CM',
    name: 'Carlos Mendoza',
    role: 'Empresario',
    location: 'Providencia',
    content:
      'Construyeron nuestras oficinas en tiempo récord y con una calidad impecable. La atención al cliente es de primera clase.',
    rating: 5,
    project: 'Construcción',
  },
  {
    id: 3,
    initials: 'AP',
    name: 'Ana Pérez',
    role: 'Propietaria',
    location: 'Ñuñoa',
    content:
      'La ampliación del segundo piso quedó perfecta. Muy atentos a los detalles y siempre dispuestos a resolver cualquier duda.',
    rating: 5,
    project: 'Ampliación',
  },
  {
    id: 4,
    initials: 'RV',
    name: 'Roberto Vargas',
    role: 'Gerente',
    location: 'Vitacura',
    content:
      'Profesionales de primera. Entregaron el proyecto antes del plazo y superaron nuestras expectativas en calidad.',
    rating: 5,
    project: 'Edificación',
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="crk-testimonials">
      {/* Background */}
      <div className="crk-testimonials__bg">
        <div className="crk-testimonials__bg-pattern" />
        <div className="crk-testimonials__bg-line" />
      </div>

      <div className="crk-testimonials__container">
        <div className="crk-testimonials__layout">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="crk-testimonials__header"
          >
            <div className="crk-testimonials__eyebrow">
              <span className="crk-testimonials__eyebrow-icon">
                <MessageSquare size={16} />
              </span>
              <span className="crk-testimonials__eyebrow-text">Testimonios</span>
            </div>

            <h2 className="crk-testimonials__title">
              Lo que dicen
              <span className="crk-testimonials__title-highlight"> nuestros clientes</span>
            </h2>

            <p className="crk-testimonials__subtitle">
              La satisfacción de quienes confían en nosotros es nuestra mejor carta de presentación.
            </p>

            {/* Rating Summary */}
            <div className="crk-testimonials__rating">
              <span className="crk-testimonials__rating-score">5.0</span>
              <div className="crk-testimonials__rating-info">
                <div className="crk-testimonials__rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="crk-testimonials__rating-text">
                  +100 clientes satisfechos
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Testimonial Cards */}
          <motion.div
            className="crk-testimonials__cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                  },
                }}
                className="crk-testimonials__card"
              >
                {/* Header */}
                <div className="crk-testimonials__card-header">
                  <Quote size={28} className="crk-testimonials__card-quote" />
                  <div className="crk-testimonials__card-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="crk-testimonials__card-content">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="crk-testimonials__card-author">
                  <div className="crk-testimonials__card-avatar">
                    {testimonial.initials}
                  </div>
                  <div className="crk-testimonials__card-info">
                    <h4 className="crk-testimonials__card-name">{testimonial.name}</h4>
                    <span className="crk-testimonials__card-role">
                      {testimonial.role} • {testimonial.location}
                    </span>
                  </div>
                  <span className="crk-testimonials__card-badge">
                    {testimonial.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
