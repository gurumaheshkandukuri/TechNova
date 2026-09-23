/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/main.js
 * Description: Core JavaScript for Global Navigation, Smooth Scroll, Accordion, Modals, and Counters.
 * Specification: TechNova Solutions PDR (Section 25)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Foundational initialization for global components
  initMobileNav();
  initFaqAccordion();
  initDynamicCounters();
  initSmoothScroll();
});

/**
 * Mobile Navigation Toggle & Drawer (PDR Section 25)
 */
function initMobileNav() {
  const menuToggle = document.querySelector(".mobile-nav-toggle");
  const navDrawer = document.querySelector(".nav-drawer");

  if (!menuToggle || !navDrawer) return;

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    navDrawer.classList.toggle("is-open", !isExpanded);
    document.body.classList.toggle("nav-drawer-open", !isExpanded);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navDrawer.classList.contains("is-open")) {
      menuToggle.setAttribute("aria-expanded", "false");
      navDrawer.classList.remove("is-open");
      document.body.classList.remove("nav-drawer-open");
      menuToggle.focus();
    }
  });
}

/**
 * Accessible FAQ Accordion (PDR Section 22, 25)
 */
function initFaqAccordion() {
  const accordionButtons = document.querySelectorAll(".accordion-header");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const panel = button.nextElementSibling;

      button.setAttribute("aria-expanded", !isExpanded);
      if (panel) {
        panel.classList.toggle("is-open", !isExpanded);
      }
    });
  });
}

/**
 * Dynamic Statistics Counter (PDR Section 6, 25)
 * Triggers animated number increase via IntersectionObserver
 */
function initDynamicCounters() {
  const counterElements = document.querySelectorAll("[data-counter-target]");
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-counter-target"), 10);
          const suffix = el.getAttribute("data-counter-suffix") || "";
          animateCounter(el, target, suffix);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  counterElements.forEach((el) => observer.observe(el));
}

function animateCounter(element, target, suffix) {
  let current = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = current + suffix;
  }, 30);
}

/**
 * Smooth Scrolling for Anchor Links (PDR Section 25)
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
