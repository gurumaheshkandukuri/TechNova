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
 * Filter job listings by department and employment type with accessible feedback
 */
function initCareersFiltering() {
  const deptFilter = document.querySelector("#careers-dept-filter");
  const typeFilter = document.querySelector("#careers-type-filter");
  const jobCards = document.querySelectorAll(".job-card");
  const noJobsMessage = document.querySelector("#no-jobs-found");
  const resultsCount = document.querySelector("#careers-results-count");
  const resetBtn = document.querySelector("#careers-filter-reset");

  if (!deptFilter || jobCards.length === 0) return;

  function filterJobs() {
    const selectedDept = deptFilter ? deptFilter.value : "all";
    const selectedType = typeFilter ? typeFilter.value : "all";
    let visibleCount = 0;

    jobCards.forEach((card) => {
      const cardDept = card.getAttribute("data-department") || "";
      const cardType = card.getAttribute("data-type") || "";

      const matchDept = selectedDept === "all" || cardDept === selectedDept;
      const matchType = selectedType === "all" || cardType === selectedType;

      if (matchDept && matchType) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (noJobsMessage) {
      noJobsMessage.style.display = visibleCount === 0 ? "block" : "none";
    }

    if (resultsCount) {
      resultsCount.textContent = `Showing ${visibleCount} sample opportunit${visibleCount === 1 ? "y" : "ies"}`;
    }
  }

  if (deptFilter) deptFilter.addEventListener("change", filterJobs);
  if (typeFilter) typeFilter.addEventListener("change", filterJobs);
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (deptFilter) deptFilter.value = "all";
      if (typeFilter) typeFilter.value = "all";
      filterJobs();
      deptFilter.focus();
    });
  }
}
