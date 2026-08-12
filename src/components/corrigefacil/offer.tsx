import {
  appLoginUrl,
  corrigeFacilCheckoutUrl,
  corrigeFacilOfferItems,
  corrigeFacilPrice,
} from "@/content/corrigefacil";

// Oferta. Reaproveita o .offer-card da home — o único ponto escuro da
// página, que é justamente o que dá peso comercial ao bloco.
//
// Preço e checkout vêm de src/content/corrigefacil.ts. O checkout do
// CorrigeFácil é PRÓPRIO: não é o de R$97 da home.

export function CorrigeFacilOffer() {
  return (
    <section id="oferta">
      <div className="container">
        <div className="offer-card">
          <h2>Tenha o CorrigeFácil dentro do PsicoPlanilhas.</h2>

          <ul>
            {corrigeFacilOfferItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="offer-price">
            <span>Acesso vitalício</span>
            <strong>{corrigeFacilPrice}</strong>
            <p>Pagamento único · sem mensalidade</p>
          </div>

          <a className="btn btn--primary" href={corrigeFacilCheckoutUrl}>
            Quero o CorrigeFácil
          </a>
          <small className="secure-copy">Você será levado ao checkout seguro.</small>
          <a className="price-login" href={appLoginUrl}>
            Já sou cliente
          </a>
        </div>
      </div>
    </section>
  );
}
