function toggleTheme() {
  const bodyElement = document.querySelector("body");
  const themeButton = document.querySelector("#themeToggle");

  // 3. MUTACAO DO ESTADO
  // O metodo toggle interroga a lista de classes: se existir, remove. Se nao, adiciona.
  bodyElement.classList.toggle("dark-mode");

  // Melhoria na Experiencia de Uso (UX): Atualizamos o texto do botao consoante o estado
  if (bodyElement.classList.contains("dark-mode")) {
    themeButton.textContent = "Modo Escuro";
  } else {
    themeButton.textContent = "Modo Claro";
  }
}