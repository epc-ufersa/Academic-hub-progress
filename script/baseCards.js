export const SEED_CARDS = [
  {
    id: "seed_1",
    pergunta: "O que é a Curva do Esquecimento de Ebbinghaus?",
    resposta:
      "Descoberta por Hermann Ebbinghaus (1885), demonstra que a retenção de informações decai exponencialmente com o tempo sem revisão. Revisões espaçadas achatam essa curva.",
    categoria: "Metacognição",
    proximaRevisao: todayISO(),
    intervalo: 1,
  },
  {
    id: "seed_2",
    pergunta: "Qual a complexidade do algoritmo de busca binária?",
    resposta:
      "O(log n) — a cada iteração, o espaço de busca é reduzido pela metade.",
    categoria: "Algoritmos",
    proximaRevisao: todayISO(),
    intervalo: 1,
  },
  {
    id: "seed_3",
    pergunta: "Enuncie a Lei de Ohm.",
    resposta:
      "V = R · I. A tensão (V) é proporcional à corrente (I), sendo a resistência (R) a constante de proporcionalidade.",
    categoria: "Circuitos",
    proximaRevisao: todayISO(),
    intervalo: 1,
  },
  {
    id: "seed_4",
    pergunta: "O que é o hoisting em JavaScript?",
    resposta:
      'Mecanismo pelo qual declarações de variáveis (var) e funções são "içadas" para o topo de seu escopo durante a fase de compilação, antes da execução.',
    categoria: "JavaScript",
    proximaRevisao: todayISO(),
    intervalo: 1,
  },
];