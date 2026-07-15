"use client";

import { useState } from "react";

const mentorships = [
  {
    badge: "Sandra Gil",
    title: "Mentoria: Planilhas IAR",
    whatsapp: "https://wa.me/5551972644387?text=Oi!%20Tenho%20interesse%20na%20mentoria%20de%20Planilhas%20IAR",
    content: (
      <>
        <p><strong>Instrumento de Avalia&ccedil;&atilde;o do Repert&oacute;rio B&aacute;sico para Alfabetiza&ccedil;&atilde;o</strong></p>
        <p><strong>Tema:</strong> Uso de planilhas de corre&ccedil;&atilde;o para avalia&ccedil;&otilde;es</p>
        <p><strong>Dura&ccedil;&atilde;o:</strong> 60 minutos | <strong>Formato:</strong> Encontro &uacute;nico, 100% pr&aacute;tico</p>
        <p><strong>Objetivo Geral:</strong><br />Capacitar profissionais da Neuropsicopedagogia e Psicopedagogia Cl&iacute;nica para o uso funcional de planilhas estruturadas de corre&ccedil;&atilde;o (PsicoPlanilhas), possibilitando a organiza&ccedil;&atilde;o, an&aacute;lise e interpreta&ccedil;&atilde;o de dados provenientes da avalia&ccedil;&atilde;o do repert&oacute;rio b&aacute;sico para alfabetiza&ccedil;&atilde;o.</p>
        <p>A mentoria tem como foco desenvolver compet&ecirc;ncias pr&aacute;ticas para coleta de dados, tabula&ccedil;&atilde;o, preenchimento de planilhas, organiza&ccedil;&atilde;o de evid&ecirc;ncias e elabora&ccedil;&atilde;o de descri&ccedil;&otilde;es qualitativas claras, objetivas e tecnicamente seguras para devolutivas a fam&iacute;lias e escolas.</p>
        <p><strong>Conte&uacute;dos Abordados:</strong></p>
        <ul>
          <li>Estrat&eacute;gias para condu&ccedil;&atilde;o da aplica&ccedil;&atilde;o do IAR de forma objetiva e funcional</li>
          <li>Registro eficiente das respostas durante a avalia&ccedil;&atilde;o</li>
          <li>Identifica&ccedil;&atilde;o dos dados essenciais para o correto preenchimento da planilha</li>
          <li>Organiza&ccedil;&atilde;o e armazenamento dos dados em drive</li>
          <li>Convers&atilde;o de respostas brutas em indicadores quantitativos</li>
          <li>Estrat&eacute;gias de tabula&ccedil;&atilde;o &aacute;gil em instrumentos com base em habilidades</li>
          <li>Preenchimento correto da planilha estruturada</li>
          <li>Interpreta&ccedil;&atilde;o dos resultados por habilidades avaliadas no IAR</li>
          <li>Gera&ccedil;&atilde;o de prints organizados e objetivos</li>
          <li>Transforma&ccedil;&atilde;o de dados quantitativos em linguagem acess&iacute;vel</li>
          <li>Escrita t&eacute;cnica com clareza e flexibilidade</li>
          <li>Cuidados &eacute;ticos na reda&ccedil;&atilde;o: evitar infer&ecirc;ncias diagn&oacute;sticas indevidas</li>
        </ul>
        <p><strong style={{ color: "#d4574f" }}>Observa&ccedil;&atilde;o importante:</strong> Cada participante &eacute; respons&aacute;vel pela aquisi&ccedil;&atilde;o de seus pr&oacute;prios instrumentos e planilhas de avalia&ccedil;&atilde;o. N&atilde;o ser&atilde;o compartilhados materiais protegidos por direitos autorais.</p>
      </>
    ),
  },
  {
    badge: "Sandra Gil",
    title: "Mentoria: Protocolo Portage",
    whatsapp: "https://wa.me/5551972644387?text=Oi!%20Tenho%20interesse%20na%20mentoria%20de%20Protocolo%20Portage",
    content: (
      <>
        <p><strong>Planilhas Protocolo Portage</strong></p>
        <p><strong>Tema:</strong> Uso de planilhas de corre&ccedil;&atilde;o para avalia&ccedil;&otilde;es</p>
        <p><strong>Dura&ccedil;&atilde;o:</strong> 60 minutos | <strong>Formato:</strong> Encontro &uacute;nico, 100% pr&aacute;tico</p>
        <p><strong>Objetivo Geral:</strong><br />Capacitar profissionais da Neuropsicopedagogia e Psicopedagogia Cl&iacute;nica para o uso estrat&eacute;gico de planilhas estruturadas de corre&ccedil;&atilde;o (PsicoPlanilhas), possibilitando a transforma&ccedil;&atilde;o de dados brutos de avalia&ccedil;&atilde;o em informa&ccedil;&otilde;es organizadas, interpret&aacute;veis e aplic&aacute;veis ao relat&oacute;rio cl&iacute;nico.</p>
        <p><strong>Instrumento Abordado:</strong> Planilha Portage (0 a 6 anos) – organiza&ccedil;&atilde;o por &aacute;reas do desenvolvimento, habilidades e marcos evolutivos.</p>
        <p><strong>Conte&uacute;dos Abordados:</strong></p>
        <ul>
          <li>Estrat&eacute;gias para condu&ccedil;&atilde;o da aplica&ccedil;&atilde;o do instrumento de forma funcional</li>
          <li>Registro eficiente das respostas durante a avalia&ccedil;&atilde;o</li>
          <li>Identifica&ccedil;&atilde;o dos dados essenciais para alimenta&ccedil;&atilde;o da planilha</li>
          <li>Organiza&ccedil;&atilde;o e armazenamento em drive</li>
          <li>Convers&atilde;o de dados brutos em indicadores quantitativos</li>
          <li>Estrat&eacute;gias de tabula&ccedil;&atilde;o r&aacute;pida em instrumentos qualitativos</li>
          <li>Preenchimento correto das planilhas estruturadas</li>
          <li>Interpreta&ccedil;&atilde;o das &aacute;reas, habilidades e marcos do Portage</li>
          <li>Gera&ccedil;&atilde;o de prints organizados e funcionais</li>
          <li>Sele&ccedil;&atilde;o das informa&ccedil;&otilde;es mais relevantes</li>
          <li>Transforma&ccedil;&atilde;o de dados quantitativos em linguagem acess&iacute;vel</li>
          <li>Escrita t&eacute;cnica sem engessamento</li>
          <li>Cuidados &eacute;ticos: evitar infer&ecirc;ncias diagn&oacute;sticas indevidas</li>
        </ul>
        <p><strong style={{ color: "#d4574f" }}>Observa&ccedil;&atilde;o importante:</strong> Cada participante &eacute; respons&aacute;vel pela aquisi&ccedil;&atilde;o de seus pr&oacute;prios instrumentos e planilhas de avalia&ccedil;&atilde;o.</p>
      </>
    ),
  },
  {
    badge: "Sandra Gil",
    title: "Mentoria: Planilha SNAP-IV — ASRS 18 — TDAH",
    whatsapp: "https://wa.me/5551972644387?text=Oi!%20Tenho%20interesse%20na%20mentoria%20de%20Planilha%20SNAP-IV%20-%20ASRS%2018",
    content: (
      <>
        <p><strong>Planilha SNAP-IV — ASRS 18 — TDAH (Neurodesenvolvimento)</strong></p>
        <p><strong>Tema:</strong> Uso de planilhas de corre&ccedil;&atilde;o para avalia&ccedil;&otilde;es</p>
        <p><strong>Dura&ccedil;&atilde;o:</strong> 60 minutos | <strong>Formato:</strong> Encontro &uacute;nico, 100% pr&aacute;tico</p>
        <p><strong>Objetivo Geral:</strong><br />Capacitar profissionais da Neuropsicopedagogia e Psicopedagogia Cl&iacute;nica para o uso funcional de planilhas estruturadas de corre&ccedil;&atilde;o (PsicoPlanilhas), com foco na organiza&ccedil;&atilde;o, an&aacute;lise e interpreta&ccedil;&atilde;o de dados relacionados a indicadores comportamentais do TDAH (infantil e adulto).</p>
        <p>A mentoria visa desenvolver habilidades pr&aacute;ticas para coleta de dados, tabula&ccedil;&atilde;o, preenchimento de planilhas, organiza&ccedil;&atilde;o de evid&ecirc;ncias e elabora&ccedil;&atilde;o de descri&ccedil;&otilde;es qualitativas claras, objetivas e eticamente fundamentadas para devolutivas a fam&iacute;lias e escolas.</p>
        <p><strong>Instrumentos Abordados:</strong><br />Planilha SNAP-IV (6 a 18 anos) – rastreio de comportamentos relacionados &agrave; desaten&ccedil;&atilde;o, hiperatividade/impulsividade e comportamento opositor em crian&ccedil;as.<br />Planilha ASRS 18 (18 anos +) – rastreio de comportamentos relacionados &agrave; desaten&ccedil;&atilde;o, hiperatividade/impulsividade e comportamento opositor em adultos.</p>
        <p><strong>Conte&uacute;dos Abordados:</strong></p>
        <ul>
          <li>Estrat&eacute;gias para aplica&ccedil;&atilde;o do checklist SNAP-IV / ASRS 18 com diferentes informantes (pais, professores e autorrelato)</li>
          <li>Registro &aacute;gil e funcional das respostas</li>
          <li>Identifica&ccedil;&atilde;o dos dados essenciais para an&aacute;lise confi&aacute;vel</li>
          <li>Organiza&ccedil;&atilde;o e armazenamento dos dados em ambiente digital</li>
          <li>Convers&atilde;o das respostas em indicadores quantitativos</li>
          <li>Estrat&eacute;gias de tabula&ccedil;&atilde;o r&aacute;pida e eficiente</li>
          <li>Preenchimento correto da planilha SNAP-IV / ASRS 18</li>
          <li>Organiza&ccedil;&atilde;o dos itens por dom&iacute;nios: Desaten&ccedil;&atilde;o, Hiperatividade/Impulsividade e Comportamento Opositor</li>
          <li>Gera&ccedil;&atilde;o de prints organizados e objetivos</li>
          <li>Transforma&ccedil;&atilde;o de dados quantitativos em linguagem acess&iacute;vel</li>
          <li>Escrita t&eacute;cnica sem engessamento</li>
          <li>Cuidados &eacute;ticos: diferencia&ccedil;&atilde;o entre rastreio e diagn&oacute;stico</li>
        </ul>
        <p><strong style={{ color: "#d4574f" }}>Observa&ccedil;&atilde;o importante:</strong> Cada participante &eacute; respons&aacute;vel pela aquisi&ccedil;&atilde;o de seus pr&oacute;prios instrumentos e planilhas de avalia&ccedil;&atilde;o. N&atilde;o ser&atilde;o compartilhados materiais protegidos por direitos autorais.</p>
      </>
    ),
  },
];

export default function MentoriaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <>
      <style>{`
        .mentoria * { margin: 0; padding: 0; box-sizing: border-box; }
        .mentoria { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #fafafa; color: #2c3e50; line-height: 1.6; }
        .mentoria .container { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; }
        .mentoria header { text-align: center; margin-bottom: 3rem; padding: 3rem 0; background: #ffffff; border-bottom: 2px solid #2c3e50; }
        .mentoria h1 { font-size: 42px; margin-bottom: 0.75rem; font-weight: 700; color: #1a2847; letter-spacing: -0.5px; }
        .mentoria .subtitle { font-size: 16px; color: #7f8c8d; font-weight: 400; max-width: 700px; margin: 0 auto; }
        .mentoria .section { margin-bottom: 4rem; }
        .mentoria .section-title { font-size: 28px; color: #1a2847; margin-bottom: 2rem; font-weight: 700; padding-bottom: 1rem; border-bottom: 1px solid #ecf0f1; letter-spacing: -0.3px; }
        .mentoria .mentor-showcase { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin-bottom: 2rem; }
        .mentoria .mentor-photos { display: grid; grid-template-columns: 1fr 1fr; }
        .mentoria .mentor-photo-section { text-align: center; }
        .mentoria .mentor-photo-section img { width: 100%; display: block; }
        .mentoria .mentor-name-section { padding: 1.5rem; background: #f9f9f9; border-right: 1px solid #ecf0f1; }
        .mentoria .mentor-photo-section:last-child .mentor-name-section { border-right: none; }
        .mentoria .mentor-name-section h3 { font-size: 18px; color: #1a2847; margin-bottom: 0.25rem; font-weight: 700; }
        .mentoria .mentor-name-section p { font-size: 14px; color: #7f8c8d; margin: 0; }
        .mentoria .mentor-showcase-info { padding: 2.5rem; text-align: center; border-top: 1px solid #ecf0f1; }
        .mentoria .mentor-showcase-info h2 { font-size: 24px; color: #1a2847; margin-bottom: 0.5rem; font-weight: 700; }
        .mentoria .mentor-showcase-info p { font-size: 15px; color: #7f8c8d; margin-bottom: 1.5rem; }
        .mentoria .btn-primary { display: inline-block; padding: 12px 24px; background: #25d366; color: white; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: 600; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s; }
        .mentoria .btn-primary:hover { background: #1eaa50; }
        .mentoria .mentorships { margin-top: 2rem; }
        .mentoria .accordion-container { border: 1px solid #ecf0f1; border-radius: 8px; overflow: hidden; }
        .mentoria .accordion-item { border-bottom: 1px solid #ecf0f1; }
        .mentoria .accordion-item:last-child { border-bottom: none; }
        .mentoria .accordion-button { width: 100%; padding: 1.5rem; background: #ffffff; border: none; text-align: left; font-size: 15px; font-weight: 600; color: #1a2847; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.3s ease; }
        .mentoria .accordion-button:hover { background: #f9f9f9; }
        .mentoria .accordion-button.active { background: #2c3e50; color: white; }
        .mentoria .accordion-icon { font-size: 18px; transition: transform 0.3s ease; }
        .mentoria .accordion-button.active .accordion-icon { transform: rotate(180deg); }
        .mentoria .accordion-content { padding: 1.5rem; background: #f9f9f9; }
        .mentoria .accordion-content p { font-size: 14px; color: #555; line-height: 1.8; margin-bottom: 1rem; }
        .mentoria .accordion-content ul { margin-left: 1.5rem; margin-bottom: 1rem; }
        .mentoria .accordion-content li { font-size: 14px; color: #555; line-height: 1.8; margin-bottom: 0.5rem; }
        .mentoria .accordion-content strong { color: #1a2847; }
        .mentoria .btn-secondary { display: inline-block; margin-top: 1rem; padding: 10px 20px; background: #25d366; color: white; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: 600; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.3s; }
        .mentoria .btn-secondary:hover { background: #1eaa50; }
        .mentoria .mentor-badge { display: inline-block; background: #f0f0f0; padding: 0.5rem 1rem; border-radius: 4px; font-size: 12px; color: #666; margin-bottom: 1rem; font-weight: 600; }
        .mentoria .accordion-button.active .mentor-badge { background: rgba(255,255,255,0.2); color: white; }
        .mentoria .contato-ana { background: white; padding: 3rem 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center; }
        .mentoria .contato-ana h2 { font-size: 24px; color: #1a2847; margin-bottom: 1rem; font-weight: 700; }
        .mentoria .contato-ana p { font-size: 15px; color: #555; max-width: 560px; margin: 0 auto 2rem; line-height: 1.6; }
        .mentoria .btn-whatsapp-ana { display: inline-flex; align-items: center; gap: 0.6rem; padding: 14px 28px; background: #25d366; color: white; text-decoration: none; border-radius: 50px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s; }
        .mentoria .btn-whatsapp-ana:hover { background: #1eaa50; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3); }
        .mentoria .btn-whatsapp-ana svg { width: 20px; height: 20px; fill: white; }
        .mentoria .telefone-ana { display: block; margin-top: 1rem; font-size: 14px; color: #7f8c8d; }
        .mentoria .indicacoes-section { background: white; padding: 3rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .mentoria .disclaimer { font-size: 13px; color: #7f8c8d; text-align: center; margin-bottom: 2.5rem; font-style: italic; background: #f5f5f5; padding: 1rem 1.5rem; border-radius: 4px; border-left: 3px solid #bdc3c7; }
        .mentoria .prof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; }
        .mentoria .prof-card { text-align: center; padding: 2rem; background: #f9f9f9; border-radius: 8px; border: 1px solid #ecf0f1; transition: all 0.3s; }
        .mentoria .prof-card:hover { background: white; border-color: #2c3e50; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .mentoria .prof-image { width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 1.5rem; overflow: hidden; background: #ecf0f1; border: 2px solid #ecf0f1; }
        .mentoria .prof-image img { width: 100%; height: 100%; object-fit: cover; }
        .mentoria .prof-card h3 { font-size: 16px; color: #1a2847; margin-bottom: 0.5rem; font-weight: 600; }
        .mentoria .prof-card p { font-size: 13px; color: #7f8c8d; margin-bottom: 1.5rem; line-height: 1.5; }
        @media (max-width: 768px) {
            .mentoria .container { padding: 1rem; }
            .mentoria header { padding: 2rem 1rem; margin-bottom: 2rem; }
            .mentoria h1 { font-size: 28px; }
            .mentoria .subtitle { font-size: 14px; }
            .mentoria .section-title { font-size: 22px; margin-bottom: 1.5rem; }
            .mentoria .mentor-showcase-info { padding: 1.5rem; }
            .mentoria .accordion-button { padding: 1.25rem; font-size: 14px; }
            .mentoria .mentor-photos { grid-template-columns: 1fr; }
            .mentoria .mentor-name-section { border-right: none !important; border-bottom: 1px solid #ecf0f1; }
            .mentoria .indicacoes-section { padding: 1.5rem; }
            .mentoria .prof-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="mentoria">
        <div className="container">
          <header>
            <h1>Mentorias e Indica&ccedil;&otilde;es</h1>
            <p className="subtitle">Mentorias desenvolvidas por quem vive a pr&aacute;tica cl&iacute;nica e potencializadas pelas PsicoPlanilhas: mais clareza, agilidade e seguran&ccedil;a em cada avalia&ccedil;&atilde;o.</p>
          </header>

          <section className="section">
            <div className="mentor-showcase">
              <div className="mentor-photos">
                <div className="mentor-photo-section">
                  <img src="/legacy/Livia-.png" alt="L&iacute;via Tadesco" />
                  <div className="mentor-name-section"><h3>L&iacute;via Tadesco</h3><p>Psicopedagoga</p></div>
                </div>
                <div className="mentor-photo-section">
                  <img src="/legacy/Sandra-grande.png" alt="Sandra Gil" />
                  <div className="mentor-name-section"><h3>Sandra Gil</h3><p>Neuropsicopedagoga</p></div>
                </div>
              </div>
              <div className="mentor-showcase-info">
                <h2>Mentorias PsicoPlanilhas: aplica&ccedil;&atilde;o pr&aacute;tica com suporte especializado</h2>
                <p>Apoio especializado para aplicar na pr&aacute;tica, com seguran&ccedil;a e clareza.</p>
                <a href="https://wa.me/5551972644387?text=Oi!%20Tenho%20interesse%20nas%20mentorias%20de%20PsicoPlanilhas" className="btn-primary">Solicitar Informa&ccedil;&otilde;es via WhatsApp</a>
              </div>
            </div>

            <div className="mentorships">
              <h3 className="section-title" style={{ textAlign: "center", border: "none", marginBottom: "1.5rem" }}>Mentorias Dispon&iacute;veis</h3>
              <div className="accordion-container">
                {mentorships.map((m, i) => (
                  <div className="accordion-item" key={i}>
                    <button
                      className={`accordion-button${openIndex === i ? " active" : ""}`}
                      onClick={() => toggle(i)}
                    >
                      <div>
                        <div className="mentor-badge">{m.badge}</div>
                        <span>{m.title}</span>
                      </div>
                      <span className="accordion-icon">&#9660;</span>
                    </button>
                    {openIndex === i && (
                      <div className="accordion-content">
                        {m.content}
                        <a href={m.whatsapp} className="btn-secondary">Solicitar Mentoria</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="indicacoes-section">
              <h2 className="section-title" style={{ textAlign: "center", border: "none", marginBottom: "0.5rem" }}>Profissionais para Atendimento</h2>
              <p className="disclaimer">Indica&ccedil;&otilde;es independentes — estes profissionais n&atilde;o s&atilde;o vinculados &agrave; Psiform Tecnologia e atuam de forma aut&ocirc;noma.</p>
              <div className="prof-grid">
                <div className="prof-card">
                  <div className="prof-image"><img src="/legacy/livia-redondo.png" alt="L&iacute;via Tadesco" /></div>
                  <h3>L&iacute;via Tadesco</h3>
                  <p>Psicopedagoga<br />Atendimento cl&iacute;nico</p>
                  <a href="https://wa.me/5551972644387?text=Oi%20Lívia!%20Venho%20da%20indicação%20nas%20PsicoPlanilhas" target="_blank" rel="noopener noreferrer" className="btn-primary">Contato WhatsApp</a>
                </div>
                <div className="prof-card">
                  <div className="prof-image"><img src="/legacy/sandra-redondo.png" alt="Sandra Gil" /></div>
                  <h3>Sandra Gil</h3>
                  <p>Neuropsicopedagoga<br />Atendimento cl&iacute;nico</p>
                  <a href="https://wa.me/5575991003407?text=Oi%20Sandra!%20Venho%20da%20indicação%20nas%20PsicoPlanilhas" target="_blank" rel="noopener noreferrer" className="btn-primary">Contato WhatsApp</a>
                </div>
                <div className="prof-card">
                  <div className="prof-image"><img src="/legacy/lais.png" alt="La&iacute;s Sant Anna" /></div>
                  <h3>La&iacute;s Sant Anna</h3>
                  <p>Neuropsic&oacute;loga<br />Atendimento cl&iacute;nico</p>
                  <a href="https://wa.me/5521981405187?text=Oi%20Laís!%20Venho%20da%20indicação%20nas%20PsicoPlanilhas" target="_blank" rel="noopener noreferrer" className="btn-primary">Contato WhatsApp</a>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="contato-ana">
              <h2>Fale com a Ana</h2>
              <p>Tem uma ideia para melhorar as PsicoPlanilhas? Sentiu falta de algum recurso? Manda pra Ana — a gente adora ouvir sugest&otilde;es de quem usa no dia a dia.</p>
              <a href="https://wa.me/5511992367278?text=Oi%20Ana!%20Tenho%20uma%20sugestão%20para%20as%20PsicoPlanilhas" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-ana">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Fale com a Ana
              </a>
              <span className="telefone-ana">(11) 99236-7278</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
