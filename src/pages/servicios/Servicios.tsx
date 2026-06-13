import type { CSSProperties } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Code2,
  Home,
  Mail,
  PenTool,
  Quote,
  Sparkles,
  TrendingUp,
  User,
  WandSparkles,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import './Servicios.css';

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

const technicalSkills = [
  { label: 'Figma', value: 95 },
  { label: 'UX Research', value: 85 },
  { label: 'Diseño UX/UI', value: 95 },
  { label: 'Prototipado', value: 95 },
  { label: 'Integración de IA', value: 90 },
];

const designTools = [
  { name: 'Figma', logo: '/logos/figma.png' },
  { name: 'Miro', logo: '/logos/miro.png' },
  { name: 'Notion', logo: '/logos/notion.png' },
];

const devStack = [
  { label: 'HTML', value: 95 },
  { label: 'CSS', value: 90 },
  { label: 'JavaScript', value: 90 },
  { label: 'React', value: 90 },
  { label: 'Python', value: 80 },
  { label: 'MySQL', value: 75 },
];

const extraTools = [
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  { name: 'SQL', logo: '/logos/sql.png' },
  { name: 'Figma', logo: '/logos/figma.png' },
  { name: 'React', logo: '/logos/react.png' },
  { name: 'VS Code', logo: '/logos/vs.png' },
  { name: 'Trello', logo: '/logos/trello.png' },
  { name: 'GitHub', logo: '/logos/github.png' },
  { name: 'IntelliJ', logo: '/logos/intellij.png' },
  { name: 'HTML5', logo: '/logos/html.png' },
  { name: 'PostgreSQL', logo: '/logos/postgres.png' },
  { name: 'MongoDB', logo: '/logos/mongo.png' },
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'CSS3', logo: '/logos/css.png' },
];

const services = [
  {
    icon: PenTool,
    title: 'Diseño UX/UI',
    description:
      'Diseño interfaces intuitivas, accesibles y centradas en el usuario.',
    bullets: [
      'Investigación de usuarios',
      'Arquitectura de información',
      'Wireframes & Mockups',
      'Diseño visual de interfaces',
    ],
  },
  {
    icon: Code2,
    title: 'Desarrollo de sistemas',
    description:
      'Desarrollo soluciones web robustas, escalables y eficientes.',
    bullets: [
      'Aplicaciones web a medida',
      'Integraciones y APIs',
      'Sistemas administrativos',
      'Mantenimiento y soporte',
    ],
  },
  {
    icon: WandSparkles,
    title: 'Prototipos interactivos',
    description:
      'Creo prototipos funcionales que validan ideas y mejoran decisiones.',
    bullets: [
      'Prototipos de alta fidelidad',
      'Flujos de usuario',
      'Pruebas de usabilidad',
      'Iteración y mejoras',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Optimización de experiencia digital',
    description:
      'Mejora continua de productos digitales para aumentar conversión y satisfacción.',
    bullets: [
      'Auditoría UX',
      'Análisis de métricas',
      'Mejoras de conversión',
      'Accesibilidad y performance',
    ],
  },
];

function ServiciosHeader() {
  return (
    <header className="services-header">
      <Link to="/" className="services-logo-link" aria-label="Ir al inicio">
        <img src="/logo yaha.png" alt="Logo Yahaira Loayza" className="services-logo" />
      </Link>

      <nav className="services-navbar" aria-label="Navegación principal">
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

      <Link to="/proyectos" className="services-top-button">
        Ver proyectos
        <span>
          <ArrowRight size={17} />
        </span>
      </Link>
    </header>
  );
}

function ServiciosSideDock() {
  return (
    <aside className="services-side-dock" aria-label="Navegación lateral">
      <div className="services-dock-line" />

      {sideItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.label}
            to={item.path}
            aria-label={item.label}
            className={({ isActive }) => `services-dock-item ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={21} strokeWidth={1.8} />
          </NavLink>
        );
      })}

      <div className="services-dock-line bottom" />
    </aside>
  );
}

function ProgressCircle({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <article className="progress-skill">
      <div
        className="progress-ring"
        style={{ '--value': `${value}%` } as CSSProperties}
      >
        <div className="progress-ring-inner">{value}%</div>
      </div>
      <strong>{label}</strong>
    </article>
  );
}

function HeroPortrait() {
  return (
    <div className="services-portrait-wrap">
      <div className="services-orbit orbit-one" />
      <div className="services-orbit orbit-two" />
      <div className="services-orbit orbit-three" />
      <span className="services-orbit-dot one" />
      <span className="services-orbit-dot two" />

      <div className="services-portrait-halo" />

      <img
        src="/yaha1.png"
        alt="Foto de Yahaira Loayza"
        className="services-portrait-image"
      />
      
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-copy">
        <p className="services-kicker">Tecnología • Diseño • Innovación</p>
        <p className="services-script">Habilidades y</p>
        <h1>Servicios</h1>

        <h2>Soluciones digitales que generan impacto</h2>
        <span className="services-line" />

        <p className="services-description">
          Combino pensamiento estratégico, diseño centrado en el usuario y
          desarrollo tecnológico para crear experiencias digitales eficientes,
          escalables y memorables.
        </p>
      </div>

      <HeroPortrait />

      <aside className="services-quote-card">
        <Quote size={44} fill="currentColor" strokeWidth={0} />
        <p>
          No se trata solo de usar herramientas, sino de resolver problemas
          reales con creatividad, lógica y empatía.
        </p>
        <span>Yahaira Loayza</span>
      </aside>
    </section>
  );
}

function SkillsCardsSection() {
  return (
    <section className="services-skill-panels">
      <article className="services-panel">
        <div className="services-panel-title">
          <Code2 size={16} />
          <span>Habilidades técnicas</span>
        </div>

        <div className="technical-skills-grid">
          {technicalSkills.map((skill) => (
            <ProgressCircle
              key={skill.label}
              label={skill.label}
              value={skill.value}
            />
          ))}
        </div>
      </article>

      <article className="services-panel">
        <div className="services-panel-title">
          <PenTool size={16} />
          <span>Herramientas UX/UI</span>
        </div>

        <div className="design-tools-grid">
          {designTools.map((tool) => (
            <div className="design-tool-card" key={tool.name}>
              <div className="design-tool-logo-wrap">
                <img src={tool.logo} alt={tool.name} className="design-tool-logo" />
              </div>
              <small>{tool.name}</small>
            </div>
          ))}
        </div>
      </article>

      <article className="services-panel">
        <div className="services-panel-title">
          <Sparkles size={16} />
          <span>Stack de desarrollo</span>
        </div>

        <div className="technical-skills-grid dev-mode">
          {devStack.map((skill) => (
            <ProgressCircle
              key={skill.label}
              label={skill.label}
              value={skill.value}
            />
          ))}
        </div>
      </article>
    </section>
  );
}

function ServicesSectionTitle() {
  return (
    <div className="services-divider-title">
      <div className="services-divider-icon">
        <Briefcase size={18} />
      </div>
      <span>Servicios que ofrezco</span>
      <div className="services-divider-line" />
    </div>
  );
}

function ServiceCard({
  title,
  description,
  bullets,
  icon: Icon,
}: {
  title: string;
  description: string;
  bullets: string[];
  icon: typeof PenTool;
}) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <div className="service-icon-box">
          <Icon size={34} />
        </div>

        <div className="service-card-copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="service-bullets">
        {bullets.map((bullet) => (
          <p key={bullet}>
            <CheckCircle2 size={16} />
            {bullet}
          </p>
        ))}
      </div>
    </article>
  );
}

function ExtraToolsSection() {
  return (
    <section className="extra-tools-section">
      <div className="services-divider-title compact">
        <div className="services-divider-icon">
          <BrainCircuit size={18} />
        </div>
        <span>Herramientas adicionales</span>
        <div className="services-divider-line" />
      </div>

      <div className="extra-tools-grid">
        {extraTools.map((tool) => (
          <article className="extra-tool-card" key={tool.name}>
            <img src={tool.logo} alt={tool.name} className="extra-tool-logo" />
            <small>{tool.name}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Servicios() {
  return (
    <main className="services-page">
      <div className="services-ambient one" />
      <div className="services-ambient two" />
      <div className="services-dot-pattern top" />
      <div className="services-dot-pattern middle" />

      <ServiciosHeader />
      <ServiciosSideDock />
      <ServicesHero />
      <SkillsCardsSection />
      <ServicesSectionTitle />

      <section className="services-cards-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            bullets={service.bullets}
            icon={service.icon}
          />
        ))}
      </section>

      <ExtraToolsSection />
    </main>
  );
}