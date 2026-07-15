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
    <div className="catalog-groups">
      {groups.map((group) => (
        <details key={group.letter} className="catalog-group">
          <summary>
            <span className="catalog-letter">{group.letter}</span>
            <span className="catalog-count">{group.items.length}</span>
            <span className="catalog-chevron" aria-hidden="true">⌄</span>
          </summary>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
