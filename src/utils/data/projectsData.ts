export type Project = {
    id: number;
    title: string;
    description: string;
    category: string;
    tech: string[];
    gradient: string;
    accent: string;
    year: string;
    link: string;
    img?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión Logística",
    description:
      "Plataforma logística para manejo procesos de exportación e importación, reportes precisos y reducción de errores operativos. Desarrollado para Nexus Logistics (Chile).",
    category: "Logistics System",
    tech: ["Spring Boot", "Angular", "SQL", "AWS", "Jenkins", "Docker", "Keycloak"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    accent: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    year: "2024",
    link: "",
    img: "/projects/project-operations.webp",
  },
  {
    id: 2,
    title: "Sistema de Gestión Contable",
    description:
      "Plataforma contable con procesos de facturación, gestión de cobros y pagos, reportes precisos y mejoras en la eficiencia contable.",
    category: "Financial System",
    tech: ["Spring Boot", "Angular", "SQL", "AWS", "Jenkins", "Docker", "Keycloak"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    accent: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    year: "2025",
    link: "",
    img: "/projects/project-accounting.webp",
  },
  {
    id: 3,
    title: "Portal de Clientes",
    description:
      "Sistema integrado de consulta para clientes que acceden a información de logística y contabilidad. Visualización de estados de envíos, facturas, pagos y reportes en tiempo real.",
    category: "Customer Platform",
    tech: ["Spring Boot", "Angular", "SQL", "AWS", "Jenkins", "Docker"],
    gradient: "from-indigo-500/20 to-blue-600/20",
    accent: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    year: "2025",
    link: "",
    img: "/projects/project-clients.webp",
  },
  {
    id: 4,
    title: "Plataforma de Aprendizaje Online",
    description:
      "Plataforma educativa con sistema de videoconferencias, clases privadas e integración de pasarelas de pago. Desarrollado para Ideadecoders (Panamá).",
    category: "EdTech Platform",
    tech: ["React JS", "Spring Boot", "PostgreSQL", "Pasarela de Pagos"],
    gradient: "from-purple-500/20 to-pink-600/20",
    accent: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    year: "2023",
    link: "",
    img: "/projects/project-homework.webp",
  },
  {
    id: 5,
    title: "Sistema de Pedidos para Restaurantes",
    description:
      "Aplicación web para gestión de pedidos en restaurantes con panel en tiempo real, historial de órdenes y administración de menú. Desarrollado para Versa Studio (Venezuela).",
    category: "Restaurant Management System",
    tech: ["React JS", "Node.js", "Express.js", "MySQL"],
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    year: "2022",
    link: "",
    img: "/projects/project-orders.webp",
  },
  {
    id: 6,
    title: "Sistema de Inventario y Ventas",
    description:
      "Diciembre 2020 – Enero 2021. Sistema web para control de inventario y ventas para negocio de equipos tecnológicos. Desarrollado para World Computer (Venezuela).",
    category: "Inventory & Sales System",
    tech: ["PHP", "JavaScript", "PostgreSQL", "Bootstrap"],
    gradient: "from-green-500/20 to-emerald-600/20",
    accent: "bg-green-500/10 text-green-300 border-green-500/20",
    year: "2021",
    link: "",
    img: "/projects/project-worldcomputer.webp",
  },
];

export const projectsSummary = projects.slice(0, 6);