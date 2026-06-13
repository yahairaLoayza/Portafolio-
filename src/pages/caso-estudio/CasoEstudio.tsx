import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Brain,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Home,
  Lightbulb,
  Mail,
  Monitor,
  PenTool,
  Quote,
  Rocket,
  Search,
  Sparkles,
  Target,
  User,
  Wrench,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import './CasoEstudio.css';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/perfil' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Habilidades', path: '/servicios' },
  { label: 'Contacto', path: '/contacto' },
];

const sideItems = [
  { label: 'Inicio', path: '/', icon: Home },
  { label: 'Perfil', path: '/perfil', icon: User },
  { label: 'Proyectos', path: '/proyectos', icon: Briefcase },
  { label: 'Habilidades', path: '/servicios', icon: Code2 },
  { label: 'Contacto', path: '/contacto', icon: Mail },
];

const learningAreas = [
  {
    title: 'Diseño UX/UI',
    text: 'Aprendí a investigar necesidades, ordenar información, crear flujos, wireframes y prototipos visuales centrados en el usuario.',
    icon: PenTool,
  },
  {
    title: 'Desarrollo web',
    text: 'Fortalecí el uso de React, TypeScript, JavaScript, Tailwind, Vite y estructura de componentes reutilizables.',
    icon: Code2,
  },
  {
    title: 'PMV App de citas',
    text: 'Participé en el desarrollo de un PMV de aplicación móvil de citas, usando React Native y TypeScript para validar flujos, pantallas y experiencia móvil.',
    icon: Monitor,
  },
  {
    title: 'Implementaciones Odoo',
    text: 'Comprendí procesos empresariales reales: CRM, ventas, compras, inventario, facturación, tickets, e-commerce y dashboards.',
    icon: Briefcase,
  },
  {
    title: 'Automatización e IA',
    text: 'Integré soluciones con Google Sheets, Apps Script, Python, API de OpenAI, Meta y WhatsApp Business para optimizar atención comercial.',
    icon: Bot,
  },
];

const processSteps = [
  {
    title: 'Investigar',
    text: 'Entender al usuario, el negocio y el problema antes de diseñar o desarrollar.',
  },
  {
    title: 'Diseñar',
    text: 'Crear prototipos claros, modernos y funcionales con enfoque UX/UI.',
  },
  {
    title: 'Implementar',
    text: 'Construir sistemas, páginas y prototipos conectados a datos reales.',
  },
  {
    title: 'Automatizar',
    text: 'Reducir tareas manuales usando APIs, bases de datos, scripts y flujos digitales.',
  },
];

const uxLearnings = [
  'Diseñar interfaces más intuitivas y visualmente ordenadas.',
  'Validar pantallas pensando en la experiencia real del usuario.',
  'Crear prototipos navegables en Figma y llevarlos a sistemas funcionales.',
  'Cuidar jerarquía visual, responsive design, contraste y consistencia.',
];

const techLearnings = [
  'React, TypeScript, JavaScript, Tailwind CSS y Vite.',
  'React Native y TypeScript para prototipos móviles funcionales.',
  'Supabase como base de datos y autenticación.',
  'Despliegues en Vercel y configuración de cronjobs para mantener sistemas activos.',
  'Consumo de datos, dashboards, formularios, filtros y flujos dinámicos.',
];

const implementationLearnings = [
  'Levantamiento de procesos reales con clientes.',
  'Configuración de módulos en Odoo SaaS.',
  'Capacitaciones, documentación y acompañamiento post-implementación.',
  'Digitalización de procesos contables, comerciales, operativos y administrativos.',
];

const automationLearnings = [
  'Cotizaciones web automatizadas con Google Sheets y Apps Script.',
  'Generación y descarga de PDF desde una interfaz web.',
  'Chatbot comercial con Python, OpenAI API, Meta y WhatsApp Business.',
  'Bases de datos simples con Google Sheets para seguimiento y atención.',
];

const results = [
  {
    value: 'UX/UI',
    text: 'Mayor criterio visual para crear interfaces claras, modernas y fáciles de usar.',
  },
  {
    value: 'Full Stack',
    text: 'Más capacidad para conectar diseño, frontend, datos y despliegue.',
  },
  {
    value: 'Odoo',
    text: 'Mejor comprensión de procesos empresariales y transformación digital.',
  },
  {
    value: 'IA + Auto',
    text: 'Automatización de tareas repetitivas y mejora de atención comercial.',
  },
];

function CaseHeader() {
  return (
    <header className="case-header">
      <Link to="/" className="case-logo-link" aria-label="Ir al inicio">
        <img src="/logo yaha.png" alt="Logo Yahaira Loayza" className="case-logo" />
      </Link>

      <nav className="case-navbar" aria-label="Navegación principal">
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

      <Link to="/proyectos" className="case-view-all">
        Ver todos los proyectos
        <span>
          <ArrowRight size={16} />
        </span>
      </Link>
    </header>
  );
}

function CaseSideDock() {
  return (
    <aside className="case-side-dock" aria-label="Navegación lateral">
      <div className="case-dock-line" />

      {sideItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.label}
            to={item.path}
            aria-label={item.label}
            className={({ isActive }) => `case-dock-item ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={21} strokeWidth={1.8} />
          </NavLink>
        );
      })}

      <div className="case-dock-line bottom" />
    </aside>
  );
}

function LearningMockup() {
  return (
    <div className="case-hero-visual">
      <div className="case-orbit orbit-one" />
      <div className="case-orbit orbit-two" />
      <div className="case-orbit orbit-three" />
      <span className="case-orbit-dot one" />
      <span className="case-orbit-dot two" />

      <div className="case-laptop">
        <div className="case-laptop-screen">
          <div className="screen-topbar">
            <span />
            <span />
            <span />
          </div>

          <div className="screen-layout">
            <aside className="screen-sidebar">
              <span className="logo-mini" />
              <span className="sidebar-pill active" />
              <span className="sidebar-pill" />
              <span className="sidebar-pill" />
              <span className="sidebar-pill" />
            </aside>

            <main className="screen-content">
              <div className="screen-heading">
                <div>
                  <small>Mi evolución profesional ✨</small>
                  <h4>Diseño, desarrollo, implementación y automatización</h4>
                </div>
                <span className="avatar-dot" />
              </div>

              <div className="screen-stats">
                <article>
                  <strong>UX</strong>
                </article>
                <article>
                  <strong>DEV</strong>
                </article>
                <article>
                  <strong>ERP</strong>
                </article>
              </div>

              <div className="screen-panels">
                <section className="chart-panel">
                  <svg viewBox="0 0 320 120" className="case-chart">
                    <path d="M8 89 C52 74 70 72 103 80 C146 90 149 36 188 52 C218 64 224 25 260 34 C286 42 301 20 312 28" />
                    <path
                      className="fill"
                      d="M8 89 C52 74 70 72 103 80 C146 90 149 36 188 52 C218 64 224 25 260 34 C286 42 301 20 312 28 L312 120 L8 120 Z"
                    />
                  </svg>
                </section>

                <section className="activity-panel">
                  <span />
                  <span />
                  <span />
                  <span />
                </section>
              </div>
            </main>
          </div>
        </div>

        <div className="case-laptop-base" />
      </div>

      <div className="case-phone">
        <div className="phone-notch" />
        <small>Stack</small>
        <div className="phone-item lavender" />
        <div className="phone-item amber" />
        <div className="phone-item green" />
        <div className="phone-item blue" />
      </div>
    </div>
  );
}

function ProcessFlow() {
  return (
    <div className="learning-flow">
      {processSteps.map((step, index) => (
        <article key={step.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step.title}</strong>
          <p>{step.text}</p>
          {index !== processSteps.length - 1 && <i />}
        </article>
      ))}
    </div>
  );
}

function LearningList({ items }: { items: string[] }) {
  return (
    <div className="learning-list">
      {items.map((item) => (
        <p key={item}>
          <CheckCircle2 size={15} />
          {item}
        </p>
      ))}
    </div>
  );
}

export default function CasoEstudio() {
  return (
    <main className="case-page">
      <div className="case-ambient one" />
      <div className="case-ambient two" />
      <div className="case-grid-pattern top" />
      <div className="case-grid-pattern middle" />

      <img src="/planta.png" alt="" className="case-corner-plant" />

      <CaseHeader />
      <CaseSideDock />

      <section className="learning-hero-section">
        <div className="learning-hero-copy">
          <Link to="/proyectos" className="case-back-link">
            <ArrowLeft size={15} />
            Volver a proyectos
          </Link>

          <p className="case-script">Mi Ruta de</p>
          <h1>Aprendizaje</h1>

          <p className="case-description">
            A través de mis proyectos he aprendido a convertir ideas en soluciones
            digitales reales, combinando diseño UX/UI, desarrollo web, prototipos
            móviles, implementación de sistemas, automatización e inteligencia
            artificial.
          </p>

          <div className="case-tags">
            {[
              'UX/UI',
              'React',
              'React Native',
              'TypeScript',
              'Odoo ERP',
              'Supabase',
              'Automatización',
              'IA',
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="case-info-bar">
            <article>
              <CalendarDays size={18} />
              <div>
                <small>Periodo</small>
                <strong>2024 - Actualidad</strong>
              </div>
            </article>

            <article>
              <User size={18} />
              <div>
                <small>Mi enfoque</small>
                <strong>Diseño + Desarrollo</strong>
              </div>
            </article>

            <article>
              <Wrench size={18} />
              <div>
                <small>Herramientas</small>
                <strong>Figma, React Native, Odoo, Python</strong>
              </div>
            </article>

            <article>
              <FileText size={18} />
              <div>
                <small>Resultado</small>
                <strong>Soluciones funcionales</strong>
              </div>
            </article>
          </div>
        </div>

        <div className="learning-hero-visual">
          <LearningMockup />

          <div className="case-objective-card">
            <div className="case-objective-icon">
              <Sparkles size={22} />
            </div>

            <div>
              <span>Objetivo profesional</span>
              <p>
                Seguir creciendo como profesional capaz de diseñar, desarrollar e
                implementar soluciones web y móviles, integrando tecnología,
                procesos, automatización e inteligencia artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-overview-grid">
        <article className="case-section-card animated-card">
          <div className="case-section-heading">
            <span>01</span>
            <h2>Lo que aprendí</h2>
          </div>

          <p className="case-section-intro">
            Cada proyecto me permitió fortalecer una parte distinta del proceso
            digital: desde entender al usuario hasta implementar sistemas reales.
          </p>

          <div className="learning-area-grid">
            {learningAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title}>
                  <div className="learning-area-icon">
                    <Icon size={18} />
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </article>

        <article className="case-section-card animated-card delay-one">
          <div className="case-section-heading">
            <span>02</span>
            <h2>Mi proceso</h2>
          </div>

          <p className="case-section-intro">
            Aprendí que un buen proyecto no solo se ve bonito: debe entender el
            problema, ordenar el flujo y funcionar bien en un entorno real.
          </p>

          <ProcessFlow />

          <div className="insight-panel">
            <div>
              <Brain size={22} />
            </div>

            <p>
              Mi mayor aprendizaje ha sido unir pensamiento analítico,
              experiencia de usuario y criterio técnico para construir productos
              más claros, escalables y útiles.
            </p>
          </div>
          <div className="process-stack-panel">
            <div className="process-stack-header">
                <span>Stack aplicado</span>
                <strong>Herramientas que conectan mi proceso</strong>
            </div>

            <div className="process-stack-grid">
                <span>Figma</span>
                <span>React</span>
                <span>Sql Server</span>
                <span>React Native</span>
                <span>Supabase</span>
                <span>Odoo ERP</span>
                <span>Python</span>
                <span>Apps Script</span>
            </div>
            </div>
        </article>
      </section>

      <section className="learning-detail-grid">
        <article className="case-section-card animated-card delay-two">
          <div className="case-section-heading">
            <span>03</span>
            <h2>Diseño UX/UI y prototipos</h2>
          </div>

          <p className="case-section-intro">
            En mis prototipos aprendí a organizar pantallas, priorizar
            información, construir navegación intuitiva y diseñar experiencias
            visuales más profesionales.
          </p>

          <div className="learning-two-columns">
            <div className="learning-block">
              <h3>Aprendizajes clave</h3>
              <LearningList items={uxLearnings} />
            </div>

            <div className="prototype-preview image-mode">
            <img
                src="/aprendizaje/prototipos1.png"
                alt="Vista de prototipos UX/UI"
                className="prototype-real-image"
                loading="lazy"
            />
            </div>
          </div>
        </article>

        <article className="case-section-card animated-card delay-three">
          <div className="case-section-heading">
            <span>04</span>
            <h2>Desarrollo e implementación</h2>
          </div>

          <p className="case-section-intro">
            Aprendí a pasar de un diseño a una solución funcional, conectando
            interfaces con datos, despliegues, módulos empresariales y
            necesidades reales del cliente.
          </p>

          <div className="implementation-grid">
            <article>
              <div className="implementation-icon">
                <Monitor size={18} />
              </div>
              <h3>Web, móvil y prototipos</h3>
              <LearningList items={techLearnings} />
            </article>

            <article>
              <div className="implementation-icon">
                <Database size={18} />
              </div>
              <h3>Odoo ERP</h3>
              <LearningList items={implementationLearnings} />
            </article>
          </div>
        </article>
      </section>

      <section className="learning-growth-section">
        <article className="case-section-card animated-card delay-four">
          <div className="case-section-heading">
            <span>05</span>
            <h2>Automatización y crecimiento</h2>
          </div>

          <p className="case-section-intro">
            Las automatizaciones me ayudaron a entender cómo reducir tiempos,
            ordenar datos y mejorar la atención usando herramientas conectadas.
          </p>

          <div className="automation-layout">
            <div className="automation-card">
              <div className="automation-icon">
                <Rocket size={20} />
              </div>

              <LearningList items={automationLearnings} />
            </div>

            <div className="results-grid">
              {results.map((item) => (
                <article key={item.value}>
                  <strong>{item.value}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="testimonial-card">
            <Quote size={22} fill="currentColor" strokeWidth={0} />
            <p>
              Cada proyecto me enseñó a pensar más allá de la pantalla: entender
              procesos, diseñar con intención y construir soluciones que realmente
              aporten valor :).
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}