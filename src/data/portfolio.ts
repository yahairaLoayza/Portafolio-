import {
  Briefcase,
  Code2,
  Home,
  Mail,
  Palette,
  Phone,
  Sparkles,
  User
} from 'lucide-react';

export const personalInfo = {
  firstName: 'Yahaira',
  lastName: 'Loayza',
  role: 'Ingeniera de Sistemas e Informática',
  headline:
    'Desarrollo soluciones digitales que combinan tecnología, diseño y experiencia para crear impacto real.',
  quote: 'Código que funciona. Diseño que conecta. Experiencias que transforman.',
  phone: '963 026 232',
  email: 'yaimet04@outlook.com',
  availability: 'Proyectos | Colaboraciones | Oportunidades'
};

export const navItems = [
  { label: 'Inicio', href: '/inicio', icon: Home },
  { label: 'Perfil', href: '/perfil', icon: User },
  { label: 'Proyectos', href: '/proyectos', icon: Briefcase },
  { label: 'Habilidades', href: '/Servicios', icon: Code2 },
  { label: 'Contacto', href: '/contacto', icon: Mail }
];

export const technologies = [
  {
    name: 'UI / UX',
    label: 'Research',
    logo: '/logos/uiux.jpg',
  },
  {
    name: 'Figma',
    label: 'Diseño',
    logo: '/logos/figma.png',
  },
  {
    name: 'HTML',
    label: 'Web',
    logo: '/logos/html.png',
  },
  {
    name: 'CSS',
    label: 'Estilos',
    logo: '/logos/css.png',
  },
  {
    name: 'JavaScript',
    label: 'Frontend',
    logo: '/logos/javascript.png',
  },
  {
    name: 'TypeScript',
    label: 'Escalable',
    logo: '/logos/typescript.png',
  },
  {
    name: 'React',
    label: 'Apps',
    logo: '/logos/react.png',
  },
  {
    name: 'Python',
    label: 'Programación',
    logo: '/logos/python.png',
  },
];

export const projectStats = [
  { label: 'Proyectos', value: '12+' },
  { label: 'Interfaces', value: '35+' },
  { label: 'Stack actual', value: 'React' }
];

export const contactItems = [
  { label: 'Teléfono', value: personalInfo.phone, icon: Phone },
  { label: 'Email', value: personalInfo.email, icon: Mail },
  { label: 'Disponible para', value: personalInfo.availability, icon: Sparkles }
];
