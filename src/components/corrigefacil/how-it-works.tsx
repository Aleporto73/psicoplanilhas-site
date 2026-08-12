import { corrigeFacilSteps } from "@/content/corrigefacil";

// Como funciona. Mesma .steps-list da home (números serifados grandes),
// com os números em petróleo em vez do cinza apagado — é a seção que
// explica o produto, não um detalhe de rodapé.

export function CorrigeFacilHowItWorks() {
  return (
    <section id="como-funciona" className="section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Como funciona</span>
          <h2>Da aplicação ao resultado, sem complicação.</h2>
        </div>

        <ol className="steps-list cf-steps">
          {corrigeFacilSteps.map((step, i) => (
            <li key={step}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <strong>{step}</strong>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
