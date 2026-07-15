import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section--alt" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Quem já usa</span>
          <h2 id="testimonials-title">Profissionais que levaram mais praticidade para a rotina.</h2>
          <p>Relatos de quem já usa as planilhas no dia a dia.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="testimonial-card">
              <span>{testimonial.role}</span>
              <p className="testimonial-name">{testimonial.name}</p>
              <blockquote>“{testimonial.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
