export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-glow thank-you-glow-one" />
      <div className="thank-you-glow thank-you-glow-two" />
      <section className="thank-you-card">
        <div className="thank-you-icon" aria-hidden="true">✓</div>
        <p className="angle-label">Projeto Você S.A.</p>
        <h1>Sua próxima decisão começa com clareza.</h1>
        <p className="thank-you-lead">Se sua inscrição foi concluída, agora é hora de conferir a confirmação e se preparar para acompanhar os três encontros ao vivo.</p>
        <div className="next-steps">
          <article>
            <span>01</span>
            <div>
              <h2>Confira a confirmação</h2>
              <p>Veja as instruções exibidas pela plataforma utilizada e confira o e-mail informado no cadastro.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>Reserve os três encontros</h2>
              <p>O workshop acontece ao vivo e sem replay. Separe tempo para acompanhar cada etapa no momento da execução.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>Aguarde as orientações oficiais</h2>
              <p>Datas, acesso e eventuais instruções adicionais devem ser seguidos apenas pelos canais oficiais informados após a inscrição.</p>
            </div>
          </article>
        </div>
        <div className="thank-you-note">
          <strong>Importante</strong>
          <p>Os materiais recebidos não informam um grupo, contato de suporte ou link de acesso. Esta página está pronta para receber esses dados quando forem definidos.</p>
        </div>
        <a className="button button-primary" href="/a1">Voltar para a página do workshop <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
