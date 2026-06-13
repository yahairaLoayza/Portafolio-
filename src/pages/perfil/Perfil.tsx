import {
  ArrowRight,
  Brain,
  Briefcase,
  CheckCircle2,
  Code2,
  Home,
  Mail,
  MapPin,
  PenTool,
  Puzzle,
  Quote,
  Target,
  User,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import './Perfil.css';

const perfilNavItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/perfil' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Contacto', path: '/contacto' },
];

const perfilSideItems = [
  { label: 'Inicio', path: '/', icon: Home },
  { label: 'Sobre mí', path: '/perfil', icon: User },
  { label: 'Proyectos', path: '/proyectos', icon: Briefcase },
  { label: 'Servicios', path: '/servicios', icon: Code2 },
  { label: 'Contacto', path: '/contacto', icon: Mail },
];

const focusItems = [
  'Centrada en las personas',
  'Orientada a resultados',
  'Aprendizaje continuo',
  'Innovación constante',
];

const strengths = [
  {
    title: 'Pensamiento analítico',
    description:
      'Descompongo problemas complejos para encontrar soluciones eficientes y escalables.',
    icon: Brain,
  },
  {
    title: 'Diseño UX/UI',
    description:
      'Diseño experiencias intuitivas y atractivas que generan valor y conexión con los usuarios.',
    icon: PenTool,
  },
  {
    title: 'Desarrollo web',
    description:
      'Creo aplicaciones modernas, responsivas y de alto rendimiento con buenas prácticas de código.',
    icon: Code2,
  },
  {
    title: 'Resolución de problemas',
    description:
      'Me adapto rápido, pienso estratégicamente y encuentro soluciones creativas y efectivas.',
    icon: Puzzle,
  },
];

const timeline = [
  {
    year: '2020 - 2025',
    title: 'Formación Académica Universitaria',
    text: 'Inicio y culminación de estudios en Ingeniería de Sistemas e Informática.',
    extra: 'Universidad Tecnológica del Perú',
  },
  {
    year: '2025',
    title: 'Formación continua',
    text: 'Cursos y certificaciones en desarrollo web - Full stack, UX/UI y metodologías ágiles.',
    extra: 'Tecsup / Idat / Scrum',
  },
  {
    year: '2025',
    title: 'Proyectos reales',
    text: 'Desarrollo de soluciones digitales para empresas y emprendimientos, aplicando tecnología e innovación.',
  },
  {
    year: '2026 - Actualidad',
    title: 'Crecimiento profesional',
    text: 'Desarrollo e implementación de soluciones digitales, incluyendo prototipos web, aplicaciones, chatbots, páginas corporativas y sistemas internos orientados a optimizar procesos empresariales.',
    extra: 'Fst Negocios',
},
];

function PerfilHeader() {
  return (
    <header className="perfil-header">
      <Link to="/" className="perfil-logo-link" aria-label="Ir al inicio">
        <img src="/logo yaha.png" alt="Logo Yahaira Loayza" className="perfil-logo" />
      </Link>

      <nav className="perfil-navbar" aria-label="Navegación principal">
        {perfilNavItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contacto" className="perfil-talk-button">
        Hablemos
        <span>
          <ArrowRight size={19} strokeWidth={2.4} />
        </span>
      </Link>
    </header>
  );
}

function PerfilSideDock() {
  return (
    <aside className="perfil-side-dock" aria-label="Navegación lateral">
      <div className="perfil-dock-line" />

      {perfilSideItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.label}
            to={item.path}
            aria-label={item.label}
            className={({ isActive }) => `perfil-dock-item ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={21} strokeWidth={1.8} />
          </NavLink>
        );
      })}

      <div className="perfil-dock-line bottom" />
    </aside>
  );
}

function FocusCard() {
  return (
    <article className="perfil-focus-card">
      <div className="perfil-focus-heading">
        <span>
          <Target size={25} strokeWidth={2} />
        </span>

        <strong>Mi enfoque</strong>
      </div>

      <p>
        Combino tecnología, diseño y estrategia para desarrollar productos digitales
        funcionales, bonitos y centrados en el usuario.
      </p>

      <ul>
        {focusItems.map((item) => (
          <li key={item}>
            <CheckCircle2 size={16} strokeWidth={2.4} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function StrengthsSection() {
  return (
    <section className="perfil-strengths-section">
      <p className="perfil-section-title">Mis fortalezas</p>

      <div className="perfil-strengths-grid">
        {strengths.map((item) => {
          const Icon = item.icon;

          return (
            <article className="perfil-strength-card" key={item.title}>
              <Icon size={58} strokeWidth={1.55} />

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="perfil-timeline-section">
      <p className="perfil-section-title">Mi trayectoria</p>

      <div className="perfil-timeline">
        {timeline.map((item) => (
          <article className="perfil-timeline-item" key={item.year}>
            <span className="perfil-timeline-dot" />
            <span className="perfil-timeline-vertical" />

            <div>
              <strong>{item.year}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.extra && <small className="perfil-timeline-extra">{item.extra}</small>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Perfil() {
  return (
    <main className="perfil-page">
      <div className="perfil-light-panel" />
      <div className="perfil-dot-pattern left" />
      <div className="perfil-dot-pattern right" />

      <img src="/planta.png" alt="" className="perfil-corner-plant" />

      <PerfilHeader />
      <PerfilSideDock />

      <section className="perfil-main-layout">
        <div className="perfil-copy">
          <p className="perfil-script">Sobre</p>
          <h1>MÍ</h1>

          <h2>
            Ingeniera de Sistemas <br />
            e Informática
          </h2>

          <p className="perfil-description">
            Soy apasionada por la tecnología, el diseño y la innovación. Disfruto
            transformar ideas en soluciones digitales que generan impacto real y
            experiencias significativas para las personas.
          </p>

          <blockquote>
            <Quote size={42} fill="currentColor" strokeWidth={0} />
            <p>
              No solo escribo código, <br />
              creo soluciones que conectan con las personas.
            </p>
            <span />
          </blockquote>
        </div>

        <FocusCard />

        <div className="perfil-photo-area">
          <div className="perfil-orbit orbit-one" />
          <div className="perfil-orbit orbit-two" />
          <div className="perfil-orbit orbit-three" />

          <div className="perfil-photo-circle">
            <img src="/yaha2.png" alt="Yahaira Loayza" style={{transform: 'translateX(-50%) translateY(20px)'}}  />
          </div>

          <div className="perfil-signature">
            <p>Yahaira</p>
            <strong>Loayza</strong>
            <span />
            <small>Ingeniera de Sistemas e Informática</small>

            <div className="perfil-location">
              <MapPin size={18} fill="currentColor" />
              Lima, Perú
            </div>
          </div>
        </div>
      </section>

      <StrengthsSection />
      <TimelineSection />
    </main>
  );
}