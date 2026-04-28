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
    category: "Enterprise",
    tech: ["Spring Boot", "Angular", "SQL", "AWS", "Jenkins"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    accent: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    year: "2024",
    link: "#",
    // img: "/projects/project1.png",
  },
  {
    id: 2,
    title: "Sistema de Gestión Contable",
    description:
      "Plataforma contable con procesos de facturación, gestión de cobros y pagos, reportes precisos y mejoras en la eficiencia contable.",
    category: "Enterprise",
    tech: ["Spring Boot", "Angular", "SQL", "AWS", "Jenkins"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    accent: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    year: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "Portal de Clientes",
    description:
      "Sistema integrado de consulta para clientes que acceden a información de logística y contabilidad. Visualización de estados de envíos, facturas, pagos y reportes en tiempo real.",
    category: "Full Stack",
    tech: ["Spring Boot", "Angular", "SQL", "AWS"],
    gradient: "from-indigo-500/20 to-blue-600/20",
    accent: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    year: "2025",
    link: "#",
  },
  {
    id: 4,
    title: "Plataforma de Aprendizaje Online",
    description:
      "Plataforma educativa con sistema de videoconferencias, clases privadas e integración de pasarelas de pago. Desarrollado para Ideadecoders (Panamá).",
    category: "EdTech",
    tech: ["React JS", "Spring Boot", "PostgreSQL", "Pasarela de Pagos"],
    gradient: "from-purple-500/20 to-pink-600/20",
    accent: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    year: "2025",
    link: "#",
  },
  {
    id: 5,
    title: "Sistema de Pedidos para Restaurantes",
    description:
      "Aplicación web para gestión de pedidos en restaurantes con panel en tiempo real, historial de órdenes y administración de menú. Desarrollado para Versa Studio (Venezuela).",
    category: "Full Stack",
    tech: ["React JS", "Node.js", "Express.js", "MySQL"],
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    year: "2025",
    link: "#",
  },
  {
    id: 6,
    title: "Microservicios & APIs REST",
    description:
      "Arquitecturas de microservicios escalables con Spring Boot, autenticación JWT, documentación Swagger y despliegue en AWS.",
    category: "Backend",
    tech: ["Spring Boot", "Java", "AWS", "SQL"],
    gradient: "from-green-500/20 to-emerald-600/20",
    accent: "bg-green-500/10 text-green-300 border-green-500/20",
    year: "2026",
    link: "#",
  },
  {
    id: 7,
    title: "CI/CD Pipeline Automation",
    description:
      "Implementación de pipelines de integración y despliegue continuo con Jenkins, reduciendo tiempos de entrega y aumentando la calidad del software.",
    category: "DevOps",
    tech: ["Jenkins", "AWS", "Git"],
    gradient: "from-slate-500/20 to-gray-700/20",
    accent: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    year: "2026",
    link: "#",
  },
  {
    id: 8,
    title: "Dashboard Contable",
    description:
      "Módulo de reportes contables con mejoras en precisión de datos, generación automática de informes y seguimiento de operaciones financieras.",
    category: "SaaS",
    tech: ["Angular", "Spring Boot", "SQL"],
    gradient: "from-yellow-500/20 to-amber-600/20",
    accent: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    year: "2026",
    link: "#",
  },
];

export const projectsSummary = projects.slice(0, 3);