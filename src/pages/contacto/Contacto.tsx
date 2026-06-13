import {
  ArrowRight,
  Briefcase,
  Braces,
  CalendarDays,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Home,
  Mail,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import './Contacto.css';

const whatsappNumber = '51963026232';
const whatsappMessage =
  'Hola Yahaira, vi tu portafolio y me gustaría conversar contigo sobre un proyecto.';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/perfil' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' },
];

const sideItems = [
  { label: 'Inicio', path: '/', icon: Home },
  { label: 'Perfil', path: '/perfil', icon: User },
  { label: 'Proyectos', path: '/proyectos', icon: Briefcase },
  { label: 'Servicios', path: '/servicios', icon: Code2 },
  { label: 'Contacto', path: '/contacto', icon: Mail },
];

const contactCards = [
  {
    label: 'Teléfono',
    value: '963 026 232',
    href: 'tel:+51963026232',
    icon: PhoneCall,
  },
  {
    label: 'Correo electrónico',
    value: 'yaimet04@outlook.com',
    href: 'mailto:yaimet04@outlook.com',
    icon: Mail,
  },
];

const availabilityItems = [
  {
    title: 'Disponibilidad',
    text: 'Inmediata',
  },
  {
    title: 'Modalidad',
    text: 'Remota / Híbrida / Presencial',
  },
  {
    title: 'Proyectos',
    text: 'Nacionales e Internacionales',
  },
];

const socialItems = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yahaira-aimet-loayza-villalobos-00b06335b/',
    logo: '/logos/link.png',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/yahairaLoayza',
    logo: '/logos/github.png',
  },
];  


function ContactHeader() {
  return (
    <header className="contact-header">
      <Link to="/" className="contact-logo-link" aria-label="Ir al inicio">
        <img src="/logo yaha.png" alt="Logo Yahaira Loayza" className="contact-logo" />
      </Link>

      <nav className="contact-navbar" aria-label="Navegación principal">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="contact-top-status"
      >
        <span />
        Disponible para nuevos proyectos
      </a>
    </header>
  );
}

function ContactSideDock() {
  return (
    <aside className="contact-side-dock" aria-label="Navegación lateral">
      <div className="contact-dock-line" />

      {sideItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.label}
            to={item.path}
            aria-label={item.label}
            className={({ isActive }) => `contact-dock-item ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={21} strokeWidth={1.8} />
          </NavLink>
        );
      })}

      <div className="contact-dock-line bottom" />
    </aside>
  );
}

function ContactMotionVisual() {
  return (
    <div className="contact-motion-visual">
      <div className="motion-bg-orbit orbit-one" />
      <div className="motion-bg-orbit orbit-two" />
      <div className="motion-bg-orbit orbit-three" />

      <div className="motion-glow one" />
      <div className="motion-glow two" />

      <span className="motion-dot one" />
      <span className="motion-dot two" />
      <span className="motion-dot three" />

      <div className="motion-code-card main">
        <div className="motion-code-header">
          <span />
          <span />
          <span />
        </div>

        <div className="motion-code-lines">
          <p><span className="keyword">const</span> proyecto = {'{'}</p>
          <p>&nbsp;&nbsp;nombre: <span className="string">'Portafolio'</span>,</p>
          <p>&nbsp;&nbsp;stack: [<span className="string">'React'</span>, <span className="string">'TypeScript'</span>],</p>
          <p>&nbsp;&nbsp;enfoque: <span className="string">'UX/UI + desarrollo'</span></p>
          <p>{'}'}</p>
        </div>
      </div>

      <div className="motion-mini-card card-react">
        <Code2 size={20} />
        <span>React</span>
      </div>

      <div className="motion-mini-card card-ts">
        <Braces size={20} />
        <span>Python</span>
      </div>

      <div className="motion-mini-card card-db">
        <Database size={20} />
        <span>Data</span>
      </div>

      <div className="motion-mini-card card-ai">
        <Cpu size={20} />
        <span>Automatización</span>
      </div>

      <div className="motion-mini-card card-web">
        <Globe size={20} />
        <span>Web</span>
      </div>

      <div className="motion-badge badge-one">UI / UX</div>
      <div className="motion-badge badge-two">Odoo ERP</div>
      <div className="motion-badge badge-three">IA</div>
    </div>
  );
}

function ContactInfoCards() {
  return (
    <section className="contact-info-list">
      {contactCards.map((item) => {
        const Icon = item.icon;

        return (
          <a key={item.label} href={item.href} className="contact-info-card">
            <div className="contact-info-icon">
              <Icon size={31} strokeWidth={1.6} />
            </div>

            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>

            <div className="contact-info-arrow">
              <ArrowRight size={20} />
            </div>
          </a>
        );
      })}
    </section>
  );
}

function SocialCard() {
  return (
    <section className="contact-social-card">
      <span>Sígueme en</span>

      <div className="contact-social-grid">
        {socialItems.map((item) => (
        <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.title}
        >
            <img
            src={item.logo}
            alt={item.title}
            className="contact-social-logo"
            loading="lazy"
            />
        </a>
        ))}
      </div>
    </section>
  );
}

function ProjectPreviewCard() {
  return (
    <section className="contact-project-preview">
      <p>Diseño • Desarrollo • Experiencia</p>

      <div className="contact-preview-device">
        <aside>
          <span />
          <span className="active" />
          <span />
          <span />
          <span />
        </aside>

        <main>
          <div className="preview-top">
            <span />
            <span />
          </div>

          <div className="preview-stats">
            <span />
            <span />
            <span />
          </div>

          <div className="preview-chart">
            <svg viewBox="0 0 260 90">
              <path d="M4 70 C35 55 52 60 76 48 C102 34 120 78 152 44 C178 17 188 50 220 35 C240 25 248 28 256 19" />
              <path
                className="fill"
                d="M4 70 C35 55 52 60 76 48 C102 34 120 78 152 44 C178 17 188 50 220 35 C240 25 248 28 256 19 L256 90 L4 90 Z"
              />
            </svg>
          </div>
        </main>
      </div>

      <div className="contact-preview-footer">
        <span>Soluciones digitales centradas en las personas</span>
        <Link to="/proyectos">
          <ExternalLink size={18} />
        </Link>
      </div>
    </section>
  );
}

function WhatsAppCard() {
  return (
    <section className="whatsapp-contact-card">
      <div className="whatsapp-card-glow" />

      <div className="whatsapp-card-header">
        <span>Hablemos de tu próximo proyecto ✦</span>
        <h2>¡Escríbeme!</h2>
        <p>
          Cuéntame sobre tu idea, sistema, prototipo, automatización o proyecto
          digital. Te responderé directamente por WhatsApp.
        </p>
      </div>

      <div className="whatsapp-profile-box">
        <div className="whatsapp-avatar">
        <img
            src="/logos/whatsapp.png"
            alt="WhatsApp"
            className="whatsapp-avatar-logo"
        />
        </div>

        <div>
          <span>WhatsApp personal</span>
          <strong>+51 963 026 232</strong>
        </div>
      </div>

      <div className="whatsapp-benefits">
        <p>
          <CheckCircle2 size={17} />
          Atención para proyectos digitales, colaboraciones y oportunidades.
        </p>
        <p>
          <CheckCircle2 size={17} />
          Ideal para conversar sobre prototipos, sistemas web, Odoo o automatizaciones.
        </p>
        <p>
          <CheckCircle2 size={17} />
          Respuesta directa y comunicación más rápida.
        </p>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-main-button"
      >
        Escribirme por WhatsApp
        <span>
          <ArrowRight size={23} />
        </span>
      </a>

      <div className="whatsapp-secure-note">
        <ShieldCheck size={16} />
        Tu información será tratada con confidencialidad.
      </div>
    </section>
  );
}

function AvailabilityBar() {
  return (
    <section className="contact-availability-bar">
      <div className="availability-intro">
        <CalendarDays size={34} />
        <p>
          Actualmente disponible para proyectos freelance, colaboraciones y
          oportunidades de crecimiento profesional.
        </p>
      </div>

      {availabilityItems.map((item) => (
        <article key={item.title}>
          <CheckCircle2 size={28} />
          <div>
            <span>{item.title}</span>
            <strong>{item.text}</strong>
          </div>
        </article>
      ))}
    </section>
  );
}

export default function Contacto() {
  return (
    <main className="contact-page">
      <div className="contact-ambient one" />
      <div className="contact-ambient two" />
      <div className="contact-dot-pattern" />

      <img src="/planta.png" alt="" className="contact-corner-plant" />

      <ContactHeader />
      <ContactSideDock />

      <section className="contact-hero-layout">
        <section className="contact-copy">
          <p className="contact-kicker">Tecnología • Diseño • Innovación</p>

          <p className="contact-script">Conectemos y</p>
          <h1>
            Trabajemos
            <span>Juntos</span>
          </h1>

          <p className="contact-description">
            Estoy disponible para <strong>proyectos</strong>,{' '}
            <strong>colaboraciones</strong> y <strong>oportunidades</strong> que
            generen impacto a través de la tecnología y el diseño.
          </p>

          <ContactInfoCards />
          <SocialCard />
        </section>

        <section className="contact-center">
            <ContactMotionVisual />
        </section>

        <WhatsAppCard />
      </section>

      <AvailabilityBar />
    </main>
  );
}