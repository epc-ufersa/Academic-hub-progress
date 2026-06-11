import { getCards } from "./resource.js";
import { renderCards } from "./script.js";
import { initTheme } from "./darkMode.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const loadAndRenderCards = async () => {
    const cards = await getCards();
    renderCards(cards);
  };

  loadAndRenderCards();
});
