/**
 * TechNova Solutions — Corporate IT Company Website
 * File: js/validation.js
 * Description: Client-side validation utilities and form state management.
 * Specification: TechNova Solutions PDR (Section 20, 21, 25)
 */

document.addEventListener("DOMContentLoaded", () => {
  initFormValidation();
  initNewsletterValidation();
});

/**
 * Newsletter Form Validation & Feedback Handler (PDR Section 24)
 */
function initNewsletterValidation() {
  const newsletterForms = document.querySelectorAll("form[data-newsletter]");

  newsletterForms.forEach((form) => {
    const input = form.querySelector('input[type="email"]');
    const statusMsg = form.querySelector(".newsletter-status");

    if (!input || !statusMsg) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailVal = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      statusMsg.className = "newsletter-status is-visible";

      if (!emailVal || !emailRegex.test(emailVal)) {
        statusMsg.classList.add("status-error");
        statusMsg.textContent = "Please provide a valid business email address.";
        input.focus();
      } else {
        statusMsg.classList.add("status-success");
        statusMsg.textContent = "Thank you! You have successfully subscribed to TechNova updates.";
        input.value = "";
      }
    });
  });
}

/**
 * Universal Form Validation Handler
 */
function initFormValidation() {
  const forms = document.querySelectorAll("form[data-validate]");

  forms.forEach((form) => {
    // Validate on input / blur
    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("is-invalid")) {
          validateField(field);
        }
      });
    });

    // Validate on submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      form.querySelectorAll("input, select, textarea").forEach((field) => {
        if (!validateField(field)) {
          isValid = false;
        }
      });

      if (isValid) {
        handleFormSuccess(form);
      }
    });
  });
}

/**
 * Validate individual input field against standard criteria
 */
function validateField(field) {
  const isRequired = field.hasAttribute("required");
  const value = field.value.trim();
  const errorElement = field.parentElement.querySelector(".form-error");

  let isValid = true;
  let errorMessage = "";

  if (isRequired && !value) {
    isValid = false;
    errorMessage = "This field is required.";
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

  // Update UI classes
  if (!isValid) {
    field.classList.add("is-invalid");
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add("visible");
    }
  } else {
    field.classList.remove("is-invalid");
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
  const successBanner = form.parentElement.querySelector(".form-success-message");
  if (successBanner) {
    form.style.display = "none";
    successBanner.style.display = "block";
    successBanner.focus();
  } else {
    alert("Thank you! Your submission has been received.");
    form.reset();
  }
}
