import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Audiences } from "@/components/site/audiences";
import { Spreadsheets } from "@/components/site/spreadsheets";
import { HowItWorks } from "@/components/site/how-it-works";
import { Assistants } from "@/components/site/assistants";
import { Testimonials } from "@/components/site/testimonials";
import { Offer } from "@/components/site/offer";
import { Faq } from "@/components/site/faq";
import { Notice } from "@/components/site/notice";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="conteudo">
        <Hero />
        <Audiences />
        <Spreadsheets />
        <HowItWorks />
        <Assistants />
        <Testimonials />
        <Offer />
        <Faq />
        <Notice />
      </main>

      <Footer />
    </>
  );
}
