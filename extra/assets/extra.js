// ============================
// Extra "private" area (obfuscation, not real security)
// ============================

const STORAGE_KEY = "extra_token_v1";

/**
 * 1) Generate a password hash once (Step 4 below) and paste it here.
 * This is SHA-256(password) in hex.
 */
const PASSWORD_HASH_HEX = "8a58aa3f0832466d22df3e2710a5c0120e9e72b74fd5a1feb8ac564c4feae8a5";

/**
 * 2) Salt used to build the token after correct password entry.
 * This can be anything, but keep it constant.
 */
const TOKEN_SALT = "v1::nick::secret";

/**
 * Helper: buffer -> hex
 */
function toHex(buffer) {
  return [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, "0")).join("");
}

/**
 * SHA-256 hex of a string
 */
async function sha256Hex(text) {
  const enc = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", enc);
  return toHex(digest);
}

/**
 * Create a token from the password hash.
 * token = sha256Hex(passwordHash + TOKEN_SALT)
 */
async function makeTokenFromPasswordHash(passwordHashHex) {
  return sha256Hex(passwordHashHex + TOKEN_SALT);
}

/**
 * Check if stored token is valid
 */
async function hasValidToken() {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (!stored) return false;

  // expected token derived from the known password hash
  const expected = await makeTokenFromPasswordHash(PASSWORD_HASH_HEX);
  return stored === expected;
}

/**
 * Inject the secret content only after valid token
 */
function renderSecretContent() {
  const card = document.getElementById("secretCard");
  if (!card) return;

  // Put your real content here (not in HTML)
  card.innerHTML = `
    <h1 style="margin:0 0 8px;">Hi ❤️</h1>
    <p class="muted" style="margin-top:0;">
      This page is just for you.
    </p>

    <p>
      Write your message here. Keep it sweet and avoid anything truly private
      because this site is still public.
    </p>

    <button type="button" id="lockBtn">Lock</button>
  `;

  const lockBtn = document.getElementById("lockBtn");
  if (lockBtn) {
    lockBtn.addEventListener("click", () => {
      sessionStorage.removeItem(STORAGE_KEY);
      window.location.href = "./";
    });
  }
}

// ============================
// Gate page behavior
// ============================
const gateForm = document.getElementById("gateForm");
const pw = document.getElementById("pw");
const statusEl = document.getElementById("status");

if (gateForm && pw) {
  gateForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (statusEl) statusEl.textContent = "Checking...";

    const input = pw.value.trim();
    const inputHash = await sha256Hex(input);

    if (inputHash === PASSWORD_HASH_HEX) {
      const token = await makeTokenFromPasswordHash(inputHash);
      sessionStorage.setItem(STORAGE_KEY, token);
      window.location.href = "secret.html";
    } else {
      if (statusEl) statusEl.textContent = "Wrong password.";
      pw.value = "";
      pw.focus();
    }
  });
}

// ============================
// Secret page protection
// ============================
(async () => {
  const onSecretPage = window.location.pathname.endsWith("/extra/secret.html");
  if (!onSecretPage) return;

  const ok = await hasValidToken();
  if (!ok) {
    // If someone tries to go directly to secret.html, send them back.
    window.location.replace("./");
    return;
  }

  renderSecretContent();
})();