// Dados da landing do CorrigeFácil (/corrigefacil). Só conteúdo — a marcação
// fica nos componentes de src/components/corrigefacil/.
//
// Preço, checkout, vídeo e catálogo moram AQUI e só aqui: a página não pode
// espalhar esses três valores por vários componentes, senão trocar o checkout
// vira uma caça a strings.
//
// Página estática: sem API, sem Supabase, sem Payment dinâmico.

import type { FaqItem } from "./types";

export const corrigeFacilPrice = "R$ 57,00";

/** Checkout do CorrigeFácil. NÃO é o checkout de R$97 da home — são produtos
 *  diferentes, com product/price próprios. */
export const corrigeFacilCheckoutUrl =
  "https://www.payment.eng.br/checkout?product=CXMVG9JG&price=9AQ9A3RY";

/** Já versionado em main. A página só aponta para ele. */
export const corrigeFacilVideoUrl = "/videos/corrigefacil-demo.mp4";

export const appLoginUrl = "https://app.psicoplanilha.com/login";

/** Catálogo atual: 20 instrumentos, em ordem alfabética pelo CÓDIGO.
 *
 *  A ordem está escrita, não calculada. `localeCompare` em pt-BR trata
 *  hífen e underscore como separadores ignoráveis no nível primário e
 *  reordenaria a lista (C-TRF_1.5-5 cairia depois de CES-D). Ordenar aqui
 *  daria uma ordem diferente da conferida. Para incluir um instrumento:
 *  insira na posição certa da lista. */
export const corrigeFacilInstruments = [
  "BAYLEY-III",
  "BPA-2",
  "C-TRF_1.5-5",
  "CES-D",
  "CHECK-DIS",
  "CONFIAS",
  "DASS-21",
  "DCDQ",
  "EPQ-J",
  "ERA-A",
  "ERA-F",
  "ETPC",
  "PHQ-9",
  "QA-ADULTO",
  "SCARED-C",
  "SDQ-POR",
  "SNAP-IV-18",
  "SNAP-IV-26",
  "TRACO-ANSIEDADE",
  "TRILHAS_PRE",
] as const;

/** Os 6 pastéis oficiais do PsicoPlanilhas 2.0, na ordem em que se repetem
 *  pelos badges. É recurso VISUAL: nenhuma cor classifica, agrupa ou
 *  qualifica instrumento — por isso o código é sempre lido como texto, e
 *  nenhuma legenda de cor existe na página. */
export const corrigeFacilTones = [
  "lime",
  "lilac",
  "cream",
  "mint",
  "coral",
  "pink",
] as const;

export const corrigeFacilBenefits = [
  {
    title: "Correção dentro da plataforma",
    text: "Preencha as informações necessárias para cada instrumento e faça a correção sem depender de planilhas separadas.",
  },
  {
    title: "Resultado organizado",
    text: "Consulte pontuações e classificações apresentadas de forma clara.",
  },
  {
    title: "Gráficos",
    text: "Visualize o resultado também de forma gráfica para facilitar a leitura.",
  },
  {
    title: "Histórico",
    text: "Mantenha as avaliações realizadas organizadas e disponíveis para consulta.",
  },
  {
    title: "Um fluxo só",
    text: "Escolha o instrumento, faça a correção e consulte o resultado dentro do mesmo ambiente.",
  },
] as const;

export const corrigeFacilSteps = [
  "Escolha o instrumento",
  "Preencha os dados solicitados",
  "Gere o resultado e visualize o gráfico",
  "Consulte depois pelo histórico",
] as const;

export const corrigeFacilOfferItems = [
  "20 instrumentos disponíveis",
  "Resultados e classificações organizados",
  "Gráficos",
  "Histórico das avaliações",
  "Acesso dentro da plataforma",
  "Pagamento único",
  "Acesso vitalício",
] as const;

/** Aviso de não inclusão do Relatórios Pro. Aparece na seção do recurso
 *  opcional E é a resposta da primeira pergunta do FAQ — o comprador não
 *  pode sair desta página achando que o relatório entra nos R$57. */
export const relatoriosProDisclaimer =
  "Relatórios Pro é um recurso opcional, contratado à parte. Não está incluído no valor do CorrigeFácil.";

export const corrigeFacilFaq: FaqItem[] = [
  {
    question: "O Relatórios Pro está incluído no CorrigeFácil?",
    answer:
      "Não. O Relatórios Pro é um recurso opcional, contratado à parte. A compra do CorrigeFácil não inclui a geração de Relatórios Pro.",
  },
  {
    question: "O CorrigeFácil substitui o manual do instrumento?",
    answer:
      "Não. O CorrigeFácil é uma ferramenta de apoio à correção e organização dos resultados. A aplicação, os critérios técnicos e a interpretação continuam sob responsabilidade do profissional.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer: "Não. O CorrigeFácil é utilizado dentro da plataforma PsicoPlanilhas.",
  },
  {
    question: "Quais instrumentos estão disponíveis?",
    answer:
      "Os 20 instrumentos exibidos nesta página correspondem ao catálogo atual do CorrigeFácil.",
  },
];
