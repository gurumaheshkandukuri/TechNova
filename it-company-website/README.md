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
* **Backend & Database:** PHP 8.4+ with `pdo_mysql` extension, MySQL 8.4+ database engine
* **Version Control:** Git & GitHub

---

## 5. Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/gurumaheshkandukuri/TechNova.git
   cd TechNova/it-company-website
   ```

2. **Run locally:**
   * **PHP Built-in Server (Recommended for Backend APIs):**
     ```bash
     php -S localhost:8000
     ```
   * **Frontend-Only Static HTTP Server:**
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js
     npx serve .
     ```
   * **Direct File Execution:** Open `index.html` directly in any modern web browser (client-side only).

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
├── assets/
│   └── screenshots/            # Platform interface evaluation captures (PDR Section 38/39)
│
├── backend/
│   ├── api/
│   │   ├── submit_enquiry.php          # Project & contact enquiry submission endpoint
│   │   ├── subscribe_newsletter.php    # Newsletter subscription endpoint
│   │   └── submit_job_application.php  # Job application & resume upload endpoint
│   ├── config/
│   │   └── database.php                # PDO database connection layer
│   └── uploads/
│       └── resumes/                    # Candidate resume upload storage (.gitkeep)
│
├── database/
│   └── schema.sql                      # Canonical MySQL database schema DDL
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

| Page / Interface | Description | Screenshot File Path |
|---|---|---|
| **Homepage** | Hero section, corporate statistics, and services preview | `assets/screenshots/01_homepage.png` |
| **Services Directory** | 12 IT services with live category filtering bar | `assets/screenshots/02_services.png` |
| **Enterprise Solutions** | 9 business software solution modules | `assets/screenshots/03_solutions.png` |
| **Portfolio Directory** | 6 demonstration project cards with sector filter | `assets/screenshots/04_portfolio.png` |
| **Case Study** | SmartCampus architecture, problem, and results | `assets/screenshots/05_case_study.png` |
| **BusinessFlow CRM** | Conceptual modules and interface preview | `assets/screenshots/06_products.png` |
| **Careers Portal** | Workplace principles, filterable job listings | `assets/screenshots/07_careers.png` |
| **Engineering Blog** | 7-category filter, live title search, card grid | `assets/screenshots/08_blog.png` |
| **FAQ Page** | Accessible 8-question interactive accordion | `assets/screenshots/09_faq.png` |
| **Start Project Stepper** | 5-step guided project planner workflow | `assets/screenshots/10_start_project.png` |

*Note: Visual interfaces can also be directly inspected in a browser via the local server installation instructions.*

---

## 8. Database Setup

### Prerequisites
* **MySQL Database Server:** MySQL 8.4+ (Tested and verified on MySQL 8.4.9)
* **PHP Runtime:** PHP 8.4+ with `pdo_mysql` extension enabled

### Database Specifications
* **Database Name:** `technova`
* **Character Set:** `utf8mb4`
* **Collation:** `utf8mb4_0900_ai_ci`
* **Storage Engine:** InnoDB

### Implemented Tables
The canonical database schema is defined in `database/schema.sql` and includes the 3 active tables:
1. `enquiries` — Records project planner (`start-project.html`) and corporate contact (`contact.html`) enquiries with canonical status workflow (`New`, `Contacted`, `Qualified`, `Proposal Sent`, `Converted`, `Closed`).
2. `newsletter_subscribers` — Stores verified, deduplicated email subscriptions captured across all 19 website pages.
3. `job_applications` — Stores candidate recruitment applications submitted via `job-details.html`, referencing local resume file paths under `backend/uploads/resumes/`.

### Setup Instructions

1. **Create and Select Database:**
   Log into your local MySQL CLI or client and create the database:
   ```sql
   CREATE DATABASE IF NOT EXISTS technova CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
   USE technova;
   ```

2. **Import Canonical Schema:**
   Import the schema DDL using the MySQL command line:
   ```bash
   mysql -u root -p technova < database/schema.sql
   ```
   *(Or execute the DDL queries in `database/schema.sql` directly within your preferred MySQL administration tool).*

3. **Configure Database Connection:**
   The backend database connection configuration is located at:
   [`backend/config/database.php`](backend/config/database.php)

   The connection layer resolves credentials dynamically via environment variables using native PHP `getenv()`, with graceful fallbacks for local development:

   | Environment Variable | Description | Local Development Fallback |
   | :--- | :--- | :--- |
   | `DB_HOST` | Database server hostname or IP | `localhost` |
   | `DB_PORT` | MySQL database port | `3306` |
   | `DB_NAME` | MySQL database name | `technova` |
   | `DB_USER` | MySQL database user | `root` |
   | `DB_PASS` | MySQL database password | `""` (empty string) |
   | `DB_CHARSET` | Character set | `utf8mb4` |

   **Local Development:**
   When running locally without environment variables set, the configuration automatically uses the local fallback values shown above. No additional configuration is required for a standard local development setup.

   **Production Deployment:**
   In production environments, credentials must never be hardcoded. The production hosting environment must supply the appropriate values via environment variables (`DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS`, and optionally `DB_CHARSET`).

   > [!IMPORTANT]
   > **Security Reminder:** Never commit real database passwords or production credentials to Git. Always ensure production credentials remain untracked and are supplied securely through the hosting environment.

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
* **Role:** Full-Stack Web Architecture & UI Engineering
* **Specification Authority:** TechNova Solutions Product Development Requirements (PDR)

---

## 12. Future Improvements
The following capabilities represent advanced and optional scope items deferred per architecture decisions:
1. **Administrative CMS Dashboard:** Authenticated administrator interface for publishing articles, updating job openings, and viewing sales enquiries (PDR Section 33).
2. **Lead Management CRM Pipeline:** Interactive lead status progression and sales assignment pipeline (PDR Section 34).
3. **Interactive Cost Estimator:** Full implementation of the standalone project cost calculator and service configurator.
4. **Theme Customization:** Accessible Dark / Light mode toggle with user preference persistence.
5. **Structured Data Markup:** Schema.org JSON-LD structured data for Organization, WebSite, and JobPosting upon production domain launch.
