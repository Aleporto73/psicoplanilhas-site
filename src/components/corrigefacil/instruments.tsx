import { corrigeFacilInstruments, corrigeFacilTones } from "@/content/corrigefacil";

// Catálogo completo.
//
// Os 21 aparecem de uma vez, em wrap: sem "ver mais", sem carrossel, sem
// paginação, sem acordeão. Quem chega aqui está decidindo a compra e a
// pergunta é uma só — "o meu instrumento está na lista?". Qualquer coisa
// que esconda parte da lista transforma essa pergunta em trabalho.
//
// A cor do badge é decorativa e cicla pelos 6 pastéis: NÃO agrupa, NÃO
// classifica e NÃO significa nada. Por isso o código é sempre texto legível
// dentro do badge e não existe legenda de cores na página.

export function CorrigeFacilInstruments() {
  return (
    <section id="instrumentos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Catálogo atual</span>
          <h2>Instrumentos disponíveis no CorrigeFácil</h2>
          <p>
            O catálogo atual reúne {corrigeFacilInstruments.length} instrumentos
            disponíveis para correção na plataforma.
          </p>
        </div>

        <ul className="cf-chips">
          {corrigeFacilInstruments.map((code, i) => (
            <li
              key={code}
              className={`cf-chip cf-tone--${corrigeFacilTones[i % corrigeFacilTones.length]}`}
            >
              {code}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
