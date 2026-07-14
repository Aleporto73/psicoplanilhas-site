import { SpreadsheetAccordion } from "@/components/site/spreadsheet-accordion";

const checkoutUrl =
  "https://www.payment.eng.br/checkout?price=3FKRHT7N&product=N96CYS7N";

const audiences = [
  {
    title: "Psicologia",
    text: "Organize dados, acompanhe resultados e estruture documentos profissionais com mais clareza.",
  },
  {
    title: "Psicopedagogia",
    text: "Acompanhe aprendizagem, desenvolvimento e intervenção com recursos práticos para sua rotina.",
  },
  {
    title: "Neuropsicopedagogia",
    text: "Reúna informações de avaliação e acompanhamento em uma biblioteca organizada e fácil de consultar.",
  },
];

const assistants = [
  {
    label: "Relatórios",
    title: "Assistente de Relatórios",
    text: "Apoio para organizar informações e estruturar textos profissionais com mais clareza.",
  },
  {
    label: "Prática ABA",
    title: "Assistente ABA",
    text: "Apoio para avaliação funcional, planejamento de intervenção e organização de informações da prática ABA.",
  },
  {
    label: "Documentação",
    title: "Assistente Laudos",
    text: "Apoio à estruturação das seções do laudo psicológico conforme a Resolução CFP nº 06/2019.",
    note: "Uso exclusivo por psicólogas e psicólogos.",
  },
];

const testimonials = [
  {
    title: "Mais agilidade na rotina",
    text: "As planilhas facilitaram muito meu dia a dia. Consigo organizar as informações e consultar os resultados com muito mais praticidade.",
    name: "Marília Vargas",
    role: "Psicopedagoga",
  },
  {
    title: "Tudo reunido em um só lugar",
    text: "Antes eu precisava procurar materiais em várias pastas. Agora encontro as planilhas rapidamente e consigo manter minha rotina mais organizada.",
    name: "Daniela Santos",
    role: "Psicopedagoga",
  },
  {
    title: "Apoio para estruturar relatórios",
    text: "O Assistente de Relatórios ajuda a organizar as informações e oferece um ótimo ponto de partida para a redação e revisão profissional.",
    name: "Carla Ribeiro",
    role: "Psicóloga",
  },
  {
    title: "Excelente custo-benefício",
    text: "A biblioteca é ampla, os materiais são fáceis de acessar e o pagamento único tornou a solução muito vantajosa para minha rotina.",
    name: "Regina L.",
    role: "Psicopedagoga",
  },
];

const faqItems = [
  {
    question: "As planilhas substituem instrumentos ou manuais?",
    answer:
      "Não. São recursos de apoio operacional para organização, cálculo e visualização. O uso correto exige o instrumento e o manual original, quando aplicáveis.",
  },
  {
    question: "Os assistentes realizam diagnósticos?",
    answer:
      "Não. Eles apoiam a organização e a estruturação textual. A avaliação, a interpretação e a responsabilidade técnica permanecem com o profissional.",
  },
  {
    question: "Quem pode utilizar o Assistente Laudos?",
    answer:
      "O Assistente Laudos é destinado exclusivamente a psicólogas e psicólogos, pois o laudo psicológico é documento privativo da profissão.",
  },
  {
    question: "O acesso é vitalício?",
    answer:
      "Sim. O pagamento é único e libera o acesso vitalício à biblioteca e aos três assistentes inclusos nesta oferta.",
  },
  {
    question: "Como recebo meu acesso?",
    answer:
      "Após a confirmação do pagamento, as instruções de acesso são enviadas para o e-mail informado na compra.",
  },
  {
    question: "Onde as planilhas são utilizadas?",
    answer:
      "As planilhas são acessadas pela plataforma e copiadas para o Google Planilhas. Cada profissional utiliza sua própria cópia no Google Drive.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand brand--clean" href="#inicio" aria-label="PsicoPlanilhas 2.0 - início">
            <strong>PsicoPlanilhas 2.0</strong>
            <small>Biblioteca profissional</small>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#para-quem">Para quem é</a>
            <a href="#planilhas">Planilhas</a>
            <a href="#assistentes">Assistentes</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <a className="button button--small button--outline" href="https://app.psicoplanilha.com/login">
            Acessar plataforma
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">PsicoPlanilhas 2.0</span>
              <h1>Planilhas profissionais para uma rotina mais prática e organizada.</h1>
              <p className="hero-lead">
                Acesse uma biblioteca de recursos de apoio, agilize cálculos e consulte resultados com mais clareza.
              </p>
              <p className="hero-included">
                Assistentes de Relatórios, ABA e Laudos inclusos no acesso vitalício.
              </p>

              <div className="hero-actions">
                <a className="button button--primary" href="#planilhas">Ver todas as planilhas</a>
                <a className="button button--secondary" href="#oferta">Comprar acesso vitalício</a>
              </div>

              <div className="hero-proof" aria-label="Resumo da oferta">
                <span><strong>+100</strong> planilhas</span>
                <span><strong>3</strong> assistentes inclusos</span>
                <span><strong>1x</strong> pagamento</span>
              </div>
            </div>

            <div className="hero-video-card">
              <div className="video-label">
                <span>Demonstração real</span>
                <strong>Veja a plataforma funcionando</strong>
              </div>
              <video className="video-player" controls preload="metadata" playsInline aria-label="Demonstração da plataforma PsicoPlanilhas">
                <source src="/videos/apresentacao-plataforma.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
              <p>Biblioteca, busca e acesso às planilhas em menos de um minuto.</p>
            </div>
          </div>
        </section>

        <section id="para-quem" className="audience-section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="eyebrow">Para quem é</span>
              <h2>Feito para profissionais que precisam transformar informação em uma rotina organizada.</h2>
            </div>

            <div className="audience-grid">
              {audiences.map((audience) => (
                <article key={audience.title} className="audience-card">
                  <span className="audience-icon" aria-hidden="true">✓</span>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SpreadsheetAccordion />

        <section id="como-funciona" className="steps-section">
          <div className="container">
            <div className="steps-panel">
              <div className="section-heading">
                <span className="eyebrow">Como funciona</span>
                <h2>Da compra ao uso na sua rotina.</h2>
              </div>

              <ol className="steps-list">
                <li><span>01</span><div><strong>Compre</strong><p>Finalize o pagamento único pelo checkout seguro.</p></div></li>
                <li><span>02</span><div><strong>Receba o acesso</strong><p>As instruções são enviadas para o e-mail informado.</p></div></li>
                <li><span>03</span><div><strong>Escolha e copie</strong><p>Selecione a planilha e crie sua própria cópia de trabalho.</p></div></li>
                <li><span>04</span><div><strong>Use quando precisar</strong><p>Sua cópia fica no Google Drive para consultas futuras.</p></div></li>
              </ol>
            </div>
          </div>
        </section>

        <section id="assistentes" className="assistants-section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="eyebrow">Recursos inclusos</span>
              <h2>Três assistentes dentro do mesmo acesso vitalício.</h2>
              <p>Apoio complementar para organizar informações e estruturar documentos profissionais.</p>
            </div>

            <div className="assistants-grid">
              {assistants.map((assistant) => (
                <article key={assistant.title} className="assistant-card">
                  <span>{assistant.label}</span>
                  <h3>{assistant.title}</h3>
                  <p>{assistant.text}</p>
                  {assistant.note ? <strong className="assistant-note">{assistant.note}</strong> : null}
                </article>
              ))}
            </div>

            <div className="report-video-panel">
              <div className="report-video-copy">
                <span className="eyebrow">Assistente de Relatórios</span>
                <h2>Veja o apoio à estruturação textual em funcionamento.</h2>
                <p>Acompanhe um exemplo de organização das informações e apoio à redação profissional.</p>
                <p className="professional-copy">
                  A análise, a revisão e a responsabilidade pelo documento permanecem com o profissional.
                </p>
              </div>

              <video className="video-player" controls preload="metadata" playsInline aria-label="Demonstração do Assistente de Relatórios">
                <source src="/videos/assistente-relatorios.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
          </div>
        </section>

        <section className="testimonials-section" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="eyebrow">Quem já usa</span>
              <h2 id="testimonials-title">Profissionais que levaram mais praticidade para a rotina.</h2>
              <p>Relatos de clientes sobre organização, acesso e uso das planilhas no dia a dia.</p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="testimonial-card">
                  <div className="testimonial-stars" aria-label="5 de 5 estrelas">★★★★★</div>
                  <blockquote>
                    <strong>{testimonial.title}</strong>
                    <p>“{testimonial.text}”</p>
                  </blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta" className="offer-section">
          <div className="container">
            <div className="offer-card">
              <div className="offer-copy">
                <span className="eyebrow eyebrow--light">Acesso vitalício</span>
                <h2>Biblioteca completa e três assistentes em um único acesso.</h2>
                <ul>
                  <li>Mais de 100 planilhas profissionais</li>
                  <li>Assistente de Relatórios incluso</li>
                  <li>Assistente ABA incluso</li>
                  <li>Assistente Laudos para psicólogas e psicólogos</li>
                  <li>Pagamento único</li>
                  <li>Acesso vitalício</li>
                </ul>
              </div>

              <div className="price-card">
                <span>Pagamento único</span>
                <strong><small>R$</small> 97,00</strong>
                <p>Sem mensalidade.</p>
                <a className="button button--coral" href={checkoutUrl}>Quero acesso às planilhas</a>
                <small className="secure-copy">Pagamento seguro • acesso enviado por e-mail</small>
                <a className="price-login" href="https://app.psicoplanilha.com/login">Já sou cliente</a>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="faq-section">
          <div className="container faq-grid">
            <div className="section-heading">
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2>Informações importantes antes da compra.</h2>
              <p>Transparência sobre o que as planilhas e os assistentes fazem — e o que continua sob responsabilidade profissional.</p>
            </div>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="notice-section">
          <div className="container">
            <div className="professional-notice">
              <strong>Aviso de uso responsável</strong>
              <p>
                As planilhas e os assistentes são recursos de apoio operacional. Não substituem instrumentos originais,
                manuais, avaliação profissional, interpretação técnica, diagnóstico ou julgamento clínico.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>PsicoPlanilhas 2.0</strong>
            <p>Planilhas profissionais e assistentes inclusos para apoiar uma rotina mais organizada.</p>
            <p>Psiform Tecnologia LTDA • CNPJ 47.854.933/0001-00</p>
            <p><a href="mailto:contato@psicoplanilha.com">contato@psicoplanilha.com</a></p>
          </div>
          <div className="footer-links">
            <a href="#planilhas">Planilhas</a>
            <a href="#assistentes">Assistentes</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="https://app.psicoplanilha.com/login">Acessar plataforma</a>
          </div>
          <small>© {new Date().getFullYear()} psicoplanilhas.com — Todos os direitos reservados.</small>
        </div>
      </footer>
    </>
  );
}
