export function Offer({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section id="oferta">
      <div className="container">
        <div className="offer-card">
          <h2>Biblioteca completa e dois assistentes em um único acesso.</h2>

          <ul>
            <li>Mais de 100 planilhas profissionais</li>
            <li>Assistente de Relatórios incluso</li>
            <li>Assistente ABA incluso</li>
            <li>Studio DOC incluso — crie e imprima documentos profissionais</li>
            <li>Pagamento único</li>
            <li>Acesso vitalício</li>
          </ul>

          <div className="offer-price">
            <span>Pagamento único</span>
            <strong><small>R$</small> 97,00</strong>
            <p>Sem mensalidade.</p>
          </div>

          <a className="btn btn--primary" href={checkoutUrl}>Adquirir acesso</a>
          <small className="secure-copy">Pagamento seguro • acesso enviado por e-mail</small>
          <a className="price-login" href="https://app.psicoplanilha.com/login">Já sou cliente</a>
        </div>
      </div>
    </section>
  );
}
