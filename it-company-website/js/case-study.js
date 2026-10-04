/**
 * TechNova Solutions — Dynamic Case Study Controller
 * File: js/case-study.js
 * Description: Dynamically populates case-study.html based on ?project=<slug> query parameter.
 * Specification: TechNova Solutions PDR (Section 13, 14, 25, 36)
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initCaseStudy);

  function initCaseStudy() {
    if (typeof caseStudiesData === 'undefined') {
      console.warn('TechNova: caseStudiesData is not defined. Retaining static content.');
      return;
    }

    var urlParams = new URLSearchParams(window.location.search);
    var projectSlug = urlParams.get('project');

    // Default to 'smartcampus' if missing or invalid
    if (!projectSlug || !caseStudiesData.hasOwnProperty(projectSlug)) {
      projectSlug = 'smartcampus';
    }

    var project = caseStudiesData[projectSlug];
    if (!project) return;

    renderCaseStudy(project, projectSlug);
  }

  function renderCaseStudy(project, slug) {
    // 1. Update SEO & Document Title
    document.title = project.name + ' Case Study | TechNova Solutions (Demo)';

    var metaDescContent = 'Detailed case study of the ' + project.name + ' ' +
      project.tagline.toLowerCase() + ' developed using ' +
      project.technologies + ' as a demonstration project by TechNova Solutions.';

    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaDescContent);
    }

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', project.name + ' Case Study | TechNova Solutions (Demo)');
    }

    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metaDescContent);
    }

    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', './case-study.html?project=' + encodeURIComponent(slug));
    }

    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', './case-study.html?project=' + encodeURIComponent(slug));
    }

    // 2. Breadcrumb
    var breadcrumbProjectName = document.getElementById('breadcrumb-project-name');
    if (breadcrumbProjectName) {
      breadcrumbProjectName.textContent = project.name;
    }

    // 3. Hero Section
    var industryPill = document.getElementById('case-study-industry-pill');
    if (industryPill) {
      industryPill.textContent = project.industry;
    }

    var heading = document.getElementById('case-study-heading');
    if (heading) {
      heading.textContent = project.name + ': ' + project.tagline;
    }

    var heroDesc = document.getElementById('case-study-hero-desc');
    if (heroDesc) {
      heroDesc.textContent = project.heroDesc;
    }

    var metaIndustry = document.getElementById('case-meta-industry');
    if (metaIndustry) {
      metaIndustry.textContent = project.industry;
    }

    var metaTech = document.getElementById('case-meta-tech');
    if (metaTech) {
      metaTech.textContent = project.technologies;
    }

    var metaType = document.getElementById('case-meta-type');
    if (metaType) {
      metaType.textContent = project.type;
    }

    var metaScope = document.getElementById('case-meta-scope');
    if (metaScope) {
      metaScope.textContent = project.deliveryScope;
    }

    var demoNotice = document.getElementById('case-study-demo-notice');
    if (demoNotice && project.demoNotice) {
      demoNotice.innerHTML = '<strong>Demo Notice:</strong> ' + escapeHtml(project.demoNotice);
    }

    // 4. Section 1: Overview
    var overview = document.getElementById('case-study-overview');
    if (overview && project.overview) {
      overview.textContent = project.overview;
    }

    // 5. Section 2: Client Challenge
    var bottlenecksList = document.getElementById('case-study-bottlenecks');
    if (bottlenecksList && project.challenge && project.challenge.bottlenecks) {
      bottlenecksList.innerHTML = project.challenge.bottlenecks
        .map(function (item) {
          return '<li>' + escapeHtml(item) + '</li>';
        })
        .join('');
    }

    var constraintsList = document.getElementById('case-study-constraints');
    if (constraintsList && project.challenge && project.challenge.constraints) {
      constraintsList.innerHTML = project.challenge.constraints
        .map(function (item) {
          return '<li>' + escapeHtml(item) + '</li>';
        })
        .join('');
    }

    // 6. Section 3: Proposed Solution
    var solutionSummary = document.getElementById('case-study-solution-summary');
    if (solutionSummary && project.solution && project.solution.summary) {
      solutionSummary.textContent = project.solution.summary;
    }

    var solutionTiers = document.getElementById('case-study-solution-tiers');
    if (solutionTiers && project.solution && project.solution.tiers) {
      solutionTiers.innerHTML = project.solution.tiers
        .map(function (tier) {
          return '<div style="background-color: var(--color-surface); border: 1px solid var(--color-border); padding: var(--spacing-6); border-radius: var(--radius-lg);">' +
            '<h3 style="font-size: var(--font-size-base); color: var(--color-primary); margin-bottom: var(--spacing-2);">' + escapeHtml(tier.title) + '</h3>' +
            '<p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">' + escapeHtml(tier.desc) + '</p>' +
            '</div>';
        })
        .join('');
    }

    // 7. Section 4: Development Process (7 stages)
    var processStepper = document.getElementById('case-study-process-stepper');
    if (processStepper && project.process) {
      processStepper.innerHTML = project.process
        .map(function (step) {
          return '<div class="process-step-card">' +
            '<div class="process-step-num">' + escapeHtml(String(step.step)) + '</div>' +
            '<h3 class="process-step-name">' + escapeHtml(step.name) + '</h3>' +
            '<p class="process-step-desc">' + escapeHtml(step.desc) + '</p>' +
            '</div>';
        })
        .join('');
    }

    // 8. Section 5: Application Features (6 features)
    var featuresGrid = document.getElementById('case-study-features-grid');
    if (featuresGrid && project.features) {
      featuresGrid.innerHTML = project.features
        .map(function (feat) {
          return '<div style="background-color: var(--color-surface); border: 1px solid var(--color-border); padding: var(--spacing-6); border-radius: var(--radius-lg);">' +
            '<h3 style="font-size: var(--font-size-base); color: var(--color-primary); margin-bottom: var(--spacing-2);">' + escapeHtml(feat.title) + '</h3>' +
            '<p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">' + escapeHtml(feat.desc) + '</p>' +
            '</div>';
        })
        .join('');
    }

    // 9. Section 6: Technologies Used
    var techGrid = document.getElementById('case-study-tech-grid');
    if (techGrid && project.techStack) {
      techGrid.innerHTML = project.techStack
        .map(function (tech) {
          return '<div style="background-color: var(--color-surface); border: 1px solid var(--color-border); padding: var(--spacing-6); border-radius: var(--radius-lg);">' +
            '<span class="portfolio-industry-pill" style="margin-bottom: var(--spacing-2); display: inline-block;">' + escapeHtml(tech.role) + '</span>' +
            '<h3 style="font-size: var(--font-size-lg); color: var(--color-primary); margin-bottom: var(--spacing-2);">' + escapeHtml(tech.name) + '</h3>' +
            '<p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">' + escapeHtml(tech.desc) + '</p>' +
            '</div>';
        })
        .join('');
    }

    // 10. Section 7: Interface Mockups (2 mockups)
    var mockupsContainer = document.getElementById('case-study-mockups-container');
    if (mockupsContainer && project.mockups) {
      mockupsContainer.innerHTML = project.mockups
        .map(function (mockup, idx) {
          var mb = idx < project.mockups.length - 1 ? 'margin-bottom: var(--spacing-8);' : '';
          return '<div style="' + mb + '">' +
            '<h3 style="font-size: var(--font-size-base); color: var(--color-primary); margin-bottom: var(--spacing-2);">' + escapeHtml(mockup.title) + '</h3>' +
            '<p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: var(--spacing-3);">' + escapeHtml(mockup.desc) + '</p>' +
            '<div class="case-study-mockup-frame">' +
            '<div class="mockup-frame-bar">' +
            '<span class="mockup-dot mockup-dot-red"></span>' +
            '<span class="mockup-dot mockup-dot-yellow"></span>' +
            '<span class="mockup-dot mockup-dot-green"></span>' +
            '<span style="font-size: 0.75rem; color: #94a3b8; margin-left: 0.5rem; font-family: monospace;">' + escapeHtml(mockup.url) + '</span>' +
            '</div>' +
            '<div class="mockup-frame-content">' +
            mockup.svg +
            '</div>' +
            '</div>' +
            '</div>';
        })
        .join('');
    }

    // 11. Section 8: Project Outcome
    var outcomeNotice = document.getElementById('case-study-outcome-notice');
    if (outcomeNotice) {
      outcomeNotice.innerHTML = '<strong>Demo Outcome Notice:</strong> The outcomes described below represent the technical capabilities delivered by the ' +
        escapeHtml(project.name) +
        ' software design. In accordance with PDR project guidelines for demonstration companies, no fabricated commercial metrics, percentage improvements, user counts, client testimonials, or revenue figures are reported.';
    }

    var outcomeLead = document.getElementById('case-study-outcome-lead');
    if (outcomeLead) {
      outcomeLead.textContent = 'The ' + project.name + ' implementation demonstrated how a decoupled architecture could successfully resolve operational bottlenecks in ' +
        project.industry.toLowerCase() + ' environments:';
    }

    var outcomeCapabilities = document.getElementById('case-study-outcome-capabilities');
    if (outcomeCapabilities && project.outcome && project.outcome.capabilities) {
      outcomeCapabilities.innerHTML = project.outcome.capabilities
        .map(function (cap) {
          var colonIdx = cap.indexOf(':');
          if (colonIdx !== -1) {
            var label = cap.substring(0, colonIdx);
            var detail = cap.substring(colonIdx + 1);
            return '<li><strong>' + escapeHtml(label) + ':</strong>' + escapeHtml(detail) + '</li>';
          }
          return '<li>' + escapeHtml(cap) + '</li>';
        })
        .join('');
    }

    // 12. Section 9: Related Demo Projects (2 projects)
    var relatedGrid = document.getElementById('case-study-related-grid');
    if (relatedGrid && project.relatedProjects) {
      relatedGrid.innerHTML = project.relatedProjects
        .map(function (rel) {
          var category = rel.category || '';
          var industryName = rel.badge ? rel.badge.replace(/\s*\(Demo Concept\)/i, '').trim() : '';
          var techPills = (rel.tech || '')
            .split('|')
            .map(function (t) {
              return '<span class="portfolio-tech-pill">' + escapeHtml(t.trim()) + '</span>';
            })
            .join('\n                ');

          return '<article class="portfolio-card" data-portfolio-category="' + escapeHtml(category) + '">' +
            '<div class="portfolio-card-body">' +
            '<div class="portfolio-card-meta">' +
            '<span class="portfolio-industry-pill">' + escapeHtml(industryName) + '</span>' +
            '<span class="demo-concept-badge">Demo Concept</span>' +
            '</div>' +
            '<h3 class="portfolio-card-title">' + escapeHtml(rel.name) + '</h3>' +
            '<p class="portfolio-card-desc">' + escapeHtml(rel.desc) + '</p>' +
            '<div class="portfolio-tech-list">' +
            techPills +
            '</div>' +
            '<a href="case-study.html?project=' + encodeURIComponent(rel.slug) + '" class="service-card-link">View Case Study &rarr;</a>' +
            '</div>' +
            '</article>';
        })
        .join('');
    }

    // 13. Section 10: Call to Action
    var ctaHeading = document.getElementById('case-study-cta-heading');
    if (ctaHeading && project.cta && project.cta.heading) {
      ctaHeading.textContent = project.cta.heading;
    }

    var ctaLead = document.getElementById('case-study-cta-lead');
    if (ctaLead && project.cta && project.cta.lead) {
      ctaLead.textContent = project.cta.lead;
    }
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Export for testing in Node if applicable
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      renderCaseStudy: renderCaseStudy,
      escapeHtml: escapeHtml
    };
  }
})();
