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

// Copy email button (reliable alternative to mailto)
const copyBtn = document.getElementById("copyEmailBtn");
const copyStatus = document.getElementById("copyStatus");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.getAttribute("data-email") || "";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const temp = document.createElement("textarea");
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
      }

      if (copyStatus) copyStatus.textContent = "Email copied to clipboard.";
    } catch {
      if (copyStatus) copyStatus.textContent = "Could not copy. Email: " + email;
    }
  });
}
