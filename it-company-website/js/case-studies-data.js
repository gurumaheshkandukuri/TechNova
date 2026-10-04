/**
 * TechNova Solutions — Case Studies Data Store
 * File: js/case-studies-data.js
 * Description: Structured demonstration data for all 6 portfolio case studies.
 * Specification: TechNova Solutions PDR (Section 13, 14, 25, 36)
 */

const caseStudiesData = {
  "smartcampus": {
    name: "SmartCampus",
    tagline: "Integrated Academic Management Portal",
    industry: "Education",
    category: "education",
    technologies: "React, PHP, MySQL",
    type: "Web Application Architecture",
    deliveryScope: "Full-Stack Development",
    heroDesc: "A centralized web application engineered to consolidate student records, course scheduling, faculty administration, and academic evaluations into a unified digital workspace.",
    demoNotice: "SmartCampus is a fictional/demonstration project model developed to illustrate TechNova's engineering approach for educational institutions. No real client data, live institutional operations, or commercial metrics are represented.",
    overview: "SmartCampus was designed to modernize administrative and academic workflows for educational organizations. Educational campuses frequently struggle with fragmented data silos across student enrollments, faculty schedules, and grade reporting. This project concept unifies these disparate operational touchpoints into a single, responsive portal with dedicated role-based views for administrators, faculty members, and students.",
    challenge: {
      bottlenecks: [
        "Isolated legacy databases caused redundant manual data entry between admission desks and department heads.",
        "Faculty members lacked a standardized, real-time portal to input attendance and publish mid-term assessments.",
        "Students experienced delayed access to lecture timetables and semester evaluation statements."
      ],
      constraints: [
        "Requirement for responsive multi-device access across desktops, tablets, and smartphones.",
        "Strict role-based permission boundaries between administrative staff, teaching personnel, and enrolled learners.",
        "Need for a robust relational data schema capable of linking courses, prerequisites, faculty assignments, and transcripts."
      ]
    },
    solution: {
      summary: "TechNova conceptualized a modular three-tier web application architecture. By combining a reactive single-page front-end interface with an API-driven backend and structured relational persistence, the platform delivers smooth navigation, secure role-based permissions, and real-time record coordination.",
      tiers: [
        {
          title: "Modular Frontend",
          desc: "Engineered with React to provide interactive schedule planners, instant grade table updates, and responsive navigation for mobile and desktop screens."
        },
        {
          title: "Structured Backend API",
          desc: "Constructed with PHP handling endpoint routing, input validation, role-based authorization filters, and transactional administrative operations."
        },
        {
          title: "Relational Persistence",
          desc: "Normalized MySQL relational schema providing data integrity for student enrollments, course catalogs, academic terms, and grade point calculations."
        }
      ]
    },
    process: [
      { step: 1, name: "Discovery", desc: "Captured institutional workflows, academic calendaring requirements, and stakeholder use-cases across faculty and students." },
      { step: 2, name: "Planning", desc: "Designed entity relationship models, REST endpoint contracts, and role-based authorization hierarchies." },
      { step: 3, name: "UI/UX", desc: "Built interactive wireframes and accessible interface components for scheduling calendars and gradebook tables." },
      { step: 4, name: "Development", desc: "Implemented front-end React components, PHP service layer APIs, and database migrations in staged sprints." },
      { step: 5, name: "Testing", desc: "Conducted functional test suites, cross-browser validation, role authorization audits, and load checks." },
      { step: 6, name: "Deployment", desc: "Configured server environment, database replication parameters, and initial administrative provisioning." },
      { step: 7, name: "Support", desc: "Delivered administrative system documentation, post-release monitoring, and feature iteration roadmaps." }
    ],
    features: [
      {
        title: "Student Records Management",
        desc: "Centralized profiles detailing contact info, enrolled program, semester history, and administrative fee statuses."
      },
      {
        title: "Course & Timetable Scheduling",
        desc: "Interactive visual timetable engine preventing room and faculty scheduling conflicts across academic departments."
      },
      {
        title: "Faculty Gradebook",
        desc: "Structured grading sheets with weighted assessments, assignment scoring, and automated GPA calculations."
      },
      {
        title: "Attendance Tracking",
        desc: "Daily lecture attendance register with percentage threshold warnings and automated administrative reports."
      },
      {
        title: "Role-Based Portals",
        desc: "Discrete access controls for Institution Admins, Department Deans, Teaching Faculty, and Enrolled Students."
      },
      {
        title: "Notice & Alert Dispatch",
        desc: "Campus-wide announcement broadcasting for exam timetables, term deadlines, and administrative notices."
      }
    ],
    techStack: [
      {
        role: "Frontend",
        name: "React",
        desc: "Modular component-based UI framework used to build interactive single-page dashboards, reactive forms, and scheduling calendars."
      },
      {
        role: "Backend",
        name: "PHP",
        desc: "Server-side execution environment handling business logic, user session management, access verification, and API routing."
      },
      {
        role: "Database",
        name: "MySQL",
        desc: "Relational database management system providing foreign key constraints, ACID transaction compliance, and structured queries."
      }
    ],
    mockups: [
      {
        title: "Interface 1: Administrative Control Console",
        desc: "Overview console presenting campus enrollment status, department listings, and system alerts.",
        url: "smartcampus.demo/admin/overview",
        svg: `<svg width="100%" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="30" fill="#1E293B"/><rect x="20" y="8" width="100" height="14" rx="3" fill="#3B82F6"/><rect x="680" y="8" width="100" height="14" rx="3" fill="#334155"/><rect x="0" y="30" width="160" height="190" fill="#0F172A"/><rect x="20" y="50" width="120" height="12" rx="2" fill="#2563EB"/><rect x="20" y="75" width="100" height="10" rx="2" fill="#334155"/><rect x="20" y="98" width="110" height="10" rx="2" fill="#334155"/><rect x="20" y="121" width="90" height="10" rx="2" fill="#334155"/><rect x="20" y="144" width="105" height="10" rx="2" fill="#334155"/><rect x="180" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="195" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="195" y="78" width="60" height="18" rx="3" fill="#38BDF8"/><rect x="380" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="395" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="395" y="78" width="60" height="18" rx="3" fill="#10B981"/><rect x="580" y="50" width="190" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="595" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="595" y="78" width="60" height="18" rx="3" fill="#F59E0B"/><rect x="180" y="125" width="590" height="80" rx="6" fill="#1E293B" stroke="#334155"/><rect x="200" y="138" width="550" height="12" rx="2" fill="#334155"/><rect x="200" y="158" width="550" height="12" rx="2" fill="#0F172A"/><rect x="200" y="178" width="550" height="12" rx="2" fill="#334155"/></svg>`
      },
      {
        title: "Interface 2: Course & Timetable Scheduling Grid",
        desc: "Interactive schedule viewer illustrating lecture blocks, assigned lecture halls, and faculty timeslots.",
        url: "smartcampus.demo/portal/timetable",
        svg: `<svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="760" height="30" rx="4" fill="#1E293B"/><rect x="40" y="28" width="120" height="14" rx="2" fill="#38BDF8"/><rect x="20" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="35" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="30" y="90" width="120" height="35" rx="3" fill="#2563EB"/><rect x="175" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="190" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="185" y="130" width="120" height="35" rx="3" fill="#7C3AED"/><rect x="330" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="345" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="340" y="85" width="120" height="35" rx="3" fill="#0D9488"/><rect x="485" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="500" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="495" y="105" width="120" height="35" rx="3" fill="#D97706"/><rect x="640" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="655" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="650" y="90" width="120" height="35" rx="3" fill="#2563EB"/></svg>`
      }
    ],
    outcome: {
      capabilities: [
        "Centralized Academic Administration: Unified student registration, course prerequisites, and faculty assignments into a cohesive relational database structure.",
        "Streamlined Evaluation Workflows: Enabled instructors to record continuous assessments directly through an accessible browser interface, removing spreadsheet transfers.",
        "Accessible Multi-Device Access: Provided responsive access for students checking schedules, assignment postings, and institutional notices on mobile devices.",
        "Separation of Concerns: Maintained discrete access layers ensuring student personal data and academic records are visible only to authorized faculty and administrative accounts."
      ]
    },
    relatedProjects: [
      {
        name: "HealthSync Portal",
        slug: "healthsync",
        badge: "Healthcare (Demo Concept)",
        category: "healthcare",
        desc: "Patient appointment coordination console, clinical intake workflows, and medical communication portal.",
        tech: "React | Node.js | PostgreSQL"
      },
      {
        name: "RetailPulse Engine",
        slug: "retailpulse",
        badge: "Retail (Demo Concept)",
        category: "retail",
        desc: "Centralized multi-store product catalogue, inventory synchronization console, and point-of-sale data management platform.",
        tech: "Vue.js | Python | Redis"
      }
    ],
    cta: {
      heading: "Planning a Similar Education or Enterprise Solution?",
      lead: "Consult with TechNova's engineering architects to scope your portal architecture, database models, and responsive front-end requirements."
    }
  },

  "healthsync": {
    name: "HealthSync Portal",
    tagline: "Clinical Intake & Patient Coordination Platform",
    industry: "Healthcare",
    category: "healthcare",
    technologies: "React, Node.js, PostgreSQL",
    type: "Healthcare Web Application Architecture",
    deliveryScope: "Full-Stack Engineering & API Integration",
    heroDesc: "A secure healthcare coordination platform engineered to manage patient intake workflows, doctor consultation calendars, and role-based clinical communications.",
    demoNotice: "HealthSync Portal is a fictional/demonstration software model developed to illustrate TechNova's architectural methodology for healthcare administration. No real medical records, patient data, or clinical operations are represented.",
    overview: "HealthSync Portal was designed to resolve scheduling collisions, administrative intake backlogs, and communication silos across multi-department outpatient clinics. By structuring patient pre-registration, real-time doctor availability calendars, and clinical triage queues within an accessible web architecture, medical facilities can ensure orderly care coordination without manual spreadsheet dependency.",
    challenge: {
      bottlenecks: [
        "Paper intake forms caused duplicate data entry and administrative delays during busy clinic check-in hours.",
        "Consultation appointments were prone to double-booking due to uncoordinated scheduling across departments.",
        "Specialist physicians lacked instant visibility into incoming patient vitals and preliminary triage notes."
      ],
      constraints: [
        "Rigorous role-based authorization restricting diagnostic records exclusively to assigned medical staff.",
        "Responsive cross-device interface accessible to nursing triage desks, mobile doctors, and patients.",
        "Relational database schema with strict audit logs and data integrity constraints for medical appointment logs."
      ]
    },
    solution: {
      summary: "TechNova engineered a modular three-tier healthcare web application. The platform combines a reactive front-end dashboard with an asynchronous Node.js API service layer and an ACID-compliant PostgreSQL database, maintaining role separation and instantaneous schedule updates.",
      tiers: [
        {
          title: "Reactive Staff & Patient Interface",
          desc: "Engineered with React to provide interactive daily consultation timelines, dynamic intake forms, and responsive triage queue indicators."
        },
        {
          title: "Secure REST Service Layer",
          desc: "Constructed with Node.js and Express to manage role-based authorization tokens, clinical input validation, and real-time consultation dispatch events."
        },
        {
          title: "Relational Clinical Data Store",
          desc: "PostgreSQL database enforcing referential integrity across patient profiles, physician specialties, appointment logs, and triage history."
        }
      ]
    },
    process: [
      { step: 1, name: "Discovery", desc: "Mapped clinical intake protocols, physician timeslot workflows, and patient triage requirements across departments." },
      { step: 2, name: "Planning", desc: "Designed role permission matrices, HIPAA-aligned data boundaries, and relational entity relationship models." },
      { step: 3, name: "UI/UX", desc: "Created high-contrast accessible wireframes and color-coded consultation schedule grids for rapid triage scanning." },
      { step: 4, name: "Development", desc: "Built React consultation modules, Node.js API validation routes, and transactional database schemas in staged sprints." },
      { step: 5, name: "Testing", desc: "Executed role permission boundary audits, input sanitization tests, and cross-browser responsiveness checks." },
      { step: 6, name: "Deployment", desc: "Configured staging server environment, automated SSL provisioning, and database connection pooling." },
      { step: 7, name: "Support", desc: "Provided staff administrative guides, error logging monitors, and post-launch feature iteration plans." }
    ],
    features: [
      {
        title: "Patient Profile Intake & Registration",
        desc: "Structured intake console capturing contact details, insurance identifiers, emergency contacts, and medical history."
      },
      {
        title: "Doctor Consultation Appointment Scheduler",
        desc: "Interactive multi-doctor calendar preventing double-booking through synchronized timeslot reservation logic."
      },
      {
        title: "Clinical Notes & Diagnostic History",
        desc: "Secure consultation notes repository allowing attending physicians to record visit summaries and recommended follow-ups."
      },
      {
        title: "Patient Department Triage Queue",
        desc: "Real-time visual queue displaying arrival order, waiting duration, and triage urgency levels across clinic wings."
      },
      {
        title: "Role-Based Medical Staff Permissions",
        desc: "Granular authorization levels isolating patient clinical records between receptionists, nurses, and doctors."
      },
      {
        title: "Automated Appointment Reminders & Dispatch",
        desc: "Event-driven notification triggers for upcoming consultations, rescheduling requests, and doctor availability shifts."
      }
    ],
    techStack: [
      {
        role: "Frontend",
        name: "React",
        desc: "Component-driven user interface framework powering real-time consultation calendars, triage queues, and accessible forms."
      },
      {
        role: "Backend",
        name: "Node.js",
        desc: "Asynchronous server-side JavaScript runtime handling REST API routing, session authorization, and intake validation."
      },
      {
        role: "Database",
        name: "PostgreSQL",
        desc: "Robust relational database system delivering ACID compliance, foreign key constraints, and transactional consistency."
      }
    ],
    mockups: [
      {
        title: "Interface 1: Clinical Intake & Appointment Console",
        desc: "Centralized reception console presenting daily patient check-in statuses, physician rosters, and room allocations.",
        url: "healthsync.demo/portal/appointments",
        svg: `<svg width="100%" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="30" fill="#1E293B"/><rect x="20" y="8" width="110" height="14" rx="3" fill="#0D9488"/><rect x="680" y="8" width="100" height="14" rx="3" fill="#334155"/><rect x="0" y="30" width="160" height="190" fill="#0F172A"/><rect x="20" y="50" width="120" height="12" rx="2" fill="#0D9488"/><rect x="20" y="75" width="100" height="10" rx="2" fill="#334155"/><rect x="20" y="98" width="110" height="10" rx="2" fill="#334155"/><rect x="20" y="121" width="90" height="10" rx="2" fill="#334155"/><rect x="20" y="144" width="105" height="10" rx="2" fill="#334155"/><rect x="180" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="195" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="195" y="78" width="70" height="18" rx="3" fill="#14B8A6"/><rect x="380" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="395" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="395" y="78" width="60" height="18" rx="3" fill="#38BDF8"/><rect x="580" y="50" width="190" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="595" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="595" y="78" width="60" height="18" rx="3" fill="#10B981"/><rect x="180" y="125" width="590" height="80" rx="6" fill="#1E293B" stroke="#334155"/><rect x="200" y="138" width="550" height="12" rx="2" fill="#334155"/><rect x="200" y="158" width="550" height="12" rx="2" fill="#0F172A"/><rect x="200" y="178" width="550" height="12" rx="2" fill="#334155"/></svg>`
      },
      {
        title: "Interface 2: Doctor Schedule & Consultation Grid",
        desc: "Physician appointment planner displaying reserved consultation blocks, patient IDs, and consultation durations.",
        url: "healthsync.demo/consultations/calendar",
        svg: `<svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="760" height="30" rx="4" fill="#1E293B"/><rect x="40" y="28" width="140" height="14" rx="2" fill="#14B8A6"/><rect x="20" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="35" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="30" y="90" width="120" height="35" rx="3" fill="#0D9488"/><rect x="175" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="190" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="185" y="130" width="120" height="35" rx="3" fill="#2563EB"/><rect x="330" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="345" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="340" y="85" width="120" height="35" rx="3" fill="#10B981"/><rect x="485" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="500" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="495" y="105" width="120" height="35" rx="3" fill="#0D9488"/><rect x="640" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="655" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="650" y="90" width="120" height="35" rx="3" fill="#0EA5E9"/></svg>`
      }
    ],
    outcome: {
      capabilities: [
        "Coordinated Clinical Workflows: Established a unified schedule registry preventing consultation booking conflicts across clinical departments.",
        "Streamlined Patient Intake: Replaced fragmented paper registration with standardized digital intake forms validated in the browser.",
        "Granular Data Separation: Enforced role-based authorization ensuring clinical diagnostic notes are restricted to assigned medical practitioners.",
        "Cross-Device Usability: Provided responsive layouts allowing physicians and nurses to review consultation queues on desktop monitors and mobile tablets."
      ]
    },
    relatedProjects: [
      {
        name: "SmartCampus",
        slug: "smartcampus",
        badge: "Education (Demo Concept)",
        category: "education",
        desc: "Integrated academic management portal designed for institutional administration, student enrollment, and faculty grade records.",
        tech: "React | PHP | MySQL"
      },
      {
        name: "RetailPulse Engine",
        slug: "retailpulse",
        badge: "Retail (Demo Concept)",
        category: "retail",
        desc: "Centralized multi-store product catalogue, inventory synchronization console, and point-of-sale data management platform.",
        tech: "Vue.js | Python | Redis"
      }
    ],
    cta: {
      heading: "Planning a Similar Healthcare or Clinical Platform?",
      lead: "Consult with TechNova's engineering architects to scope your clinical scheduling workflows, role permissions, and database architecture."
    }
  },

  "retailpulse": {
    name: "RetailPulse Engine",
    tagline: "Multi-Store Inventory & Point-of-Sale Synchronization",
    industry: "Retail",
    category: "retail",
    technologies: "Vue.js, Python, Redis",
    type: "Distributed Inventory & Retail Management Platform",
    deliveryScope: "Distributed System Engineering",
    heroDesc: "A centralized retail management engine engineered to provide real-time multi-store SKU tracking, automated inventory replenishment alerts, and synchronized POS catalog feeds.",
    demoNotice: "RetailPulse Engine is a fictional/demonstration software model developed to illustrate TechNova's distributed inventory engineering capabilities. No real retail brands, live transactions, or commercial revenues are represented.",
    overview: "RetailPulse Engine was designed to solve inventory discrepancy issues faced by retail chains operating multiple brick-and-mortar outlets alongside digital storefronts. By centralizing product catalog metadata, establishing real-time stock transfer journals, and deploying in-memory cache queues for checkout verification, the platform ensures inventory counts remain coherent across all physical cash registers and warehouse hubs.",
    challenge: {
      bottlenecks: [
        "Unsynchronized inventory databases caused frequent out-of-stock incidents when identical SKUs sold concurrently across locations.",
        "Store managers relied on end-of-day spreadsheet reconciliations to identify low-stock items, slowing replenishment.",
        "Product price changes and promotional discounts required hours to manually push across independent POS checkout terminals."
      ],
      constraints: [
        "Sub-second catalog response times required by checkout point-of-sale scanners during peak shopping periods.",
        "Strict transactional concurrency handling to prevent double-allocation of limited warehouse inventory.",
        "Resilient data queuing capable of syncing offline sales batches once store internet connectivity reconnects."
      ]
    },
    solution: {
      summary: "TechNova designed a high-throughput three-tier distributed retail architecture. A responsive Vue.js management dashboard interfaces with an asynchronous Python backend, backed by an in-memory Redis caching cluster for instantaneous stock checks and transactional data consistency.",
      tiers: [
        {
          title: "Responsive Management Console",
          desc: "Constructed with Vue.js to provide interactive stock monitoring matrices, store comparison grids, and real-time replenishment alerts."
        },
        {
          title: "Asynchronous Python Service",
          desc: "Engineered in Python to orchestrate inventory ledger calculations, POS batch payload ingestion, and SKU catalog distribution."
        },
        {
          title: "In-Memory Caching & Queue Layer",
          desc: "Redis in-memory data store providing sub-millisecond stock availability checks, pub/sub inventory broadcast channels, and write queues."
        }
      ]
    },
    process: [
      { step: 1, name: "Discovery", desc: "Analyzed multi-store inventory lifecycles, POS terminal sync interfaces, and warehouse transfer workflows." },
      { step: 2, name: "Planning", desc: "Formulated distributed SKU schema, Redis pub/sub messaging patterns, and transactional safety parameters." },
      { step: 3, name: "UI/UX", desc: "Designed high-density stock status dashboards, color-coded threshold monitors, and clear POS terminal visual states." },
      { step: 4, name: "Development", desc: "Implemented Vue.js inventory components, Python API synchronization routines, and Redis caching layers in sprints." },
      { step: 5, name: "Testing", desc: "Conducted simulated concurrent checkout stress tests, network disconnect sync recovery audits, and UI load tests." },
      { step: 6, name: "Deployment", desc: "Provisioned cache cluster instances, configured load balancer routing, and established automated catalog seeders." },
      { step: 7, name: "Support", desc: "Delivered store administrator manuals, telemetry threshold monitors, and scheduled cache maintenance routines." }
    ],
    features: [
      {
        title: "Multi-Outlet Inventory Synchronization",
        desc: "Centralized visibility over warehouse reserves and individual store branch stock counts from a single interface."
      },
      {
        title: "Centralized Product & SKU Catalogue",
        desc: "Master product catalog controlling universal SKU descriptions, department tags, tax codes, and pricing rules."
      },
      {
        title: "POS Terminal Data Synchronization",
        desc: "Continuous broadcast feeds pushing updated barcode indices and pricing updates to connected store checkout registers."
      },
      {
        title: "Real-Time Low-Stock Threshold Alerts",
        desc: "Configurable alert triggers notifying warehouse dispatchers when store outlet reserves breach minimum safety thresholds."
      },
      {
        title: "Multi-Location Stock Transfer Log",
        desc: "Structured audit journal tracking inter-branch merchandise transfers from departure dispatch to arrival check-in."
      },
      {
        title: "Role-Based Store & Warehouse Permissions",
        desc: "Separation of privileges ensuring store cashiers, branch managers, and central buyers access only relevant system operations."
      }
    ],
    techStack: [
      {
        role: "Frontend",
        name: "Vue.js",
        desc: "Progressive JavaScript framework delivering reactive stock tables, fast visual filters, and real-time dashboard telemetry."
      },
      {
        role: "Backend",
        name: "Python",
        desc: "Versatile server-side programming language driving inventory calculations, API endpoint handling, and batch jobs."
      },
      {
        role: "Cache & Queue",
        name: "Redis",
        desc: "High-performance in-memory key-value store powering rapid sub-millisecond stock availability checks and event streams."
      }
    ],
    mockups: [
      {
        title: "Interface 1: Centralized Stock Matrix & Multi-Outlet Monitor",
        desc: "Enterprise control panel displaying total SKU distribution across central warehouses and retail branch outlets.",
        url: "retailpulse.demo/inventory/overview",
        svg: `<svg width="100%" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="30" fill="#1E293B"/><rect x="20" y="8" width="110" height="14" rx="3" fill="#3B82F6"/><rect x="680" y="8" width="100" height="14" rx="3" fill="#334155"/><rect x="0" y="30" width="160" height="190" fill="#0F172A"/><rect x="20" y="50" width="120" height="12" rx="2" fill="#3B82F6"/><rect x="20" y="75" width="100" height="10" rx="2" fill="#334155"/><rect x="20" y="98" width="110" height="10" rx="2" fill="#334155"/><rect x="20" y="121" width="90" height="10" rx="2" fill="#334155"/><rect x="20" y="144" width="105" height="10" rx="2" fill="#334155"/><rect x="180" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="195" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="195" y="78" width="70" height="18" rx="3" fill="#60A5FA"/><rect x="380" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="395" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="395" y="78" width="60" height="18" rx="3" fill="#10B981"/><rect x="580" y="50" width="190" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="595" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="595" y="78" width="60" height="18" rx="3" fill="#F59E0B"/><rect x="180" y="125" width="590" height="80" rx="6" fill="#1E293B" stroke="#334155"/><rect x="200" y="138" width="550" height="12" rx="2" fill="#334155"/><rect x="200" y="158" width="550" height="12" rx="2" fill="#0F172A"/><rect x="200" y="178" width="550" height="12" rx="2" fill="#334155"/></svg>`
      },
      {
        title: "Interface 2: POS Terminal Stream & Inventory Sync Console",
        desc: "Live synchronization logger monitoring real-time transaction ingestion and store cache synchronization states.",
        url: "retailpulse.demo/pos/sync-monitor",
        svg: `<svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="760" height="30" rx="4" fill="#1E293B"/><rect x="40" y="28" width="140" height="14" rx="2" fill="#60A5FA"/><rect x="20" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="35" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="30" y="90" width="120" height="35" rx="3" fill="#3B82F6"/><rect x="175" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="190" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="185" y="130" width="120" height="35" rx="3" fill="#8B5CF6"/><rect x="330" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="345" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="340" y="85" width="120" height="35" rx="3" fill="#EC4899"/><rect x="485" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="500" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="495" y="105" width="120" height="35" rx="3" fill="#10B981"/><rect x="640" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="655" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="650" y="90" width="120" height="35" rx="3" fill="#3B82F6"/></svg>`
      }
    ],
    outcome: {
      capabilities: [
        "Synchronized Stock Visibility: Eliminated out-of-stock discrepancies across retail branches through centralized catalog coordination.",
        "Automated Threshold Notifications: Replaced manual physical stock counts with automated minimum-threshold replenishment alerts.",
        "High-Throughput POS Updates: Provided low-latency catalog caching allowing registers to scan and verify SKUs with sub-second response times.",
        "Segregated Operational Access: Maintained distinct permissions separating cash register operations from central inventory procurement controls."
      ]
    },
    relatedProjects: [
      {
        name: "ApexLogistics Manager",
        slug: "apexlogistics",
        badge: "Logistics (Demo Concept)",
        category: "logistics",
        desc: "Fleet dispatch coordination dashboard, shipment status tracking, and warehouse storage logs for freight operations.",
        tech: "React Native | Node.js | PostgreSQL"
      },
      {
        name: "PropertyFlow Platform",
        slug: "propertyflow",
        badge: "Real Estate (Demo Concept)",
        category: "real-estate",
        desc: "Commercial and residential property search engine, client enquiry management console, and lease document repository.",
        tech: "Vue.js | PHP | MySQL"
      }
    ],
    cta: {
      heading: "Planning a Similar Retail or Inventory Management Solution?",
      lead: "Consult with TechNova's engineering architects to scope your inventory sync engine, point-of-sale data pipelines, and distributed cache architecture."
    }
  },

  "apexlogistics": {
    name: "ApexLogistics Manager",
    tagline: "Freight Dispatch & Fleet Coordination Platform",
    industry: "Logistics",
    category: "logistics",
    technologies: "React Native, Node.js, PostgreSQL",
    type: "Freight Dispatch & Fleet Coordination Platform",
    deliveryScope: "Cross-Platform Mobile & Web Architecture",
    heroDesc: "A logistics operations platform engineered to coordinate vehicle dispatch schedules, monitor freight transit milestones, and manage cross-dock warehouse storage logs.",
    demoNotice: "ApexLogistics Manager is a fictional/demonstration software model developed to illustrate TechNova's freight management and fleet coordination architecture. No real transport carriers, shipping contracts, or commercial deliveries are represented.",
    overview: "ApexLogistics Manager was conceptualized to address communication friction between regional depot dispatchers, long-haul vehicle drivers, and receiving warehouse docks. By replacing disconnected telephone status inquiries with a responsive dispatcher console and mobile driver milestone logs, freight operations maintain structured accountability from depot departure to final receiver handoff.",
    challenge: {
      bottlenecks: [
        "Dispatchers relied on manual phone calls to determine freight vehicle arrival times, leading to idle dock crews.",
        "Drivers lacked a consolidated mobile interface to report consignment milestone check-ins and delivery acknowledgments.",
        "Warehouse storage manifests were logged on physical clipboards, delaying inventory indexing upon truck arrival."
      ],
      constraints: [
        "Cross-platform mobile accessibility for drivers operating diverse Android and iOS handheld devices in transit.",
        "Low-bandwidth data synchronization to permit milestone logging across patchy highway mobile network zones.",
        "Relational storage schema linking multiple freight consignments to specific haulage trips, drivers, and warehouse bays."
      ]
    },
    solution: {
      summary: "TechNova engineered a unified logistics architecture pairing a cross-platform mobile driver interface with an operational web dispatch console. An event-driven Node.js backend processes transit updates into a transactional PostgreSQL database supporting geographic coordinates and manifest indexing.",
      tiers: [
        {
          title: "Cross-Platform Mobile Driver App",
          desc: "Engineered with React Native to provide drivers with clear turn checklists, milestone reporting, and offline-resilient sync queues."
        },
        {
          title: "Dispatch & Routing API Service",
          desc: "Built with Node.js and Express to process trip state transitions, compute estimated dock arrival windows, and dispatch alerts."
        },
        {
          title: "Relational Logistics Data Store",
          desc: "PostgreSQL database structuring freight manifests, vehicle telemetry coordinates, driver assignments, and depot bay records."
        }
      ]
    },
    process: [
      { step: 1, name: "Discovery", desc: "Mapped freight dispatching rules, driver route progression stages, and dock intake verification procedures." },
      { step: 2, name: "Planning", desc: "Structured mobile offline caching strategies, REST milestone endpoints, and relational manifest schemas." },
      { step: 3, name: "UI/UX", desc: "Designed high-contrast driver mobile screens with large tap targets and an expansive dispatch tracking console." },
      { step: 4, name: "Development", desc: "Built React Native driver views, Node.js coordination endpoints, and PostgreSQL database queries in staged sprints." },
      { step: 5, name: "Testing", desc: "Conducted simulated poor-network synchronization tests, mock GPS waypoint validation, and cross-device audits." },
      { step: 6, name: "Deployment", desc: "Configured cloud application servers, relational database replication, and automated environment provisioning." },
      { step: 7, name: "Support", desc: "Delivered fleet administrative guides, error monitoring integrations, and driver workflow refinement roadmaps." }
    ],
    features: [
      {
        title: "Fleet Dispatch & Trip Assignment Console",
        desc: "Centralized dispatcher dashboard assigning drivers, vehicles, and freight trailers to scheduled transit lanes."
      },
      {
        title: "Real-Time Waypoint & Route Tracking",
        desc: "Structured milestone updates allowing dispatchers to monitor route progression between pickup hubs and destination docks."
      },
      {
        title: "Warehouse Pallet & Storage Manifests",
        desc: "Digital bill-of-lading logs detailing cargo weight, pallet identifiers, special handling flags, and assigned storage bays."
      },
      {
        title: "Driver Mobile Task Checklist",
        desc: "Cross-platform mobile checklist enabling drivers to acknowledge cargo loading, departure timestamps, and delivery completion."
      },
      {
        title: "Freight Consignment Status Log",
        desc: "Complete audit history documenting custody transfers, transit stops, and signed receiver acknowledgments."
      },
      {
        title: "Depot & Hub Access Permissions",
        desc: "Security access layers ensuring regional hub managers, central dispatchers, and external contracted drivers see only designated manifests."
      }
    ],
    techStack: [
      {
        role: "Mobile & Web",
        name: "React Native",
        desc: "Multi-platform JavaScript framework powering the driver mobile application and desktop dispatch interface."
      },
      {
        role: "Backend API",
        name: "Node.js",
        desc: "Non-blocking event-driven backend handling transit milestone ingestion, status transitions, and dispatcher websocket feeds."
      },
      {
        role: "Database",
        name: "PostgreSQL",
        desc: "Enterprise-grade relational database providing spatial coordinate storage, transactional consistency, and data durability."
      }
    ],
    mockups: [
      {
        title: "Interface 1: Fleet Dispatch & Active Trip Tracking Console",
        desc: "Centralized overview console showing active highway vehicle routes, assigned freight consignments, and driver statuses.",
        url: "apexlogistics.demo/dispatch/map",
        svg: `<svg width="100%" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="30" fill="#1E293B"/><rect x="20" y="8" width="110" height="14" rx="3" fill="#0EA5E9"/><rect x="680" y="8" width="100" height="14" rx="3" fill="#334155"/><rect x="0" y="30" width="160" height="190" fill="#0F172A"/><rect x="20" y="50" width="120" height="12" rx="2" fill="#0EA5E9"/><rect x="20" y="75" width="100" height="10" rx="2" fill="#334155"/><rect x="20" y="98" width="110" height="10" rx="2" fill="#334155"/><rect x="20" y="121" width="90" height="10" rx="2" fill="#334155"/><rect x="20" y="144" width="105" height="10" rx="2" fill="#334155"/><rect x="180" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="195" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="195" y="78" width="70" height="18" rx="3" fill="#38BDF8"/><rect x="380" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="395" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="395" y="78" width="60" height="18" rx="3" fill="#10B981"/><rect x="580" y="50" width="190" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="595" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="595" y="78" width="60" height="18" rx="3" fill="#F59E0B"/><rect x="180" y="125" width="590" height="80" rx="6" fill="#1E293B" stroke="#334155"/><path d="M210 165 Q 350 140, 500 170 T 730 150" stroke="#0EA5E9" stroke-width="3" fill="none"/><circle cx="210" cy="165" r="5" fill="#10B981"/><circle cx="500" cy="170" r="5" fill="#F59E0B"/><circle cx="730" cy="150" r="5" fill="#38BDF8"/></svg>`
      },
      {
        title: "Interface 2: Warehouse Inbound Pallet & Cargo Manifest Grid",
        desc: "Receiving dock schedule detailing scheduled truck arrival slots, pallet counts, and designated warehouse staging bays.",
        url: "apexlogistics.demo/warehouse/manifests",
        svg: `<svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="760" height="30" rx="4" fill="#1E293B"/><rect x="40" y="28" width="140" height="14" rx="2" fill="#38BDF8"/><rect x="20" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="35" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="30" y="90" width="120" height="35" rx="3" fill="#0284C7"/><rect x="175" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="190" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="185" y="130" width="120" height="35" rx="3" fill="#0284C7"/><rect x="330" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="345" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="340" y="85" width="120" height="35" rx="3" fill="#10B981"/><rect x="485" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="500" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="495" y="105" width="120" height="35" rx="3" fill="#D97706"/><rect x="640" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="655" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="650" y="90" width="120" height="35" rx="3" fill="#0284C7"/></svg>`
      }
    ],
    outcome: {
      capabilities: [
        "Coordinated Freight Dispatching: Replaced phone calls with real-time waypoint progression tracking across highway transit lanes.",
        "Paperless Cargo Manifests: Standardized bills of lading and pallet manifests into digital records accessible to dock loading crews.",
        "Mobile Driver Independence: Delivered an offline-resilient mobile app allowing drivers to record status check-ins without network delays.",
        "Controlled Operational Data Layers: Restricted access so that contracted drivers, regional dispatchers, and warehouse supervisors access only relevant freight manifests."
      ]
    },
    relatedProjects: [
      {
        name: "RetailPulse Engine",
        slug: "retailpulse",
        badge: "Retail (Demo Concept)",
        category: "retail",
        desc: "Centralized multi-store product catalogue, inventory synchronization console, and point-of-sale data management platform.",
        tech: "Vue.js | Python | Redis"
      },
      {
        name: "FinSecure Portal",
        slug: "finsecure",
        badge: "Finance (Demo Concept)",
        category: "finance",
        desc: "Structured transaction ledger, financial statement reporting console, and role-based banking administration portal.",
        tech: "Angular | Python | PostgreSQL"
      }
    ],
    cta: {
      heading: "Planning a Similar Logistics or Supply Chain Solution?",
      lead: "Consult with TechNova's engineering architects to scope your fleet tracking workflows, driver mobile apps, and warehouse database architecture."
    }
  },

  "finsecure": {
    name: "FinSecure Portal",
    tagline: "Enterprise Transaction Ledger & Audit Reporting",
    industry: "Finance",
    category: "finance",
    technologies: "Angular, Python, PostgreSQL",
    type: "Enterprise Financial Administration & Reporting Platform",
    deliveryScope: "Secure Multi-Tier Web Architecture",
    heroDesc: "A financial administration platform engineered to provide immutable double-entry ledger bookkeeping, automated financial statement compilation, and multi-tier approval workflows.",
    demoNotice: "FinSecure Portal is a fictional/demonstration software model developed to illustrate TechNova's financial system architecture. No real bank accounts, monetary funds, or commercial financial transactions are represented.",
    overview: "FinSecure Portal was designed to eliminate manual reconciliation errors, audit trail vulnerabilities, and month-end closing delays in corporate accounting environments. By enforcing immutable double-entry accounting constraints, role-based dual-control approvals, and automated balance sheet compilation, the platform delivers verifiable financial bookkeeping without spreadsheet tampering risks.",
    challenge: {
      bottlenecks: [
        "Manual bookkeeping spreadsheets lacked immutable audit trails, risking undocumented corrections and formula discrepancies.",
        "Multi-department expense submissions suffered lengthy approval cycles due to fragmented email authorization threads.",
        "Compiling quarterly balance sheets and income statements required extensive manual extraction from disparate account ledgers."
      ],
      constraints: [
        "Strict double-entry mathematical balancing constraints ensuring total debits equal credits before commit.",
        "Segregation of duties enforcing dual-control authorization for transactions exceeding defined administrative limits.",
        "High-performance query engine capable of computing multi-period ledger balances across thousands of categorized journals."
      ]
    },
    solution: {
      summary: "TechNova engineered a secure three-tier financial web application. An Angular frontend provides typed data views and validation, connected to an asynchronous Python computation API and a PostgreSQL database enforcing transactional ACID guarantees and foreign-key audit logs.",
      tiers: [
        {
          title: "Type-Safe Angular Interface",
          desc: "Engineered with Angular and TypeScript to provide structured ledger grids, double-entry validation feedback, and accessible audit views."
        },
        {
          title: "Financial Computation API",
          desc: "Constructed with Python to execute balance reconciliation algorithms, financial statement compilation, and dual-approval workflows."
        },
        {
          title: "ACID Relational Ledger Store",
          desc: "PostgreSQL database enforcing immutable journal sequence logs, balance check constraints, and historical audit trails."
        }
      ]
    },
    process: [
      { step: 1, name: "Discovery", desc: "Mapped double-entry accounting rules, ledger chart of accounts, and organizational dual-approval hierarchies." },
      { step: 2, name: "Planning", desc: "Designed immutable journal schema, transaction state machines, and mathematical balance verification constraints." },
      { step: 3, name: "UI/UX", desc: "Created dense, high-contrast financial statement layouts, debit/credit color indicators, and clear approval queues." },
      { step: 4, name: "Development", desc: "Implemented Angular ledger components, Python calculation routines, and PostgreSQL constraint schemas in sprints." },
      { step: 5, name: "Testing", desc: "Conducted double-entry math validation tests, dual-approval boundary checks, and large-dataset query stress tests." },
      { step: 6, name: "Deployment", desc: "Configured secure application servers, database transaction isolation parameters, and automated backup routines." },
      { step: 7, name: "Support", desc: "Delivered accounting system administrator documentation, audit log inspection tools, and feature roadmaps." }
    ],
    features: [
      {
        title: "Immutable Double-Entry Ledger Engine",
        desc: "Enforces equal debit and credit inputs for all financial journals, preventing unbalanced transaction commits."
      },
      {
        title: "Financial Statement Compilation & Reporting",
        desc: "Automated generation of balance sheets, trial balances, and profit-and-loss statements across selectable reporting quarters."
      },
      {
        title: "Multi-Tier Transaction Approval Workflows",
        desc: "Configurable dual-control signing gates requiring managerial approval before large journal adjustments post to the general ledger."
      },
      {
        title: "Automated Account Reconciliation Matrix",
        desc: "Side-by-side reconciliation tool identifying discrepancies between external bank statement records and internal journal ledgers."
      },
      {
        title: "Comprehensive Audit Trail & Change Logs",
        desc: "Timestamped transaction log recording user identity, timestamp, IP origin, and exact before-and-after journal parameters."
      },
      {
        title: "Role-Based Banking & Compliance Permissions",
        desc: "Strict segregation of duties restricting data entry clerks, accounting supervisors, and external compliance auditors."
      }
    ],
    techStack: [
      {
        role: "Frontend",
        name: "Angular",
        desc: "Enterprise TypeScript frontend framework delivering type-safe form validation, structured data tables, and reactive interfaces."
      },
      {
        role: "Backend",
        name: "Python",
        desc: "Robust backend language driving mathematical balance calculations, statement generation routines, and approval state machines."
      },
      {
        role: "Database",
        name: "PostgreSQL",
        desc: "ACID-compliant relational database system delivering strict table constraints, transaction isolation, and immutable audit logs."
      }
    ],
    mockups: [
      {
        title: "Interface 1: Transaction Audit Console & Double-Entry Ledger",
        desc: "General ledger interface showing balanced journal vouchers, account classifications, and dual-control sign-off statuses.",
        url: "finsecure.demo/ledger/journal",
        svg: `<svg width="100%" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="30" fill="#1E293B"/><rect x="20" y="8" width="110" height="14" rx="3" fill="#10B981"/><rect x="680" y="8" width="100" height="14" rx="3" fill="#334155"/><rect x="0" y="30" width="160" height="190" fill="#0F172A"/><rect x="20" y="50" width="120" height="12" rx="2" fill="#10B981"/><rect x="20" y="75" width="100" height="10" rx="2" fill="#334155"/><rect x="20" y="98" width="110" height="10" rx="2" fill="#334155"/><rect x="20" y="121" width="90" height="10" rx="2" fill="#334155"/><rect x="20" y="144" width="105" height="10" rx="2" fill="#334155"/><rect x="180" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="195" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="195" y="78" width="70" height="18" rx="3" fill="#34D399"/><rect x="380" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="395" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="395" y="78" width="60" height="18" rx="3" fill="#38BDF8"/><rect x="580" y="50" width="190" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="595" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="595" y="78" width="60" height="18" rx="3" fill="#F59E0B"/><rect x="180" y="125" width="590" height="80" rx="6" fill="#1E293B" stroke="#334155"/><rect x="200" y="138" width="550" height="12" rx="2" fill="#334155"/><rect x="200" y="158" width="550" height="12" rx="2" fill="#0F172A"/><rect x="200" y="178" width="550" height="12" rx="2" fill="#334155"/></svg>`
      },
      {
        title: "Interface 2: Financial Statement Compilation & Compliance View",
        desc: "Quarterly balance statement viewer presenting compiled assets, liabilities, and reconciliation audit verifications.",
        url: "finsecure.demo/reports/statements",
        svg: `<svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="760" height="30" rx="4" fill="#1E293B"/><rect x="40" y="28" width="140" height="14" rx="2" fill="#34D399"/><rect x="20" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="35" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="30" y="90" width="120" height="35" rx="3" fill="#059669"/><rect x="175" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="190" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="185" y="130" width="120" height="35" rx="3" fill="#059669"/><rect x="330" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="345" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="340" y="85" width="120" height="35" rx="3" fill="#2563EB"/><rect x="485" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="500" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="495" y="105" width="120" height="35" rx="3" fill="#D97706"/><rect x="640" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="655" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="650" y="90" width="120" height="35" rx="3" fill="#059669"/></svg>`
      }
    ],
    outcome: {
      capabilities: [
        "Mathematically Balanced Books: Enforced double-entry constraints ensuring all financial journal entries remain strictly in balance.",
        "Automated Statement Compilation: Eliminated manual closing delays by compiling balance sheets and income reports directly from verified ledgers.",
        "Immutable Audit Compliance: Preserved complete non-repudiation logs detailing user actions, timestamps, and previous account balances.",
        "Segregated Dual-Control Workflows: Implemented dual-authorization gates separating bookkeepers from approving managers on sensitive journals."
      ]
    },
    relatedProjects: [
      {
        name: "PropertyFlow Platform",
        slug: "propertyflow",
        badge: "Real Estate (Demo Concept)",
        category: "real-estate",
        desc: "Commercial and residential property search engine, client enquiry management console, and lease document repository.",
        tech: "Vue.js | PHP | MySQL"
      },
      {
        name: "SmartCampus",
        slug: "smartcampus",
        badge: "Education (Demo Concept)",
        category: "education",
        desc: "Integrated academic management portal designed for institutional administration, student enrollment, and faculty grade records.",
        tech: "React | PHP | MySQL"
      }
    ],
    cta: {
      heading: "Planning a Similar Financial or Audit System?",
      lead: "Consult with TechNova's engineering architects to scope your double-entry ledger rules, approval state machines, and relational database constraints."
    }
  },

  "propertyflow": {
    name: "PropertyFlow Platform",
    tagline: "Property Directory & Lease Management Portal",
    industry: "Real Estate",
    category: "real-estate",
    technologies: "Vue.js, PHP, MySQL",
    type: "Real Estate Directory & Property Management Portal",
    deliveryScope: "Full-Stack Web Development",
    heroDesc: "A real estate management platform engineered to power commercial and residential property directories, viewing inquiry pipelines, and digital lease agreement repositories.",
    demoNotice: "PropertyFlow Platform is a fictional/demonstration software model developed to illustrate TechNova's real estate portal architecture. No real properties, leasing agreements, or tenant records are represented.",
    overview: "PropertyFlow Platform was developed to unify fragmented property marketing and tenancy administration for property management firms. Managing multi-unit commercial plazas alongside residential rentals often results in scattered property inquiries, double-booked viewings, and lost lease agreements. This web architecture unifies spatial listing catalogs, agent lead pipelines, and executed lease storage into a cohesive platform.",
    challenge: {
      bottlenecks: [
        "Inconsistent property descriptions and missing amenity data across disjointed real estate marketing channels.",
        "Prospective tenant viewing inquiries were scattered across email inboxes, resulting in slow follow-ups.",
        "Lease contracts and inspection reports were stored in physical filing cabinets, making expiration tracking difficult."
      ],
      constraints: [
        "Multi-faceted search capabilities allowing visitors to filter by property type, square footage, price range, and location.",
        "Responsive, image-optimized property card layout loading seamlessly across desktop monitors and mobile devices.",
        "Relational data model connecting property listings, agent assignments, client inquiries, and lease document metadata."
      ]
    },
    solution: {
      summary: "TechNova engineered a three-tier property portal architecture. A responsive Vue.js frontend provides instant filterable property catalogs and lead capture forms, powered by a structured PHP service layer and a normalized MySQL relational database.",
      tiers: [
        {
          title: "Dynamic Vue.js Property Directory",
          desc: "Engineered with Vue.js to provide interactive multi-criteria property search, floorplan viewing modals, and inquiry forms."
        },
        {
          title: "Structured PHP Administration API",
          desc: "Constructed with PHP to manage listing CRUD operations, viewing schedule assignments, and lease document indexing."
        },
        {
          title: "Relational Property Database",
          desc: "Normalized MySQL relational database modeling property units, amenities, tenancy periods, and brokerage assignments."
        }
      ]
    },
    process: [
      { step: 1, name: "Discovery", desc: "Mapped property listing attributes, viewing scheduling workflows, and tenancy contract documentation cycles." },
      { step: 2, name: "Planning", desc: "Formulated multi-facet search indexing, agent assignment matrices, and relational lease document models." },
      { step: 3, name: "UI/UX", desc: "Designed responsive property grid cards, visual amenity icon sets, and streamlined inquiry submission modals." },
      { step: 4, name: "Development", desc: "Built Vue.js catalog components, PHP listing management routes, and MySQL database tables in staged sprints." },
      { step: 5, name: "Testing", desc: "Conducted multi-criteria search filtering tests, mobile viewport audits, and form validation security checks." },
      { step: 6, name: "Deployment", desc: "Configured web server parameters, database query caching, and automated directory index routines." },
      { step: 7, name: "Support", desc: "Delivered property manager training guides, query performance monitors, and future feature enhancement plans." }
    ],
    features: [
      {
        title: "Multi-Criteria Property Search & Filter Engine",
        desc: "Instant client-side filtering by property category, purchase or lease terms, budget range, and physical amenities."
      },
      {
        title: "Commercial & Residential Listing Management",
        desc: "Comprehensive listing profiles detailing square footage, floorplans, parking ratios, zoning codes, and rental rates."
      },
      {
        title: "Tenant Viewing & Enquiry Dispatch Console",
        desc: "Organized intake pipeline assigning prospective tenant inquiries directly to designated portfolio leasing agents."
      },
      {
        title: "Digital Lease Agreement & Document Repository",
        desc: "Centralized document vault indexing signed tenancy agreements, floorplan PDFs, and handover inspection reports."
      },
      {
        title: "Maintenance Request & Asset Log",
        desc: "Ticketing register allowing property managers to record facility maintenance requests, priority tiers, and contractor notes."
      },
      {
        title: "Role-Based Agent & Tenant Access Portals",
        desc: "Segregated access permissions ensuring leasing agents, administrative staff, and property owners access only designated units."
      }
    ],
    techStack: [
      {
        role: "Frontend",
        name: "Vue.js",
        desc: "Progressive JavaScript framework delivering fast client-side property filtering, interactive card grids, and responsive views."
      },
      {
        role: "Backend",
        name: "PHP",
        desc: "Server-side web runtime providing endpoint routing, listing CRUD processing, inquiry validation, and document indexing."
      },
      {
        role: "Database",
        name: "MySQL",
        desc: "Relational database management system structuring property inventory, agent assignments, and tenancy history."
      }
    ],
    mockups: [
      {
        title: "Interface 1: Property Listing Registry & Spatial Search Matrix",
        desc: "Administrative listing management console displaying active commercial units, occupancy statuses, and asking rates.",
        url: "propertyflow.demo/listings/registry",
        svg: `<svg width="100%" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="30" fill="#1E293B"/><rect x="20" y="8" width="110" height="14" rx="3" fill="#6366F1"/><rect x="680" y="8" width="100" height="14" rx="3" fill="#334155"/><rect x="0" y="30" width="160" height="190" fill="#0F172A"/><rect x="20" y="50" width="120" height="12" rx="2" fill="#6366F1"/><rect x="20" y="75" width="100" height="10" rx="2" fill="#334155"/><rect x="20" y="98" width="110" height="10" rx="2" fill="#334155"/><rect x="20" y="121" width="90" height="10" rx="2" fill="#334155"/><rect x="20" y="144" width="105" height="10" rx="2" fill="#334155"/><rect x="180" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="195" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="195" y="78" width="70" height="18" rx="3" fill="#818CF8"/><rect x="380" y="50" width="180" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="395" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="395" y="78" width="60" height="18" rx="3" fill="#38BDF8"/><rect x="580" y="50" width="190" height="60" rx="6" fill="#1E293B" stroke="#334155"/><rect x="595" y="62" width="80" height="8" rx="2" fill="#94A3B8"/><rect x="595" y="78" width="60" height="18" rx="3" fill="#10B981"/><rect x="180" y="125" width="590" height="80" rx="6" fill="#1E293B" stroke="#334155"/><rect x="200" y="138" width="550" height="12" rx="2" fill="#334155"/><rect x="200" y="158" width="550" height="12" rx="2" fill="#0F172A"/><rect x="200" y="178" width="550" height="12" rx="2" fill="#334155"/></svg>`
      },
      {
        title: "Interface 2: Lease Document Management & Tenancy Console",
        desc: "Tenancy administration workspace displaying executed contracts, expiration dates, and pending tenant inquiries.",
        url: "propertyflow.demo/leases/agreements",
        svg: `<svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="760" height="30" rx="4" fill="#1E293B"/><rect x="40" y="28" width="140" height="14" rx="2" fill="#818CF8"/><rect x="20" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="35" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="30" y="90" width="120" height="35" rx="3" fill="#4F46E5"/><rect x="175" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="190" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="185" y="130" width="120" height="35" rx="3" fill="#4F46E5"/><rect x="330" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="345" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="340" y="85" width="120" height="35" rx="3" fill="#0284C7"/><rect x="485" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="500" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="495" y="105" width="120" height="35" rx="3" fill="#10B981"/><rect x="640" y="60" width="140" height="120" rx="4" fill="#0F172A" stroke="#334155"/><rect x="655" y="70" width="70" height="8" rx="2" fill="#94A3B8"/><rect x="650" y="90" width="120" height="35" rx="3" fill="#4F46E5"/></svg>`
      }
    ],
    outcome: {
      capabilities: [
        "Structured Listing Management: Standardized commercial and residential unit specifications into an indexed database catalog.",
        "Consolidated Enquiry Routing: Connected public inquiry submissions directly to assigned leasing agent workflows, preventing missed viewings.",
        "Centralized Lease Repository: Provided secure digital storage and indexing for executed tenancy agreements and inspection records.",
        "Multi-Tiered Access Roles: Maintained discrete access layers separating public visitors, property agents, and asset owners."
      ]
    },
    relatedProjects: [
      {
        name: "HealthSync Portal",
        slug: "healthsync",
        badge: "Healthcare (Demo Concept)",
        category: "healthcare",
        desc: "Patient appointment coordination console, clinical intake workflows, and secure medical staff communication dashboard.",
        tech: "React | Node.js | PostgreSQL"
      },
      {
        name: "ApexLogistics Manager",
        slug: "apexlogistics",
        badge: "Logistics (Demo Concept)",
        category: "logistics",
        desc: "Fleet dispatch coordination dashboard, shipment status tracking, and warehouse storage logs for freight operations.",
        tech: "React Native | Node.js | PostgreSQL"
      }
    ],
    cta: {
      heading: "Planning a Similar Real Estate or Property Management Solution?",
      lead: "Consult with TechNova's engineering architects to scope your property directory engine, tenant inquiry pipelines, and document storage models."
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = caseStudiesData;
}
