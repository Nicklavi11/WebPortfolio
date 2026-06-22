const K = "extra_token_v1";
const H = "8a58aa3f0832466d22df3e2710a5c0120e9e72b74fd5a1feb8ac564c4feae8a5";
const S = "v1::nick::secret";

const $ = (id) => document.getElementById(id);

function hex(buffer) {
  return [...new Uint8Array(buffer)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}

async function sha256(text) {
  const encoded = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", encoded);
  return hex(hash);
}

function tokenFromHash(hash) {
  return sha256(hash + S);
}

async function valid() {
  const token = sessionStorage.getItem(K);
  return !!token && token === await tokenFromHash(H);
}

function lock() {
  sessionStorage.removeItem(K);
  window.location.href = "./";
}

function getPages() {
  return window.LOVE_SITE?.pages || [];
}

function getCurrentPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const pages = getPages();

  if (id) {
    return pages.find((page) => page.id === id);
  }

  return pages[0];
}

function renderText(id, value) {
  const el = $(id);
  if (el) el.textContent = value || "";
}

function renderPhotos(photos = []) {
  const grid = $("photoGrid");
  if (!grid) return;

  grid.innerHTML = "";

  photos.forEach((photo) => {
    const figure = document.createElement("figure");
    figure.className = "photo";

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || "Photo memory";
    img.loading = "lazy";

    figure.appendChild(img);
    grid.appendChild(figure);
  });
}

function renderChips(chips = []) {
  const wrap = $("chipsWrap");
  if (!wrap) return;

  wrap.innerHTML = "";

  chips.forEach((chipText) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = chipText;
    wrap.appendChild(chip);
  });
}

function renderCardBody(paragraphs = []) {
  const body = $("cardBody");
  if (!body) return;

  body.innerHTML = "";

  paragraphs.forEach((text, index) => {
    const p = document.createElement("p");
    p.className = "muted small";

    if (index > 0) {
      p.style.marginTop = "10px";
    }

    p.textContent = text;
    body.appendChild(p);
  });
}

function inject(page) {
  if (!page) {
    document.body.innerHTML = `
      <main class="wrap">
        <div class="love-card">
          <h1 class="love-title">Page not found</h1>
          <p class="muted">This memory does not exist yet.</p>
          <a class="btn-soft" href="archives.html">Go to Archives</a>
        </div>
      </main>
    `;
    return;
  }

  document.title = page.archiveTitle || page.title || "For You";

  renderText("loveTitle", page.title);
  renderText("loveSubtitle", page.subtitle);
  renderText("messageTitle", page.messageTitle);
  renderText("messageBody", page.messageBody);
  renderText("storySectionTitle", page.storySectionTitle);
  renderText("cardHeaderTitle", page.cardHeaderTitle);
  renderText("cardHeaderSubtitle", page.cardHeaderSubtitle);

  renderPhotos(page.photos);
  renderChips(page.chips);
  renderCardBody(page.cardBody);
}

function pad2(number) {
  return String(number).padStart(2, "0");
}

function addMonths(date, months) {
  const copy = new Date(date);
  const originalDay = copy.getDate();

  copy.setMonth(copy.getMonth() + months);

  if (copy.getDate() !== originalDay) {
    copy.setDate(0);
  }

  return copy;
}

function diffCal(start, end) {
  if (end < start) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let years = end.getFullYear() - start.getFullYear();
  let yearAnchor = new Date(start);
  yearAnchor.setFullYear(start.getFullYear() + years);

  if (yearAnchor > end) {
    years--;
    yearAnchor = new Date(start);
    yearAnchor.setFullYear(start.getFullYear() + years);
  }

  let months =
    end.getMonth() -
    yearAnchor.getMonth() +
    12 * (end.getFullYear() - yearAnchor.getFullYear());

  let monthAnchor = addMonths(yearAnchor, months);

  if (monthAnchor > end) {
    months--;
    monthAnchor = addMonths(yearAnchor, months);
  }

  const diff = end - monthAnchor;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  return {
    years,
    months,
    days: Math.floor(diff / day),
    hours: Math.floor((diff % day) / hour),
    minutes: Math.floor((diff % hour) / minute),
    seconds: Math.floor((diff % minute) / 1000)
  };
}

function together() {
  const years = $("togetherYears");
  const months = $("togetherMonths");
  const days = $("togetherDays");
  const hours = $("togetherHours");
  const minutes = $("togetherMinutes");
  const seconds = $("togetherSeconds");

  if (!(years && months && days && hours && minutes && seconds)) return;

  const start = new Date(window.LOVE_SITE?.startDate || "2024-06-22T19:00:00");

  function updateClock() {
    const diff = diffCal(start, new Date());

    years.textContent = diff.years;
    months.textContent = diff.months;
    days.textContent = diff.days;
    hours.textContent = pad2(diff.hours);
    minutes.textContent = pad2(diff.minutes);
    seconds.textContent = pad2(diff.seconds);
  }

  updateClock();
  setInterval(updateClock, 1000);
}

function renderArchives() {
  const list = $("archiveList");
  if (!list) return;

  const pages = getPages()
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  list.innerHTML = "";

  pages.forEach((page) => {
    const link = document.createElement("a");
    link.className = "archive-card";
    link.href = `p.html?id=${encodeURIComponent(page.id)}`;

    const title = document.createElement("h3");
    title.textContent = page.archiveTitle || page.title || "Untitled page";

    const desc = document.createElement("p");
    desc.className = "muted small";
    desc.textContent = page.archiveDescription || page.subtitle || "";

    const date = document.createElement("p");
    date.className = "muted small";
    date.textContent = page.date || "";

    link.appendChild(title);
    link.appendChild(desc);
    link.appendChild(date);

    list.appendChild(link);
  });
}

function initGate() {
  const form = $("gateForm");
  const input = $("pw");
  const status = $("status");

  if (!form || !input) return;

  valid().then((isValid) => {
    if (isValid) {
      window.location.href = "archives.html";
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (status) status.textContent = "Checking...";

    const password = input.value.trim();
    const passwordHash = await sha256(password);

    if (passwordHash === H) {
      sessionStorage.setItem(K, await tokenFromHash(passwordHash));
      window.location.href = "archives.html";
      return;
    }

    if (status) status.textContent = "Wrong password.";
    input.value = "";
    input.focus();
  });
}

async function requireValidSession() {
  const isValid = await valid();

  if (!isValid) {
    window.location.replace("./");
    return false;
  }

  return true;
}

async function initSecretPage() {
  if (!$("secretCard")) return;

  const allowed = await requireValidSession();
  if (!allowed) return;

  const lockBtn = $("lockBtn");
  if (lockBtn) lockBtn.addEventListener("click", lock);

  const page = getCurrentPage();
  inject(page);
  together();
}

async function initArchivesPage() {
  if (!$("archivesPage")) return;

  const allowed = await requireValidSession();
  if (!allowed) return;

  const lockBtn = $("lockBtn");
  if (lockBtn) lockBtn.addEventListener("click", lock);

  renderArchives();
}

document.addEventListener("DOMContentLoaded", () => {
  initGate();
  initSecretPage();
  initArchivesPage();
});