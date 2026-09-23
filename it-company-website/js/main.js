/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/main.js
 * Description: Core JavaScript for Global Navigation, Smooth Scroll, Accordion, Modals, and Counters.
 * Specification: TechNova Solutions PDR (Section 25)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Foundational initialization for global components
  initStickyHeader();
  initMobileNav();
  initFaqAccordion();
  initDynamicCounters();
  initSmoothScroll();
  initTechFiltering();
  initBlogFilterAndSearch();
});

/**
 * Sticky Header Scroll State
 */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/**
 * Mobile Navigation Toggle & Drawer (PDR Section 25)
 */
function initMobileNav() {
  const menuToggle = document.querySelector(".mobile-nav-toggle");
  const mobileDrawer = document.querySelector("#mobile-nav-drawer");
  const drawerCloseBtn = document.querySelector(".mobile-drawer-close");
  const drawerOverlay = document.querySelector(".mobile-drawer-overlay");
  const drawerLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuToggle || !mobileDrawer) return;

  function openDrawer() {
    menuToggle.setAttribute("aria-expanded", "true");
    mobileDrawer.removeAttribute("hidden");
    mobileDrawer.classList.add("is-open");
    document.body.classList.add("nav-drawer-open");
    if (drawerCloseBtn) drawerCloseBtn.focus();
  }

  function closeDrawer() {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("is-open");
    document.body.classList.remove("nav-drawer-open");
    setTimeout(() => {
      if (!mobileDrawer.classList.contains("is-open")) {
        mobileDrawer.setAttribute("hidden", "");
      }
    }, 250);
    menuToggle.focus();
  }

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", closeDrawer);
  }

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("is-open")) {
      closeDrawer();
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

/**
 * Technology Directory Category Filtering (PDR Section 15)
 */
function initTechFiltering() {
  const filterButtons = document.querySelectorAll("[data-tech-filter]");
  const techCards = document.querySelectorAll("[data-tech-category]");

  if (filterButtons.length === 0 || techCards.length === 0) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedFilter = btn.getAttribute("data-tech-filter");

      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      techCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-tech-category");
        if (selectedFilter === "all" || cardCategory === selectedFilter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/**
 * Blog Category Filtering & Live Search (PDR Section 23, 25)
 */
function initBlogFilterAndSearch() {
  const filterButtons = document.querySelectorAll("[data-blog-filter]");
  const searchInput = document.querySelector("#blog-search-input");
  const searchClear = document.querySelector("#blog-search-clear");
  const blogCards = document.querySelectorAll("[data-blog-category]");
  const resultsCounter = document.querySelector("#blog-results-count");
  const emptyState = document.querySelector("#blog-empty-state");

  if (blogCards.length === 0) return;

  let activeCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    let visibleCount = 0;

    blogCards.forEach((card) => {
      const cardCategory = (card.getAttribute("data-blog-category") || "").toLowerCase();
      const cardTitle = (card.querySelector(".blog-card-title")?.textContent || "").toLowerCase();
      const cardDesc = (card.querySelector(".blog-card-desc")?.textContent || "").toLowerCase();
      const cardAuthor = (card.querySelector(".blog-meta-author")?.textContent || "").toLowerCase();

      const matchesCat = activeCategory === "all" || cardCategory === activeCategory.toLowerCase();
      const matchesSearch = !searchQuery || 
                            cardTitle.includes(searchQuery) || 
                            cardDesc.includes(searchQuery) || 
                            cardAuthor.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (resultsCounter) {
      resultsCounter.textContent = `Showing ${visibleCount} article${visibleCount === 1 ? "" : "s"}`;
    }

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.style.display = "block";
      } else {
        emptyState.style.display = "none";
      }
    }
  }

  // Filter Buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-blog-filter") || "all";

      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      applyFilters();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.style.display = searchQuery ? "inline-flex" : "none";
      }
      applyFilters();
    });
  }

  // Clear Search
  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        searchClear.style.display = "none";
        searchInput.focus();
        applyFilters();
      }
    });
  }

  applyFilters();
}
