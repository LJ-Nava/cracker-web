import { Phone, Mail, MapPin, Clock, Building2, MessageCircle, ArrowUpRight } from 'lucide-react'

const services = [
  'Construcción General',
  'Remodelaciones',
  'Ampliaciones',
  'Terminaciones',
  'Mantención',
  'Obras Menores',
]

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Contacto', href: '#contacto' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="crk-footer">
      {/* Top Accent Line */}
      <div className="crk-footer__accent" />

      <div className="crk-footer__container">
        {/* Main Content */}
        <div className="crk-footer__grid">
          {/* Company Info */}
          <div className="crk-footer__brand">
            <div className="crk-footer__logo">
              <div className="crk-footer__logo-icon">
                <Building2 size={22} strokeWidth={1.5} />
              </div>
              <div className="crk-footer__logo-text">
                <span className="crk-footer__logo-name">El Cracker</span>
                <span className="crk-footer__logo-tagline">Construcciones</span>
              </div>
            </div>
            <p className="crk-footer__description">
              Construcciones El Cracker - Romel Aranda Pastor EIRL.
              Construyendo con calidad, compromiso y excelencia en Santiago y toda la Región Metropolitana.
            </p>
            {/* Direct Contact */}
            <div className="crk-footer__direct">
              <a href="tel:+56958798214" className="crk-footer__direct-btn crk-footer__direct-btn--phone">
                <Phone size={18} />
                <span>+56 9 5879 8214</span>
              </a>
              <a
                href="https://wa.me/56958798214?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="crk-footer__direct-btn crk-footer__direct-btn--whatsapp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="crk-footer__section">
            <h4 className="crk-footer__title">Servicios</h4>
            <ul className="crk-footer__list">
              {services.map((service) => (
                <li key={service}>
                  <a href="#servicios" className="crk-footer__link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="crk-footer__section">
            <h4 className="crk-footer__title">Navegación</h4>
            <ul className="crk-footer__list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="crk-footer__link">
                    {link.name}
                    <ArrowUpRight size={12} className="crk-footer__link-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="crk-footer__section">
            <h4 className="crk-footer__title">Contacto</h4>
            <ul className="crk-footer__contact">
              <li>
                <Phone size={16} />
                <div>
                  <span className="crk-footer__contact-value">+56 9 5879 8214</span>
                  <span className="crk-footer__contact-label">Llámanos directamente</span>
                </div>
              </li>
              <li>
                <Mail size={16} />
                <div>
                  <span className="crk-footer__contact-value">contacto@construccioneselcracker.cl</span>
                </div>
              </li>
              <li>
                <Clock size={16} />
                <div>
                  <span className="crk-footer__contact-value">Domingo a Domingo</span>
                  <span className="crk-footer__contact-label">Atención todos los días</span>
                </div>
              </li>
              <li>
                <MapPin size={16} />
                <div>
                  <span className="crk-footer__contact-value">Santiago, Chile</span>
                  <span className="crk-footer__contact-label">Región Metropolitana</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="crk-footer__bottom">
          <p className="crk-footer__copyright">
            © {currentYear} Construcciones El Cracker - Romel Aranda Pastor EIRL. Todos los derechos reservados.
          </p>
          <p className="crk-footer__credits">
            Construyendo sueños en Chile
          </p>
        </div>
      </div>
    </footer>
  )
}
