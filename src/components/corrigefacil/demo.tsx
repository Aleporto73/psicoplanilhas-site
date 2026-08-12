import { corrigeFacilVideoUrl } from "@/content/corrigefacil";

// Demonstração. Sem autoplay: o vídeo tem áudio e a página é de venda —
// vídeo que começa sozinho é motivo de saída, não de conversão.
//
// `preload="metadata"` baixa só o cabeçalho (duração/dimensões) até alguém
// dar play; o arquivo tem ~9 MB e não pode entrar no custo de abrir a página.

export function CorrigeFacilDemo() {
  return (
    <section id="demonstracao" className="section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Demonstração</span>
          <h2>Veja o CorrigeFácil funcionando</h2>
          <p>Uma demonstração rápida do fluxo, da aplicação ao resultado.</p>
        </div>

        <div className="report-video-panel cf-video-panel">
          <video
            className="video-player"
            controls
            preload="metadata"
            playsInline
            aria-label="Demonstração do CorrigeFácil: da escolha do instrumento ao resultado com gráfico"
          >
            <source src={corrigeFacilVideoUrl} type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo. A demonstração mostra a
            escolha do instrumento, o preenchimento dos dados da aplicação e o resultado
            com classificação, gráfico e histórico.
          </video>
        </div>
      </div>
    </section>
  );
}
