import { relatoriosProDisclaimer } from "@/content/corrigefacil";

// Relatórios Pro — SEPARADO da oferta, de propósito.
//
// Vem depois de o funcionamento do CorrigeFácil já ter sido mostrado, e
// antes do bloco de compra. Mostra a continuidade possível do fluxo sem
// deixar o comprador achar que o relatório entra nos R$57: por isso aqui
// não há preço, não há checkout e não há botão de compra — só a informação
// de que o recurso existe e é contratado à parte.
//
// O aviso não é rodapé nem letra miúda: é um bloco com contraste próprio,
// e a mesma informação se repete como primeira pergunta do FAQ.

export function CorrigeFacilReportsPro() {
  return (
    <section id="relatorios-pro" className="section--alt">
      <div className="container">
        <div className="cf-optional">
          <span className="eyebrow">Recurso opcional</span>
          <h2>Quer transformar o resultado em um relatório profissional?</h2>
          <p>
            Depois da correção, você também pode utilizar o Relatórios Pro para gerar um
            relatório completo a partir da avaliação, revisar o texto e salvar em PDF.
          </p>

          <p className="cf-callout">{relatoriosProDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
