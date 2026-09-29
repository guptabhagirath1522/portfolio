export const navItems = ['About', 'Experience', 'Projects', 'Contact']

export const skills = {
  'Languages & Backend': [
    'Python',
    'Dart',
    'TypeScript',
    'JavaScript',
    'SQL',
    'FastAPI',
    'Node.js',
    'REST APIs',
    'WebSockets',
  ],
  'AI, Data & Scraping': [
    'LLMs',
    'RAG',
    'LangChain',
    'LangGraph',
    'NLP',
    'Vector Databases',
    'Playwright',
    'Selenium',
    'BeautifulSoup',
    'Scrapy',
    'Data Extraction',
    'PySpark',
  ],
  'Web & Frontend': [
    'React.js',
    'Next.js',
    'Flutter',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Responsive Design',
    'Component Architecture',
    'TanStack Table',
  ],
  'Databases & Cloud': [
    'PostgreSQL',
    'MongoDB',
    'Firebase',
    'Snowflake',
    'Databricks',
    'Apache Airflow',
    'dbt',
  ],
  'Tools & Delivery': [
    'Git',
    'GitHub',
    'Docker',
    'Postman',
    'CI/CD',
    'GitHub Actions',
    'FCM',
    'Google Maps API',
  ],
}

export const experiences = [
  {
    period: 'May — Aug 2026',
    role: 'Freelance Software Engineer',
    company: 'Ainable Labs',
    text: 'Built a Product Management module with 45+ reusable React/TypeScript components for product CRUD, bulk import, advanced search, and field management; integrated TanStack Table with server-side sorting, filtering, and pagination, with LLM-powered assistance. Engineered a full-stack BOM and inventory management module using React.js, Next.js, Python, and FastAPI, integrating LangChain, RAG, and vector databases supporting 10K+ records. Shipped Estimate Maker and Offer Maker modules with dynamic PDF generation and interactive pricing workflows.',
  },
  {
    period: 'Apr 2025 — Feb 2026',
    role: 'Software Engineer',
    company: 'AlongX Software',
    text: 'Engineered scalable Python data extraction and web scraping pipelines using Playwright, Selenium, BeautifulSoup, FastAPI, and REST APIs, processing 100K+ records. Built user-facing flows for authentication, payments, calendar scheduling, notifications, and profile management, integrating LLM-powered features to drive a 25% increase in user engagement. Developed AI-powered backend workflows using Python, FastAPI, LangChain, LLMs, RAG, and vector databases for intelligent search and retrieval.',
  },
  {
    period: 'Jul 2023 — Aug 2024',
    role: 'Software Developer',
    company: 'Krenno Labs',
    text: 'Developed responsive AI-powered web and mobile interfaces using Flutter, Dart, Next.js, and Tailwind CSS, integrating LLM APIs, real-time data, and intelligent search workflows to improve application performance and user experience by up to 60%. Developed full-stack AI-powered applications using React.js, Next.js, Python, FastAPI, and LangChain, integrating LLMs, RAG, vector databases, and REST APIs to enable semantic search across 10K+ scraped documents.',
  },
  {
    period: 'Sep — Nov 2022',
    role: 'Software Developer Intern',
    company: 'Flecks Labs',
    text: 'Built 3 cross-platform Flutter apps with pixel-perfect, responsive UIs and 100% client satisfaction. Optimized codebases for 40% faster load times, introduced reusable components and best-practice guidelines, and upgraded projects to the BLoC architecture, improving performance and code quality by 50%.'}
]

export const projects = [
  {
    number: '01',
    title: 'Moli',
    type: 'AI-powered legal / Mobile',
    description:
      'A real-time contract analysis platform with a stateful LangGraph-based AI agent using Hybrid RAG (BM25 + dense embeddings + cross-encoder reranking) for legal document workflows, clause extraction, and risk detection.',
    metrics: ['500+ active users', '45% faster assignment'],
    tags: ['Flutter', 'Python', 'LangChain', 'LangGraph'],
    accent: 'bg-[#b9d8ff]',
  },
  {
    number: '02',
    title: 'Bold & Agyl Website',
    type: 'Marketing / Web',
    description:
      'A high-performance, SEO-optimized website using Next.js SSR/SSG with code splitting, lazy loading, asset optimization, schema markup, and analytics tracking.',
    metrics: ['40%+ faster load time', '90+ Lighthouse score'],
    tags: ['Next.js', 'Tailwind CSS', 'GSAP'],
    accent: 'bg-[#d7f45e]',
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
