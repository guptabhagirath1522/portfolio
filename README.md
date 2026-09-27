# Bhagirath Gupta — Portfolio

> Building things that move people.

I'm Bhagirath Gupta, a full-stack and mobile developer building cross-platform apps and high-performance web products. I have experience across web and cross-platform apps, working across freelance and full-time roles, and I care about the details that make products feel inevitable.

- **Email:** [i.guptabhagirath@gmail.com](mailto:i.guptabhagirath@gmail.com)
- **Phone:** +91 9452658365
- **GitHub:** [github.com/guptabhagirath1522](https://github.com/guptabhagirath1522)
- **LinkedIn:** [linkedin.com/in/bhagirath-gupta](https://linkedin.com/in/bhagirath-gupta)

---

## Skills

| Area | Skills |
| --- | --- |
| Web | React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap, SEO |
| Backend & APIs | Node.js, Express.js, REST APIs, Payment Gateway Integration |
| AI & Data | Generative AI, AI Agent Integration, Chatbots, OpenAI & Gemini APIs, Python, SQL, Data Analysis |
| Cloud & DB | Firebase, Supabase, Appwrite, MySQL, SQL Server, MongoDB |
| Mobile | Flutter, Dart, Android, iOS |
| Tools | Git, GitHub, Postman, Docker, CI/CD, Agile/Scrum |

---

## Experience

### Freelance Software Engineer — Ainable Labs
*May 2026 – August 2026 · Remote*

- Built a Product Management module with 45+ components for product CRUD, bulk import, advanced search, and field management, integrating TanStack Table with server-side sorting, filtering, and pagination using React and TypeScript.
- Developed an end-to-end Manufacturing Management system covering production batch tracking, BOM and process template builders, configuration, step-by-step execution, yield reporting, quality thresholds, and batch-level production reports.
- Engineered Estimate Maker and Offer Maker modules with dynamic PDF generation, interactive pricing workflows, and list/detail views, delivering 2 revenue-impacting features.

### Software Engineer — AlongX Software
*April 2025 – February 2026 · Hyderabad (Remote)*

- Developed cross-platform applications with Flutter for Android, iOS, Web, and Windows, expanding product reach by 40%.
- Architected and integrated critical features including authentication, payment systems, calendar scheduling, notifications, and profile management, driving a 25% increase in user engagement.
- Automated multi-platform deployment workflows using CI/CD pipelines for Play Store, App Store, and Microsoft Store, ensuring compliance standards and reducing deployment cycles by 60%.
- Led client engagement and team mentorship by translating business requirements into scalable technical solutions, supervising interns, and conducting code reviews to improve productivity and code quality.

### Front End Developer Intern — Dreams Travel and Tour
*January 2025 – April 2025 · Noida, UP*

- Built responsive and SEO-optimized websites using Next.js, integrating REST APIs and third-party libraries to deliver seamless user experiences, contributing to a 35% increase in company revenue.
- Engineered features for a CRM web application, implementing file upload, payment gateways, CRUD operations, and form validation, streamlining internal workflows by 60%.
- Collaborated with UI/UX designers and backend developers to deliver modern, user-friendly interfaces, improving task completion rates by 40%.

### Software Developer — Krenno Labs
*July 2023 – August 2024 · Remote*

- Developed responsive frontends for web and mobile applications using Next.js, Tailwind CSS, and Flutter, enhancing performance and user experience by up to 60%.
- Implemented comprehensive unit tests, improved codebases, and ensured scalability to deliver high-performing applications.
- Collaborated with cross-functional teams of designers and developers to deliver scalable, maintainable, and high-quality solutions within deadlines.

### Software Developer Intern — Flecks Labs
*September 2022 – November 2022 · Remote*

- Implemented robust and highly responsive UIs, mimicking design models with pixel-perfect accuracy, achieving 100% client satisfaction.
- Streamlined and optimized the codebase for multiple applications, leading to a 40% reduction in load times and improving overall user experience.
- Wrote independent and reusable code snippets, introducing 30% consistency throughout the codebases of multiple projects.
- Built 3 cross-platform applications with Flutter using optimal state management and design patterns.
- Devised proper guidelines adhering to Flutter's best practices, streamlining the development process of the company by 30%.
- Upgraded existing projects following the BLoC architecture pattern, improving the apps' performance and code quality by 50%.

---

## Selected Projects

| # | Project | Type | Highlights | Stack |
| --- | --- | --- | --- | --- |
| 01 | **Bold & Agyl Website** | Marketing / Web | 40%+ faster load time, 90+ Lighthouse score | Next.js, Tailwind CSS, GSAP |
| 02 | **Moli** | Field service / Mobile | 500+ active users, 45% faster assignment | Flutter, WebSockets, Plaid |
| 03 | **Sandzz: Oasis of Life** | Device control / Mobile | 5 permission levels, UPnP + SOAP control | Flutter, UPnP, Firebase |
| 04 | **Civiq — Member App** | Community / Mobile | Multi-community access, OTP + QR visitor passes | Flutter, Firebase, Razorpay |
| 05 | **Civiq Admin** | Community operations / Web | Role-based access, Member + Gatekeeper sync | Flutter Web, Firebase, RBAC |
| 06 | **Dealberg — Web Platform** | B2B procurement / Web | 100+ companies served, 300+ gifting brands | Next.js, Gatsby, B2B |
| 07 | **DealBerg — Customer App** | Procurement / Mobile | One-stop catalog, ordering + payments | Flutter, BLoC, Payments |
| 08 | **Cariance** | AI career exploration / Cross-platform | 7 platform targets, AI-powered career analysis | Flutter, Firebase, ChatGPT + Gemini |

- **Bold & Agyl Website:** a high-performance business website engineered for discoverability, speed, and a confident digital presence.
- **Moli:** a real-time field-service and court-booking app that keeps assignments, earnings, and payouts moving.
- **Sandzz: Oasis of Life:** a connected audio hardware controller with robust local discovery and flexible role-based access.
- **Civiq — Member App:** a resident experience for gated communities with onboarding, notices, payments, visitors, complaints, and amenity bookings.
- **Civiq Admin:** an operations command center for resident databases, staff oversight, collections, complaints, notices, and secure role-based access.
- **Dealberg — Web Platform:** an enterprise procurement and corporate gifting platform serving 100+ companies across India with streamlined purchasing workflows.
- **DealBerg — Customer App:** a mobile sourcing and ordering experience for packaging, office, warehouse, and gifting essentials with integrated payments.
- **Cariance:** a cross-platform student companion that turns self-discovery into an engaging career journey through guided reflection, AI coaching, and progress-based exploration.

---

## About this website

Built with [Next.js](https://nextjs.org) 16, React 19, TypeScript, [Tailwind CSS](https://tailwindcss.com) 4, and [GSAP](https://gsap.com) for scroll and slider animations. It includes a light/dark theme toggle, a loading curtain, and a projects slider that supports buttons on desktop and swipe gestures on mobile.

### Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

### Project structure

```
app/
  page.tsx              Page layout: loader, theme, and scroll animations
  layout.tsx            Page metadata and root HTML
  icon.tsx              "BG" browser tab icon
  apple-icon.tsx        "BG" home-screen icon
  globals.css           Theme colors and light/dark overrides
components/portfolio/   One file per section (header, hero, about, experience, projects, contact, footer)
lib/portfolio-data.ts   All content: skills, experience, and projects
```

To update skills, experience, or projects on the site, edit `lib/portfolio-data.ts`.
