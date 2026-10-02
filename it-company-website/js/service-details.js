/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/service-details.js
 * Description: Dynamic rendering engine for all 12 PDR service detail specifications.
 * Specification: TechNova Solutions PDR (Section 8, 9, 10)
 */

document.addEventListener("DOMContentLoaded", () => {
  renderServiceDetails();
});

function renderServiceDetails() {
  if (typeof SERVICES_DATA === "undefined") {
    console.error("SERVICES_DATA not loaded.");
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const serviceSlug = urlParams.get("service");

  // Lookup requested service, or fallback gracefully to web-application-development
  const fallbackSlug = "web-application-development";
  const service = (serviceSlug && SERVICES_DATA[serviceSlug])
    ? SERVICES_DATA[serviceSlug]
    : SERVICES_DATA[fallbackSlug];

  if (!service) return;

  // 1. Update Document Title & SEO Metadata
  document.title = service.pageTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", service.metaDescription);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", service.pageTitle);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute("content", service.metaDescription);
  }

  // 2. Update Breadcrumb & Hero Header
  const breadcrumbCurrent = document.getElementById("service-breadcrumb");
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = service.name;
  }

  const serviceTitle = document.getElementById("service-title");
  if (serviceTitle) {
    serviceTitle.textContent = service.name;
  }

  const heroLead = document.getElementById("service-hero-lead");
  if (heroLead) {
    heroLead.textContent = service.heroLead;
  }

  // 3. Update Overview Section
  const overviewLead = document.getElementById("service-overview-lead");
  if (overviewLead) {
    overviewLead.textContent = service.overviewLead;
  }

  const overviewDesc = document.getElementById("service-overview-desc");
  if (overviewDesc) {
    overviewDesc.textContent = service.overviewDesc;
  }

  // 4. Update Deliverables Section ("What We Build")
  const deliverablesLead = document.getElementById("service-deliverables-lead");
  if (deliverablesLead && service.deliverablesLead) {
    deliverablesLead.textContent = service.deliverablesLead;
  }

  const deliverablesGrid = document.getElementById("service-deliverables-grid");
  if (deliverablesGrid && Array.isArray(service.deliverables)) {
    deliverablesGrid.innerHTML = service.deliverables.map((item) => `
      <div class="build-card">
        <h3 class="build-card-title">
          ${item.icon}
          ${escapeHtml(item.title)}
        </h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>
    `).join("");
  }

  // 5. Update 7-Stage Process Stepper
  const processStepper = document.getElementById("service-process-stepper");
  if (processStepper && Array.isArray(service.process)) {
    processStepper.innerHTML = service.process.map((step) => `
      <div class="process-step-card" role="listitem">
        <div class="process-step-num">${step.step}</div>
        <h3 class="process-step-name">${escapeHtml(step.name)}</h3>
        <p class="process-step-desc">${escapeHtml(step.desc)}</p>
      </div>
    `).join("");
  }

  // 6. Update Capabilities List
  const capabilitiesList = document.getElementById("service-capabilities-list");
  if (capabilitiesList && Array.isArray(service.capabilities)) {
    capabilitiesList.innerHTML = service.capabilities.map((cap) => `
      <li>● ${escapeHtml(cap)}</li>
    `).join("");
  }

  // 7. Update Technologies List
  const technologiesList = document.getElementById("service-technologies-list");
  if (technologiesList && Array.isArray(service.technologies)) {
    technologiesList.innerHTML = service.technologies.map((tech) => `
      <li>● ${tech}</li>
    `).join("");
  }

  // 8. Update Benefits List
  const benefitsList = document.getElementById("service-benefits-list");
  if (benefitsList && Array.isArray(service.benefits)) {
    benefitsList.innerHTML = service.benefits.map((ben) => `
      <li>● ${escapeHtml(ben)}</li>
    `).join("");
  }

  // 9. Update Related Projects
  const relatedGrid = document.getElementById("service-related-projects");
  if (relatedGrid && Array.isArray(service.relatedProjects)) {
    relatedGrid.innerHTML = service.relatedProjects.map((p) => `
      <article class="portfolio-card">
        <div class="portfolio-img-box">
          <span class="portfolio-industry-badge">${escapeHtml(p.badge)}</span>
          ${p.icon}
        </div>
        <div class="portfolio-card-body">
          <h3 class="portfolio-title">${escapeHtml(p.name)} <span style="font-size: var(--font-size-xs); font-weight: var(--font-weight-normal); color: var(--color-text-subtle);">(Demo Project)</span></h3>
          <p class="portfolio-desc">${escapeHtml(p.desc)}</p>
          <a href="${escapeHtml(p.link)}" class="btn btn-secondary" style="margin-top: auto;">View Case Study</a>
        </div>
      </article>
    `).join("");
  }

  // 10. Update Service Call to Action
  const ctaHeading = document.getElementById("cta-heading");
  if (ctaHeading && service.ctaTitle) {
    ctaHeading.textContent = service.ctaTitle;
  }

  const ctaLead = document.getElementById("cta-lead");
  if (ctaLead && service.ctaLead) {
    ctaLead.textContent = service.ctaLead;
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
