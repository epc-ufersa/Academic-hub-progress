document.addEventListener("DOMContentLoaded", () => {
  // 1. SELECAO CIRURGICA NO DOM
  // Utilizamos querySelector para buscar o botao pelo seu ID unico
  const themeButton = document.querySelector("#themeToggle");
  // Capturamos a tag body, onde o estado visual deve ser injetado
  const bodyElement = document.querySelector("body");

  // 2. REGISTO DO LISTENER DE EVENTO
  themeButton.addEventListener("click", () => {
    // 3. MUTACAO DO ESTADO
    // O metodo toggle interroga a lista de classes: se existir, remove. Se nao, adiciona.
    bodyElement.classList.toggle("dark-mode");

    // Melhoria na Experiencia de Uso (UX): Atualizamos o texto do botao consoante o estado
    if (bodyElement.classList.contains("dark-mode")) {
      themeButton.textContent = "Modo Escuro";
    } else {
      themeButton.textContent = "Modo Claro";
    }
  });
});
