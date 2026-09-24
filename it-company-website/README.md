# TechNova Solutions — Corporate IT Company Website

> **Demonstration Project Notice:** TechNova Solutions is a demonstration/fictional IT services and software development enterprise created for architectural and educational showcase. All service scenarios, portfolio projects, client case studies, team profiles, and company metrics are sample demonstration records (PDR Section 2 & 22).

---

## 1. Project Name
**TechNova Solutions — Corporate IT Company Website**

---

## 2. Objective
The objective of this project is to architect, engineer, and deliver a modern, professional, and accessible corporate IT company website that showcases TechNova Solutions' services, products, enterprise solutions, industry capabilities, demonstration projects, team, and career opportunities, while providing functional client-side enquiry workflows and recruitment interactions.

The website follows an enterprise procurement and client engagement journey:
`Discover Company → Explore Services → View Solutions → See Work → Build Trust → Submit Enquiry`

---

## 3. Features
* **Corporate Header & Navigation:** Responsive header featuring desktop menu links, primary "Start a Project" CTA, and a mobile navigation drawer with touch/keyboard accessibility.
* **Services Directory & Filtering:** 12 IT services across 7 core categories with instant client-side keyword search, category filtering, dynamic counter, and empty-state messaging.
* **Service Details Template:** Standardized multi-section presentation on `service-details.html` containing Service Overview, What We Build (6 deliverables), 7-stage Engineering Lifecycle, Technical Capabilities, Key Benefits, and Related Projects.
* **Enterprise Solutions:** 9 structured software solution frameworks on `solutions.html` addressing specific business challenges (CRM, ERP, School Management, Real Estate, Restaurant Management, HR, Inventory, Analytics, Automation).
* **Industry Verticals:** 10 industry sector showcases on `industries.html` detailing domain-specific challenges and technical solutions.
* **Portfolio Showcase & Filtering:** Client-side sector-filtered project directory on `portfolio.html` showcasing 6 demonstration applications with live project counters.
* **In-Depth Case Study:** Structured presentation on `case-study.html` featuring the SmartCampus Integrated Academic Management Portal (Problem, Architecture, Results, Technologies, Process).
* **Proprietary Software Products:** Product showcase on `products.html` and detailed architectural specification on `product-details.html` featuring BusinessFlow CRM.
* **Technology Stack Matrix:** Interactive directory on `technologies.html` categorizing 19 technologies across Frontend, Backend, Database, Mobile, Cloud, and Developer Tools.
* **Leadership & Team Directory:** Professional profile directory on `team.html` presenting 6 engineering and practice leads.
* **Careers & Recruitment Portal:** Workplace culture showcase on `careers.html` featuring 5 core principles (Learning, Projects, Mentorship, Flexible Environment, Career Growth), job listings with department/type filter, and application form on `job-details.html`.
* **Technology Blog & Resources:** Engineering insights directory on `blog.html` with 7 PDR categories, live search, results count, empty state, and an 8-element reader view on `blog-details.html`.
* **Frequently Asked Questions (FAQ):** Accessible accordion on `faq.html` featuring the exact 8 PDR questions with realistic, grounded answers.
* **Interactive Lead Generation:** General 8-field enquiry form on `contact.html` and a guided 5-step project planner on `start-project.html` with live review summary and reset capabilities.
* **Global Newsletter Subscription:** Accessible footer subscription form with client-side email format validation on all 19 pages.
* **Accessibility & Design Tokens:** WCAG AA contrast ratios, fluid layout without horizontal overflow (tested at 375px, 768px, 1024px, 1440px), visible focus rings, skip-to-content links, and semantic landmark attributes (`role="banner"`, `role="contentinfo"`).

---

## 4. Technologies
* **Markup:** HTML5 (Semantic elements, ARIA landmark roles, accessible skip links)
* **Styling:** CSS3 (CSS Custom Properties / Design Tokens, Flexbox, CSS Grid, media queries for 640px, 768px, 1024px, 1280px, and `prefers-reduced-motion`)
* **Client-Side Scripting:** Vanilla JavaScript (ES6+, DOM manipulation, modular architecture without external runtime dependencies)
* **Architecture:** Static client-side interactive architecture with modular separation:
  * `js/main.js`: Global navigation, mobile drawer, FAQ accordion, blog filtering/search, smooth scrolling
  * `js/services.js`: Services directory filtering and search
  * `js/portfolio.js`: Portfolio sector filtering
  * `js/careers.js`: Careers job filtering
  * `js/validation.js`: Universal form validation, newsletter handling, 5-step enquiry stepper
* **Third-Party Frameworks / Libraries:** None (Zero external dependencies, zero CDNs, zero runtime packages)
* **Backend / Database:** None in current implementation (strictly frontend-only runtime)
* **Version Control:** Git & GitHub

---

## 5. Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/gurumaheshkandukuri/TechNova.git
   cd TechNova/it-company-website
   ```

2. **Run locally:**
   * **Direct File Execution:** Open `index.html` directly in any modern web browser.
   * **Local HTTP Server (Recommended):**
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js
     npx serve .
     ```

3. **Access the application:**
   Navigate to `http://localhost:8000` or the port displayed in your terminal.

---

## 6. Folder Structure
```
it-company-website/
├── index.html                  # Homepage (Hero, Stats, Featured Services, Solutions Preview, CTA)
├── about.html                  # About Us (Company Profile, Mission, Vision, Core Values)
├── services.html               # IT Services Directory (12 services, live category filtering)
├── service-details.html        # Service Details Template (Overview, Deliverables, Process, Tech)
├── solutions.html              # Enterprise Solutions (9 business software frameworks)
├── industries.html             # Industries Served (10 sector verticals)
├── portfolio.html              # Portfolio Directory (6 demo projects, sector filtering)
├── case-study.html             # Case Study Presentation (SmartCampus academic portal)
├── products.html               # Software Products Directory (BusinessFlow CRM showcase)
├── product-details.html        # Product Details (BusinessFlow CRM specifications & architecture)
├── technologies.html           # Technologies Matrix (19 technologies, 6 layer filters)
├── team.html                   # Leadership & Team Directory (6 verified profiles)
├── careers.html                # Careers Portal (Why Work With Us, job listings filter)
├── job-details.html            # Job Details & Application Form (Role description, form)
├── blog.html                   # Engineering Blog (7 categories, live search, results count)
├── blog-details.html           # Article Reader (8-element structure, related posts)
├── faq.html                    # Frequently Asked Questions (8 PDR questions, accordion)
├── contact.html                # Corporate Contact Page (8-field enquiry form, company info)
├── start-project.html          # Interactive 5-Step Project Planner (Stepper workflow)
│
├── css/
│   └── style.css               # Consolidated design tokens, layout, components, and responsive styles
│
├── js/
│   ├── main.js                 # Global navigation, mobile drawer, FAQ accordion, blog search/filter
│   ├── services.js             # Services directory category filtering and search
│   ├── portfolio.js            # Portfolio client-side sector filtering
│   ├── careers.js              # Careers department and employment type filtering
│   ├── estimator.js            # Project cost estimator placeholder (omitted per architecture decision)
│   └── validation.js           # Form validation, newsletter validation, 5-step stepper workflow
│
├── images/
│   ├── blog/                   # Directory placeholder for blog imagery
│   ├── hero/                   # Directory placeholder for hero imagery
│   ├── products/               # Directory placeholder for product visual assets
│   ├── projects/               # Directory placeholder for portfolio imagery
│   ├── services/               # Directory placeholder for service visual assets
│   └── team/                   # Directory placeholder for team avatars
│
└── README.md                   # Project documentation
```

---

## 7. Screenshots
*(Representative screenshots of key platform interfaces for documentation and evaluation)*

| Page / Interface | Description | Target Path / Placeholder |
|---|---|---|
| **Homepage** | Hero section, corporate statistics, and services preview | `assets/screenshots/01_homepage.png` (Placeholder) |
| **Services Directory** | 12 IT services with live category filtering bar | `assets/screenshots/02_services.png` (Placeholder) |
| **Enterprise Solutions** | 9 business software solution modules | `assets/screenshots/03_solutions.png` (Placeholder) |
| **Portfolio Directory** | 6 demonstration project cards with sector filter | `assets/screenshots/04_portfolio.png` (Placeholder) |
| **Case Study** | SmartCampus architecture, problem, and results | `assets/screenshots/05_case_study.png` (Placeholder) |
| **BusinessFlow CRM** | Conceptual modules and interface preview | `assets/screenshots/06_products.png` (Placeholder) |
| **Careers Portal** | Workplace principles, filterable job listings | `assets/screenshots/07_careers.png` (Placeholder) |
| **Engineering Blog** | 7-category filter, live title search, card grid | `assets/screenshots/08_blog.png` (Placeholder) |
| **FAQ Page** | Accessible 8-question interactive accordion | `assets/screenshots/09_faq.png` (Placeholder) |
| **Start Project Stepper** | 5-step guided project planner workflow | `assets/screenshots/10_start_project.png` (Placeholder) |

*Note: Visual interfaces can also be directly inspected in a browser via the local server installation instructions.*

---

## 8. Database Setup
**Current Architecture: Frontend-Only**
* The current approved implementation of the TechNova Solutions platform is strictly frontend-only (Vanilla HTML5, CSS3, ES6+ JavaScript).
* No database server, SQL instance, or backend runtime is configured or required to run the platform.
* All form interactions (Contact enquiry, Job application, Start Project stepper, Newsletter subscription) operate as client-side interactive workflows with accessible confirmation states.
* Relational database models and table schemas are deferred to future backend integration stages.

---

## 9. GitHub URL
The project repository is hosted on GitHub at:
`https://github.com/gurumaheshkandukuri/TechNova.git`

---

## 10. Live URL
**Status: Deployment Not Completed**
* Production deployment has not yet been executed.
* The project is currently configured and verified for local execution and static preview.
* No live public domain or third-party hosting URL is currently active.

---

## 11. Developer Info
* **Repository Owner:** gurumaheshkandukuri
* **Repository:** [TechNova](https://github.com/gurumaheshkandukuri/TechNova.git)
* **Project:** TechNova Solutions Corporate IT Website
* **Role:** Frontend Architecture & UI Engineering
* **Specification Authority:** TechNova Solutions Product Development Requirements (PDR)

---

## 12. Future Improvements
The following capabilities represent advanced and optional scope items deferred per architecture decisions:
1. **Server-Side Backend Integration:** Implementation of server-side endpoints (PHP / Node.js) for handling contact enquiries and resume uploads.
2. **Database Persistence:** Relational database integration (MySQL / PostgreSQL) for storing enquiries, job applicant records, and blog articles.
3. **Administrative CMS Dashboard:** Authenticated administrator interface for publishing articles, updating job openings, and viewing sales enquiries.
4. **Interactive Cost Estimator:** Full implementation of the standalone project cost calculator and service configurator.
5. **Theme Customization:** Accessible Dark / Light mode toggle with user preference persistence.
6. **Structured Data Markup:** Schema.org JSON-LD structured data for Organization, WebSite, and JobPosting upon production domain launch.
