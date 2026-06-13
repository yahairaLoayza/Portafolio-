import {
  ArrowDownToLine,
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  Grid2X2,
  Home,
  Mail,
  Phone,
  Sparkles,
  Star,
  User,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Proyectos.css';


const projectNavItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/perfil' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Habilidades', path: '/servicios' },
  { label: 'Contacto', path: '/contacto' },
];

const projectSideItems = [
  { label: 'Inicio', path: '/', icon: Home },
  { label: 'Sobre mí', path: '/perfil', icon: User },
  { label: 'Proyectos', path: '/proyectos', icon: Briefcase },
  { label: 'Habilidades', path: '/servicios', icon: Code2 },
  { label: 'Contacto', path: '/contacto', icon: Mail },
];

const filters = ['Todos', 'UX/UI', 'Odoo ERP', 'Mobile', 'Web'];

const projects = [
   {
    title: 'ImportSmart ML',
    subtitle: 'Proyecto destacado',
    description:
      'Plataforma predictiva para analizar ventas, parque automotor, inventario y demanda regional. Cada rol tiene módulos distintos según su responsabilidad dentro del sistema.',
    category: 'Web',
    tags: ['Dashboard', 'React', 'Sistema web'],
    featured: true,
    link: 'https://importsmart-ml.vercel.app/',
    image: '/proyectos/importsmart.png',
  },
  {
    title: 'Zendaj Smart-Trace',
    description:
      'Plataforma postventa de autopartes. Trazabilidad inteligente para incidencias y garantías.Centraliza reclamos, evidencias y validación técnica en un único flujo trazable, claro y confiable.',
    category: 'Web',
    tags: ['UX/UI', 'React', 'Dashboard', 'Responsive'],
    link: 'https://zendaj-smart-trace.vercel.app/login',
    image: '/proyectos/zendaj.png',
  },
  {
    title: 'APP de Citas',
    description:
      'KDate es una plataforma de experiencias sociales. Conecta invitaciones, acompañamiento y validación segura en un flujo digital. Centraliza solicitudes, perfiles, pagos, chat y check-in con QR para crear encuentros más claros, confiables y trazables.',
    category: 'Mobile',
    tags: ['UX/UI', 'Netlify', 'React Native', 'Expo go'],
    link: 'https://monumental-druid-78423a.netlify.app/',
    image: '/proyectos/app.png',
  },
  {
    title: 'BeePoliniza',
    description:
      'Plataforma que digitaliza el alquiler de colmenas, conectando agricultores y apicultores para publicar ofertas, solicitar servicios y gestionar contratos de forma rápida, ordenada y transparente.',
    category: 'Web',
    tags: ['UX/UI', 'Sistema web', 'React', 'Responsive'],
    link: 'https://bee-poliniza-app.vercel.app/',
    image: '/proyectos/beepoliniza.png',
  },
  {
    title: 'Fst Negocios',
    description:
      'Página web corporativa desarrollada para FST Negocios, enfocada en mostrar sus servicios de consultoría, fondos estatales y transformación digital de forma clara, profesional y confiable.',
    category: 'Mobile',
    tags: ['UX/UI', 'Mobile', 'React Native', 'Responsive'],
    link: 'https://fstnegocios.com/',
    image: '/proyectos/fst.png',
  },
  {
    title: 'Sistema Fst Negocios',
    description:
      'Desarrollé la parte visual del sistema interno de FST Negocios, enfocándome en una interfaz moderna, ordenada e intuitiva para mejorar la experiencia de uso del equipo.',
    category: 'UX/UI',
    tags: ['UX/UI'],
    link: 'https://sistemasleoncio.fstnegocios.com/',
    image: '/proyectos/sistema.png',
  },
  {
    title: 'AgroGanado 360',
    description:
      'Gestión ganadera inteligente con visión productiva, financiera y climática.monitorear ganado, registrar sanidad, gestionar inversiones y tomar decisiones con información clara, visual y centralizada.',
    category: 'Web',
    tags: ['React', 'Responsive', 'UX/UI'],
    link: 'https://agroganado-360.vercel.app/',
    image: '/proyectos/agroganado.png',
  },
  {
    title: 'Portafolio Web',
    description:
      'Landing page profesional para presentación personal, proyectos y experiencia.',
    category: 'UX/UI',
    tags: ['UI Design', 'React', 'Portfolio'],
    link: 'https://portafolio-psi-azure-16.vercel.app/',
    image: '/proyectos/pagina.png',
  },
  {
    title: 'Implementación Odoo SaaS para Grupo Soto Contadores',
    description:
      'Se implementó Odoo SaaS para Grupo Soto Contadores, digitalizando procesos contables, tributarios y de atención al cliente mediante módulos de CRM, página web, tickets, facturaciones y automatizaciones, fortaleciendo la trazabilidad y eficiencia operativa del estudio contable.',
    category: 'Odoo ERP',
    tags: ['Sistema web', 'Implementación'],
    link: '#',
    image: '/proyectos/soto.png',
    galleryImages: [
    '/proyectos/soto.png',
    '/proyectos/soto1.png',
    '/proyectos/soto2.png',
    '/proyectos/soto3.png',
    '/proyectos/soto4.png',
    '/proyectos/soto5.png',
    '/proyectos/soto6.png',
  ],
  },
  {
    title: 'Transformación Digital para Estructuras Metálicas Salinas',
    description:
      'Se implementó una solución digital integral, incorporando CRM, ERP operativo-administrativo, página web corporativa y estrategia de marketing digital para optimizar procesos, mejorar la trazabilidad y fortalecer la captación de clientes.',
    category: 'Odoo ERP',
    tags: ['Sistema web', 'Implementación'],
    link: '#',
    image: '/proyectos/salinas.png',
    galleryImages: [
    '/proyectos/salinas.png',
    '/proyectos/salinas1.png',
    '/proyectos/salinas2.png',
    '/proyectos/salinas3.png',
    '/proyectos/salinas4.png',
    '/proyectos/salinas5.png',
  ],
  },
  {
    title: 'Implementación Odoo SaaS para Paladin Commerce',
    description:
      'Se implementó una solución integral en Odoo para Paladin Commerce S.A.C., unificando ventas, compras, inventario, facturación, CRM, e-commerce, documentos, dashboards y tracking de pedidos, con capacitación y soporte post-implementación.',
    category: 'Odoo ERP',
    tags: ['Sistema web', 'Implementación'],
    link: '#',
    image: '/proyectos/paladin.png',
    galleryImages: [
    '/proyectos/paladin.png',
    '/proyectos/paladin6.png',
    '/proyectos/paladin1.png',
    '/proyectos/paladin4.png',
    '/proyectos/paladin2.png',
    '/proyectos/paladin3.png',
    '/proyectos/paladin5.png',
    ],
  },
  {
    title: 'Diseño UI/UX para Tienda de Ropa Online',
    description:
      'Diseñé en Figma la interfaz visual de una tienda de ropa con experiencia tipo marketplace, incluyendo login, registro, home, sección de productos, filtros, carrito de compras, pedido, métodos de pago y ubicación de tiendas, priorizando una navegación clara, moderna y funcional.',
    category: 'UX/UI',
    tags: ['UX/UI', 'Figma', 'Prototype'],
    link: 'https://www.figma.com/design/W41mRAPR2GpSKE1xm60HHo/e-commerce?node-id=0-1&t=THujeLAjULOgeXaR-1',
    image: '/proyectos/eclat.png',  
},
  {
    title: 'Rediseño Página web E-commerce para una Cafetería ',
    description:
      'Desarrollé un prototipo funcional de e-commerce para cafetería, enfocado en una experiencia de compra simple, moderna y responsiva. Incluye catálogo por categorías, carrito dinámico, registro e inicio de sesión, y simulación de pedidos con MockAPI, utilizando React, JavaScript y Tailwind CSS.',
    category: 'UX/UI',
    tags: ['UX/UI', 'Figma', 'Prototype'],
    link: '#',
    image: '/proyectos/cafe.png',  
    galleryImages: [
    '/proyectos/cafes1.png',
    '/proyectos/cafes2.png',
    '/proyectos/cafes3.png',
    '/proyectos/cafes4.png',
    '/proyectos/cafe.png',
    ],
  },
  {
    title: 'Sistema Web para el curso de inglés en el colegio William Shakespeare',
    description:
      'Desarrollé un sistema web educativo para el curso de inglés en primaria, orientado a gestionar materiales, tareas y evaluaciones. El proyecto incluyó diseño UX/UI en Figma y desarrollo con Java, Spring Boot, React, JavaScript y base de datos, logrando una plataforma intuitiva que facilita el aprendizaje y seguimiento académico de los estudiantes.',
    category: 'Web',
    tags: ['UX/UI', 'Figma', 'Prototype'],
    link: 'https://www.figma.com/design/OJ5bs4BNNKchz4HeLPc50j/Prototipo-Integrador-II?node-id=0-1&t=HaIWTyyXiGpNXHUR-1',
    image: '/proyectos/colegio.png',  
  },
  {
    title: 'Página web E-commerce para una Cafetería',
    description:
      'Diseñé en Figma una página web UX/UI para una cafetería, enfocada en resaltar su menú y mejorar la experiencia del cliente. El proceso incluyó investigación de usuario, wireframes, prototipado, testing y diseño final, logrando una interfaz atractiva, intuitiva y organizada por categorías como cafés, bebidas frías, helados y postres.',
    category: 'UX/UI',
    tags: ['UX/UI', 'Figma', 'Prototype'],
    link: 'https://www.figma.com/proto/BD7rLM4wqsMgumMMw1F89u/Avance-Proyecto-Final?page-id=0%3A1&node-id=36-3916&viewport=-4534%2C-2576%2C0.25&t=NjAt7akqzg2YmhOR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=36%3A3916&show-proto-sidebar=1',
    image: '/proyectos/cafe1.png',  
  },
  {
    title: 'Cotización Web Automatizada para FST Negocios',
    description: 'Desarrollé una cotización web automatizada e intuitiva que extrae datos de clientes de google sheets, hecho en AppScript, permite descargar el documento en PDF y cuenta con botones de acceso rápido a WhatsApp, YouTube, certificaciones, acreditaciones, resolución ministerial y pago por Mercado Pago.',
    category: 'UX/UI',
    tags: ['UX/UI', 'AppScript'],
    link: 'https://script.google.com/macros/s/AKfycbxfcrobOC4pwmgwfMkfv-lYOHyByrlkM4bqhOJoEPdqS8FAk6i59MJt16GwByikW3Vz/exec?id=FST-001',
    image: '/proyectos/cotización.png',  
  },
  {
    title: 'Chatbot Comercial con IA para WhatsApp Business',
    description: 'Desarrollé un chatbot comercial automatizado para WhatsApp Business, conectado a la API de OpenAI y Meta, orientado a mejorar la atención de ventas y reducir la sobrecarga de chats. Fue implementado en Python y vinculado a Google Sheets como base de datos para gestionar consultas, respuestas y seguimiento de clientes de forma más ordenada.',
    category: 'Mobile',
    tags: ['Python', 'OpenAi'],
    link: 'https://script.google.com/macros/s/AKfycbxfcrobOC4pwmgwfMkfv-lYOHyByrlkM4bqhOJoEPdqS8FAk6i59MJt16GwByikW3Vz/exec?id=FST-001',
    image: '/proyectos/chat.png',
    galleryImages: [
    '/proyectos/chat.png',
    ],  
  },
];

type Project = (typeof projects)[number];

function getProjectGallery(project: Project) {
  if ('galleryImages' in project && Array.isArray(project.galleryImages)) {
    return project.galleryImages;
  }

  return [];
}

function ProyectosHeader() {
  return (
    <header className="projects-header">
      <Link to="/" className="projects-logo-link" aria-label="Ir al inicio">
        <img src="/logo yaha.png" alt="Logo Yahaira Loayza" className="projects-logo" />
      </Link>

      <nav className="projects-navbar" aria-label="Navegación principal">
        {projectNavItems.map((item) => (
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
        className="projects-cv-button"
        href="https://drive.google.com/file/d/1mdkBhMMlscVyofMXrGoqACFt9Od_kjc7/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver CV
        <ArrowDownToLine size={19} strokeWidth={2.1} />
      </a>
    </header>
  );
}

function ProyectosSideDock() {
  return (
    <aside className="projects-side-dock" aria-label="Navegación lateral">
      <div className="projects-dock-line" />

      {projectSideItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.label}
            to={item.path}
            aria-label={item.label}
            className={({ isActive }) => `projects-dock-item ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={21} strokeWidth={1.8} />
          </NavLink>
        );
      })}

      <div className="projects-dock-line bottom" />
    </aside>
  );
}

function ProjectMockup({ variant = 'dashboard' }: { variant?: 'dashboard' | 'mobile' }) {
  if (variant === 'mobile') {
    return (
      <div className="project-mobile-preview">
        <div className="project-phone dark">
          <span className="project-notch" />
          <p>Mis tareas</p>
          <div className="project-tabs">
            <span />
            <span />
            <span />
          </div>
          <div className="project-task active" />
          <div className="project-task" />
          <div className="project-task" />
          <div className="project-progress" />
        </div>

        <div className="project-phone small">
          <span className="project-notch" />
          <p>Detalle</p>
          <div className="project-detail-line" />
          <div className="project-detail-line short" />
          <div className="project-progress" />
        </div>
      </div>
    );
  }

  return (
    <div className="project-dashboard-preview">
      <aside>
        <span />
        <span className="active" />
        <span />
        <span />
        <span />
      </aside>

      <main>
        <div className="project-preview-top">
          <span />
          <span />
        </div>

        <div className="project-preview-stats">
          <span />
          <span />
          <span />
        </div>

        <div className="project-preview-chart">
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
  );
}

function ProjectVisual({
  project,
  variant = 'dashboard',
}: {
  project: (typeof projects)[number];
  variant?: 'dashboard' | 'mobile';
}) {
  const hasImage = 'image' in project && project.image;

  if (hasImage) {
    return (
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          className="project-real-image"
          loading="lazy"
        />
      </div>
    );
  }

  return <ProjectMockup variant={variant} />;
}

function FeaturedProject() {
  const featured = projects.find((project) => project.featured)!;

  return (
    <article className="projects-featured-card">
      <div className="projects-featured-info">
        <div className="projects-featured-label">
          <span>
            <Star size={15} fill="currentColor" />
          </span>
          Proyecto destacado
        </div>

        <h2>{featured.title}</h2>
        <p>{featured.description}</p>

        <div className="projects-tags">
          {featured.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a href={featured.link} className="projects-view-link">
          Ver proyecto
          <span>
            <ArrowRight size={18} />
          </span>
        </a>
      </div>

      <ProjectVisual project={featured} />
    </article>
  );
}

function ProjectGalleryModal({
  project,
  activeImage,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  activeImage: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const galleryImages = getProjectGallery(project);
  const currentImage = galleryImages[activeImage];

  if (!currentImage) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          <X size={24} />
        </button>

        <div className="project-modal-header">
          <span>Galería del proyecto</span>
          <h2>{project.title}</h2>
          <p>
            Imagen {activeImage + 1} de {galleryImages.length}
          </p>
        </div>

        <div className="project-modal-image-area">
          <button
            type="button"
            className="project-modal-arrow left"
            onClick={onPrev}
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={30} />
          </button>

          <img
            src={currentImage}
            alt={`Imagen ${activeImage + 1} del proyecto ${project.title}`}
            className="project-modal-image"
          />

          <button
            type="button"
            className="project-modal-arrow right"
            onClick={onNext}
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        <div className="project-modal-thumbs">
          {galleryImages.map((image, index) => (
            <span
              key={image}
              className={index === activeImage ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpenGallery,
}: {
  project: Project;
  index: number;
  onOpenGallery: (project: Project) => void;
}) {
  const galleryImages = getProjectGallery(project);

  const handleProjectClick = () => {
    if (galleryImages.length > 0) {
      onOpenGallery(project);
      return;
    }

    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article className="projects-card">
      <div className="projects-card-visual">
        <ProjectVisual
          project={project}
          variant={index % 3 === 2 ? 'mobile' : 'dashboard'}
        />
      </div>

      <div className="projects-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="projects-tags small">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="projects-card-button"
        aria-label={`Ver proyecto ${project.title}`}
        onClick={handleProjectClick}
      >
        <ArrowRight size={25} />
      </button>
    </article>
  );
}


function CaseStudyCTA() {
  return (
    <section className="projects-case-study-cta">
      <div>
        <span>Proyecto en detalle</span>
        <h2>Mi ruta de Aprendizaje</h2>
        <p>
          Mi ruta de aprendizaje refleja mi evolución como ingeniera de sistemas e informática, fortaleciendo mis habilidades en desarrollo web, bases de datos, automatización, implementación de sistemas y creación de soluciones digitales reales. 
        </p>
      </div>

      <Link to="/proyectos/caso-estudio" className="projects-case-study-button">
        Ver ruta
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}



function ProjectsContactBar() {
  return (
    <footer className="projects-contact-bar">
      <div className="projects-contact-item">
        <Phone size={25} strokeWidth={1.7} />
        <div>
          <span>Teléfono</span>
          <strong>963 026 232</strong>
        </div>
      </div>

      <div className="projects-contact-item">
        <Mail size={25} strokeWidth={1.7} />
        <div>
          <span>Email</span>
          <strong>yaimet04@outlook.com</strong>
        </div>
      </div>

      <div className="projects-contact-item">
        <Sparkles size={25} strokeWidth={1.7} />
        <div>
          <span>Disponible para</span>
          <strong>Proyectos | Colaboraciones | Oportunidades</strong>
        </div>
      </div>

      <Link to="/contacto" className="projects-connect-button">
        Conectemos
        <ArrowRight size={24} />
      </Link>
    </footer>
  );
}

export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  
  const openProjectGallery = (project: Project) => {
  setSelectedProject(project);
  setActiveImage(0);
};

const closeProjectGallery = () => {
  setSelectedProject(null);
  setActiveImage(0);
};

const showPrevImage = () => {
  if (!selectedProject) return;

  const galleryImages = getProjectGallery(selectedProject);

  setActiveImage((current) =>
    current === 0 ? galleryImages.length - 1 : current - 1,
  );
};

const showNextImage = () => {
  if (!selectedProject) return;

  const galleryImages = getProjectGallery(selectedProject);

  setActiveImage((current) =>
    current === galleryImages.length - 1 ? 0 : current + 1,
  );
};



  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'Todos') return !project.featured;
    return project.category === activeFilter && !project.featured;
  });

  return (
    <main className="projects-page">
      <div className="projects-ambient one" />
      <div className="projects-ambient two" />
      <div className="projects-orbit-bg" />
      <div className="projects-dot-pattern" />

      <img src="/planta.png" alt="" className="projects-corner-plant" />

      <ProyectosHeader />
      <ProyectosSideDock />

      <section className="projects-hero-section">
        <div className="projects-copy">
          <p className="projects-kicker">Tecnología • Diseño • Innovación</p>

          <p className="projects-script">Mis</p>
          <h1>Proyectos</h1>

          <p className="projects-description">
            Soluciones digitales que combinan tecnología, diseño y experiencia
            para generar impacto real.
          </p>

          <span className="projects-title-line" />

          <div className="projects-filters">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {index === 0 && <Grid2X2 size={16} />}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <FeaturedProject />
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {filteredProjects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenGallery={openProjectGallery}
            />
          ))}
        </div>
      </section>

      <CaseStudyCTA />


      <section className="projects-more-section">
        <div className="projects-more-heading">
          <p>Más proyectos</p>
          <span>Espacios adicionales para colocar todos tus trabajos realizados</span>
        </div>

        <div className="projects-more-grid">
        {filteredProjects.slice(3).map((project, index) => (
            <ProjectCard
            key={project.title}
            project={project}
            index={index + 3}
            onOpenGallery={openProjectGallery}
            />
        ))}
        </div>
      </section>

      <ProjectsContactBar />
      {selectedProject && (
        <ProjectGalleryModal
            project={selectedProject}
            activeImage={activeImage}
            onClose={closeProjectGallery}
            onPrev={showPrevImage}
            onNext={showNextImage}
        />
      )}
    </main>
  );
}