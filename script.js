'use strict';

// ─────────────────────────────────────────────────────────────────────────────
// Reboques Matos — script.js
// Vanilla ES6+. Defensive — all features guard for element existence so this
// file can be shared across index.html, servicos.html, sobre.html, contacto.html
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initScrollNav();
  initMobileMenu();
  initScrollAnimations();
  initCountUp();
  initFaqAccordion();
  initSmoothScroll();
  initWhatsAppFab();
  initEmergencyStrip();
  initActiveNavLink();
  initFormValidation();
});

// ─────────────────────────────────────────────────────────────────────────────
// 1. SCROLL NAV
// Adds `.scrolled` to `.navbar` when page scrolls past 20px.
// CSS handles the transparent → dark blurred backdrop visual transition.
// ─────────────────────────────────────────────────────────────────────────────
function initScrollNav() {
  const navbar = document.querySelector('.nav');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 20;

  const isTransparent = navbar.classList.contains('nav--transparent');

  const onScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('nav--scrolled');
      if (isTransparent) navbar.classList.remove('nav--transparent');
    } else {
      navbar.classList.remove('nav--scrolled');
      if (isTransparent) navbar.classList.add('nav--transparent');
    }
  };

  // Set initial state without waiting for a scroll event.
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. MOBILE MENU
// Toggles `.mobile-menu-open` on <body> and `.is-open` on `.nav__drawer`.
// Closes on any link click inside the mobile nav.
// ─────────────────────────────────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__drawer');
  if (!toggle || !mobileNav) return;

  const openMenu = () => {
    document.body.classList.add('mobile-menu-open');
    mobileNav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    document.body.classList.remove('mobile-menu-open');
    mobileNav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when any link inside the mobile nav is tapped.
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking the backdrop (body overlay created in CSS via ::before).
  document.addEventListener('click', (e) => {
    if (
      mobileNav.classList.contains('is-open') &&
      !mobileNav.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. INTERSECTION OBSERVER ANIMATIONS
// Elements with `.animate-on-scroll` receive `.animated` when they cross the
// viewport threshold. Children with a `data-delay` attribute get a staggered
// animation-delay injected as an inline style before observation begins.
// ─────────────────────────────────────────────────────────────────────────────
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  // Apply staggered delays declared via data-delay (value in ms).
  elements.forEach((el) => {
    const delay = el.dataset.delay;
    if (delay) {
      el.style.animationDelay = `${delay}ms`;
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Unobserve after triggering — each element animates once.
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. COUNT-UP NUMBERS
// Elements with `.count-up` and `data-target` animate from 0 to target when
// they enter the viewport. Uses requestAnimationFrame for smooth rendering.
// Formatted with toLocaleString('pt-PT') to respect Portuguese number formatting.
// ─────────────────────────────────────────────────────────────────────────────
function initCountUp() {
  const counters = document.querySelectorAll('.count-up[data-target]');
  if (!counters.length) return;

  const DURATION_MS = 2000;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;

    const suffix = el.dataset.suffix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      // Ease-out cubic for a natural deceleration.
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      el.textContent =
        current.toLocaleString('pt-PT', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure exact final value.
        el.textContent =
          target.toLocaleString('pt-PT', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. FAQ ACCORDION
// Click on `.faq__question` toggles `.is-open` on its parent `.faq__item`.
// Only one item is open at a time. Max-height transition is CSS-driven.
// ─────────────────────────────────────────────────────────────────────────────
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq__item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    if (!question || !answer) return;

    // Set initial aria attributes.
    const answerId = `faq-answer-${Math.random().toString(36).slice(2, 9)}`;
    answer.id = answerId;
    question.setAttribute('aria-controls', answerId);
    question.setAttribute('aria-expanded', 'false');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('is-open');

      // Close all open items first.
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('is-open')) {
          const otherQuestion = otherItem.querySelector('.faq__question');
          const otherAnswer = otherItem.querySelector('.faq__answer');
          otherItem.classList.remove('is-open');
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle the clicked item.
      if (isActive) {
        item.classList.remove('is-open');
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
        // scrollHeight gives the natural height so CSS transition works correctly.
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. SMOOTH SCROLL
// Intercepts clicks on anchor links (`href="#..."`) and smoothly scrolls to
// the target section with an offset for the fixed navbar height.
// ─────────────────────────────────────────────────────────────────────────────
function initSmoothScroll() {
  const NAV_OFFSET = 80; // px — matches expected fixed navbar height

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // Skip links that are purely "#" (no target).
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. WHATSAPP FAB
// Adds `.visible` to `.whatsapp-fab` after a 1.5s delay.
// CSS handles the bounceIn animation triggered by this class.
// ─────────────────────────────────────────────────────────────────────────────
function initWhatsAppFab() {
  const fab = document.querySelector('.whatsapp-fab');
  if (!fab) return;

  setTimeout(() => {
    fab.classList.add('visible');
  }, 1500);
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. EMERGENCY STRIP VISIBILITY
// Hides `.emergency-strip` when the user scrolls to the footer region so the
// strip doesn't overlap footer content on small screens.
// ─────────────────────────────────────────────────────────────────────────────
function initEmergencyStrip() {
  const strip = document.querySelector('.emergency-strip');
  const footer = document.querySelector('footer');
  if (!strip || !footer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // When footer is visible, hide the strip; restore it when footer leaves.
        if (entry.isIntersecting) {
          strip.classList.add('strip-hidden');
        } else {
          strip.classList.remove('strip-hidden');
        }
      });
    },
    // Trigger as soon as any part of the footer enters the viewport.
    { threshold: 0 }
  );

  observer.observe(footer);
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. FORM VALIDATION
// Basic client-side validation for the contact form on contacto.html.
// Validates required fields and shows inline Portuguese error messages.
// Submits via Formspree on success (native form action handles POST).
// ─────────────────────────────────────────────────────────────────────────────
function initFormValidation() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const MESSAGES = {
    required: 'Este campo é obrigatório.',
    email: 'Introduza um endereço de email válido.',
    phone: 'Introduza um número de telefone válido.',
    minLength: (n) => `Este campo deve ter pelo menos ${n} caracteres.`,
  };

  // Remove any existing error message for a field.
  const clearError = (field) => {
    const errorEl = field.parentElement.querySelector('.field-error');
    if (errorEl) errorEl.remove();
    field.classList.remove('field-invalid');
    field.removeAttribute('aria-describedby');
  };

  // Show an error message below the field.
  const showError = (field, message) => {
    clearError(field);
    const errorEl = document.createElement('span');
    const errorId = `error-${field.name || Math.random().toString(36).slice(2, 7)}`;
    errorEl.className = 'field-error';
    errorEl.id = errorId;
    errorEl.setAttribute('role', 'alert');
    errorEl.textContent = message;
    field.parentElement.appendChild(errorEl);
    field.classList.add('field-invalid');
    field.setAttribute('aria-describedby', errorId);
  };

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

  const isValidPhone = (value) =>
    /^[\d\s\+\-\(\)]{7,20}$/.test(value.trim());

  // Validate a single field. Returns true if valid.
  const validateField = (field) => {
    const value = field.value;
    const trimmed = value.trim();
    const type = field.type;
    const name = field.name;

    // Required check.
    if (field.required && !trimmed) {
      showError(field, MESSAGES.required);
      return false;
    }

    // Skip further validation if field is empty and not required.
    if (!trimmed) return true;

    // Email format.
    if (type === 'email' && !isValidEmail(trimmed)) {
      showError(field, MESSAGES.email);
      return false;
    }

    // Phone format (field named "telefone" or type="tel").
    if ((type === 'tel' || name === 'telefone') && !isValidPhone(trimmed)) {
      showError(field, MESSAGES.phone);
      return false;
    }

    // Minimum length for textarea (mensagem field).
    if (field.tagName === 'TEXTAREA' && trimmed.length < 10) {
      showError(field, MESSAGES.minLength(10));
      return false;
    }

    clearError(field);
    return true;
  };

  // Live validation: clear errors as user corrects fields.
  form.querySelectorAll('input, textarea, select').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('field-invalid')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    let isValid = true;
    const fields = form.querySelectorAll('input, textarea, select');

    fields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      e.preventDefault();
      // Focus the first invalid field for accessibility.
      const firstInvalid = form.querySelector('.field-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // If valid, show a submitting state to prevent double submission.
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'A enviar…';
    }
    // Native form submission continues to Formspree.
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. ACTIVE NAV LINK
// Compares the current URL path to each nav link's href and adds `.active`
// to the matching link. Works across all 4 pages.
// ─────────────────────────────────────────────────────────────────────────────
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav__links a, .nav__drawer a');
  if (!navLinks.length) return;

  // Normalise: strip trailing slash and lowercase.
  const currentPath = window.location.pathname.replace(/\/$/, '').toLowerCase() || '/';

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname
      .replace(/\/$/, '')
      .toLowerCase();

    // Exact match, or root page match.
    const isActive =
      linkPath === currentPath ||
      (currentPath === '' && linkPath === '/');

    if (isActive) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}
