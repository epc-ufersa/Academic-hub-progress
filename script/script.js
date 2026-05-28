const cards = document.querySelectorAll(".flashcard-item");

const searchCards = (query) => {
  const flashcardsGrid = document.getElementById("flashcards-grid");

  const filteredCards = Array.from(cards).filter((card) => {
    const question = card.querySelector(".question").textContent.toLowerCase();
    return question.includes(query.toLowerCase());
  });

  flashcardsGrid.innerHTML = filteredCards
    .map((card) => card.outerHTML)
    .join("");
};
