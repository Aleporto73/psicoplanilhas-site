import type { Metadata } from "next";
import { CorrigeFacilHeader } from "@/components/corrigefacil/header";
import { CorrigeFacilHero } from "@/components/corrigefacil/hero";
import { CorrigeFacilDemo } from "@/components/corrigefacil/demo";
import { CorrigeFacilBenefits } from "@/components/corrigefacil/benefits";
import { CorrigeFacilHowItWorks } from "@/components/corrigefacil/how-it-works";
import { CorrigeFacilInstruments } from "@/components/corrigefacil/instruments";
import { CorrigeFacilReportsPro } from "@/components/corrigefacil/reports-pro";
import { CorrigeFacilOffer } from "@/components/corrigefacil/offer";
import { CorrigeFacilFaq } from "@/components/corrigefacil/faq";
import { CorrigeFacilFooter, CorrigeFacilNotice } from "@/components/corrigefacil/footer";

// `absolute` porque o layout aplica o template "%s | PsicoPlanilhas 2.0",
// e o título desta rota já traz o nome da plataforma.
export const metadata: Metadata = {
  title: {
    absolute: "CorrigeFácil | Correção de instrumentos no PsicoPlanilhas",
  },
  description:
    "Corrija instrumentos, visualize resultados e gráficos e mantenha suas avaliações organizadas dentro do PsicoPlanilhas.",
  alternates: {
    canonical: "/corrigefacil",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://psicoplanilha.com/corrigefacil",
    siteName: "PsicoPlanilhas 2.0",
    title: "CorrigeFácil | Correção de instrumentos no PsicoPlanilhas",
    description:
      "Corrija instrumentos, visualize resultados e gráficos e mantenha suas avaliações organizadas dentro do PsicoPlanilhas.",
  },
};

// `.cf-page` é o escopo de TODA a identidade desta rota: é nele que os
// pastéis e a tinta da plataforma são declarados. Fora deste wrapper nada
// muda — a home continua com os tokens dela.
//
// O wrapper não quebra `main > section` (o seletor de ritmo do site), porque
// as seções continuam sendo filhas diretas de <main>.
export default function CorrigeFacilPage() {
  return (
    <div className="cf-page">
      <CorrigeFacilHeader />

      <main id="conteudo">
        <CorrigeFacilHero />
        <CorrigeFacilDemo />
        <CorrigeFacilBenefits />
        <CorrigeFacilHowItWorks />
        <CorrigeFacilInstruments />
        <CorrigeFacilReportsPro />
        <CorrigeFacilOffer />
        <CorrigeFacilFaq />
        <CorrigeFacilNotice />
      </main>

      <CorrigeFacilFooter />
    </div>
  );
}
