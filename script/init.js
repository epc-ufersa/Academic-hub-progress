/**
 * Academic Hub - Lógica de Renderização Dinâmica
 * Responsável por ler os dados estruturados e construir a interface utilizando CSS Grid e Template Literals.
 */

// A base de dados do Front-end: um Array de Objetos (JSON estruturado em memória)
const flashcardsData = [
    {
        id: "1",
        categoria: "Arquitetura CSS",
        pergunta: "Qual é a função do Flexbox no CSS?",
        resposta: "Prover um layout unidimensional (linha ou coluna) otimizado para distribuir espaço e alinhar itens em um contêiner, mesmo quando seus tamanhos são desconhecidos."
    },
    {
        id: "2",
        categoria: "JavaScript",
        pergunta: "O que é o hoisting?",
        resposta: "Mecanismo do interpretador JavaScript que move as declarações de variáveis e funções para o topo do seu escopo atual antes da execução do código."
    },
    {
        id: "3",
        categoria: "Redes",
        pergunta: "Qual a diferença entre os verbos HTTP PUT e PATCH?",
        resposta: "PUT substitui o recurso inteiro, enquanto PATCH aplica modificações parciais a um recurso existente."
    },
    {
        id: "4",
        categoria: "Engenharia de Software",
        pergunta: "O que preconiza o princípio de Responsabilidade Única (SRP)?",
        resposta: "Uma classe ou módulo deve ter um, e apenas um, motivo para mudar. Ou seja, deve ter apenas uma responsabilidade no sistema."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initLibrary();
});

/**
 * Função principal de inicialização da biblioteca.
 * Executa de forma síncrona, consumindo a constante local de dados.
 */
function initLibrary() {
    try {
        renderCardsGrid(flashcardsData);
        setupSearchFilter(flashcardsData);
    } catch (error) {
        console.error("Falha ao inicializar a biblioteca:", error);
        displayErrorMessage();
    }
}

/**
 * Simula o consumo de uma API buscando o arquivo JSON local.
 * @returns {Promise<Array>} Array de objetos de flashcards.
 */
async function fetchCardsData() {
    const response = await fetch('data/cards.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

/**
 * Mapeia o array de dados para strings HTML (Template Literals) e injeta no DOM.
 * @param {Array} cards - Os dados a serem renderizados.
 */
function renderCardsGrid(cards) {
    const gridContainer = document.getElementById("flashcards-grid");
    
    if (cards.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-tertiary);">Nenhum card encontrado.</p>`;
        return;
    }

    // Utilização de métodos funcionais de array e Template Literals ES6
    const cardsHTML = cards.map(card => `
        <article class="flashcard-item" data-id="${card.id}">
            <span class="category">${card.categoria}</span>
            <h2 class="question">${card.pergunta}</h2>
            <p class="answer-preview">${card.resposta}</p>
        </article>
    `).join("");

    // Manipulação do DOM em lote para otimização de performance (Reflow/Repaint)
    gridContainer.innerHTML = cardsHTML;
}

/**
 * Implementa a lógica de filtro de pesquisa no lado do cliente (Client-side filtering).
 * @param {Array} allCards - O array original completo para referência.
 */
function setupSearchFilter(allCards) {
    const searchInput = document.getElementById("searchInput");
    
    searchInput.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();
        
        const filteredCards = allCards.filter(card => 
            card.pergunta.toLowerCase().includes(searchTerm) ||
            card.categoria.toLowerCase().includes(searchTerm) ||
            card.resposta.toLowerCase().includes(searchTerm)
        );
        
        renderCardsGrid(filteredCards);
    });
}

/**
 * Função de fallback caso a requisição de dados falhe.
 */
function displayErrorMessage() {
    const gridContainer = document.getElementById("flashcards-grid");
    gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; border: 1px solid var(--wrong); color: var(--wrong); border-radius: var(--radius-md);">
            <h3>Erro ao carregar o acervo</h3>
            <p>Verifique se o arquivo data/cards.json está acessível no servidor local.</p>
        </div>
    `;
}