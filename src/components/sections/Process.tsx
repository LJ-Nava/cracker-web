import { motion } from 'framer-motion'
import { useRef } from 'react'
import {
  MessageSquare,
  ClipboardList,
  PenTool,
  Hammer,
  CheckCircle2,
  Key,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consulta Inicial',
    subtitle: 'Escuchamos tu visión',
    description: 'Nos reunimos contigo para entender tu proyecto, necesidades y expectativas. Sin compromiso.',
    details: ['Visita al sitio', 'Análisis de requerimientos', 'Presupuesto estimado'],
    duration: '1-2 días',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planificación',
    subtitle: 'Diseñamos la estrategia',
    description: 'Elaboramos un plan detallado con cronograma, materiales y costos transparentes.',
    details: ['Cronograma detallado', 'Selección de materiales', 'Presupuesto final'],
    duration: '3-5 días',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Diseño',
    subtitle: 'Visualiza tu proyecto',
    description: 'Creamos diseños y planos que dan vida a tu visión antes de comenzar la obra.',
    details: ['Planos técnicos', 'Renders 3D', 'Ajustes y aprobación'],
    duration: '5-10 días',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Ejecución',
    subtitle: 'Construimos con excelencia',
    description: 'Nuestro equipo de profesionales ejecuta la obra con los más altos estándares de calidad.',
    details: ['Supervisión diaria', 'Reportes de avance', 'Control de calidad'],
    duration: 'Según proyecto',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Control de Calidad',
    subtitle: 'Revisamos cada detalle',
    description: 'Inspección exhaustiva para garantizar que todo cumpla con nuestros estándares.',
    details: ['Checklist de calidad', 'Pruebas técnicas', 'Correcciones finales'],
    duration: '2-3 días',
  },
  {
    number: '06',
    icon: Key,
    title: 'Entrega',
    subtitle: 'Tu proyecto, realizado',
    description: 'Te entregamos las llaves de tu proyecto terminado, con garantía y soporte post-venta.',
    details: ['Entrega formal', 'Garantía escrita', 'Soporte continuo'],
    duration: 'Día final',
  },
]

export function Process() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section id="proceso" className="crk-process" ref={containerRef}>
      {/* Background */}
      <div className="crk-process__bg">
        <div className="crk-process__bg-gradient" />
        <div className="crk-process__bg-pattern" />
        <div className="crk-process__bg-glow" />
      </div>

      <div className="crk-process__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="crk-process__header"
        >
          <div className="crk-process__eyebrow">
            <span className="crk-process__eyebrow-line" />
            <span className="crk-process__eyebrow-text">Cómo Trabajamos</span>
            <span className="crk-process__eyebrow-line" />
          </div>

          <h2 className="crk-process__title">
            Nuestro <span className="crk-process__title-highlight">Proceso</span>
          </h2>

          <p className="crk-process__subtitle">
            Un método probado que garantiza resultados excepcionales.
            Transparencia y comunicación en cada paso.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="crk-process__timeline"
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
          {/* Connection Line */}
          <div className="crk-process__line" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                  },
                },
              }}
              className={`crk-process__step ${index % 2 === 0 ? 'crk-process__step--left' : 'crk-process__step--right'}`}
            >
              {/* Step Number Circle */}
              <div className="crk-process__step-marker">
                <div className="crk-process__step-number">{step.number}</div>
                <div className="crk-process__step-pulse" />
              </div>

              {/* Step Card */}
              <div className="crk-process__step-card">
                {/* Icon */}
                <div className="crk-process__step-icon">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="crk-process__step-content">
                  <span className="crk-process__step-subtitle">{step.subtitle}</span>
                  <h3 className="crk-process__step-title">{step.title}</h3>
                  <p className="crk-process__step-description">{step.description}</p>

                  {/* Details */}
                  <ul className="crk-process__step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="crk-process__step-detail">
                        <span className="crk-process__step-detail-dot" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Duration Badge */}
                  <div className="crk-process__step-duration">
                    <Sparkles size={12} />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="crk-process__step-corner" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="crk-process__cta"
        >
          <div className="crk-process__cta-content">
            <h3 className="crk-process__cta-title">
              ¿Listo para comenzar?
            </h3>
            <p className="crk-process__cta-text">
              El primer paso es una conversación. Cuéntanos sobre tu proyecto.
            </p>
          </div>
          <a href="#contacto" className="crk-process__cta-btn">
            <span>Agendar Consulta Gratis</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
