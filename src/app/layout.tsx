import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./refinements.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://psicoplanilhas.com"),
  title: {
    default: "PsicoPlanilhas 2.0 | Planilhas profissionais",
    template: "%s | PsicoPlanilhas 2.0",
  },
  description:
    "Mais de 100 planilhas profissionais e três assistentes inclusos para psicologia, psicopedagogia e neuropsicopedagogia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://psicoplanilhas.com",
    siteName: "PsicoPlanilhas 2.0",
    title: "PsicoPlanilhas 2.0 | Planilhas profissionais",
    description:
      "Biblioteca de planilhas profissionais e assistentes inclusos em um único acesso vitalício.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
