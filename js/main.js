

const phrases = [
  "RTX 5090",
  "RTX 4090",
  "RTX 4080 SUPER",
  "RTX 4070 Ti SUPER",
  "RTX 4060 Ti"
];

function $(id) { return document.getElementById(id); }

function bootLoader() {
  const root = $("preloader");
  if (!root || typeof window.__wtLoader === "undefined") return;
  let pct = 0;
  const timer = setInterval(() => {
    pct += Math.random() * 18 + 6;
    if (pct >= 100) {
      pct = 100;
      clearInterval(timer);
      window.__wtLoader.set(100, 1, 1);
      window.__wtLoader.done();
    } else {
      window.__wtLoader.set(Math.floor(pct), Math.floor(pct), 100);
    }
  }, 180);
}

function setupReveals() {
  const items = document.querySelectorAll(".fade-up, .decode-text, .hero-center-label");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
  items.forEach((el) => io.observe(el));
  
  const h1 = document.querySelector("#hero h1.decode-text");
  if (h1) h1.classList.add("in-view");
  const hcl = document.querySelector(".hero-center-label");
  if (hcl) hcl.classList.add("in-view");
}

function setupTyped() {
  const el = $("typed-text");
  if (!el) return;
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const word = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 1600); return; }
      setTimeout(tick, 90);
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 300); return; }
      setTimeout(tick, 45);
    }
  }
  tick();
}

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(step);
}
function setupStats() {
  const nums = document.querySelectorAll(".stat-num");
  if (!("IntersectionObserver" in window)) { nums.forEach(animateCount); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animateCount(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  nums.forEach((n) => io.observe(n));
}

window.toggleFaq = function (btn) {
  const item = btn.closest(".faq-item");
  if (!item) return;
  const open = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
  if (!open) item.classList.add("open");
};

let slideIndex = 0;
function showSlide(i) {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".t-dot");
  if (!slides.length) return;
  slideIndex = (i + slides.length) % slides.length;
  slides.forEach((s, idx) => s.classList.toggle("active", idx === slideIndex));
  dots.forEach((d, idx) => d.classList.toggle("active", idx === slideIndex));
}
window.nextSlide = function () { showSlide(slideIndex + 1); if (window.__resetTestTimer) window.__resetTestTimer(); };
window.prevSlide = function () { showSlide(slideIndex - 1); if (window.__resetTestTimer) window.__resetTestTimer(); };
window.goToSlide = function (i) { showSlide(i); if (window.__resetTestTimer) window.__resetTestTimer(); };

function setupMobileMenu() {
  const h = $("hamburger");
  const m = $("mobile-menu");
  if (h && m) {
    const setOpen = (open) => {
      m.classList.toggle("open", open);
      h.classList.toggle("open", open);
      h.setAttribute("aria-expanded", String(open));
    };
    h.addEventListener("click", () => setOpen(!m.classList.contains("open")));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && m.classList.contains("open")) setOpen(false);
    });
  }
}

window.submitForm = function () {
  const btn = $("submit-btn");
  const err = $("form-error");
  const status = $("form-status");
  const name = ($("form-name") && $("form-name").value.trim()) || "";
  const email = ($("form-email") && $("form-email").value.trim()) || "";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (err) err.style.display = "none";
  if (status) status.textContent = "";
  if (!name) { showError("Укажите имя."); return; }
  if (!emailOk) { showError("Укажите корректный email."); return; }
  if (btn) { btn.disabled = true; btn.textContent = "Отправляем…"; }
  setTimeout(function () {
    if (btn) { btn.disabled = false; btn.textContent = "Отправить заявку"; }
    if (status) status.textContent = "Спасибо! Заявка (демо) принята — мы скоро свяжемся с вами.";
    const form = document.querySelector(".form-panel");
    if (form) form.reset();
  }, 700);
  function showError(msg) {
    if (err) { err.textContent = msg; err.style.display = "block"; }
  }
};

window.setHoveredProject = function () {};

function setupScrollProgress() {
  const ring = $("scroll-ring");
  if (!ring) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    ring.style.strokeDashoffset = (138.23 * (1 - p)).toString();
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  bootLoader();
  setupReveals();
  setupTyped();
  setupStats();
  setupMobileMenu();
  window.closeMobileMenu = function () {
    const m = $("mobile-menu"); const h = $("hamburger");
    if (m) m.classList.remove("open");
    if (h) { h.classList.remove("open"); h.setAttribute("aria-expanded", "false"); }
  };
  setupScrollProgress();
  
  let __testTimer = setInterval(() => showSlide(slideIndex + 1), 6000);
  window.__resetTestTimer = function () {
    clearInterval(__testTimer);
    __testTimer = setInterval(() => showSlide(slideIndex + 1), 6000);
  };
});
