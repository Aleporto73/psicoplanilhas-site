import { corrigeFacilCheckoutUrl, corrigeFacilPrice } from "@/content/corrigefacil";

// Hero: copy à esquerda, cartão de preço em pastel à direita.
//
// O cartão existe para o preço não ficar solto no meio do texto e para os
// pastéis da plataforma entrarem já na primeira dobra. O vídeo NÃO fica
// aqui — ele tem seção própria, e o CTA secundário leva até ela.
//
// Nada de Relatórios Pro nesta dobra: o que está à venda aqui são os R$57
// do CorrigeFácil.

export function CorrigeFacilHero() {
  return (
    <section id="inicio" className="hero cf-hero section--lead">
      <div className="container cf-hero-grid">
        <div>
          <span className="eyebrow">CorrigeFácil</span>
          <h1>Corrija instrumentos. Visualize resultados. Organize tudo em um só lugar.</h1>
          <p className="hero-lead cf-hero-lead">
            O CorrigeFácil leva a correção para dentro do PsicoPlanilhas. Preencha os
            dados da aplicação e visualize o resultado organizado, com classificação,
            gráfico e histórico para consulta.
          </p>
          <p className="cf-hero-highlight">21 instrumentos disponíveis no catálogo atual.</p>
        </div>

        <div className="cf-price-card">
          <span className="cf-price-label">Acesso vitalício</span>
          <strong className="cf-price-value">{corrigeFacilPrice}</strong>
          <p className="cf-price-note">Pagamento único · acesso vitalício</p>

          <div className="cf-price-actions">
            <a className="btn btn--primary" href={corrigeFacilCheckoutUrl}>
              Quero o CorrigeFácil
            </a>
            <a className="btn btn--ghost" href="#demonstracao">
              Ver como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
