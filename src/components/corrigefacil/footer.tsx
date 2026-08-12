import Link from "next/link";
import { appLoginUrl } from "@/content/corrigefacil";

// Aviso final + rodapé da rota.
//
// Rodapé próprio pelo mesmo motivo do header: o da home aponta para
// #planilhas, âncora que não existe aqui. As classes são as mesmas — muda
// só o destino dos links.

export function CorrigeFacilNotice() {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="professional-notice">
          <strong>Aviso de uso responsável</strong>
          <p>
            O CorrigeFácil é uma ferramenta de apoio à correção e organização de
            resultados. Não substitui avaliação profissional, critérios técnicos de
            aplicação, manual do instrumento ou interpretação clínica.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CorrigeFacilFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>PsicoPlanilhas 2.0</strong>
          <p>CorrigeFácil — correção de instrumentos dentro da plataforma.</p>
          <p>Psiform Tecnologia LTDA • CNPJ 47.854.933/0001-00</p>
          <p>
            <a href="mailto:contato@psicoplanilha.com">contato@psicoplanilha.com</a>
          </p>
        </div>
        <div className="footer-links">
          <Link href="/">PsicoPlanilhas</Link>
          <a href="#instrumentos">Instrumentos</a>
          <a href="#duvidas">Dúvidas</a>
          <a href={appLoginUrl}>Acessar plataforma</a>
        </div>
        <small>© {new Date().getFullYear()} psicoplanilha.com — Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
