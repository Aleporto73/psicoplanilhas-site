import { assistants } from "@/content/assistants";

export function Assistants() {
  return (
    <section id="assistentes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Recursos inclusos</span>
          <h2>Três assistentes dentro do mesmo acesso vitalício.</h2>
          <p>Apoio complementar para organizar informações e estruturar documentos profissionais.</p>
        </div>

        <div className="report-video-panel">
          <video className="video-player" controls preload="metadata" playsInline aria-label="Demonstração do Assistente de Relatórios">
            <source src="/videos/assistente-relatorios.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
          <div className="report-video-copy">
            <span className="eyebrow">Assistente de Relatórios</span>
            <h2>Veja o apoio à estruturação textual em funcionamento.</h2>
            <p>Acompanhe um exemplo de organização das informações e apoio à redação profissional.</p>
            <p className="professional-copy">
              A análise, a revisão e a responsabilidade pelo documento permanecem com o profissional.
            </p>
          </div>
        </div>

        <div className="assistants-grid">
          {assistants.map((assistant) => (
            <article key={assistant.title} className="assistant-card">
              <span>{assistant.label}</span>
              <h3>{assistant.title}</h3>
              <p>{assistant.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
