import {
  ArrowRight,
  ChevronRight,
  Code2,
  Quote,
  Search,
  Bell,
  ShieldCheck,
} from 'lucide-react';

import {
  contactItems,
  navItems,
  personalInfo,
  projectStats,
  technologies,
} from '../../data/portfolio';
import { Link } from 'react-router-dom';

import './Inicio.css';

function SideDock() {
  return (
    <aside className="side-dock" aria-label="Navegación rápida">
      <div className="dock-line" />

      {navItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            className={`dock-item ${index === 0 ? 'is-active' : ''}`}
            href={item.href}
            aria-label={item.label}
          >
            <Icon size={20} strokeWidth={1.8} />
          </a>
        );
      })}

      <div className="dock-line bottom" />
    </aside>
  );
}

function Header() {
  return (
    <header className="top-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <img
          src="/logo yaha.png"
          alt="Logo Yahaira Loayza"
          className="brand-logo"
        />
      </a>

      <nav className="main-nav" aria-label="Principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function TechCard({ tech }: { tech: (typeof technologies)[number] }) {
  return (
    <article className="tech-card">
      <div className="tech-icon">
        <img
          src={tech.logo}
          alt={`Logo de ${tech.name}`}
          className="tech-logo"
          loading="lazy"
        />
      </div>

      <strong>{tech.name}</strong>
      <small>{tech.label}</small>
    </article>
  );
}

function TechStackPanel() {
  return (
    <section className="tech-panel" id="tecnologias" aria-labelledby="tech-title">
      <p className="eyebrow dark">Tecnología que construyo</p>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
}

function LayoutDot() {
  return <span className="layout-dot" aria-hidden="true" />;
}

function DashboardPreview() {
  return (
    <section className="preview-area" id="proyectos" aria-labelledby="project-title">
      <p className="eyebrow dark">
        Diseño <span>•</span> Desarrollo <span>•</span> Experiencia
      </p>

      <div className="devices-wrap">
        <div className="browser-card">
          <aside className="browser-sidebar">
            <span className="mini-logo">YL</span>
            <p>Portfolio</p>

            {['Dashboard', 'Proyectos', 'Diseño', 'Clientes', 'Reportes', 'Contacto'].map(
              (item, index) => (
                <span key={item} className={index === 0 ? 'active' : ''}>
                  <LayoutDot /> {item}
                </span>
              ),
            )}
          </aside>

          <main className="browser-content">
            <div className="browser-toolbar">
              <div>
                <small>Panel general</small>
                <h3>¡Bienvenido, Admin!</h3>
              </div>

              <div className="toolbar-actions">
                <Search size={15} />
                <Bell size={15} />
              </div>
            </div>

            <div className="stat-row">
              {projectStats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <small>{stat.label}</small>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <strong>Resumen de proyectos</strong>
                <span>2026</span>
              </div>

              <div className="chart-grid-lines" />

              <svg
                viewBox="0 0 360 110"
                className="chart-line"
                role="img"
                aria-label="Gráfico decorativo de crecimiento"
              >
                <path d="M8 85 C42 74 60 70 91 78 C128 90 128 40 172 52 C208 63 210 23 250 34 C284 43 294 18 352 28" />
                <path
                  className="chart-fill"
                  d="M8 85 C42 74 60 70 91 78 C128 90 128 40 172 52 C208 63 210 23 250 34 C284 43 294 18 352 28 L352 110 L8 110 Z"
                />
              </svg>
            </div>

            <div className="activity-card">
              <strong>Actividad reciente</strong>

              {[
                'Nuevo diseño UI entregado',
                'Sistema interno actualizado',
                'Landing page en revisión',
              ].map((activity) => (
                <p key={activity}>
                  <span />
                  {activity}
                </p>
              ))}
            </div>
          </main>
        </div>

        <div className="mobile-card">
          <div className="phone-notch" />
          <p className="phone-time">16:30</p>
          <h4>Hola, Visitante</h4>
          <small>Mis proyectos</small>

          {['Portafolio web', 'PMV negocios', 'Sistema ganadero'].map((item, index) => (
            <div key={item} className="phone-task">
              <span className={index === 1 ? 'warning' : 'success'} />
              <p>{item}</p>
            </div>
          ))}

          <small>Accesos rápidos</small>

          <div className="quick-row">
            <button>
              <Code2 size={16} />
              Code
            </button>

            <button>
              <ShieldCheck size={16} />
              UX
            </button>

            <button>
              <ArrowRight size={16} />
              Ver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBar() {
  return (
    <footer className="contact-bar" id="contacto">
      {contactItems.map((item) => {
        const Icon = item.icon;

        return (
          <div className="contact-item" key={item.label}>
            <Icon className="contact-icon" size={25} strokeWidth={1.7} />

            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          </div>
        );
      })}

      <Link className="connect-button" to="/contacto">
        Conectemos <ChevronRight size={25} />
      </Link>
    </footer>
  );
}

function HeroContent() {
  return (
    <section className="hero-copy" id="perfil" aria-labelledby="main-title">
      <p className="eyebrow light">Tecnología • Diseño • Innovación</p>

      <h1 id="main-title">
        <span>{personalInfo.firstName}</span>
        {personalInfo.lastName}
      </h1>

      <h2>{personalInfo.role}</h2>

      <div className="title-line" />

      <p className="hero-description">{personalInfo.headline}</p>

      <div className="hero-actions">
        <a
          className="cv-button"
          href="https://drive.google.com/file/d/15LiWDux3aCI9PO27ujiZONiZTLkxQBV3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver CV <ArrowRight size={20} />
        </a>
      </div>

        <blockquote>
        <Quote size={44} fill="currentColor" strokeWidth={0} />
        <p>{personalInfo.quote}</p>
      </blockquote>
      <div className="hero-social-actions">
        <a
          className="hero-social-button linkedin"
          href="https://www.linkedin.com/in/yahaira-aimet-loayza-villalobos-00b06335b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver LinkedIn"
        >
          <img src="/logos/link.png" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>

        <a
          className="hero-social-button github"
          href="https://github.com/yahairaLoayza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver GitHub"
        >
          <img src="/logos/github.png" alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="portrait-wrap" aria-label="Imagen principal decorativa">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />

      <span className="orbit-dot one" />
      <span className="orbit-dot two" />

      <div className="portrait-halo" />

      <img
        src="/yaha1.png"
        alt="Ilustración profesional con laptop"
        className="portrait-custom-image"
      />
    </div>
  );
}

export default function Inicio() {
  return (
    <main className="portfolio-page" id="inicio">
      <Header />
      <SideDock />

      <div className="decor-grid" />

      <img
        src="/planta.png"
        alt="Imagen decorativa"
        className="corner-photo"
      />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-layout">
        <HeroContent />
        <HeroPortrait />

        <div className="right-panel">
          <TechStackPanel />
          <DashboardPreview />
        </div>
      </section>

      <ContactBar />
    </main>
  );
}