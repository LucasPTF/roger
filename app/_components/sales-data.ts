export type HeroAngle = "a1" | "a2" | "a3";

export const heroAngles = {
  a1: {
    eyebrow: "Você guarda. Mas quase não sente crescer.",
    title: "Seu dinheiro está comportado demais.",
    support:
      "Em 3 encontros ao vivo, entenda como montar sua estrutura para entrar no mercado cripto com método, segurança operacional e clareza, mesmo que hoje seu dinheiro esteja parado em opções tradicionais e você não saiba por onde começar.",
    cta: "Quero montar minha estrutura cripto",
  },
  a2: {
    eyebrow: "Medo de golpe? Começa por aqui.",
    title: "Cripto não é o problema. Entrar sem estrutura é.",
    support:
      "O Workshop Projeto Você S.A. tira o mercado cripto do campo da aposta e coloca no campo da estrutura: conta, carteira, prática guiada e estratégia antes de qualquer pressa por resultado.",
    cta: "Quero entender o caminho certo",
  },
  a3: {
    eyebrow: "Comece manual. Entenda o jogo.",
    title: "Você não precisa morar na frente de um gráfico para começar.",
    support:
      "Primeiro, você aprende a estrutura e acompanha operações na prática. Depois, entende por que tempo, disciplina e automação se tornam o próximo nível natural para quem quer levar investimentos a sério.",
    cta: "Quero começar do jeito certo",
  },
} satisfies Record<
  HeroAngle,
  { eyebrow: string; title: string; support: string; cta: string }
>;

export const workshopDays = [
  {
    number: "01",
    title: "Sua base: conta, acesso e estrutura",
    description:
      "Entenda a lógica do mercado, crie ou organize sua conta na Binance e conheça os cuidados que fazem parte de uma estrutura operacional séria.",
    outcome: "Parar de olhar para cripto como um território desconhecido.",
  },
  {
    number: "02",
    title: "Carteira digital e movimentação com clareza",
    description:
      "Entenda o papel da carteira digital, como organizar seus ativos e como pensar segurança de acesso e movimentação sem depender de improviso.",
    outcome: "Trocar a sensação de complexidade pela capacidade de acompanhar.",
  },
  {
    number: "03",
    title: "Operação manual, estratégia e o próximo nível",
    description:
      "Acompanhe a lógica de operações reais, veja por que consistência pesa mais que pressa e entenda como uma estratégia estruturada funciona na prática.",
    outcome: "Decidir com consciência qual deve ser o próximo passo da sua jornada.",
  },
];

export const audience = [
  "Tem 30 anos ou mais e quer construir uma segunda fonte de renda ou patrimônio para o futuro.",
  "Já deixa dinheiro em investimentos tradicionais, mas sente que precisa entender outras possibilidades.",
  "Olha para cripto com curiosidade, mas trava por medo de golpe, perda ou complexidade.",
  "Não domina aplicativos, carteiras ou moedas e precisa de uma ordem simples para começar.",
  "Já tentou aprender sozinho, consumiu vídeos e cursos, mas continua juntando informações soltas.",
  "Quer aprender primeiro e decidir depois, sem depender de promessa mágica.",
];

export const notFor = [
  "Quer entrar hoje e ficar rico amanhã.",
  "Acredita que investimento sério não tem oscilação.",
  "Procura garantia de rentabilidade.",
  "Quer apertar um botão sem entender onde o próprio dinheiro está sendo colocado.",
];

export const methodSteps = [
  { number: "01", title: "Construa a base", text: "Conta, acesso, proteção e movimentação vêm antes da pressa." },
  { number: "02", title: "Entenda a operação", text: "Veja o que acontece por trás das decisões e acompanhe a lógica manual." },
  { number: "03", title: "Aprenda a repetir", text: "Troque impulso por estratégia, rotina e disciplina." },
  { number: "04", title: "Ganhe tempo depois", text: "Só então avalie ferramentas e automação como próximo nível." },
];

export const lots = [
  { name: "1º lote", price: "R$ 29,90", condition: "Primeira janela de entrada" },
  { name: "2º lote", price: "R$ 39,90", condition: "Próxima janela" },
  { name: "3º lote", price: "R$ 49,90", condition: "Última janela antes do workshop" },
];

export const faqs = [
  {
    question: "Eu não sei nada de cripto. Vou acompanhar?",
    answer:
      "Sim. A proposta é começar pela estrutura. Você não precisa chegar sabendo operar, escolher moedas ou configurar carteira.",
  },
  {
    question: "Cripto não é golpe ou pirâmide?",
    answer:
      "Golpes existem em vários mercados. O workshop mostra estrutura, ferramentas e operações para que você entenda o que está fazendo e consiga separar investimento de discurso fácil.",
  },
  {
    question: "Preciso ter muito dinheiro?",
    answer:
      "Não há um capital mínimo informado como condição para aprender. O foco é entender o processo antes de definir quanto faz sentido investir para a sua realidade.",
  },
  {
    question: "Vou precisar ficar o dia inteiro olhando gráfico?",
    answer:
      "Para aprender, você vai entender a lógica manual. O objetivo é saber o que acontece por trás da operação. Depois, tempo e automação entram como um próximo nível possível.",
  },
  {
    question: "Vou ter lucro garantido?",
    answer:
      "Não. Investimento tem risco e o mercado cripto oscila. O foco é estrutura, processo, clareza e disciplina, não promessa de retorno fixo.",
  },
  {
    question: "O workshop fica gravado?",
    answer:
      "O workshop de entrada foi definido para acontecer ao vivo e sem replay. A proposta é acompanhar os três encontros no momento da execução.",
  },
];
