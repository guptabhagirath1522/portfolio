export const navItems = ['About', 'Experience', 'Projects', 'Contact']

export const skills = {
  Web: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
    'SEO',
  ],
  'Backend & APIs': ['Node.js', 'Express.js', 'REST APIs', 'Payment Gateway Integration'],
  'AI & Data': [
    'Generative AI',
    'AI Agent Integration',
    'Chatbots',
    'OpenAI & Gemini APIs',
    'Python',
    'SQL',
    'Data Analysis',
  ],
  'Cloud & DB': ['Firebase', 'Supabase', 'Appwrite', 'MySQL', 'SQL Server', 'MongoDB'],
  Mobile: ['Flutter', 'Dart', 'Android', 'iOS'],
  Tools: ['Git', 'GitHub', 'Postman', 'Docker', 'CI/CD', 'Agile/Scrum'],
}

export const experiences = [
  {
    period: 'May — Aug 2026',
    role: 'Freelance Software Engineer',
    company: 'Ainable Labs',
    text: 'Built a 45+ component Product Management module with bulk import, advanced search, and TanStack Table server-side sorting, filtering, and pagination. Developed an end-to-end Manufacturing Management system with batch tracking, BOM and process templates, yield reporting, and quality thresholds, plus Estimate and Offer Maker modules with dynamic PDF generation.',
  },
  {
    period: 'Apr 2025 — Feb 2026',
    role: 'Software Engineer',
    company: 'AlongX Software',
    text: 'Developed Flutter apps for Android, iOS, Web, and Windows, expanding product reach by 40%. Integrated authentication, payments, scheduling, notifications, and profiles, driving 25% higher engagement, and automated store deployments with CI/CD, cutting release cycles by 60%. Mentored interns and led code reviews.',
  },
  {
    period: 'Jan — Apr 2025',
    role: 'Front End Developer Intern',
    company: 'Dreams Travel and Tour',
    text: 'Built responsive, SEO-optimized Next.js websites contributing to a 35% revenue increase. Engineered CRM features including file upload, payment gateways, CRUD, and form validation, streamlining internal workflows by 60%, and partnered with designers and backend developers to improve task completion by 40%.',
  },
  {
    period: 'Jul 2023 — Aug 2024',
    role: 'Software Developer',
    company: 'Krenno Labs',
    text: 'Developed responsive web and mobile frontends with Next.js, Tailwind CSS, and Flutter, improving performance and user experience by up to 60%. Implemented comprehensive unit tests, improved codebases for scalability, and collaborated with cross-functional teams to ship maintainable solutions on schedule.',
  },
  {
    period: 'Sep — Nov 2022',
    role: 'Software Developer Intern',
    company: 'Flecks Labs',
    text: 'Built 3 cross-platform Flutter apps with pixel-perfect, responsive UIs and 100% client satisfaction. Optimized codebases for 40% faster load times, introduced reusable components and best-practice guidelines, and upgraded projects to the BLoC architecture, improving performance and code quality by 50%.',
  },
]

export const projects = [
  {
    number: '01',
    title: 'Bold & Agyl Website',
    type: 'Marketing / Web',
    description:
      'A high-performance business website engineered for discoverability, speed, and a confident digital presence.',
    metrics: ['40%+ faster load time', '90+ Lighthouse score'],
    tags: ['Next.js', 'Tailwind CSS', 'GSAP'],
    accent: 'bg-[#d7f45e]',
  },
  {
    number: '02',
    title: 'Moli',
    type: 'Field service / Mobile',
    description:
      'A real-time field-service and court-booking app that keeps assignments, earnings, and payouts moving.',
    metrics: ['500+ active users', '45% faster assignment'],
    tags: ['Flutter', 'WebSockets', 'Plaid'],
    accent: 'bg-[#b9d8ff]',
  },
  {
    number: '03',
    title: 'Sandzz: Oasis of Life',
    type: 'Device control / Mobile',
    description:
      'A connected audio hardware controller with robust local discovery and flexible role-based access.',
    metrics: ['5 permission levels', 'UPnP + SOAP control'],
    tags: ['Flutter', 'UPnP', 'Firebase'],
    accent: 'bg-[#f3c4d9]',
  },
  {
    number: '04',
    title: 'Civiq — Member App',
    type: 'Community / Mobile',
    description:
      'A resident experience for gated communities with onboarding, notices, payments, visitors, complaints, and amenity bookings.',
    metrics: ['Multi-community access', 'OTP + QR visitor passes'],
    tags: ['Flutter', 'Firebase', 'Razorpay'],
    accent: 'bg-[#f6d78a]',
  },
  {
    number: '05',
    title: 'Civiq Admin',
    type: 'Community operations / Web',
    description:
      'An operations command center for resident databases, staff oversight, collections, complaints, notices, and secure role-based access.',
    metrics: ['Role-based access', 'Member + Gatekeeper sync'],
    tags: ['Flutter Web', 'Firebase', 'RBAC'],
    accent: 'bg-[#c7b9ff]',
  },
  {
    number: '06',
    title: 'Dealberg — Web Platform',
    type: 'B2B procurement / Web',
    description:
      'An enterprise procurement and corporate gifting platform serving 100+ companies across India with streamlined purchasing workflows.',
    metrics: ['100+ companies served', '300+ gifting brands'],
    tags: ['Next.js', 'Gatsby', 'B2B'],
    accent: 'bg-[#a9e4d0]',
  },
  {
    number: '07',
    title: 'DealBerg — Customer App',
    type: 'Procurement / Mobile',
    description:
      'A mobile sourcing and ordering experience for packaging, office, warehouse, and gifting essentials with integrated payments.',
    metrics: ['One-stop catalog', 'Ordering + payments'],
    tags: ['Flutter', 'BLoC', 'Payments'],
    accent: 'bg-[#f0b7a4]',
  },
  {
    number: '08',
    title: 'Cariance',
    type: 'AI career exploration / Cross-platform',
    description:
      'A cross-platform student companion that turns self-discovery into an engaging career journey through guided reflection, AI coaching, and progress-based exploration.',
    metrics: ['7 platform targets', 'AI-powered career analysis'],
    tags: ['Flutter', 'Firebase', 'ChatGPT + Gemini'],
    accent: 'bg-[#b9e0f4]',
  },
]

export type Project = (typeof projects)[number]
