import { audiences } from "@/content/audiences";

export function Audiences() {
  return (
    <section id="para-quem" className="section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Para quem é</span>
          <h2>Feito para profissionais que precisam transformar informação em uma rotina organizada.</h2>
        </div>

        <div className="audience-grid">
          {audiences.map((audience) => (
            <article key={audience.title} className="audience-card">
              <span className="audience-icon" aria-hidden="true">✓</span>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
