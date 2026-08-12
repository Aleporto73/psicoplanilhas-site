import { corrigeFacilFaq } from "@/content/corrigefacil";

// FAQ. Mesmo .faq-grid/.faq-list da home.
//
// A primeira pergunta é a do Relatórios Pro de propósito: é a dúvida que,
// respondida errado, vira pedido de reembolso.

export function CorrigeFacilFaq() {
  return (
    <section id="duvidas" className="section--alt">
      <div className="container faq-grid">
        <div className="section-head section-head--start">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>O que está incluído — e o que não está.</h2>
          <p>
            Transparência sobre o que o CorrigeFácil faz e o que continua sob
            responsabilidade profissional.
          </p>
        </div>

        <div className="faq-list">
          {corrigeFacilFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
