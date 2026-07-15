import { SpreadsheetAccordion } from "./spreadsheet-accordion";

export function Spreadsheets() {
  return (
    <section id="planilhas" aria-labelledby="catalog-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Biblioteca completa</span>
          <h2 id="catalog-title">Mais de 100 planilhas incluídas</h2>
          <p>Veja exatamente quais recursos fazem parte do acesso vitalício antes de comprar.</p>
        </div>

        <SpreadsheetAccordion />
      </div>
    </section>
  );
}
