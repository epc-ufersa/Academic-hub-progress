const BASE_CARDS = [
  {
    id: "1",
    categoria: "Arquitetura CSS",
    pergunta: "Qual é a função do Flexbox no CSS?",
    resposta:
      "Prover um layout unidimensional (linha ou coluna) otimizado para distribuir espaço e alinhar itens em um contêiner, mesmo quando seus tamanhos são desconhecidos.",
  },
  {
    id: "2",
    categoria: "JavaScript",
    pergunta: "O que é o hoisting?",
    resposta:
      "Mecanismo do interpretador JavaScript que move as declarações de variáveis e funções para o topo do seu escopo atual antes da execução do código.",
  },
  {
    id: "3",
    categoria: "Redes",
    pergunta: "Qual a diferença entre os verbos HTTP PUT e PATCH?",
    resposta:
      "PUT substitui o recurso inteiro, enquanto PATCH aplica modificações parciais a um recurso existente.",
  },
  {
    id: "4",
    categoria: "Engenharia de Software",
    pergunta: "O que preconiza o princípio de Responsabilidade Única (SRP)?",
    resposta:
      "Uma classe ou módulo deve ter um, e apenas um, motivo para mudar. Ou seja, deve ter apenas uma responsabilidade no sistema.",
  },
  {
    id: "5",
    categoria: "Banco de Dados",
    pergunta: "O que caracteriza uma transação ACID?",
    resposta:
      "Atomicidade (tudo ou nada), Consistência (regras de validação), Isolamento (concorrência invisível) e Durabilidade (dados salvos permanentemente).",
  },
  {
    id: "6",
    categoria: "React",
    pergunta: "Qual a principal diferença entre State e Props?",
    resposta:
      "Props são argumentos imutáveis passados de cima para baixo (pai para filho). State é o estado local e mutável gerenciado internamente pelo próprio componente.",
  },
];

const RESOURCE_ORIGINS = {
  VARIABLE: "VARIABLE",
  JSON: "JSON",
  LOCAL_STORAGE: "LOCAL_STORAGE",
};

const JSON_SOURCE_URL = "./data/flashcards.json";

const getCardsFromJson = async () => {
  try {
    const response = await fetch(JSON_SOURCE_URL);
    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  } catch (error) {
    console.warn("Falha ao carregar fonte JSON:", error);
    return [];
  }
};

const getCards = async () => {
  const jsonCards = await getCardsFromJson();
  return jsonCards.length ? jsonCards : BASE_CARDS;
};

export { BASE_CARDS, RESOURCE_ORIGINS, getCards };
