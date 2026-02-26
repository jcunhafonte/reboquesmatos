'use strict';

// ─────────────────────────────────────────────────────────────────────────────
// Reboques Matos v2 — script.js
// Terminal Industries-inspired interactions
// Scroll-driven hero text reveal, sticky services, counters, nav, form
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initHeroScrollReveal();
  initHeroVideoFallback();
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
// 1. HERO SCROLL-DRIVEN TEXT REVEAL
// Character-by-character reveal with accent color flash. 4 title sequences.
// min-height: 300vh creates scroll distance. Fixed video/image + text.
// ─────────────────────────────────────────────────────────────────────────────
function initHeroScrollReveal() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const scrollContent = hero.querySelector('.hero__scroll-content');
  const titles = hero.querySelectorAll('.hero__title');
  const scrollIndicator = hero.querySelector('.hero__scroll-indicator');
  if (!scrollContent || !titles.length) return;

  // Split each title into individual <span class="hero__char"> elements
  titles.forEach((title) => {
    const text = title.textContent;
    title.innerHTML = '';
    for (const char of text) {
      const span = document.createElement('span');
      span.className = 'hero__char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      title.appendChild(span);
    }
  });

  const onScroll = () => {
    const heroRect = hero.getBoundingClientRect();
    const totalScroll = hero.offsetHeight - window.innerHeight;
    const scrolled = -heroRect.top;

    // Hide when scrolled past hero
    if (scrolled > totalScroll) {
      scrollContent.style.display = 'none';
      if (scrollIndicator) scrollIndicator.classList.add('is-hidden');
      return;
    }

    // Hide when above hero (shouldn't happen, but guard)
    if (scrolled < 0) {
      scrollContent.style.display = '';
      titles.forEach((t) => t.classList.remove('is-active'));
      titles[0].classList.add('is-active');
      // Reset all chars to hidden
      titles[0].querySelectorAll('.hero__char').forEach((c) => {
        c.classList.remove('is-revealed', 'is-active');
      });
      return;
    }

    scrollContent.style.display = '';

    // Hide scroll indicator after 50px
    if (scrollIndicator) {
      scrollIndicator.classList.toggle('is-hidden', scrolled > 50);
    }

    const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

    // Map progress to active title
    const titleCount = titles.length;
    const activeTitleIndex = Math.min(
      titleCount - 1,
      Math.floor(progress * titleCount)
    );

    // Show only active title
    titles.forEach((title, i) => {
      title.classList.toggle('is-active', i === activeTitleIndex);
    });

    // Character reveal within active title
    const activeTitle = titles[activeTitleIndex];
    const chars = activeTitle.querySelectorAll('.hero__char');
    const titleProgress = (progress * titleCount) - activeTitleIndex;
    const revealCount = Math.floor(titleProgress * chars.length);

    chars.forEach((char, i) => {
      char.classList.remove('is-revealed', 'is-active');
      if (i < revealCount) {
        char.classList.add('is-revealed');
      } else if (i === revealCount) {
        char.classList.add('is-active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. HERO VIDEO FALLBACK
// If video fails to load, show the static image fallback.
// ─────────────────────────────────────────────────────────────────────────────
function initHeroVideoFallback() {
  const video = document.querySelector('.hero__video');
  const fallback = document.querySelector('.hero__video-fallback');
  if (!video || !fallback) return;

  const showFallback = () => {
    video.style.display = 'none';
    fallback.classList.add('is-visible');
  };

  video.addEventListener('error', showFallback);

  // Also check if video source fails
  const source = video.querySelector('source');
  if (source) {
    source.addEventListener('error', showFallback);
  }

  // If video hasn't loaded after 5s, show fallback
  setTimeout(() => {
    if (video.readyState === 0) {
      showFallback();
    }
  }, 5000);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. SCROLL NAV — Transparent → frosted glass on scroll > 50px
// ─────────────────────────────────────────────────────────────────────────────
function initScrollNav() {
  const navbar = document.querySelector('.nav');
  if (!navbar) return;

  const THRESHOLD = 50;

  const onScroll = () => {
    navbar.classList.toggle('nav--scrolled', window.scrollY > THRESHOLD);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. MOBILE MENU
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
// 5. SCROLL ANIMATIONS (IntersectionObserver)
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
// 6. SERVICES SCROLL — Sticky numbered scroll (TI FullscreenFeatures)
// Desktop: scroll position drives active item + crossfading images.
// Mobile: all items visible, click to switch image.
// ─────────────────────────────────────────────────────────────────────────────
function initServicesScroll() {
  const section = document.querySelector('.services');
  if (!section) return;

  const scrollArea = section.querySelector('.services__scroll-area');
  const items = section.querySelectorAll('.services__item');
  const images = section.querySelectorAll('.services__image-wrap img');
  if (!scrollArea || !items.length || !images.length) return;

  const isDesktop = () => window.innerWidth > 1024;

  const setActive = (index) => {
    items.forEach((item, i) => item.classList.toggle('is-active', i === index));
    images.forEach((img, i) => img.classList.toggle('is-active', i === index));
  };

  // Click handler for mobile/manual
  items.forEach((item) => {
    item.addEventListener('click', () => {
      setActive(parseInt(item.dataset.index, 10));
    });
  });

  // Scroll-driven (desktop only)
  const onScroll = () => {
    if (!isDesktop()) return;

    const rect = section.getBoundingClientRect();
    const layoutOffsetPx = 280;
    const scrollableDistance = rect.height - window.innerHeight - layoutOffsetPx;
    const scrolled = -(rect.top) - layoutOffsetPx;
    const progress = Math.max(0, Math.min(1, scrolled / Math.max(scrollableDistance, 1)));
    const activeIndex = Math.min(items.length - 1, Math.floor(progress * items.length));
    setActive(activeIndex);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. COUNT-UP NUMBERS
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
// 8. SMOOTH SCROLL (80px offset for fixed nav)
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
// 9. WHATSAPP FAB — appears after 1.5s
// ─────────────────────────────────────────────────────────────────────────────
function initWhatsAppFab() {
  const fab = document.querySelector('.whatsapp-fab');
  if (!fab) return;

  setTimeout(() => fab.classList.add('visible'), 1500);
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. EMERGENCY STRIP — hides when footer visible
// ─────────────────────────────────────────────────────────────────────────────
function initEmergencyStrip() {
  const strip = document.querySelector('.emergency-strip');
  const footer = document.querySelector('footer');
  if (!strip || !footer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        strip.classList.toggle('strip-hidden', entry.isIntersecting);
      });
    },
    { threshold: 0 }
  );

  observer.observe(footer);
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. FORM VALIDATION
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
