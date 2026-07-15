"use client";

export default function AjudaPage() {
  return (
    <>
      <style>{`
        .ajuda * { margin: 0; padding: 0; box-sizing: border-box; }
        .ajuda { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #fafafa; color: #2c3e50; line-height: 1.6; }
        .ajuda .container { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; }
        .ajuda header { text-align: center; margin-bottom: 3rem; padding: 3rem 0; background: #ffffff; border-bottom: 2px solid #2c3e50; }
        .ajuda h1 { font-size: 42px; margin-bottom: 0.75rem; font-weight: 700; color: #1a2847; letter-spacing: -0.5px; }
        .ajuda .subtitle { font-size: 16px; color: #7f8c8d; font-weight: 400; }
        .ajuda .section { margin-bottom: 4rem; }
        .ajuda .section-title { font-size: 28px; color: #1a2847; margin-bottom: 2rem; font-weight: 700; padding-bottom: 1rem; border-bottom: 1px solid #ecf0f1; letter-spacing: -0.3px; }
        .ajuda .videos { display: flex; justify-content: center; }
        .ajuda .video-card { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: box-shadow 0.3s; max-width: 640px; width: 100%; }
        .ajuda .video-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
        .ajuda .video-card h3 { font-size: 17px; color: #1a2847; margin-bottom: 1rem; font-weight: 600; padding: 1.5rem 1.5rem 0; }
        .ajuda .video-embed-wrapper { padding: 1.5rem; padding-top: 0; }
        .ajuda .video-embed { width: 100%; aspect-ratio: 16/9; border: none; display: block; border-radius: 4px; }
        .ajuda .products { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .ajuda .product-card { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: box-shadow 0.3s; display: flex; flex-direction: column; height: 100%; }
        .ajuda .product-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
        .ajuda .product-image { height: 220px; background: #f9f9f9; display: flex; align-items: center; justify-content: center; overflow: hidden; border-bottom: 1px solid #ecf0f1; }
        .ajuda .product-image img { width: 100%; height: 100%; object-fit: contain; padding: 1.5rem; }
        .ajuda .product-content { padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; }
        .ajuda .product-card h3 { font-size: 17px; color: #1a2847; margin-bottom: 0.75rem; font-weight: 600; }
        .ajuda .product-card p { font-size: 14px; color: #555; line-height: 1.6; flex-grow: 1; margin-bottom: 1.25rem; }
        .ajuda .btn { display: inline-block; padding: 11px 18px; background: #2c3e50; color: white; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: 600; border: none; cursor: pointer; text-align: center; transition: all 0.3s; align-self: flex-start; text-transform: uppercase; letter-spacing: 0.5px; }
        .ajuda .btn:hover { background: #1a2847; }
        .ajuda .contato-ana { background: white; padding: 3rem 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center; }
        .ajuda .contato-ana h2 { font-size: 24px; color: #1a2847; margin-bottom: 1rem; font-weight: 700; }
        .ajuda .contato-ana p { font-size: 15px; color: #555; max-width: 560px; margin: 0 auto 2rem; line-height: 1.6; }
        .ajuda .btn-whatsapp { display: inline-flex; align-items: center; gap: 0.6rem; padding: 14px 28px; background: #25d366; color: white; text-decoration: none; border-radius: 50px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s; }
        .ajuda .btn-whatsapp:hover { background: #1eaa50; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3); }
        .ajuda .btn-whatsapp svg { width: 20px; height: 20px; fill: white; }
        .ajuda .telefone { display: block; margin-top: 1rem; font-size: 14px; color: #7f8c8d; }
        @media (max-width: 1200px) { .ajuda .products { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
            .ajuda .container { padding: 1rem; }
            .ajuda header { padding: 2rem 1rem; margin-bottom: 2rem; }
            .ajuda h1 { font-size: 28px; }
            .ajuda .subtitle { font-size: 14px; }
            .ajuda .section-title { font-size: 22px; margin-bottom: 1.5rem; }
            .ajuda .products { grid-template-columns: 1fr; }
            .ajuda .contato-ana { padding: 2rem 1.5rem; }
        }
      `}</style>
      <div className="ajuda">
        <div className="container">
          <header>
            <h1>PsicoPlanilhas</h1>
            <p className="subtitle">Ajuda &amp; Recursos</p>
          </header>

          <section className="section">
            <h2 className="section-title">Tutorial</h2>
            <div className="videos">
              <div className="video-card">
                <h3>Como Utilizar o Assistente</h3>
                <div className="video-embed-wrapper">
                  <iframe
                    className="video-embed"
                    src="https://www.youtube.com/embed/yBaiT8eidLI"
                    title="Como Utilizar o Assistente"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Produtos e Servi&ccedil;os</h2>
            <div className="products">
              <div className="product-card">
                <div className="product-image">
                  <img src="/legacy/PsicoBOOK-1.png" alt="PsicoBook PEI" />
                </div>
                <div className="product-content">
                  <h3>PsicoBook PEI</h3>
                  <p>Sistema de Elabora&ccedil;&atilde;o e Acompanhamento PEI e AEE com relat&oacute;rios autom&aacute;ticos.</p>
                  <a href="https://psicobook.com.br" target="_blank" rel="noopener noreferrer" className="btn">Conhecer Mais</a>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="/legacy/ABA-4.png" alt="ABA Simples" />
                </div>
                <div className="product-content">
                  <h3>ABA Simples</h3>
                  <p>Plataforma completa de ABA com avalia&ccedil;&otilde;es, programas e relat&oacute;rios integrados.</p>
                  <a href="https://abasimples.com.br/" target="_blank" rel="noopener noreferrer" className="btn">Conhecer Mais</a>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="/legacy/neurorastreio-1.png" alt="Neurorastreio" />
                </div>
                <div className="product-content">
                  <h3>Neurorastreio</h3>
                  <p>Rastreio neurocognitivo infantil em 15 minutos com 6 instrumentos validados.</p>
                  <a href="https://neurorastreio.com.br/" target="_blank" rel="noopener noreferrer" className="btn">Conhecer Mais</a>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="/legacy/TCC-3.png" alt="AXIS TCC" />
                </div>
                <div className="product-content">
                  <h3>AXIS TCC</h3>
                  <p>Organiza&ccedil;&atilde;o cl&iacute;nica para psic&oacute;logos com transcri&ccedil;&atilde;o autom&aacute;tica e relat&oacute;rios.</p>
                  <a href="https://axisclinico.com/produto/tcc" target="_blank" rel="noopener noreferrer" className="btn">Conhecer Mais</a>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="contato-ana">
              <h2>Fale com a Ana</h2>
              <p>Tem uma ideia para melhorar as PsicoPlanilhas? Sentiu falta de algum recurso? Manda pra Ana — a gente adora ouvir sugest&otilde;es de quem usa no dia a dia.</p>
              <a href="https://wa.me/5511992367278?text=Oi%20Ana!%20Tenho%20uma%20sugestão%20para%20as%20PsicoPlanilhas" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Fale com a Ana
              </a>
              <span className="telefone">(11) 99236-7278</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
