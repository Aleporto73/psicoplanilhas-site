export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>PsicoPlanilhas 2.0</strong>
          <p>Planilhas profissionais e assistentes inclusos para apoiar uma rotina mais organizada.</p>
          <p>Psiform Tecnologia LTDA • CNPJ 47.854.933/0001-00</p>
          <p><a href="mailto:contato@psicoplanilha.com">contato@psicoplanilha.com</a></p>
        </div>
        <div className="footer-links">
          <a href="#planilhas">Planilhas</a>
          <a href="#assistentes">Assistentes</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="https://app.psicoplanilha.com/login">Acessar plataforma</a>
        </div>
        <small>© {new Date().getFullYear()} psicoplanilhas.com — Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
