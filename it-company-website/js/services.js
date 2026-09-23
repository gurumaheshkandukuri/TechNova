/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/services.js
 * Description: Client-side category filtering for the services directory.
 * Specification: TechNova Solutions PDR (Section 9, 25)
 */

document.addEventListener("DOMContentLoaded", () => {
  initServiceFiltering();
});

/**
 * Filter service cards by category (Development, Design, Cloud, Business Software, Automation, Consulting, Marketing)
 */
function initServiceFiltering() {
  const filterButtons = document.querySelectorAll("[data-service-filter]");
  const serviceCards = document.querySelectorAll("[data-service-category]");

  if (filterButtons.length === 0 || serviceCards.length === 0) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCategory = btn.getAttribute("data-service-filter");

      // Update active and ARIA state on filter buttons
      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      // Filter cards
      serviceCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-service-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
