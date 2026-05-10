export const projects = [
  {
    id: 1,
    number: '01',
    year: '2025',
    name: 'SamOps',
    category: ['Dev'],
    tags: ['DevOps', 'Cloud', 'Microservices', 'AWS'],
    description:
      'Cloud observability & cost-optimization platform. Monitoring dashboards, CI/CD automation, and AI-powered code quality agents. Architecture microservices with Go, NestJS and Python — deployed on AWS.',
    color: 'dark',
    link: 'https://samops.app',
  },
  {
    id: 2,
    number: '02',
    year: '2025',
    name: 'Styleto',
    category: ['Dev'],
    tags: ['iOS', 'Android', 'AI', 'NestJS'],
    description:
      'Smart fashion mobile app combining AI and real-time experiences. Features digital wardrobe, outfit recommendations, virtual try-on and marketplace. Built with SwiftUI, Kotlin Jetpack Compose and NestJS.',
    color: 'orange',
  },
  {
    id: 3,
    number: '03',
    year: '2024',
    name: 'TMF Stock',
    category: ['Dev'],
    tags: ['Next.js', 'NestJS', 'MongoDB', 'Docker'],
    description:
      'Full-stack inventory & equipment management system for TMF Group. Stock tracking, in/out flows, and tool-loan management. Stack: Next.js / TypeScript, Tailwind CSS, NestJS, MongoDB, Docker.',
    color: 'dark',
  },
  {
    id: 4,
    number: '04',
    year: '2024',
    name: 'NoorCity',
    category: ['Dev'],
    tags: ['JavaFX', 'Symfony', 'Arduino', 'IoT'],
    description:
      'Smart city platform for urban street-lighting management. Desktop app (JavaFX), web interface (Symfony), and real-time Arduino sensor integration via ESP32.',
    color: 'orange',
  },
  {
    id: 5,
    number: '05',
    year: '2024',
    name: 'KCBIM',
    category: ['Dev'],
    tags: ['Web', 'CSS', 'Vercel'],
    description:
      'Web application deployed on Vercel. Front-end focused project demonstrating responsive design and modern CSS techniques.',
    color: 'dark',
    link: 'https://kcbim.vercel.app',
  },
];

export const featuredProjects = projects.slice(0, 3);
