const THEME_STORAGE_KEY = "academic-hub-theme";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";
let isThemeInitialized = false;

function readSavedTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === THEME_DARK || saved === THEME_LIGHT) {
    return saved;
  }
  return null;
}

function saveTheme(theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function updateThemeButtonLabel(themeButton, isDarkMode) {
  if (!themeButton) return;
  themeButton.textContent = isDarkMode ? "Modo Claro" : "Modo Escuro";
}

function applyTheme(theme) {
  const htmlElement = document.documentElement;
  const bodyElement = document.body;
  const themeButton = document.querySelector("#themeToggle");
  const isDarkMode = theme === THEME_DARK;

  htmlElement.classList.toggle("dark-mode", isDarkMode);
  htmlElement.dataset.theme = theme;
  bodyElement.classList.toggle("dark-mode", isDarkMode);
  bodyElement.dataset.theme = theme;
  updateThemeButtonLabel(themeButton, isDarkMode);
}

function getInitialTheme() {
  const savedTheme = readSavedTheme();
  if (savedTheme) {
    return savedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? THEME_DARK : THEME_LIGHT;
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark-mode")
    ? THEME_DARK
    : THEME_LIGHT;
  const nextTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

  applyTheme(nextTheme);
  saveTheme(nextTheme);
}

function handleStorageThemeChange(event) {
  if (event.key !== THEME_STORAGE_KEY) return;
  const nextTheme = readSavedTheme();
  if (nextTheme) {
    applyTheme(nextTheme);
  }
}

export function initTheme() {
  const themeButton = document.querySelector("#themeToggle");
  const initialTheme = getInitialTheme();

  applyTheme(initialTheme);

  if (!readSavedTheme()) {
    saveTheme(initialTheme);
  }

  if (!isThemeInitialized) {
    if (themeButton) {
      themeButton.addEventListener("click", toggleTheme);
    }
    window.addEventListener("storage", handleStorageThemeChange);
    isThemeInitialized = true;
  }
}

// Compatibilidade com chamadas legadas no HTML.
window.toggleTheme = toggleTheme;