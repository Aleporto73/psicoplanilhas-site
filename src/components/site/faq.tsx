import { faqItems } from "@/content/faq";

export function Faq() {
  return (
    <section id="duvidas" className="section--alt">
      <div className="container faq-grid">
        <div className="section-head section-head--start">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Informações importantes antes da compra.</h2>
          <p>Transparência sobre o que as planilhas e os assistentes fazem — e o que continua sob responsabilidade profissional.</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
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
