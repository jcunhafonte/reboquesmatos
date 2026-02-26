'use strict';

// ─────────────────────────────────────────────────────────────────────────────
// Reboques Matos — script.js
// Single-page site. Terminal Industries-inspired interactions.
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initScrollNav();
  initMobileMenu();
  initScrollAnimations();
  initServicesScroll();
  initCountUp();
  initSmoothScroll();
  initWhatsAppFab();
  initEmergencyStrip();
  initFormValidation();
});

// ─────────────────────────────────────────────────────────────────────────────
// 1. SCROLL NAV
// Adds `.nav--scrolled` when page scrolls past threshold.
// ─────────────────────────────────────────────────────────────────────────────
function initScrollNav() {
  const navbar = document.querySelector('.nav');
  if (!navbar) return;

  const THRESHOLD = 50;

  const onScroll = () => {
    if (window.scrollY > THRESHOLD) {
      navbar.classList.add('nav--scrolled');
    } else {
      navbar.classList.remove('nav--scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. MOBILE MENU
// ─────────────────────────────────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.querySelector('.nav__hamburger');
  const drawer = document.querySelector('.nav__drawer');
  if (!toggle || !drawer) return;

  const open = () => {
    document.body.classList.add('mobile-menu-open');
    drawer.classList.add('is-open');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    document.body.classList.remove('mobile-menu-open');
    drawer.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    drawer.classList.contains('is-open') ? close() : open();
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('click', (e) => {
    if (
      drawer.classList.contains('is-open') &&
      !drawer.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      close();
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. SCROLL ANIMATIONS (IntersectionObserver)
// ─────────────────────────────────────────────────────────────────────────────
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = el.dataset.delay;
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. SERVICES SCROLL SECTION — Signature numbered scroll
// Left text col is sticky, right image crossfades as items come into view.
// On desktop: scroll position determines active item.
// On mobile/tablet: all items visible, first image shown.
// ─────────────────────────────────────────────────────────────────────────────
function initServicesScroll() {
  const section = document.querySelector('.services');
  if (!section) return;

  const items = section.querySelectorAll('.services__item');
  const images = section.querySelectorAll('.services__image-wrap img');
  if (!items.length || !images.length) return;

  // Skip scroll-driven behavior on small screens
  const isDesktop = () => window.innerWidth > 1024;

  const setActive = (index) => {
    items.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
    });
    images.forEach((img, i) => {
      img.classList.toggle('is-active', i === index);
    });
  };

  // Click handler: set active on click
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index, 10);
      setActive(idx);
    });
  });

  // Scroll-driven active state (desktop only)
  const onScroll = () => {
    if (!isDesktop()) return;

    const sectionRect = section.getBoundingClientRect();
    const sectionTop = sectionRect.top;
    const sectionHeight = sectionRect.height;
    const viewportHeight = window.innerHeight;

    // Calculate scroll progress through the section
    const scrollProgress = (-sectionTop) / (sectionHeight - viewportHeight);
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

    // Map progress to item index
    const totalItems = items.length;
    const activeIndex = Math.min(
      totalItems - 1,
      Math.floor(clampedProgress * totalItems)
    );

    setActive(activeIndex);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. COUNT-UP NUMBERS
// ─────────────────────────────────────────────────────────────────────────────
function initCountUp() {
  const counters = document.querySelectorAll('.count-up[data-target]');
  if (!counters.length) return;

  const DURATION_MS = 2000;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;

    const suffix = el.dataset.suffix || '';
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      el.textContent = current.toLocaleString('pt-PT') + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('pt-PT') + suffix;
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
// 6. SMOOTH SCROLL
// ─────────────────────────────────────────────────────────────────────────────
function initSmoothScroll() {
  const NAV_OFFSET = 80;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
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
// Hides when footer is visible.
// ─────────────────────────────────────────────────────────────────────────────
function initEmergencyStrip() {
  const strip = document.querySelector('.emergency-strip');
  const footer = document.querySelector('footer');
  if (!strip || !footer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          strip.classList.add('strip-hidden');
        } else {
          strip.classList.remove('strip-hidden');
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(footer);
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. FORM VALIDATION
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

  const clearError = (field) => {
    const wrapper = field.closest('.form-field');
    if (!wrapper) return;
    const errorEl = wrapper.querySelector('.field-error');
    if (errorEl) errorEl.remove();
    wrapper.classList.remove('form-field--invalid');
    field.removeAttribute('aria-describedby');
  };

  const showError = (field, message) => {
    clearError(field);
    const wrapper = field.closest('.form-field');
    if (!wrapper) return;
    const errorEl = document.createElement('span');
    const errorId = `error-${field.name || Math.random().toString(36).slice(2, 7)}`;
    errorEl.className = 'field-error';
    errorEl.id = errorId;
    errorEl.setAttribute('role', 'alert');
    errorEl.textContent = message;
    wrapper.appendChild(errorEl);
    wrapper.classList.add('form-field--invalid');
    field.setAttribute('aria-describedby', errorId);
  };

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  const isValidPhone = (v) => /^[\d\s+\-()]{7,20}$/.test(v.trim());

  const validateField = (field) => {
    const trimmed = field.value.trim();

    if (field.required && !trimmed) {
      showError(field, MESSAGES.required);
      return false;
    }

    if (!trimmed) return true;

    if (field.type === 'email' && !isValidEmail(trimmed)) {
      showError(field, MESSAGES.email);
      return false;
    }

    if ((field.type === 'tel' || field.name === 'telefone') && !isValidPhone(trimmed)) {
      showError(field, MESSAGES.phone);
      return false;
    }

    if (field.tagName === 'TEXTAREA' && trimmed.length < 10) {
      showError(field, MESSAGES.minLength(10));
      return false;
    }

    clearError(field);
    return true;
  };

  form.querySelectorAll('input, textarea, select').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      const wrapper = field.closest('.form-field');
      if (wrapper && wrapper.classList.contains('form-field--invalid')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    let isValid = true;
    form.querySelectorAll('input, textarea, select').forEach((field) => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) {
      e.preventDefault();
      const firstInvalid = form.querySelector('.form-field--invalid input, .form-field--invalid textarea, .form-field--invalid select');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'A enviar…';
    }
  });
}
