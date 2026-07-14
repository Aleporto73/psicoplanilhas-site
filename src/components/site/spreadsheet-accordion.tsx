import { spreadsheets } from "@/content/spreadsheets";

type SpreadsheetGroup = {
  letter: string;
  items: readonly string[];
};

function groupSpreadsheets(): SpreadsheetGroup[] {
  const grouped = new Map<string, string[]>();

  for (const spreadsheet of spreadsheets) {
    const letter = spreadsheet.charAt(0).toLocaleUpperCase("pt-BR");
    const current = grouped.get(letter) ?? [];
    current.push(spreadsheet);
    grouped.set(letter, current);
  }

  return Array.from(grouped.entries())
    .sort(([a], [b]) => a.localeCompare(b, "pt-BR"))
    .map(([letter, items]) => ({
      letter,
      items: items.sort((a, b) => a.localeCompare(b, "pt-BR")),
    }));
}

export function SpreadsheetAccordion() {
  const groups = groupSpreadsheets();

  return (
    <section id="planilhas" className="catalog-section" aria-labelledby="catalog-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">Biblioteca completa</span>
          <h2 id="catalog-title">Mais de 100 planilhas incluídas</h2>
          <p>Veja exatamente quais recursos fazem parte do acesso vitalício antes de comprar.</p>
        </div>

        <details className="catalog-accordion">
          <summary>
            <span className="catalog-summary-copy">
              <strong>CLIQUE AQUI PARA VER A RELAÇÃO COMPLETA</strong>
              <small>{spreadsheets.length} planilhas organizadas em ordem alfabética</small>
            </span>
            <span className="catalog-summary-action" aria-hidden="true">
              Ver lista
              <span className="catalog-chevron">⌄</span>
            </span>
          </summary>

          <div className="catalog-content">
            <div className="catalog-intro">
              <strong>Relação completa das planilhas</strong>
              <span>Todos os nomes abaixo estão incluídos no acesso vitalício.</span>
            </div>

            <div className="catalog-groups">
              {groups.map((group) => (
                <section key={group.letter} className="catalog-group" aria-labelledby={`letter-${group.letter}`}>
                  <h3 id={`letter-${group.letter}`}>{group.letter}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <a className="catalog-back" href="#planilhas">Voltar ao início da relação</a>
          </div>
        </details>
      </div>
    </section>
  );
}
