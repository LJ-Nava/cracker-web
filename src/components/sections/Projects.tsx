import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const categories = ['Todos', 'Construcción', 'Remodelación', 'Ampliación']

const projects = [
  {
    id: 1,
    title: 'Casa Familiar Las Condes',
    category: 'Construcción',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 2,
    title: 'Remodelación Departamento',
    category: 'Remodelación',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 3,
    title: 'Ampliación Segundo Piso',
    category: 'Ampliación',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 4,
    title: 'Oficinas Corporativas',
    category: 'Construcción',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 5,
    title: 'Casa de Campo',
    category: 'Construcción',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  },
  {
    id: 6,
    title: 'Cocina Integral',
    category: 'Remodelación',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-primary text-sm tracking-elegant uppercase mb-4">
            Portafolio
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-dark mb-6">
            Proyectos que hablan por nosotros
          </h2>
          <p className="text-muted text-lg">
            Cada proyecto es una historia de dedicación y excelencia.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-muted hover:text-primary border border-sand'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <ArrowUpRight size={20} className="text-white" />
                      </div>
                      <p className="text-white font-serif text-xl">{project.title}</p>
                      <p className="text-white/70 text-sm tracking-wider uppercase mt-1">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-block px-10 py-4 border border-dark text-dark text-sm font-medium tracking-wider hover:bg-dark hover:text-white transition-all duration-300"
          >
            VER TODOS LOS PROYECTOS
          </a>
        </motion.div>
      </div>
    </section>
  )
}
