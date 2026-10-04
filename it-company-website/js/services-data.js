/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/services-data.js
 * Description: Canonical specification data store for all 12 PDR services.
 * Specification: TechNova Solutions PDR (Section 8, 9, 10)
 */

const SERVICES_DATA = {
  "website-development": {
    slug: "website-development",
    name: "Website Development",
    pageTitle: "Website Development — Service Details | TechNova Solutions",
    metaDescription: "Corporate websites, brand portals, and accessible responsive web experiences built with modern semantic markup and high performance standards.",
    heroLead: "Designing and developing high-performance corporate websites, product landing pages, and content management portals that establish credibility and engage customers.",
    overviewLead: "TechNova Solutions delivers fast, accessible, and search-optimized websites designed to represent growing businesses with professional authority.",
    overviewDesc: "From corporate identity websites to marketing hubs and product portals, our engineering focuses on responsive performance, clean code architecture, accessible navigation (WCAG 2.1 AA), and seamless content management.",
    deliverablesLead: "Concrete website solutions engineered for performance, discoverability, and brand credibility.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        title: "Corporate Identity Websites",
        desc: "Professional multi-page corporate websites communicating company values, leadership, service capabilities, and contact touchpoints."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        title: "Marketing & Campaign Hubs",
        desc: "Conversion-optimized landing experiences with structured call-to-actions, enquiry capture, and search-aligned content sections."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
        title: "Responsive Web Portals",
        desc: "Adaptive web portals engineered with flexible grid layouts delivering seamless legibility on mobile, tablet, and widescreen displays."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: "Content Management Websites",
        desc: "Modular websites integrated with intuitive administrative workflows allowing non-technical editors to publish news, articles, and updates."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Product Showcase Catalogs",
        desc: "Structured product catalogs featuring detailed specification sheets, media galleries, filtering options, and enquiry buttons."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
        title: "Landing Page Systems",
        desc: "Componentized landing page architectures designed for marketing campaigns, event registrations, and targeted lead acquisition."
      }
    ],
    process: [
      { step: 1, name: "Discovery", desc: "Brand positioning analysis, audience demographics, content inventory, and project requirements definition." },
      { step: 2, name: "Information Architecture", desc: "Sitemap planning, content hierarchy modeling, URL structure mapping, and wireframe structuring." },
      { step: 3, name: "UI/UX Design", desc: "Design token setup, typographic hierarchy, responsive layout prototyping, and brand style harmonization." },
      { step: 4, name: "Frontend Engineering", desc: "Clean semantic HTML5 markup, responsive modern CSS, modular JavaScript, and asset optimization." },
      { step: 5, name: "Performance & SEO", desc: "Core Web Vitals tuning, meta tag configuration, structured data injection, and image compression." },
      { step: 6, name: "Cross-Device Testing", desc: "Multi-browser rendering checks, mobile viewport validation, keyboard navigation, and WCAG auditing." },
      { step: 7, name: "Deployment & Handover", desc: "Production hosting configuration, SSL certificate deployment, CDN caching, and handover documentation." }
    ],
    capabilities: [
      "Semantic HTML5 & Modern CSS Layouts",
      "Mobile-First Responsive Design (4 Breakpoints)",
      "Core Web Vitals Performance Optimization",
      "WCAG 2.1 AA Accessibility Standards",
      "Clean Semantic SEO & Structured Data",
      "Content Management System Integration"
    ],
    technologies: [
      "<strong>Markup:</strong> Semantic HTML5, WAI-ARIA 1.2",
      "<strong>Styling:</strong> Vanilla Modern CSS3, Custom Design Tokens",
      "<strong>Scripting:</strong> Vanilla JavaScript (ES6+)",
      "<strong>Tooling:</strong> Vite, PostCSS, Lighthouse",
      "<strong>Infrastructure:</strong> Apache, Nginx, Cloudflare CDN"
    ],
    benefits: [
      "Establishes professional brand credibility online",
      "Maximizes organic search discoverability and crawlability",
      "Delivers fast load times across all network conditions",
      "Ensures full usability on mobile, tablet, and desktop",
      "Provides clear information hierarchy for prospective clients"
    ],
    relatedProjects: [
      {
        name: "SmartCampus",
        badge: "Education (Demo Concept)",
        desc: "Comprehensive educational institution web portal and student information platform built with responsive components.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        link: "case-study.html?project=smartcampus"
      },
      {
        name: "HealthSync Portal",
        badge: "Healthcare (Demo Concept)",
        desc: "Patient appointment scheduling and clinical service overview web platform engineered for responsive cross-browser usability.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        link: "case-study.html?project=healthsync"
      }
    ],
    ctaTitle: "Ready to Build Your Website?",
    ctaLead: "Consult with our frontend engineers to define your sitemap, design tokens, and technical requirements."
  },

  "web-application-development": {
    slug: "web-application-development",
    name: "Web Application Development",
    pageTitle: "Web Application Development — Service Details | TechNova Solutions",
    metaDescription: "Explore TechNova Solutions' Web Application Development services: enterprise portals, dashboards, management systems, and our disciplined 7-stage development process.",
    heroLead: "Engineering mission-critical web applications, enterprise client portals, and cloud-native management software built for scalability, reliability, and security.",
    overviewLead: "Web application development at TechNova Solutions bridges modern frontend user experience with resilient backend architecture. We build tailored software that automates business processes, connects customer touchpoints, and securely integrates with existing databases.",
    overviewDesc: "Whether you require an internal team administration platform or a customer-facing interactive portal, our solutions are architected using modular component patterns, microservices, and modern database structures designed to handle growing transaction volumes.",
    deliverablesLead: "Concrete web application platforms delivered according to enterprise specifications.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        title: "Business Portals",
        desc: "Unified enterprise portals connecting staff, operational workflows, and corporate documentation across departments."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: "Customer Portals",
        desc: "Self-service user dashboards for invoice management, support ticketing, service requests, and profile maintenance."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Dashboards",
        desc: "Data visualization dashboards displaying operational KPIs, financial summaries, and activity telemetry in real time."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
        title: "Management Systems",
        desc: "Role-based administration consoles for inventory control, employee records, order fulfillment, and compliance tracking."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        title: "SaaS Applications",
        desc: "Web-based software applications providing modular user accounts, workflow access, and dashboard views."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
        title: "Internal Tools",
        desc: "Bespoke back-office utilities and data processors engineered to automate repetitive daily tasks for operations teams."
      }
    ],
    process: [
      { step: 1, name: "Discovery", desc: "Stakeholder interviews, requirements capture, target user analysis, and technical constraint definitions." },
      { step: 2, name: "Planning", desc: "System architecture modeling, database schema specification, API design, and delivery milestone planning." },
      { step: 3, name: "UI/UX", desc: "Interactive wireframes, design token systems, clickable prototypes, and accessibility audits." },
      { step: 4, name: "Development", desc: "Sprint-based modular coding, RESTful integration, frontend state engineering, and code reviews." },
      { step: 5, name: "Testing", desc: "Unit testing, end-to-end user flows, security audits, performance profiling, and browser cross-testing." },
      { step: 6, name: "Deployment", desc: "Application deployment, server environment configuration, domain mapping, and release verification." },
      { step: 7, name: "Support", desc: "Post-launch technical assistance, maintenance updates, bug fixes, and feature enhancements." }
    ],
    capabilities: [
      "Role-Based Access Control (RBAC)",
      "RESTful API Integration",
      "Real-time Notifications & Alerts",
      "Responsive Multi-Device Interfaces",
      "Form Validation & Data Handling",
      "Operational Reporting & Dashboards"
    ],
    technologies: [
      "<strong>Frontend:</strong> React, Vite, Modern CSS3, HTML5",
      "<strong>Backend:</strong> Node.js, PHP (Laravel)",
      "<strong>Database:</strong> PostgreSQL, MySQL",
      "<strong>Infrastructure:</strong> Docker, AWS Cloud",
      "<strong>Tooling:</strong> Git, Browser DevTools, Figma"
    ],
    benefits: [
      "Centralizes fragmented business workflows",
      "Eliminates manual spreadsheet errors",
      "Enables 24/7 web access across remote teams",
      "Built to scale with growing user volumes",
      "Supports secure application workflows and role permissions"
    ],
    relatedProjects: [
      {
        name: "SmartCampus",
        badge: "Education (Demo Concept)",
        desc: "Comprehensive educational institution management portal and student dashboard built with React, PHP, and MySQL.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        link: "case-study.html?project=smartcampus"
      },
      {
        name: "HealthSync Portal",
        badge: "Healthcare (Demo Concept)",
        desc: "Clinical consultation booking and records management platform built with React, Node.js, and PostgreSQL.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        link: "case-study.html?project=healthsync"
      }
    ],
    ctaTitle: "Discuss Your Project",
    ctaLead: "Connect with our software architects to review your web application specifications and obtain an execution timeline."
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    pageTitle: "Mobile App Development — Service Details | TechNova Solutions",
    metaDescription: "Cross-platform iOS and Android mobile engineering: native performance, offline sync, real-time push alerts, and secure backend integration.",
    heroLead: "Engineering cross-platform and native mobile applications for iOS and Android that deliver responsive touch experiences and connect seamlessly with cloud backends.",
    overviewLead: "TechNova Solutions builds reliable mobile applications that extend your digital products into the hands of your customers and field workforce.",
    overviewDesc: "Leveraging cross-platform frameworks such as Flutter and React Native, we engineer unified codebases that reduce time to market without sacrificing native interface speed, hardware sensor access, or offline data synchronization.",
    deliverablesLead: "Production-ready mobile solutions deployed to Apple App Store and Google Play Store.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
        title: "Customer Companion Apps",
        desc: "Customer-facing mobile apps for account management, transaction tracking, appointment booking, and profile controls."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        title: "Field Service & Workforce Apps",
        desc: "Mobile utilities enabling field technicians and inspectors to capture data, log maintenance tasks, and verify checklists."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
        title: "E-Commerce & Retail Apps",
        desc: "Mobile shopping apps featuring catalog filtering, secure in-app payments, cart persistence, and order tracking notifications."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        title: "Healthcare Patient Portals",
        desc: "Mobile health apps providing secure patient consultation booking, lab report downloads, and prescription alerts."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Executive Mobile Dashboards",
        desc: "On-the-go management dashboards providing executives with key business metrics, financial graphs, and approval queues."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
        title: "Offline-First Mobile Utilities",
        desc: "Applications engineered with local SQLite/Room storage that function flawlessly in low-connectivity environments."
      }
    ],
    process: [
      { step: 1, name: "Device Discovery", desc: "User workflow mapping, target OS support (iOS/Android), hardware integration scoping, and store guidelines." },
      { step: 2, name: "Mobile Architecture", desc: "State management selection, API schema synchronization, offline cache design, and token authentication." },
      { step: 3, name: "Touch UI/UX", desc: "Mobile-first prototypes, touch gesture mapping, platform-specific navigation conventions, and accessibility." },
      { step: 4, name: "App Engineering", desc: "Cross-platform mobile coding using Flutter or React Native, native module bridging, and API integration." },
      { step: 5, name: "Device Lab Testing", desc: "Testing across diverse screen resolutions, OS versions, battery efficiency tests, and network simulations." },
      { step: 6, name: "Store Deployment", desc: "Apple App Store and Google Play Store package preparation, code signing, metadata setup, and submission." },
      { step: 7, name: "Monitoring & Updates", desc: "Post-release crash monitoring, analytics tracking, OS compatibility updates, and feature rollouts." }
    ],
    capabilities: [
      "Single Cross-Platform Codebase (iOS & Android)",
      "Offline SQLite Caching & Background Sync",
      "Push Notifications & Deep Linking",
      "Biometric Authentication (Face ID, Fingerprint)",
      "Camera, GPS Location, & Sensor Integration",
      "App Store & Google Play Release Management"
    ],
    technologies: [
      "<strong>Frameworks:</strong> Flutter, Dart, React Native, TypeScript",
      "<strong>Backend:</strong> Node.js, PHP REST APIs, Firebase",
      "<strong>Local Data:</strong> SQLite, Hive, Secure Encrypted Storage",
      "<strong>Deployment:</strong> Apple App Store, Google Play Console",
      "<strong>Diagnostics:</strong> Firebase Crashlytics, Sentry"
    ],
    benefits: [
      "Reach both iOS and Android users from a unified codebase",
      "Increase customer retention through timely push notifications",
      "Ensure uninterrupted offline productivity for field employees",
      "Secure sensitive data on device using hardware-backed biometrics",
      "Accelerate time to market compared with separate native teams"
    ],
    relatedProjects: [
      {
        name: "HealthSync Portal",
        badge: "Healthcare (Demo Concept)",
        desc: "Clinical consultation booking and records management companion application built for cross-device healthcare workflows.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        link: "case-study.html?project=healthsync"
      },
      {
        name: "RetailPulse Engine",
        badge: "Retail & E-commerce (Demo Concept)",
        desc: "Retail store inventory and real-time sales telemetry mobile utility for store supervisors and fulfillment staff.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
        link: "case-study.html?project=retailpulse"
      }
    ],
    ctaTitle: "Start Your Mobile App Project",
    ctaLead: "Consult with our mobile architects to explore cross-platform frameworks, store deployment guidelines, and release roadmaps."
  },

  "saas-development": {
    slug: "saas-development",
    name: "SaaS Development",
    pageTitle: "SaaS Development — Service Details | TechNova Solutions",
    metaDescription: "Multi-tenant cloud SaaS architecture: subscription billing, role-based tenant isolation, modular user administration, and automated onboarding.",
    heroLead: "Architecting scalable Software-as-a-Service platforms engineered with multi-tenant data isolation, subscription lifecycles, and self-service administration.",
    overviewLead: "TechNova Solutions designs and develops commercial SaaS applications from the ground up, helping software creators and businesses launch robust cloud subscription products.",
    overviewDesc: "We architect multi-tenant database patterns, self-serve tenant onboarding, recurring billing integrations (Stripe, Razorpay), automated usage tracking, and role-based permissions that scale gracefully with user demand.",
    deliverablesLead: "Enterprise-grade cloud software products built for recurring revenue and self-service growth.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        title: "Multi-Tenant Web Software",
        desc: "Shared cloud infrastructure engineered with strict logical data isolation across individual business tenants and accounts."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>',
        title: "Subscription & Billing Engines",
        desc: "Automated recurring subscription billing supporting tiered plans, prorated upgrades, trial periods, and automated invoices."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: "Tenant Admin Consoles",
        desc: "Organization-level portals allowing customer administrators to manage team seats, invite colleagues, and configure permissions."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Customer Self-Service Dashboards",
        desc: "Interactive dashboards displaying account usage, telemetry, downloadable invoices, and self-service settings."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>',
        title: "Team Collaboration Tools",
        desc: "Built-in shared activity streams, comments, document sharing, and audit logging for multi-user organizational accounts."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
        title: "Public Developer APIs & Webhooks",
        desc: "Outbound webhook dispatchers and public API keys enabling customer development teams to integrate their workflows."
      }
    ],
    process: [
      { step: 1, name: "Tenancy Modeling", desc: "Defining tenant isolation strategies, pricing tiers, feature gate models, and subscription lifecycles." },
      { step: 2, name: "Database Architecture", desc: "Structuring multi-tenant relational schemas, tenant-scoping middleware, and indexing for high query volumes." },
      { step: 3, name: "Tenant UX Prototyping", desc: "Designing self-service onboarding flows, checkout steps, organization settings, and member invite screens." },
      { step: 4, name: "Core Engine Build", desc: "Engineering authentication, role-based access control, billing webhooks, and core software workflows." },
      { step: 5, name: "Multi-Tenant Testing", desc: "Executing cross-tenant data leak tests, concurrency stress checks, and automated billing failure simulations." },
      { step: 6, name: "Cloud Deployment", desc: "Deploying containerized microservices, auto-scaling groups, SSL termination, and CDN edge caching." },
      { step: 7, name: "Scalability Monitoring", desc: "Monitoring tenant database load, API response latencies, subscription churn metrics, and cache efficiency." }
    ],
    capabilities: [
      "Multi-Tenant Schema & Logical Data Isolation",
      "Automated Subscription Lifecycle & Invoicing",
      "Self-Serve Customer Onboarding & Team Invites",
      "Granular Role-Based Access Control (RBAC)",
      "Webhooks & Public Integration APIs",
      "Centralized Audit Logging & Activity Trails"
    ],
    technologies: [
      "<strong>Backend:</strong> Node.js, PHP (Laravel / PDO), TypeScript",
      "<strong>Frontend:</strong> React, Vanilla JS, Modular CSS3",
      "<strong>Database:</strong> PostgreSQL (Row-Level Security), Redis",
      "<strong>Payments:</strong> Stripe Billing API, Razorpay Subscriptions",
      "<strong>Infrastructure:</strong> Docker, AWS Cloud, Cloudflare"
    ],
    benefits: [
      "Launch recurring-revenue software with production-grade tenant isolation",
      "Automate payment collection, failed payment retries, and invoices",
      "Enable enterprise customers to manage their own teams and permissions",
      "Scale computing resources automatically based on active tenant workloads",
      "Provide a foundation for high-margin, scalable subscription business models"
    ],
    relatedProjects: [
      {
        name: "BusinessFlow CRM",
        badge: "Business Software (Demo Product)",
        desc: "Multi-user enterprise CRM platform featuring modular customer pipelines, team roles, and subscription tier management.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
        link: "product-details.html"
      },
      {
        name: "PropertyFlow Platform",
        badge: "Real Estate (Demo Concept)",
        desc: "Cloud-hosted multi-tenant real estate portfolio and lease management SaaS platform with automated payment workflows.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        link: "case-study.html?project=propertyflow"
      }
    ],
    ctaTitle: "Engineer Your SaaS Product",
    ctaLead: "Discuss multi-tenant architecture, billing integrations, and infrastructure scaling with our SaaS engineers."
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    pageTitle: "UI/UX Design — Service Details | TechNova Solutions",
    metaDescription: "Human-centered product design: design systems, interactive prototypes, accessibility audits, and workflow wireframes for complex enterprise applications.",
    heroLead: "Crafting intuitive user interfaces, cohesive design systems, and friction-free user journeys for enterprise software and digital applications.",
    overviewLead: "TechNova Solutions bridges functional engineering with thoughtful visual design. We turn complex data-heavy workflows into clean, navigable interfaces that enhance user productivity.",
    overviewDesc: "Our design methodology combines user research, task-flow mapping, clickable prototyping, accessibility compliance (WCAG 2.1 AA), and scalable design token systems that seamlessly transition to frontend development.",
    deliverablesLead: "Design system assets, wireframes, and prototypes engineered for modern digital products.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
        title: "Enterprise Design Systems",
        desc: "Centralized component libraries containing design tokens for color, typography, spacing, shadows, and interactive UI states."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Interactive Prototypes",
        desc: "Clickable, high-fidelity prototypes simulating real user journeys to validate workflows prior to frontend coding."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: "Complex Workflow Wireframes",
        desc: "Structural architectural wireframes organizing dense multi-step business procedures into clear, intuitive step-by-step screens."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        title: "Data-Dense Dashboard Interfaces",
        desc: "Scannable data visualizations, table layouts, and analytical overview cards optimized for high information density."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
        title: "Mobile & Responsive UX Layouts",
        desc: "Touch-friendly adaptive UI patterns tailored to thumb zones, gesture interactions, and constrained mobile viewports."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>',
        title: "WCAG 2.1 AA Accessibility Audits",
        desc: "Rigorous accessibility evaluations testing color contrast, keyboard focus indicators, screen reader labels, and touch targets."
      }
    ],
    process: [
      { step: 1, name: "User Research", desc: "Stakeholder interviews, user persona creation, pain point identification, and task analysis." },
      { step: 2, name: "Information Architecture", desc: "Content modeling, navigation hierarchies, card sorting exercises, and user flow mapping." },
      { step: 3, name: "Low-Fidelity Wireframes", desc: "Rapid conceptual sketching and structural wireframing focused on page layout and content prioritization." },
      { step: 4, name: "Design System Assembly", desc: "Establishing typography scales, color token palettes, spacing scales, and atomic component states." },
      { step: 5, name: "High-Fidelity UI Design", desc: "Crafting polished pixel-perfect interface screens across responsive desktop and mobile viewports." },
      { step: 6, name: "Interactive Prototyping", desc: "Linking screens into clickable prototypes to evaluate transitions, micro-interactions, and usability." },
      { step: 7, name: "Developer Handoff", desc: "Exporting clean vector assets, documenting CSS design token mappings, and guiding implementation." }
    ],
    capabilities: [
      "User Journey Mapping & Task Flow Optimization",
      "Atomic Design System Construction in Figma",
      "WCAG 2.1 AA Color Contrast & Keyboard Accessibility",
      "Responsive Desktop, Tablet, and Mobile Prototyping",
      "Data Visualization & Information Density Management",
      "Frontend-Ready Component Specifications"
    ],
    technologies: [
      "<strong>Design Tools:</strong> Figma, FigJam, Adobe Creative Cloud",
      "<strong>Standards:</strong> WCAG 2.1 AA Guidelines, Material Design, Apple HIG",
      "<strong>Design Tokens:</strong> CSS Custom Properties, SVG Vector Icons",
      "<strong>Prototyping:</strong> Component Variants, Interactive Micro-states",
      "<strong>Testing:</strong> Stark Accessibility Suite, Maze Usability Testing"
    ],
    benefits: [
      "Reduces employee training time on complex internal tools",
      "Prevents costly engineering rework through validated prototype testing",
      "Ensures brand consistency across multiple products and subdomains",
      "Supports compliance with international accessibility standards (WCAG 2.1 AA)",
      "Accelerates development sprints with standardized component libraries"
    ],
    relatedProjects: [
      {
        name: "SmartCampus",
        badge: "Education (Demo Concept)",
        desc: "Academic portal UI/UX redesign streamlining course registrations, grading views, and faculty dashboard navigation.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        link: "case-study.html?project=smartcampus"
      },
      {
        name: "HealthSync Portal",
        badge: "Healthcare (Demo Concept)",
        desc: "Human-centered clinical consultation interface and patient booking flows engineered with accessible high-contrast design.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        link: "case-study.html?project=healthsync"
      }
    ],
    ctaTitle: "Elevate Your Product UI/UX",
    ctaLead: "Schedule a design consultation to review your product wireframes, user journeys, and component design tokens."
  },

  "cloud-solutions": {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    pageTitle: "Cloud Solutions — Service Details | TechNova Solutions",
    metaDescription: "Cloud infrastructure architecture: AWS/GCP server configurations, containerized microservices, high-availability deployments, and migration support.",
    heroLead: "Architecting resilient cloud infrastructure, automated container environments, and high-availability application hosting across AWS, Azure, and Google Cloud.",
    overviewLead: "TechNova Solutions designs, configures, and maintains dependable cloud environments tailored to modern business software and database workloads.",
    overviewDesc: "Whether deploying new microservices in Docker containers or migrating on-premise servers to cloud providers, our cloud engineers prioritize high availability, rigorous security configurations, automated backup procedures, and cost-efficient resource provisioning.",
    deliverablesLead: "Reliable, secure, and scalable cloud infrastructure assets engineered for business continuity.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
        title: "Containerized Microservices",
        desc: "Standardized Docker container configurations ensuring consistent application execution across staging and production clusters."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
        title: "High-Availability Server Clusters",
        desc: "Load-balanced server groups across multiple availability zones providing automatic failover and uninterrupted uptime."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        title: "Automated CI/CD Pipelines",
        desc: "Automated continuous integration and deployment pipelines triggering automated test suites and zero-downtime releases."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
        title: "Database Clustering & Backups",
        desc: "Managed relational database setups featuring automated multi-region snapshots, point-in-time recovery, and read replication."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        title: "CDN & Edge Caching Architecture",
        desc: "Global content delivery network configuration accelerating static asset distribution and shielding origin servers."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        title: "Security Hardening & IAM Policies",
        desc: "Strict virtual private cloud (VPC) subnets, least-privilege identity access management policies, and automated SSL/TLS encryption."
      }
    ],
    process: [
      { step: 1, name: "Workload Assessment", desc: "Profiling current system requirements, transaction volume peaks, storage needs, and cloud budget." },
      { step: 2, name: "Topology Design", desc: "Designing isolated VPC network zones, security group rules, compute instances, and database storage tiers." },
      { step: 3, name: "Environment Provisioning", desc: "Configuring cloud instances, DNS routing, load balancers, and identity access control policies." },
      { step: 4, name: "Containerization", desc: "Creating optimized Dockerfiles, multi-stage build scripts, and local container orchestration setups." },
      { step: 5, name: "Data Migration & Sync", desc: "Executing safe database transfers, validating relational consistency, and configuring backup routines." },
      { step: 6, name: "Cutover & DNS Routing", desc: "Executing zero-downtime DNS mapping, configuring SSL certificates, and verifying routing." },
      { step: 7, name: "Telemetry & Health Monitoring", desc: "Setting up CloudWatch metrics, CPU/memory alerts, uptime monitors, and log aggregation." }
    ],
    capabilities: [
      "Container Orchestration & Dockerization",
      "Automated Zero-Downtime CI/CD Pipelines",
      "VPC Network Isolation & IAM Security Policies",
      "Load Balancing & Auto-Scaling Compute Groups",
      "Multi-Tier Database Clustering & Automated Backups",
      "Cloud Cost Management & Resource Right-Sizing"
    ],
    technologies: [
      "<strong>Cloud Providers:</strong> Amazon Web Services (AWS), Google Cloud (GCP), Azure",
      "<strong>Containers:</strong> Docker, Docker Compose, Kubernetes",
      "<strong>Web Servers:</strong> Apache 2.4, Nginx, LiteSpeed",
      "<strong>Databases:</strong> Managed MySQL, PostgreSQL, Redis",
      "<strong>CI/CD & Ops:</strong> GitHub Actions, CloudWatch, Prometheus"
    ],
    benefits: [
      "Delivers high availability and resilience against hardware failures",
      "Reduces infrastructure spend through optimized instance sizing",
      "Automates routine deployment tasks and removes manual release errors",
      "Safeguards business data with automated multi-zone snapshots",
      "Enables rapid horizontal scaling during peak traffic surges"
    ],
    relatedProjects: [
      {
        name: "ApexLogistics Manager",
        badge: "Logistics (Demo Concept)",
        desc: "Cloud-native supply chain management deployment utilizing Docker containers and automated load-balancing.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
        link: "case-study.html?project=apexlogistics"
      },
      {
        name: "FinSecure Portal",
        badge: "Financial Services (Demo Concept)",
        desc: "Hardened financial portal infrastructure engineered with isolated VPC subnets and rigorous automated backups.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        link: "case-study.html?project=finsecure"
      }
    ],
    ctaTitle: "Modernize Your Cloud Infrastructure",
    ctaLead: "Consult with our cloud engineers to evaluate your deployment architecture, hosting requirements, and uptime targets."
  },

  "crm-development": {
    slug: "crm-development",
    name: "CRM Development",
    pageTitle: "CRM Development — Service Details | TechNova Solutions",
    metaDescription: "Custom CRM software engineering: pipeline tracking, lead qualification workflows, customer communication history, and sales analytics.",
    heroLead: "Building custom Customer Relationship Management platforms tailored to your distinct sales cycles, customer touchpoints, and team collaboration workflows.",
    overviewLead: "TechNova Solutions develops custom CRM systems that give sales, marketing, and client success teams complete visibility across the customer journey.",
    overviewDesc: "Off-the-shelf CRM software often forces teams into rigid, expensive subscription tiers with hundreds of unused features. We engineer focused, tailored CRM platforms that match your exact qualification criteria, communication protocols, and pipeline reporting requirements.",
    deliverablesLead: "Purpose-built CRM tools engineered to streamline sales interactions and retain customer context.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Visual Sales Pipeline Trackers",
        desc: "Interactive Kanban boards allowing sales teams to advance deals through stages from initial contact to closed contract."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
        title: "Lead Capture & Scoring Systems",
        desc: "Automated intake pipelines that capture website inquiries, score lead readiness, and assign them to matching sales reps."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: "Interaction History Timelines",
        desc: "Unified customer records consolidating emails, phone call logs, meeting notes, and internal team discussions."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>',
        title: "Quotation & Contract Generators",
        desc: "Integrated proposal engines that generate standardized PDF estimates, contract terms, and client agreement drafts."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: "Account & Organization Hierarchies",
        desc: "Relational company profiles mapping parent corporations, branch offices, primary decision-makers, and roles."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
        title: "Sales Conversion Analytics",
        desc: "Executive reporting dashboards illustrating stage-by-stage drop-off rates, average deal size, and forecasted revenue."
      }
    ],
    process: [
      { step: 1, name: "Sales Workflow Mapping", desc: "Auditing current customer acquisition steps, qualification hurdles, and handoff protocols." },
      { step: 2, name: "Schema & Pipeline Design", desc: "Designing contact, lead, deal, and account relational models and pipeline stage definitions." },
      { step: 3, name: "User Interface Prototyping", desc: "Prototyping responsive Kanban boards, quick-action contact modals, and summary dashboards." },
      { step: 4, name: "Backend Engineering", desc: "Building lead routing algorithms, automated notifications, permission controls, and audit trails." },
      { step: 5, name: "Communication Integration", desc: "Connecting web forms, email dispatchers, and messaging webhooks to capture customer inquiries." },
      { step: 6, name: "Data Migration", desc: "Sanitizing, mapping, and importing legacy spreadsheet contact data into the new relational database." },
      { step: 7, name: "Staff Training & Launch", desc: "Conducting user onboarding sessions, role verification, and initial pipeline monitoring." }
    ],
    capabilities: [
      "Custom Deal Pipeline & Opportunity Management",
      "Automated Lead Assignment & Notification Triggers",
      "Consolidated Customer Communication Timelines",
      "Granular Role-Based Permissions for Sales Teams",
      "Document Attachment & PDF Quotation Generation",
      "Real-Time Sales Conversion & Activity Analytics"
    ],
    technologies: [
      "<strong>Backend:</strong> PHP (Laravel / PDO), Node.js, Python",
      "<strong>Database:</strong> MySQL, PostgreSQL (ACID Transactions)",
      "<strong>Frontend:</strong> React, Vanilla JS, Modular CSS3",
      "<strong>APIs:</strong> SendGrid, Twilio, Webhook Listeners",
      "<strong>Security:</strong> Data encryption, HTTPS, session control"
    ],
    benefits: [
      "Eliminates recurring per-seat monthly license fees of proprietary CRMs",
      "Prevents leads from slipping through cracks with automated reminders",
      "Unifies all communication history in a single, accessible record",
      "Provides leadership with clear, unmanipulated sales forecast visibility",
      "Adapts directly to your evolving business processes without vendor lock-in"
    ],
    relatedProjects: [
      {
        name: "BusinessFlow CRM",
        badge: "Business Software (Demo Product)",
        desc: "Corporate customer management platform designed for lead qualification, pipeline stages, and client communication records.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
        link: "product-details.html"
      },
      {
        name: "FinSecure Portal",
        badge: "Financial Services (Demo Concept)",
        desc: "Institutional client onboarding and compliance records management platform built with strict audit trails.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        link: "case-study.html?project=finsecure"
      }
    ],
    ctaTitle: "Build Your Custom CRM",
    ctaLead: "Connect with our business software consultants to model your sales stages, team roles, and lead capture workflows."
  },

  "erp-development": {
    slug: "erp-development",
    name: "ERP Development",
    pageTitle: "ERP Development — Service Details | TechNova Solutions",
    metaDescription: "Integrated enterprise ERP software: inventory management, procurement, operations tracking, HR records, and cross-departmental financial reporting.",
    heroLead: "Developing integrated Enterprise Resource Planning software that unites inventory, operations, procurement, human resources, and financial tracking.",
    overviewLead: "TechNova Solutions engineers enterprise software backbones that replace disconnected spreadsheets and legacy software with a single operational source of truth.",
    overviewDesc: "Our ERP solutions are built around modular architectures, allowing enterprises to digitize core operations—inventory control, purchase order workflows, workforce scheduling, and operational accounting—at their own pace without operational disruption.",
    deliverablesLead: "Integrated enterprise modules designed for cross-departmental synchronicity.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
        title: "Inventory & Warehouse Modules",
        desc: "Real-time stock level monitoring, multi-location warehouse tracking, automated reorder thresholds, and SKU catalogs."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
        title: "Procurement & Vendor Portals",
        desc: "Purchase requisition pipelines, multi-tier managerial approval workflows, vendor quotation comparisons, and receiving logs."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
        title: "Operations & Work Orders",
        desc: "Manufacturing work order generation, operational milestone tracking, equipment maintenance schedules, and resource dispatch."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: "Human Capital & Staff Records",
        desc: "Employee profile management, shift scheduling, role permission assignments, attendance logging, and leave management."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
        title: "Operational Accounting & Ledgers",
        desc: "Invoice reconciliation, expense recording, accounts payable/receivable tracking, and financial summary reporting."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Executive Business Telemetry",
        desc: "Consolidated executive dashboards displaying cross-departmental operational KPIs, order fulfillment times, and margins."
      }
    ],
    process: [
      { step: 1, name: "Departmental Audit", desc: "Mapping operations across warehouse, procurement, accounting, and staff administration." },
      { step: 2, name: "Modular Architecture", desc: "Designing shared relational schemas, transaction states, approval workflows, and data boundaries." },
      { step: 3, name: "Workflow Prototyping", desc: "Prototyping data-dense tabular interfaces, batch input forms, and role-specific views." },
      { step: 4, name: "Module Development", desc: "Sprint-based coding of inventory, procurement, operations, and financial ledger components." },
      { step: 5, name: "Relational Testing", desc: "Executing transactional integrity tests, concurrent stock update checks, and ledger audit verification." },
      { step: 6, name: "Staged Departmental Trial", desc: "Deploying individual modules in staging for operator feedback and process calibration." },
      { step: 7, name: "Production Cutover", desc: "Phased rollout with parallel data runs, full audit trail activation, and technical support." }
    ],
    capabilities: [
      "Multi-Department Relational Database Architecture",
      "Multi-Level Approval Workflows & Transaction Logs",
      "Real-Time Inventory & Stock Movement Reconciliation",
      "Automated Purchase Order Generation & Vendor Matching",
      "Departmental Audit Logging & Compliance Trails",
      "Customizable Financial & Operational Report Exports"
    ],
    technologies: [
      "<strong>Architecture:</strong> Modular Monolith / Service-Oriented",
      "<strong>Backend:</strong> PHP (Laravel / PDO), Node.js, Python",
      "<strong>Database:</strong> PostgreSQL, MySQL (InnoDB ACID Transactions)",
      "<strong>Frontend:</strong> Modern Component-Based UI, Data Tables, Charts",
      "<strong>Security:</strong> Role-Based Access Control, SSL/TLS, Audit Trails"
    ],
    benefits: [
      "Unifies fragmented departments into a single synchronized database",
      "Prevents stockouts and overstocking through automated inventory alerts",
      "Speeds up cross-department approval cycles from days to minutes",
      "Gives executives real-time operational clarity across company divisions",
      "Provides complete auditability for financial and operational transactions"
    ],
    relatedProjects: [
      {
        name: "ApexLogistics Manager",
        badge: "Logistics (Demo Concept)",
        desc: "Integrated supply chain and fleet operations platform coordinating dispatch, cargo tracking, and warehouse handoffs.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
        link: "case-study.html?project=apexlogistics"
      },
      {
        name: "SmartCampus",
        badge: "Education (Demo Concept)",
        desc: "Institutional resource planning platform uniting faculty schedules, student records, admissions, and departmental operations.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        link: "case-study.html?project=smartcampus"
      }
    ],
    ctaTitle: "Engineer Your Enterprise ERP",
    ctaLead: "Schedule a consultation with our ERP architects to review your departmental workflows and modular rollout plan."
  },

  "api-integrations": {
    slug: "api-integrations",
    name: "API & Integrations",
    pageTitle: "API & Integrations — Service Details | TechNova Solutions",
    metaDescription: "Custom RESTful & GraphQL API development, third-party software connectors, payment gateway bridges, webhook architectures, and legacy system adapters.",
    heroLead: "Building secure RESTful and GraphQL APIs, webhook engines, and reliable third-party connectors that link your disparate software platforms.",
    overviewLead: "TechNova Solutions builds the digital connective tissue that enables modern software applications to share data reliably and securely.",
    overviewDesc: "From designing public developer APIs with OpenAPI documentation to connecting internal business tools with payment gateways, CRM databases, ERP backends, and cloud services, our integration engineering ensures resilient, rate-limited, and audited communication.",
    deliverablesLead: "Standardized integration layers and interface endpoints engineered for resilience.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        title: "Custom RESTful & GraphQL Endpoints",
        desc: "Well-structured API services returning normalized JSON responses with standardized HTTP status codes and error bodies."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>',
        title: "Payment Gateway Connectors",
        desc: "PCI-compliant integration pipelines with Stripe, Razorpay, and payment gateways featuring webhook payment verification."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>',
        title: "Webhook Listeners & Event Sinks",
        desc: "Asynchronous webhook processors equipped with idempotency keys, payload signature verification, and automated retries."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>',
        title: "Third-Party SaaS Bridges",
        desc: "Bi-directional data synchronization connectors linking internal databases with CRM systems, marketing suites, and cloud drives."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
        title: "Legacy Database API Wrappers",
        desc: "Modern REST and JSON abstraction layers built on top of older legacy databases to enable modern frontend integration."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        title: "API Gateways & Rate Limiters",
        desc: "Protective API gateway proxies managing API key verification, token expiration, traffic throttling, and DDoS mitigation."
      }
    ],
    process: [
      { step: 1, name: "Integration Scoping", desc: "Cataloging external systems, payload requirements, authentication methods, and transaction frequencies." },
      { step: 2, name: "Schema Contract Design", desc: "Drafting OpenAPI / Swagger specifications, JSON request validation schemas, and error structures." },
      { step: 3, name: "Security Architecture", desc: "Configuring API authentication (OAuth 2.0, API keys, JWT), HMAC signing, and CORS restrictions." },
      { step: 4, name: "Endpoint Implementation", desc: "Developing controllers, request sanitizers, backend database queries, and response serializers." },
      { step: 5, name: "Resilience Engineering", desc: "Adding retry logic with exponential backoff, dead-letter logging, and transaction rollback guards." },
      { step: 6, name: "Load & Security Testing", desc: "Running concurrency stress tests, token expiry checks, and malformed payload injection testing." },
      { step: 7, name: "Documentation & Release", desc: "Publishing interactive API documentation, developer keys, response latency alerts, and monitoring." }
    ],
    capabilities: [
      "RESTful & GraphQL Endpoint Architecture",
      "OAuth 2.0, JWT, and API Key Authentication",
      "Webhook Dispatching with Idempotency Keys",
      "Strict Rate Limiting & DoS Protection",
      "Legacy Database REST Wrappers",
      "OpenAPI / Swagger 3.0 Documentation Standards"
    ],
    technologies: [
      "<strong>Runtimes:</strong> Node.js (Express), PHP (FastCGI / Laravel), Python",
      "<strong>Protocols:</strong> REST, GraphQL, Webhooks, WebSockets",
      "<strong>Authentication:</strong> OAuth 2.0, JWT, API Keys, HMAC-SHA256",
      "<strong>Payment Bridges:</strong> Stripe, Razorpay, PayPal, Twilio",
      "<strong>Tooling:</strong> Postman, Swagger UI, OpenAPI 3.0"
    ],
    benefits: [
      "Connects siloed systems without requiring complete software replacement",
      "Enables secure third-party partner integrations and data exchanges",
      "Eliminates manual double-entry between accounting, CRM, and inventory",
      "Protects backend services from abuse through rate limiting and throttling",
      "Provides clear documentation and sandbox testing for technical teams"
    ],
    relatedProjects: [
      {
        name: "HealthSync Portal",
        badge: "Healthcare (Demo Concept)",
        desc: "Secure clinical RESTful API enabling external laboratory information systems and patient portals to synchronize.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
        link: "case-study.html?project=healthsync"
      },
      {
        name: "FinSecure Portal",
        badge: "Financial Services (Demo Concept)",
        desc: "High-security financial API connector bridging merchant payment gateways, transaction webhooks, and audit logs.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        link: "case-study.html?project=finsecure"
      }
    ],
    ctaTitle: "Connect Your Digital Systems",
    ctaLead: "Consult with our integration specialists to map your API endpoints, authentication flows, and data schemas."
  },

  "automation": {
    slug: "automation",
    name: "Automation",
    pageTitle: "Automation — Service Details | TechNova Solutions",
    metaDescription: "Custom workflow automation: asynchronous background job queues, data processing bots, scheduled task engines, and automated error-recovery pipelines.",
    heroLead: "Automating repetitive business processes, scheduled data workflows, and event-driven tasks with resilient background queue architectures.",
    overviewLead: "TechNova Solutions builds backend automation engines that handle labor-intensive data processing, file conversions, and communication pipelines without manual human intervention.",
    overviewDesc: "By implementing asynchronous message queues, scheduled batch jobs, and automated event listeners, we free your operational staff from routine computer tasks while ensuring strict processing consistency, auditability, and rapid error recovery.",
    deliverablesLead: "Reliable background automation pipelines that eliminate manual operational bottlenecks.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
        title: "Asynchronous Task Queues",
        desc: "Dedicated background queue processors offloading heavy computational tasks without blocking frontend user requests."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        title: "Scheduled Batch Jobs",
        desc: "Automated nightly reconciliation scripts, recurring report generators, database cleanup, and data archiving routines."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>',
        title: "Cross-Database Sync Pipelines",
        desc: "Automated background workers synchronizing records between disparate internal databases with change-data capture."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: "Automated Document Engines",
        desc: "Dynamic batch PDF generation engines assembling invoices, certification documents, monthly statements, and packing slips."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>',
        title: "Rule-Based Alert Dispatchers",
        desc: "Event triggers that dispatch automated email, SMS, and operational alerts based on thresholds or status changes."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
        title: "Data Cleansing & Validation Bots",
        desc: "Automated parsers that inspect incoming CSV/Excel data streams, validate required fields, and flag formatting errors."
      }
    ],
    process: [
      { step: 1, name: "Process Profiling", desc: "Documenting manual repetitive tasks, execution frequency, data dependencies, and failure modes." },
      { step: 2, name: "Architecture & Queue Design", desc: "Selecting message brokers, defining task payloads, scheduling intervals, and concurrency limits." },
      { step: 3, name: "Safety & Idempotency Rules", desc: "Configuring deduplication locks, idempotent operations, and dead-letter queues for unprocessable jobs." },
      { step: 4, name: "Worker Engineering", desc: "Coding specialized background workers, batch parsing logic, and transactional database updates." },
      { step: 5, name: "Failure Recovery Testing", desc: "Simulating system reboots, network timeouts, corrupt inputs, and verifying auto-restart mechanisms." },
      { step: 6, name: "Shadow Mode Trial", desc: "Running automated workers in staging alongside manual operators to verify parity and output accuracy." },
      { step: 7, name: "Production Activation", desc: "Enabling production queues with real-time alerting, worker health telemetry, and log monitoring." }
    ],
    capabilities: [
      "Background Queue Processing (Redis / Database Queues)",
      "Cron & Event-Driven Batch Scheduling",
      "Automatic Retry with Exponential Backoff",
      "High-Volume File & PDF Batch Generation",
      "Dead-Letter Queue & Error Notification Traps",
      "Detailed Execution & Audit Logging"
    ],
    technologies: [
      "<strong>Runtimes:</strong> Node.js, PHP CLI, Python",
      "<strong>Queues:</strong> Redis, BullMQ, Database-Backed Job Tables",
      "<strong>Scheduling:</strong> Linux Cron, Systemd daemons",
      "<strong>Processing:</strong> Headless PDF Engines, Stream Parsers",
      "<strong>Monitoring:</strong> Structured JSON Logging, Alert Webhooks"
    ],
    benefits: [
      "Saves hundreds of operational staff hours each month on repetitive tasks",
      "Eliminates human typing and copy-paste errors across business systems",
      "Ensures scheduled reports and reconciliations run consistently on time",
      "Processes heavy computing tasks in the background without slowing user UI",
      "Provides complete visibility and logs for every automated transaction"
    ],
    relatedProjects: [
      {
        name: "RetailPulse Engine",
        badge: "Retail & E-commerce (Demo Concept)",
        desc: "Automated inventory catalog indexing and hourly multi-store sales telemetry synchronization engine.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
        link: "case-study.html?project=retailpulse"
      },
      {
        name: "SmartCampus",
        badge: "Education (Demo Concept)",
        desc: "Automated student tuition fee invoice generation and nightly attendance reconciliation worker pipelines.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        link: "case-study.html?project=smartcampus"
      }
    ],
    ctaTitle: "Automate Your Repetitive Workflows",
    ctaLead: "Talk to our automation engineers to identify high-leverage workflows and calculate operational time savings."
  },

  "digital-marketing": {
    slug: "digital-marketing",
    name: "Digital Marketing",
    pageTitle: "Digital Marketing — Service Details | TechNova Solutions",
    metaDescription: "Technical digital marketing: on-page SEO architectures, Core Web Vitals optimization, analytics instrumentation, and conversion rate optimization (CRO).",
    heroLead: "Driving sustainable customer acquisition through technical SEO, performance optimization, conversion tracking, and data-driven digital marketing infrastructure.",
    overviewLead: "TechNova Solutions approaches digital marketing from an engineering-first perspective, ensuring your website has the technical foundation required to rank, engage, and convert.",
    overviewDesc: "Modern search engines demand fast load speeds, accessible layouts, clean structured data, and flawless mobile experiences. We combine technical SEO audits with analytics instrumentation, conversion funnel analysis, and strategic content architecture to maximize your digital return on investment.",
    deliverablesLead: "Technical marketing deliverables built to maximize search visibility and inbound conversion.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
        title: "Technical SEO Audits & Fixes",
        desc: "Resolution of crawl errors, indexation roadblocks, canonical URL duplicates, and XML sitemap configuration."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        title: "Schema.org Structured Data",
        desc: "JSON-LD schema implementations for corporate organizations, product reviews, FAQs, and breadcrumbs to secure rich search snippets."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
        title: "Core Web Vitals Optimization",
        desc: "Engineering optimizations targeting Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
        title: "Analytics & Funnel Instrumentation",
        desc: "Privacy-compliant event tracking mapping user interactions from landing page views to completed enquiry submissions."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Conversion Rate Optimization (CRO)",
        desc: "Form placement refinement, call-to-action friction audits, and layout improvements that convert casual visitors into leads."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: "Content Structure & Topic Clusters",
        desc: "Architecting content hubs, pillar pages, and semantic article hierarchies that establish search authority in your industry."
      }
    ],
    process: [
      { step: 1, name: "SEO & Health Audit", desc: "Crawling site URLs, analyzing Core Web Vitals, checking indexation status, and evaluating metadata." },
      { step: 2, name: "Search Intent Mapping", desc: "Analyzing search queries, competitor positioning, and target customer purchase intent." },
      { step: 3, name: "On-Page Structural Tuning", desc: "Optimizing heading tags (H1-H3), canonical links, Open Graph metadata, and responsive viewports." },
      { step: 4, name: "Structured Data Injection", desc: "Authoring and validating JSON-LD Schema markup using Google Rich Results testing tools." },
      { step: 5, name: "Speed & Asset Optimization", desc: "Compressing images, implementing modern CSS layouts, and eliminating render-blocking scripts." },
      { step: 6, name: "Conversion Funnel Tracking", desc: "Configuring conversion event triggers, form completion goals, and analytics views." },
      { step: 7, name: "Iterative Performance Review", desc: "Reviewing search visibility trends, bounce rate reductions, and conversion yield over time." }
    ],
    capabilities: [
      "Technical SEO & Crawl Budget Optimization",
      "Schema.org JSON-LD Structured Data Engineering",
      "Core Web Vitals Optimization (LCP, INP, CLS)",
      "Google Analytics 4 & Custom Event Tracking",
      "Conversion Funnel Analysis & Landing Page Audits",
      "Semantic Content Hierarchy & On-Page Keyword Alignment"
    ],
    technologies: [
      "<strong>Standards:</strong> Schema.org, JSON-LD, Open Graph, Twitter Cards",
      "<strong>Analytics:</strong> Google Analytics 4, Search Console, Custom Events",
      "<strong>Auditing:</strong> Google Lighthouse, Chrome DevTools, Screaming Frog",
      "<strong>Performance:</strong> Responsive Images, CSS Containment, Caching",
      "<strong>Tag Management:</strong> Privacy-compliant direct client-side tracking"
    ],
    benefits: [
      "Grows organic search visibility without recurring ad spend",
      "Maximizes conversion rates from visitors who land on your pages",
      "Ensures search engines understand and display your content with rich snippets",
      "Protects against search ranking penalties through clean, compliant code",
      "Provides leadership with clear, verified conversion metrics and insights"
    ],
    relatedProjects: [
      {
        name: "RetailPulse Engine",
        badge: "Retail & E-commerce (Demo Concept)",
        desc: "SEO-optimized e-commerce catalog architecture featuring rich product structured data and sub-second load times.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
        link: "case-study.html?project=retailpulse"
      },
      {
        name: "SmartCampus",
        badge: "Education (Demo Concept)",
        desc: "Institutional portal landing architecture with structured FAQ schema and targeted student enquiry funnels.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        link: "case-study.html?project=smartcampus"
      }
    ],
    ctaTitle: "Accelerate Your Digital Reach",
    ctaLead: "Schedule a technical SEO audit and conversion review with our digital marketing specialists."
  },

  "it-consulting": {
    slug: "it-consulting",
    name: "IT Consulting",
    pageTitle: "IT Consulting — Service Details | TechNova Solutions",
    metaDescription: "Strategic technology advisory: software architecture reviews, tech stack selection, legacy modernization roadmaps, and code quality evaluations.",
    heroLead: "Providing strategic technology advisory, software architecture evaluations, legacy modernization roadmaps, and independent code reviews for growing businesses.",
    overviewLead: "TechNova Solutions advises corporate leadership and technical founders on making confident, cost-effective technology investments that support business scale.",
    overviewDesc: "Choosing the wrong software architecture or adopting fragile tools can cost companies years of rework. Our senior engineers conduct thorough architectural assessments, evaluate tech stacks, plan migration strategies for legacy codebases, and establish engineering standards that keep projects on budget and on schedule.",
    deliverablesLead: "Actionable technical advisory reports and engineering blueprints for decision-makers.",
    deliverables: [
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        title: "Architecture Health Audits",
        desc: "In-depth evaluations of current system designs, database indexing bottlenecks, security boundaries, and scalability limits."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        title: "Tech Stack Decision Matrices",
        desc: "Unbiased comparative frameworks evaluating frameworks, databases, and third-party tools against operational budgets."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        title: "Legacy Modernization Blueprints",
        desc: "Phased migration roadmaps replacing monolithic or unsupported legacy systems without interrupting daily operations."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: "Engineering Best Practice Guides",
        desc: "Standard operating procedures for branch management, code reviews, automated unit testing, and deployment hygiene."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        title: "Technical Due Diligence Reports",
        desc: "Comprehensive code quality and security evaluations of software assets for investors, board members, or acquisitions."
      },
      {
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
        title: "Infrastructure Cost Optimization",
        desc: "Audits identifying idle cloud servers, over-provisioned databases, and inefficient network routes to cut monthly spend."
      }
    ],
    process: [
      { step: 1, name: "Executive Interviews", desc: "Understanding company strategic goals, growth trajectories, budget constraints, and current blockers." },
      { step: 2, name: "System & Code Inspection", desc: "Reviewing existing codebase repositories, database schemas, dependencies, and hosting topologies." },
      { step: 3, name: "Gap Analysis", desc: "Benchmarking the current infrastructure against modern security, scalability, and maintainability standards." },
      { step: 4, name: "Recommendation Formulation", desc: "Structuring prioritized technical recommendations, risk assessments, and resource requirements." },
      { step: 5, name: "Roadmap Presentation", desc: "Reviewing findings with leadership, explaining trade-offs, and defining realistic phased milestones." },
      { step: 6, name: "Action Plan Structuring", desc: "Breaking technical objectives into sprint-sized deliverables for internal or external developers." },
      { step: 7, name: "Milestone Oversight", desc: "Providing periodic technical oversight, architecture reviews, and quality sign-offs during execution." }
    ],
    capabilities: [
      "Enterprise Software Architecture Evaluation",
      "Legacy System Migration Planning & Risk Mitigation",
      "Objective Tech Stack Benchmarking & Decision Matrices",
      "Code Quality, Security, and Dependency Audits",
      "Cloud Hosting Cost Analysis & Right-Sizing",
      "Engineering Team Standards & Best Practice Coaching"
    ],
    technologies: [
      "<strong>Architectures:</strong> Monoliths, Modular Monoliths, Microservices",
      "<strong>Languages:</strong> JavaScript/TypeScript, PHP, Python, Java, Go",
      "<strong>Databases:</strong> PostgreSQL, MySQL, Redis, MongoDB",
      "<strong>Cloud:</strong> AWS, Azure, Google Cloud Platform, Linux",
      "<strong>Frameworks:</strong> Architecture Tradeoff Analysis, OWASP Standards"
    ],
    benefits: [
      "Avoids expensive architectural dead-ends and vendor lock-in",
      "Provides clear, phased plans to modernize legacy systems safely",
      "Bridges communication between business executives and technical teams",
      "Improves software quality, test coverage, and delivery speed",
      "Gives leadership confidence in their long-term digital investments"
    ],
    relatedProjects: [
      {
        name: "FinSecure Portal",
        badge: "Financial Services (Demo Concept)",
        desc: "Enterprise architectural assessment and security compliance roadmap for institutional financial software.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        link: "case-study.html?project=finsecure"
      },
      {
        name: "SmartCampus",
        badge: "Education (Demo Concept)",
        desc: "Institutional software modernization strategy transforming fragmented spreadsheets into a unified management portal.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
        link: "case-study.html?project=smartcampus"
      }
    ],
    ctaTitle: "Schedule a Technology Consultation",
    ctaLead: "Connect with our principal architects to review your technical challenges, stack choices, and roadmap."
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SERVICES_DATA;
}

