import { getCards } from "./resource.js";
import { renderCards } from "./script.js";

document.addEventListener("DOMContentLoaded", () => {
  const loadAndRenderCards = async () => {
    const cards = await getCards();
    renderCards(cards);
  };

  loadAndRenderCards();
});
