/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/careers.js
 * Description: Client-side job filtering for the careers portal.
 * Specification: TechNova Solutions PDR (Section 18, 25)
 */

document.addEventListener("DOMContentLoaded", () => {
  initCareersFiltering();
});

/**
 * Filter job listings by department, employment type, or location
 */
function initCareersFiltering() {
  const deptFilter = document.querySelector("#careers-dept-filter");
  const typeFilter = document.querySelector("#careers-type-filter");
  const jobCards = document.querySelectorAll(".job-card");

  if (!deptFilter || jobCards.length === 0) return;

  function filterJobs() {
    const selectedDept = deptFilter ? deptFilter.value : "all";
    const selectedType = typeFilter ? typeFilter.value : "all";

    jobCards.forEach((card) => {
      const cardDept = card.getAttribute("data-department") || "";
      const cardType = card.getAttribute("data-type") || "";

      const matchDept = selectedDept === "all" || cardDept === selectedDept;
      const matchType = selectedType === "all" || cardType === selectedType;

      if (matchDept && matchType) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  if (deptFilter) deptFilter.addEventListener("change", filterJobs);
  if (typeFilter) typeFilter.addEventListener("change", filterJobs);
}
