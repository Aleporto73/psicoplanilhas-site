import { appLoginUrl } from "@/content/corrigefacil";

// Header próprio da rota /corrigefacil.
//
// Não é o Header da home com outros links: aquele componente é da página
// única e seus âncoras (#para-quem, #planilhas) não existem aqui. Reutiliza
// as MESMAS classes (.site-header, .brand--clean, .main-nav) — a identidade
// vem do CSS compartilhado, não de marcação duplicada.

export function CorrigeFacilHeader() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo principal
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand brand--clean"
            href="#inicio"
            aria-label="PsicoPlanilhas 2.0 CorrigeFácil — início"
          >
            <strong>PsicoPlanilhas 2.0</strong>
            <small>CorrigeFácil</small>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#instrumentos">Instrumentos</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <a className="btn btn--ghost" href={appLoginUrl}>
            Acessar plataforma
          </a>
        </div>
      </header>
    </>
  );
}
