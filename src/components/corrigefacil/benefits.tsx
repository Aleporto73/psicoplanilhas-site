import { corrigeFacilBenefits, corrigeFacilTones } from "@/content/corrigefacil";

// Benefícios. Reaproveita .audience-card (o mesmo card de três seções da
// home) e troca só a marca colorida do topo, que cicla pelos pastéis.
//
// A promessa é exatamente a do produto: correção, resultado, gráfico,
// histórico e um fluxo só. Nada de diagnóstico, interpretação automática ou
// substituição do manual.

export function CorrigeFacilBenefits() {
  return (
    <section id="beneficios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">O que muda na rotina</span>
          <h2>A correção deixa de morar em planilhas soltas.</h2>
        </div>

        <div className="audience-grid">
          {corrigeFacilBenefits.map((benefit, i) => (
            <article key={benefit.title} className="audience-card">
              <span
                className={`cf-card-mark cf-tone--${corrigeFacilTones[i % corrigeFacilTones.length]}`}
                aria-hidden="true"
              >
                ✓
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
