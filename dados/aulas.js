/*
  CATÁLOGO DE AULAS
  Para adicionar uma nova aula:
  1. copie o HTML para a pasta slides;
  2. copie um bloco abaixo e ajuste as informações;
  3. use status: "disponivel" e destaque: true na aula mais recente.
*/
window.AULAS = [
  {
    numero: 1,
    titulo: "Acolhimento, dispositivos e Google Sala de Aula",
    resumo: "Ambientação da turma, funcionamento de desktops, notebooks, tablets e smartphones, além dos primeiros passos no Google Sala de Aula.",
    topicos: ["Dispositivos", "Hardware", "Google Classroom"],
    icone: "⌨",
    estilo: "devices",
    data: "12 ago. 2026",
    slides: 22,
    duracao: "Aula interativa",
    status: "disponivel",
    destaque: false,
    arquivo: "./slides/01-acolhimento-dispositivos-classroom.html"
  },
  {
    numero: 2,
    titulo: "História da Informática, Hardware e Software",
    resumo: "Uma viagem das primeiras ferramentas de cálculo aos sistemas digitais, conectando componentes e programas à rotina imobiliária.",
    topicos: ["História", "Hardware", "Software"],
    icone: "⚙",
    estilo: "history",
    data: "21 ago. 2026",
    slides: 25,
    duracao: "Aula interativa",
    status: "disponivel",
    destaque: false,
    arquivo: "./slides/02-historia-informatica-hardware-software.html"
  },
  {
    numero: 3,
    titulo: "Sistemas Operacionais",
    resumo: "Windows, Linux e outros sistemas, com atividades sobre área de trabalho, arquivos, aplicativos, atualizações, segurança e escolhas para a rotina imobiliária.",
    topicos: ["Sistemas operacionais", "Arquivos", "Segurança"],
    icone: "▤",
    estilo: "system",
    data: "28 ago. 2026",
    slides: 26,
    duracao: "Aula interativa",
    status: "disponivel",
    destaque: true,
    arquivo: "./slides/03-sistemas-operacionais.html"
  }
];
