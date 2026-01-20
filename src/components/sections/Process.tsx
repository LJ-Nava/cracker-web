import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  MessageSquare,
  ClipboardList,
  PenTool,
  Hammer,
  CheckCircle2,
  Key,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consulta Inicial',
    subtitle: 'Escuchamos tu visión',
    description: 'Nos reunimos contigo para entender tu proyecto, necesidades y expectativas. Sin compromiso.',
    details: ['Visita al sitio', 'Análisis de requerimientos', 'Presupuesto estimado'],
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planificación',
    subtitle: 'Diseñamos la estrategia',
    description: 'Elaboramos un plan detallado con cronograma, materiales y costos transparentes.',
    details: ['Cronograma detallado', 'Selección de materiales', 'Presupuesto final'],
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Diseño',
    subtitle: 'Visualiza tu proyecto',
    description: 'Creamos diseños y planos que dan vida a tu visión antes de comenzar la obra.',
    details: ['Planos técnicos', 'Renders 3D', 'Ajustes y aprobación'],
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Ejecución',
    subtitle: 'Construimos con excelencia',
    description: 'Nuestro equipo de profesionales ejecuta la obra con los más altos estándares de calidad.',
    details: ['Supervisión diaria', 'Reportes de avance', 'Control de calidad'],
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Control de Calidad',
    subtitle: 'Revisamos cada detalle',
    description: 'Inspección exhaustiva para garantizar que todo cumpla con nuestros estándares.',
    details: ['Checklist de calidad', 'Pruebas técnicas', 'Correcciones finales'],
  },
  {
    number: '06',
    icon: Key,
    title: 'Entrega',
    subtitle: 'Tu proyecto, realizado',
    description: 'Te entregamos las llaves de tu proyecto terminado, con garantía y soporte post-venta.',
    details: ['Entrega formal', 'Garantía escrita', 'Soporte continuo'],
  },
]

export function Process() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const goToStep = (index: number) => {
    setCurrentStep(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextStep, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const step = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <section id="proceso" className="crk-process-v2">
      {/* Background */}
      <div className="crk-process-v2__bg">
        <div className="crk-process-v2__bg-gradient" />
      </div>

      <div className="crk-process-v2__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="crk-process-v2__header"
        >
          <div className="crk-process-v2__eyebrow">
            <span className="crk-process-v2__eyebrow-line" />
            <span className="crk-process-v2__eyebrow-text">Cómo Trabajamos</span>
            <span className="crk-process-v2__eyebrow-line" />
          </div>

          <h2 className="crk-process-v2__title">
            Nuestro <span className="crk-process-v2__title-highlight">Proceso</span>
          </h2>

          <p className="crk-process-v2__subtitle">
            Un método probado que garantiza resultados excepcionales.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="crk-process-v2__progress-container"
        >
          <div className="crk-process-v2__progress-steps">
            {steps.map((s, index) => (
              <button
                key={s.number}
                className={`crk-process-v2__progress-step ${index === currentStep ? 'crk-process-v2__progress-step--active' : ''} ${index < currentStep ? 'crk-process-v2__progress-step--completed' : ''}`}
                onClick={() => goToStep(index)}
              >
                <span className="crk-process-v2__progress-step-number">{s.number}</span>
                <span className="crk-process-v2__progress-step-title">{s.title}</span>
              </button>
            ))}
          </div>
          <div className="crk-process-v2__progress-bar">
            <motion.div
              className="crk-process-v2__progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {/* Carousel Content */}
        <div className="crk-process-v2__carousel">
          {/* Navigation Left */}
          <button
            className="crk-process-v2__nav crk-process-v2__nav--prev"
            onClick={prevStep}
            aria-label="Paso anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Step Content */}
          <div className="crk-process-v2__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="crk-process-v2__step"
              >
                {/* Icon */}
                <div className="crk-process-v2__step-icon">
                  <step.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Info */}
                <div className="crk-process-v2__step-info">
                  <span className="crk-process-v2__step-number">{step.number}</span>
                  <span className="crk-process-v2__step-subtitle">{step.subtitle}</span>
                  <h3 className="crk-process-v2__step-title">{step.title}</h3>
                  <p className="crk-process-v2__step-description">{step.description}</p>

                  {/* Details */}
                  <ul className="crk-process-v2__step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="crk-process-v2__step-detail">
                        <CheckCircle2 size={14} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Right */}
          <button
            className="crk-process-v2__nav crk-process-v2__nav--next"
            onClick={nextStep}
            aria-label="Siguiente paso"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="crk-process-v2__cta"
        >
          <a href="#contacto" className="crk-process-v2__cta-btn">
            <span>Agendar Consulta Gratis</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
