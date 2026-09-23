/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/portfolio.js
 * Description: Client-side filtering for portfolio case studies by industry, technology, or service.
 * Specification: TechNova Solutions PDR (Section 13, 25)
 */

document.addEventListener("DOMContentLoaded", () => {
  initPortfolioFiltering();
});

/**
 * Filter portfolio items by category / tag
 */
function initPortfolioFiltering() {
  const filterButtons = document.querySelectorAll("[data-portfolio-filter]");
  const portfolioItems = document.querySelectorAll("[data-portfolio-category]");

  if (filterButtons.length === 0 || portfolioItems.length === 0) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedFilter = btn.getAttribute("data-portfolio-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      portfolioItems.forEach((item) => {
        const itemCategories = item.getAttribute("data-portfolio-category").split(" ");
        if (selectedFilter === "all" || itemCategories.includes(selectedFilter)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}
