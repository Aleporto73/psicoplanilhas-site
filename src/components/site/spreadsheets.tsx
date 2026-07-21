import { SpreadsheetAccordion } from "./spreadsheet-accordion";
import { SpreadsheetCarousel } from "./spreadsheet-carousel";

export function Spreadsheets() {
  return (
    <section id="planilhas" aria-labelledby="catalog-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Biblioteca completa</span>
          <h2 id="catalog-title">Mais de 100 planilhas incluídas</h2>
          <p>Veja exatamente quais recursos fazem parte do acesso vitalício antes de comprar.</p>
        </div>

        <SpreadsheetCarousel />

        <div className="sheet-models">
          <p className="sheet-models-title">Conheça algumas planilhas antes de comprar</p>
          <p className="sheet-models-sub">Clique em um dos botões abaixo para abrir um exemplo real.</p>
          <div className="sheet-models-actions">
            <a
              className="btn btn--primary"
              href="https://docs.google.com/spreadsheets/d/1eCE25s7O0IibIAX4PvhiWVvg83SXDRfvcf5O0dkNPlU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver exemplo de Psicologia
            </a>
            <a
              className="btn btn--primary"
              href="https://docs.google.com/spreadsheets/d/139MGeslje1xoW3CZ3pU8bSCvgBBUghrFk9R9g5jzVuc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver exemplo de Psicopedagogia
            </a>
          </div>
        </div>

        <SpreadsheetAccordion />
      </div>
    </section>
  );
}
