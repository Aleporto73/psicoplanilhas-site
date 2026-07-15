import { docStudioBenefits, docStudioSteps, docStudioProfessions } from "@/content/doc-studio";

export function DocStudio() {
  return (
    <section id="doc-studio" className="section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Bônus incluído</span>
          <h2>Studio DOC: crie e imprima seus documentos.</h2>
          <p>
            Ferramenta completa para montar, preencher e imprimir documentos profissionais —
            incluída no seu acesso vitalício, sem custo extra.
          </p>
        </div>

        <div className="report-video-panel">
          <video
            className="video-player"
            controls
            preload="metadata"
            playsInline
            poster="/videos/doc-studio-poster.png"
            aria-label="Demonstração do Studio DOC"
          >
            <source src="/videos/doc-studio-demo.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </div>

        <div className="audience-grid">
          {docStudioBenefits.map((benefit) => (
            <article key={benefit.title} className="audience-card">
              <span className="audience-icon" aria-hidden="true">✓</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className="catalog-groups">
          {docStudioProfessions.map((profession) => (
            <details key={profession.name} className="catalog-group">
              <summary>
                <span className="catalog-letter catalog-letter--name">{profession.name}</span>
                <span className="catalog-count">
                  {profession.modelos.length + profession.instrumentos.length} documentos
                </span>
                <span className="catalog-chevron" aria-hidden="true">⌄</span>
              </summary>
              <p className="docstudio-sublabel">Modelos</p>
              <ul>
                {profession.modelos.map((modelo, i) => (
                  <li key={`m-${i}-${modelo}`}>{modelo}</li>
                ))}
              </ul>
              <p className="docstudio-sublabel">Instrumentos</p>
              <ul>
                {profession.instrumentos.map((instrumento, i) => (
                  <li key={`i-${i}-${instrumento}`}>{instrumento}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <ol className="steps-list docstudio-steps">
          {docStudioSteps.map((step, i) => (
            <li key={step}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div><strong>{step}</strong></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
