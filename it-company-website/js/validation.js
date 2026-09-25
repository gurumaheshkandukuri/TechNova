/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/validation.js
 * Description: Client-side validation utilities, accessibility handlers, and multi-step enquiry workflow.
 * Specification: TechNova Solutions PDR (Section 19, 20, 21, 24, 25)
 */

document.addEventListener("DOMContentLoaded", () => {
  initFormValidation();
  initNewsletterValidation();
  initMultiStepForm();
});

/**
 * Newsletter Form Validation & Feedback Handler (PDR Section 24)
 * Handles newsletter subscription persistence across all 19 pages.
 */
function initNewsletterValidation() {
  const newsletterForms = document.querySelectorAll("form[data-newsletter], form#newsletter-form");

  newsletterForms.forEach((form) => {
    const input = form.querySelector('input[type="email"]');
    if (!input) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent.trim() : "Subscribe";
    const statusMsg = form.querySelector(".newsletter-status");
    const errorSpan = form.querySelector("#newsletter-email-error") || form.querySelector(".form-error, .field-error");
    const successBanner = form.querySelector("#newsletter-success");

    function clearErrors() {
      if (statusMsg) {
        statusMsg.className = "newsletter-status";
        statusMsg.textContent = "";
      }
      if (errorSpan) {
        errorSpan.classList.remove("visible");
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
      }
      input.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
    }

    function showError(message) {
      if (statusMsg) {
        statusMsg.className = "newsletter-status is-visible status-error";
        statusMsg.textContent = message;
      }
      if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add("visible");
        errorSpan.style.display = "block";
        errorSpan.style.color = "#ef4444";
        errorSpan.style.fontSize = "var(--font-size-xs, 0.75rem)";
        errorSpan.style.marginTop = "0.25rem";
      }
      if (successBanner) {
        successBanner.style.display = "none";
      }
      input.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      input.focus();
    }

    function showSuccess(message) {
      clearErrors();
      if (statusMsg) {
        statusMsg.className = "newsletter-status is-visible status-success";
        statusMsg.textContent = message;
      }
      if (successBanner) {
        successBanner.textContent = message;
        successBanner.style.display = "block";
      }
      input.value = "";
    }

    input.addEventListener("input", () => {
      clearErrors();
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailVal = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailVal || !emailRegex.test(emailVal)) {
        showError("Please provide a valid business email address.");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";
      }

      try {
        const response = await fetch("backend/api/subscribe_newsletter.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: emailVal })
        });

        const result = await response.json().catch(() => null);

        if (response.ok && result && result.success) {
          showSuccess(result.message || "Thank you! You have successfully subscribed to TechNova updates.");
        } else {
          let errorMessage = "Unable to process subscription. Please try again.";
          if (result && Array.isArray(result.errors) && result.errors.length > 0) {
            errorMessage = result.errors.join(" ");
          } else if (result && result.message) {
            errorMessage = result.message;
          }
          showError(errorMessage);
        }
      } catch (err) {
        showError("Unable to subscribe. Please check your network connection and try again.");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }
    });
  });
}

/**
 * Universal Form Validation Handler for Standard Forms (Contact & Job Application)
 */
function initFormValidation() {
  const forms = document.querySelectorAll("form[data-validate]:not(#start-project-form)");

  forms.forEach((form) => {
    // Validate on blur and input
    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("is-invalid")) {
          validateField(field);
        }
      });
      if (field.tagName.toLowerCase() === "select") {
        field.addEventListener("change", () => validateField(field));
      }
    });

    // Clear contact and job application error banner on field input
    if (form.id === "contact-form" || form.id === "job-application-form") {
      const bannerId = form.id === "contact-form" ? "contact-form-error" : "job-application-error";
      form.querySelectorAll("input, select, textarea").forEach((field) => {
        const clearBanner = () => {
          const errorBanner = document.getElementById(bannerId) || form.querySelector(".step-error-banner");
          if (errorBanner && errorBanner.classList.contains("is-visible")) {
            errorBanner.classList.remove("is-visible");
            errorBanner.textContent = "";
            errorBanner.style.display = "none";
          }
        };
        field.addEventListener("input", clearBanner);
        field.addEventListener("change", clearBanner);
      });
    }

    // Validate on submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
      let firstInvalidField = null;

      form.querySelectorAll("input, select, textarea").forEach((field) => {
        if (!validateField(field)) {
          isValid = false;
          if (!firstInvalidField) {
            firstInvalidField = field;
          }
        }
      });

      if (!isValid) {
        if (firstInvalidField) {
          firstInvalidField.focus();
        }
      } else if (form.id === "contact-form") {
        handleContactFormSubmit(form);
      } else if (form.id === "job-application-form") {
        handleJobApplicationSubmit(form);
      } else {
        handleFormSuccess(form);
      }
    });
  });
}

/**
 * Handle Contact Form Submission to PHP Backend (PDR Section 19)
 */
async function handleContactFormSubmit(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : "Submit Enquiry";
  const errorBanner = document.getElementById("contact-form-error") || form.querySelector(".step-error-banner");

  if (errorBanner) {
    errorBanner.classList.remove("is-visible");
    errorBanner.textContent = "";
  }

  // Disable button and show loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
  }

  // Collect the 8 canonical PDR fields
  const payload = {
    name: form.querySelector('input[name="name"]')?.value.trim() || "",
    company: form.querySelector('input[name="company"]')?.value.trim() || "",
    email: form.querySelector('input[name="email"]')?.value.trim() || "",
    phone: form.querySelector('input[name="phone"]')?.value.trim() || "",
    service: form.querySelector('select[name="service"]')?.value || "",
    budget: form.querySelector('select[name="budget"]')?.value || "",
    timeline: form.querySelector('select[name="timeline"]')?.value || "",
    message: form.querySelector('textarea[name="message"]')?.value.trim() || ""
  };

  try {
    const response = await fetch("backend/api/submit_enquiry.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result && result.success) {
      // Success: render existing contact form success confirmation UI
      handleFormSuccess(form);
    } else {
      // HTTP 400 / 500 error: display accessible error banner without losing user data
      let errorMessage = "Unable to submit enquiry. Please try again.";
      if (result && Array.isArray(result.errors) && result.errors.length > 0) {
        errorMessage = result.errors.join(" ");
      } else if (result && result.message) {
        errorMessage = result.message;
      }
      showContactError(form, errorBanner, errorMessage);
    }
  } catch (err) {
    // Network or server unreachable failure
    showContactError(form, errorBanner, "Unable to submit enquiry. Please check your network connection and try again.");
  } finally {
    // Restore button state
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
}

/**
 * Display accessible error banner inside Contact Form
 */
function showContactError(form, errorBanner, message) {
  if (errorBanner) {
    errorBanner.textContent = message;
    errorBanner.classList.add("is-visible");
    errorBanner.focus();
  } else {
    let banner = form.querySelector(".step-error-banner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "contact-form-error";
      banner.className = "step-error-banner";
      banner.setAttribute("role", "alert");
      banner.setAttribute("tabindex", "-1");
      form.insertBefore(banner, form.firstChild);
    }
    banner.textContent = message;
    banner.classList.add("is-visible");
    banner.focus();
  }
}

/**
 * Handle Job Application Form Submission to PHP Backend (PDR Section 18 & 19)
 */
async function handleJobApplicationSubmit(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent.trim() : "Submit Demo Application";
  const errorBanner = document.getElementById("job-application-error") || form.querySelector(".step-error-banner");

  if (errorBanner) {
    errorBanner.classList.remove("is-visible");
    errorBanner.textContent = "";
    errorBanner.style.display = "none";
  }

  // Disable button and show loading state to prevent accidental double submissions
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
  }

  // Collect the 7 PDR fields + current job title
  const jobTitle = document.getElementById("job-title")?.textContent.trim() || "Senior Frontend Engineer";
  const name = form.querySelector("#applicant-name")?.value.trim() || "";
  const email = form.querySelector("#applicant-email")?.value.trim() || "";
  const phone = form.querySelector("#applicant-phone")?.value.trim() || "";
  const resumeInput = form.querySelector("#applicant-resume");
  const resumeFile = resumeInput && resumeInput.files && resumeInput.files.length > 0 ? resumeInput.files[0] : null;
  const linkedin = form.querySelector("#applicant-linkedin")?.value.trim() || "";
  const portfolio = form.querySelector("#applicant-portfolio")?.value.trim() || "";
  const coverLetter = form.querySelector("#applicant-cover")?.value.trim() || "";

  // Build multipart FormData payload
  const formData = new FormData();
  formData.append("job_title", jobTitle);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  if (resumeFile) {
    formData.append("resume", resumeFile);
  }
  if (linkedin) {
    formData.append("linkedin", linkedin);
  }
  if (portfolio) {
    formData.append("portfolio", portfolio);
  }
  if (coverLetter) {
    formData.append("cover_letter", coverLetter);
  }

  try {
    const response = await fetch("backend/api/submit_job_application.php", {
      method: "POST",
      body: formData
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result && result.success) {
      // Success: render existing success confirmation UI (PDR Section 18)
      handleFormSuccess(form);
    } else {
      // Backend validation error (HTTP 400) or server error (HTTP 500)
      let errorMessage = "Unable to submit application. Please try again.";
      if (result && Array.isArray(result.errors) && result.errors.length > 0) {
        errorMessage = result.errors.join(" ");
      } else if (result && result.message) {
        errorMessage = result.message;
      }
      showJobApplicationError(form, errorBanner, errorMessage);
    }
  } catch (err) {
    // Network or server unreachable failure
    showJobApplicationError(form, errorBanner, "Unable to submit application. Please check your network connection and try again.");
  } finally {
    // Restore button state
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
}

/**
 * Display accessible error banner inside Job Application Form
 */
function showJobApplicationError(form, errorBanner, message) {
  if (errorBanner) {
    errorBanner.textContent = message;
    errorBanner.classList.add("is-visible");
    errorBanner.style.display = "block";
    errorBanner.focus();
  } else {
    let banner = form.querySelector(".step-error-banner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "job-application-error";
      banner.className = "step-error-banner";
      banner.setAttribute("role", "alert");
      banner.setAttribute("tabindex", "-1");
      banner.style.marginBottom = "var(--spacing-4)";
      form.insertBefore(banner, form.firstChild);
    }
    banner.textContent = message;
    banner.classList.add("is-visible");
    banner.style.display = "block";
    banner.focus();
  }
}

/**
 * Validate individual input field against standard criteria
 */
function validateField(field) {
  const isRequired = field.hasAttribute("required");
  const value = field.value.trim();
  const errorElement = field.closest(".form-group")?.querySelector(".form-error") || 
                       field.parentElement.querySelector(".form-error");

  let isValid = true;
  let errorMessage = "";

  if (isRequired && !value) {
    isValid = false;
    errorMessage = "This field is required.";
  } else if (field.tagName.toLowerCase() === "select" && isRequired && !value) {
    isValid = false;
    errorMessage = "Please select an option.";
  } else if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address.";
    }
  } else if (field.type === "tel" && value) {
    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid telephone number.";
    }
  } else if (field.type === "url" && value) {
    try {
      new URL(value);
    } catch (_) {
      isValid = false;
      errorMessage = "Please enter a valid URL (e.g. https://...).";
    }
  } else if (field.type === "file" && isRequired) {
    if (!field.files || field.files.length === 0) {
      isValid = false;
      errorMessage = "Please attach a resume file.";
    }
  }

  // Update UI classes and accessibility attributes
  if (!isValid) {
    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add("visible");
    }
  } else {
    field.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove("visible");
    }
  }

  return isValid;
}

/**
 * Handle successful client-side form submission
 */
function handleFormSuccess(form) {
  let successBanner = form.parentElement.querySelector(".form-success-message");
  if (!successBanner) {
    successBanner = document.createElement("div");
    successBanner.className = "form-success-message";
    successBanner.setAttribute("role", "status");
    successBanner.setAttribute("tabindex", "-1");
    successBanner.innerHTML = `
      <div class="success-icon" aria-hidden="true">✓</div>
      <h3>Submission Received (Demo)</h3>
      <p>Thank you! Your demonstration enquiry has been captured for this demonstration. No commercial outreach will occur (PDR Section 2).</p>
    `;
    form.parentElement.insertBefore(successBanner, form);
  }
  form.style.display = "none";
  successBanner.style.display = "block";
  successBanner.focus();
}

/**
 * 5-Step Project Enquiry Workflow Handler (PDR Section 19 & 21)
 */
function initMultiStepForm() {
  const form = document.getElementById("start-project-form");
  if (!form) return;

  const totalSteps = 5;
  let currentStep = 1;

  const stepTitles = [
    "Step 1: Project Type",
    "Step 2: Requirements",
    "Step 3: Budget Range",
    "Step 4: Project Timeline",
    "Step 5: Contact Details"
  ];

  const panels = form.querySelectorAll(".step-panel");
  const navItems = document.querySelectorAll(".step-progress-item");
  const mobileSummary = document.getElementById("mobile-step-summary");
  const btnPrev = document.getElementById("btn-prev-step");
  const btnNext = document.getElementById("btn-next-step");
  const btnSubmit = document.getElementById("btn-submit-project");
  const successBanner = document.getElementById("project-success-message");
  const stepperNav = document.getElementById("stepper-nav");
  const btnReset = document.getElementById("btn-reset-enquiry");

  // Step 1 Radio inputs
  const projectTypeRadios = form.querySelectorAll('input[name="project_type"]');
  projectTypeRadios.forEach((r) => {
    r.addEventListener("change", () => clearStepError(1));
  });

  // Step 3 Radio inputs
  const budgetRadios = form.querySelectorAll('input[name="budget_range"]');
  budgetRadios.forEach((r) => {
    r.addEventListener("change", () => clearStepError(3));
  });

  // Step 4 Radio inputs
  const timelineRadios = form.querySelectorAll('input[name="project_timeline"]');
  timelineRadios.forEach((r) => {
    r.addEventListener("change", () => clearStepError(4));
  });

  // Step 2 & 5 text fields: live blur/input validation
  form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea').forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) {
        validateField(field);
      }
    });
  });

  // Clear step-level error banner
  function clearStepError(step) {
    const panel = form.querySelector(`.step-panel[data-step="${step}"]`);
    if (panel) {
      const banner = panel.querySelector(".step-error-banner");
      if (banner) {
        banner.classList.remove("is-visible");
        banner.textContent = "";
      }
    }
  }

  // Show step-level error banner
  function showStepError(step, message) {
    const panel = form.querySelector(`.step-panel[data-step="${step}"]`);
    if (panel) {
      const banner = panel.querySelector(".step-error-banner");
      if (banner) {
        banner.textContent = message;
        banner.classList.add("is-visible");
        banner.focus();
      }
    }
  }

  // Validate specific step
  function validateCurrentStep(step) {
    const panel = form.querySelector(`.step-panel[data-step="${step}"]`);
    if (!panel) return false;

    if (step === 1) {
      const selected = form.querySelector('input[name="project_type"]:checked');
      if (!selected) {
        showStepError(1, "Please select a Project Type to continue.");
        return false;
      }
      clearStepError(1);
      return true;
    }

    if (step === 2) {
      let valid = true;
      let firstInvalid = null;
      panel.querySelectorAll("input, textarea").forEach((field) => {
        if (!validateField(field)) {
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });
      if (!valid && firstInvalid) {
        firstInvalid.focus();
      }
      return valid;
    }

    if (step === 3) {
      const selected = form.querySelector('input[name="budget_range"]:checked');
      if (!selected) {
        showStepError(3, "Please select an estimated Budget Range to continue.");
        return false;
      }
      clearStepError(3);
      return true;
    }

    if (step === 4) {
      const selected = form.querySelector('input[name="project_timeline"]:checked');
      if (!selected) {
        showStepError(4, "Please select an expected Project Timeline to continue.");
        return false;
      }
      clearStepError(4);
      return true;
    }

    if (step === 5) {
      let valid = true;
      let firstInvalid = null;
      panel.querySelectorAll("input").forEach((field) => {
        if (!validateField(field)) {
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });
      if (!valid && firstInvalid) {
        firstInvalid.focus();
      }
      return valid;
    }

    return true;
  }

  // Update UI to display the target step
  function goToStep(step) {
    if (step < 1 || step > totalSteps) return;
    currentStep = step;

    // Toggle panels
    panels.forEach((p) => {
      const pStep = parseInt(p.getAttribute("data-step"), 10);
      if (pStep === currentStep) {
        p.classList.add("is-active");
      } else {
        p.classList.remove("is-active");
      }
    });

    // Update stepper progress list
    navItems.forEach((item) => {
      const itemStep = parseInt(item.getAttribute("data-step"), 10);
      item.classList.remove("active", "completed");
      item.removeAttribute("aria-current");

      if (itemStep < currentStep) {
        item.classList.add("completed");
      } else if (itemStep === currentStep) {
        item.classList.add("active");
        item.setAttribute("aria-current", "step");
      }
    });

    // Update mobile summary
    if (mobileSummary) {
      mobileSummary.textContent = `${stepTitles[currentStep - 1]} (${currentStep} of ${totalSteps})`;
    }

    // Update navigation buttons
    if (btnPrev) {
      btnPrev.style.visibility = currentStep === 1 ? "hidden" : "visible";
    }

    if (currentStep === totalSteps) {
      if (btnNext) btnNext.style.display = "none";
      if (btnSubmit) btnSubmit.style.display = "inline-flex";
    } else {
      if (btnNext) btnNext.style.display = "inline-flex";
      if (btnSubmit) btnSubmit.style.display = "none";
    }

    // Scroll slightly to stepper top if on mobile or focus step title
    const activeHeader = form.querySelector(`.step-panel[data-step="${currentStep}"] .step-panel-title`);
    if (activeHeader) {
      activeHeader.setAttribute("tabindex", "-1");
      activeHeader.focus();
    }
  }

  // Next Step button handler
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (validateCurrentStep(currentStep)) {
        goToStep(currentStep + 1);
      }
    });
  }

  // Back button handler
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  }

  // Prevent accidental submit when pressing Enter in single-line inputs on steps 1-4
  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName.toLowerCase() !== "textarea") {
      if (currentStep < totalSteps) {
        e.preventDefault();
        if (btnNext) btnNext.click();
      }
    }
  });

  // Final submission on Step 5
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateCurrentStep(5)) {
      return;
    }

    // Collect the 10 PDR fields
    const projectType = form.querySelector('input[name="project_type"]:checked')?.value || "";
    const projectDescription = form.querySelector('textarea[name="project_description"]')?.value.trim() || "";
    const projectFeatures = form.querySelector('textarea[name="project_features"]')?.value.trim() || "";
    const targetUsers = form.querySelector('input[name="target_users"]')?.value.trim() || "";
    const budgetRange = form.querySelector('input[name="budget_range"]:checked')?.value || "";
    const projectTimeline = form.querySelector('input[name="project_timeline"]:checked')?.value || "";
    const contactName = form.querySelector('input[name="contact_name"]')?.value.trim() || "";
    const contactEmail = form.querySelector('input[name="contact_email"]')?.value.trim() || "";
    const contactPhone = form.querySelector('input[name="contact_phone"]')?.value.trim() || "";
    const contactCompany = form.querySelector('input[name="contact_company"]')?.value.trim() || "";

    const payload = {
      project_type: projectType,
      project_description: projectDescription,
      project_features: projectFeatures,
      target_users: targetUsers,
      budget_range: budgetRange,
      project_timeline: projectTimeline,
      contact_name: contactName,
      contact_email: contactEmail,
      contact_phone: contactPhone,
      contact_company: contactCompany
    };

    // Button loading state
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.textContent = "Submitting...";
    }
    clearStepError(5);

    try {
      const response = await fetch("backend/api/submit_enquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result && result.success) {
        // Success: populate summary review box
        const summaryType = document.getElementById("summary-type");
        const summaryBudget = document.getElementById("summary-budget");
        const summaryTimeline = document.getElementById("summary-timeline");
        const summaryContact = document.getElementById("summary-contact");

        if (summaryType) summaryType.textContent = projectType || "Not Specified";
        if (summaryBudget) summaryBudget.textContent = budgetRange || "Not Decided";
        if (summaryTimeline) summaryTimeline.textContent = projectTimeline || "Not Decided";
        if (summaryContact) {
          summaryContact.textContent = contactCompany ? `${contactName} (${contactCompany})` : contactName;
        }

        // Hide form & stepper, show confirmation
        form.style.display = "none";
        if (stepperNav) stepperNav.style.display = "none";
        if (successBanner) {
          successBanner.style.display = "block";
          successBanner.focus();
        }
      } else {
        // HTTP 400 / 500 error handling without losing user-entered data
        let errorMessage = "Unable to submit enquiry. Please try again.";
        if (result && Array.isArray(result.errors) && result.errors.length > 0) {
          errorMessage = result.errors.join(" ");
        } else if (result && result.message) {
          errorMessage = result.message;
        }
        showStepError(5, errorMessage);
      }
    } catch (err) {
      // Network or server unreachable error
      showStepError(5, "Unable to submit enquiry. Please check your network connection and try again.");
    } finally {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.textContent = "Submit Project Enquiry";
      }
    }
  });

  // Reset enquiry button handler
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      form.reset();
      clearStepError(1);
      clearStepError(2);
      clearStepError(3);
      clearStepError(4);
      clearStepError(5);
      form.querySelectorAll(".is-invalid").forEach((el) => {
        el.classList.remove("is-invalid");
        el.removeAttribute("aria-invalid");
      });
      form.querySelectorAll(".form-error").forEach((el) => {
        el.classList.remove("visible");
        el.textContent = "";
      });

      goToStep(1);
      form.style.display = "block";
      if (stepperNav) stepperNav.style.display = "block";
      if (successBanner) successBanner.style.display = "none";
    });
  }

  // Initialize on Step 1
  goToStep(1);
}

