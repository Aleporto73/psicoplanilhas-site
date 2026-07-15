export function Hero() {
  return (
    <section id="inicio" className="hero section--lead">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">PsicoPlanilhas 2.0</span>
          <h1>Planilhas profissionais para uma rotina mais prática e organizada.</h1>
          <p className="hero-lead">
            Acesse uma biblioteca de recursos de apoio, agilize cálculos e consulte resultados com mais clareza.
          </p>

          <div className="hero-actions">
            <a className="btn btn--primary" href="#oferta">Comprar acesso vitalício</a>
            <a className="btn btn--ghost" href="#planilhas">Ver todas as planilhas</a>
          </div>

          <p className="hero-proof">
            <span className="hero-stars" aria-hidden="true">★★★★★</span>
            +3.000 profissionais
          </p>
        </div>

        <div className="hero-video-card">
          <video className="video-player" controls preload="metadata" playsInline aria-label="Demonstração da plataforma PsicoPlanilhas">
            <source src="/videos/apresentacao-plataforma.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
