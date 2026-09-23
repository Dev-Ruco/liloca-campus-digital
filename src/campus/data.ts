export type Lesson = {
  id: number;
  title: string;
  duration: string;
  pdf?: string;
  question?: {
    prompt: string;
    options: string[];
    correct: number;
    explanation: string;
  };
};

export type Course = {
  id: string;
  title: string;
  area: string;
  partner: string;
  duration: string;
  lessons: number;
  level: string;
  format: string;
  price: string;
  description: string;
  accent: string;
  syllabus: Lesson[];
};

export const courses: Course[] = [
  {
    id: "gestao-projectos",
    title: "Gestão Prática de Projectos",
    area: "Gestão",
    partner: "Instituição parceira",
    duration: "6 semanas",
    lessons: 18,
    level: "Iniciação",
    format: "100% online",
    price: "A anunciar",
    description: "Aprenda a transformar uma ideia num projecto estruturado, planear recursos, acompanhar resultados e apresentar relatórios.",
    accent: "project",
    syllabus: [
      { id: 1, title: "O que é um projecto?", duration: "08 min", pdf: "Guia da aula 1", question: { prompt: "Qual destas opções melhor define um projecto?", options: ["Uma actividade permanente sem prazo", "Um esforço temporário com objectivo definido", "Uma reunião semanal da equipa"], correct: 1, explanation: "Um projecto tem início, fim e um resultado ou objectivo definido." } },
      { id: 2, title: "Do problema ao objectivo", duration: "11 min", pdf: "Ficha de diagnóstico" },
      { id: 3, title: "Actividades, resultados e indicadores", duration: "13 min", pdf: "Modelo de matriz" },
      { id: 4, title: "Cronograma e responsabilidades", duration: "10 min" },
      { id: 5, title: "Orçamento simples", duration: "12 min", pdf: "Modelo de orçamento" },
      { id: 6, title: "Avaliação final", duration: "15 min" }
    ]
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital para Negócios",
    area: "Marketing",
    partner: "Instituição parceira",
    duration: "4 semanas",
    lessons: 14,
    level: "Iniciação",
    format: "100% online",
    price: "A anunciar",
    description: "Construa presença digital, produza conteúdo com objectivo e acompanhe resultados de campanhas.",
    accent: "marketing",
    syllabus: [
      { id: 1, title: "Fundamentos do marketing digital", duration: "09 min", pdf: "Resumo da aula" },
      { id: 2, title: "Conhecer o público", duration: "12 min" },
      { id: 3, title: "Conteúdo que comunica", duration: "10 min", pdf: "Checklist de conteúdo" },
      { id: 4, title: "Campanhas e anúncios", duration: "14 min" }
    ]
  },
  {
    id: "excel-dados",
    title: "Excel e Análise de Dados",
    area: "Tecnologia",
    partner: "Instituição parceira",
    duration: "5 semanas",
    lessons: 16,
    level: "Básico — intermédio",
    format: "100% online",
    price: "A anunciar",
    description: "Organize dados, utilize fórmulas, crie tabelas e transforme informação em decisões práticas.",
    accent: "data",
    syllabus: [
      { id: 1, title: "Organizar uma folha de cálculo", duration: "10 min", pdf: "Ficheiro de exercícios" },
      { id: 2, title: "Fórmulas essenciais", duration: "14 min" },
      { id: 3, title: "Tabelas e filtros", duration: "11 min", pdf: "Exercício prático" },
      { id: 4, title: "Introdução a dashboards", duration: "13 min" }
    ]
  },
  {
    id: "ia-trabalho",
    title: "Inteligência Artificial no Trabalho",
    area: "Tecnologia",
    partner: "Instituição parceira",
    duration: "3 semanas",
    lessons: 10,
    level: "Iniciação",
    format: "100% online",
    price: "A anunciar",
    description: "Utilize ferramentas de IA de forma prática e responsável para pesquisar, escrever, analisar e aumentar a produtividade.",
    accent: "ai",
    syllabus: [
      { id: 1, title: "O que é IA generativa?", duration: "08 min", pdf: "Glossário de IA" },
      { id: 2, title: "Como escrever bons pedidos", duration: "12 min" },
      { id: 3, title: "IA para produtividade", duration: "14 min", pdf: "Modelos de prompts" },
      { id: 4, title: "Uso responsável", duration: "10 min" }
    ]
  }
];

export const stats = [
  { value: "Curta duração", label: "Formação prática e focada" },
  { value: "100% online", label: "Estude onde estiver" },
  { value: "Institucional", label: "Certificação ligada ao parceiro" }
];
