const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.getElementById("mobileNav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Theme toggle (accessibility friendly + remembers preference)
const THEME_KEY = "theme-preference"; // "dark" or "light"

function getSystemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("theme-light", isLight);

  const btn = document.querySelector(".theme-toggle");
  if (btn) {
    // aria-pressed means "on/off" state for toggle buttons
    btn.setAttribute("aria-pressed", String(isLight));
    btn.textContent = isLight ? "Dark" : "Light";
    btn.setAttribute(
      "aria-label",
      isLight ? "Toggle dark mode" : "Toggle light mode"
    );
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY); // "light" | "dark" | null
  const theme = saved === "light" || saved === "dark" ? saved : getSystemTheme();
  applyTheme(theme);
}

function toggleTheme() {
  const isLightNow = document.body.classList.contains("theme-light");
  const next = isLightNow ? "dark" : "light";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

initTheme();

const themeBtn = document.querySelector(".theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

// Contact form (Formspree)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    const action = contactForm.getAttribute("action");
    if (!action || action === "#") return; // not wired yet

    e.preventDefault();
    formStatus.textContent = "Sending...";

    try {
      const formData = new FormData(contactForm);
      const res = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        contactForm.reset();
        formStatus.textContent = "Message sent. Thanks!";
      } else {
        formStatus.textContent = "Something went wrong. Please try again.";
      }
    } catch {
      formStatus.textContent = "Network error. Please try again.";
    }
  });
}