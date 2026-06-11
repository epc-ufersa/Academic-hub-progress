import { getCards } from "./resource.js";

const getCardsGridElement = () => {
  return document.getElementById("flashcards-grid");
};

const toCardMarkup = (card) => {
  return `
    <article class="flashcard-item" data-id="${card.id}">
      <span class="category">${card.categoria ?? "Sem categoria"}</span>
      <h2 class="question">${card.pergunta}</h2>
      <p class="answer-preview">${card.resposta}</p>
    </article>
  `;
};

const renderCards = (cards) => {
  const flashcardsGrid = getCardsGridElement();

  if (!flashcardsGrid) {
    return;
  }

  flashcardsGrid.innerHTML = cards.map(toCardMarkup).join("");
};

const searchCards = async (query = "") => {
  const allCards = await getCards();
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    renderCards(allCards);
    return;
  }

  const filteredCards = allCards.filter((card) => {
    const pergunta = card.pergunta.toLowerCase();
    const resposta = card.resposta.toLowerCase();
    const categoria = (card.categoria ?? "").toLowerCase();

    return (
      pergunta.includes(normalizedQuery) ||
      resposta.includes(normalizedQuery) ||
      categoria.includes(normalizedQuery)
    );
  });

  renderCards(filteredCards);
};

window.searchCards = searchCards;

export { renderCards, searchCards };
