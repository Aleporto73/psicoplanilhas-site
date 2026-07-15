export function Header() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand brand--clean" href="#inicio" aria-label="PsicoPlanilhas 2.0 - início">
            <strong>PsicoPlanilhas 2.0</strong>
            <small>Biblioteca profissional</small>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#para-quem">Para quem é</a>
            <a href="#planilhas">Planilhas</a>
            <a href="#assistentes">Assistentes</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <a className="btn btn--ghost" href="https://app.psicoplanilha.com/login">
            Acessar plataforma
          </a>
        </div>
      </header>
    </>
  );
}
