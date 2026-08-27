import Image from "next/image";
import {
  audience,
  faqs,
  heroAngles,
  lots,
  methodSteps,
  notFor,
  workshopDays,
  type HeroAngle,
} from "./sales-data";

type SalesPageProps = {
  angle: HeroAngle;
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}

export function SalesPage({ angle }: SalesPageProps) {
  const hero = heroAngles[angle];

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Workshop Projeto Você S.A.</span>
          <span className="topbar-dot" aria-hidden="true" />
          <span>3 encontros ao vivo</span>
          <span className="topbar-dot topbar-wide" aria-hidden="true" />
          <span className="topbar-wide">Aproximadamente 2 horas por dia</span>
          <span className="topbar-dot" aria-hidden="true" />
          <span>Sem replay</span>
        </div>
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="angle-label">{hero.label}</p>
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero-support">{hero.support}</p>
            <a className="button button-primary" href="#inscricao">
              {hero.cta}
              <ArrowIcon />
            </a>
            <div className="hero-trust">
              <span><CheckIcon /> Base operacional</span>
              <span><CheckIcon /> Prática guiada</span>
              <span><CheckIcon /> Decisão consciente</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-image-frame">
              <Image
                src="/images/roger-hero.png"
                alt="Roger, criador do Projeto Você S.A., em retrato profissional"
                width={1122}
                height={1402}
                sizes="(max-width: 800px) 90vw, 42vw"
                priority
              />
              <div className="image-caption">
                <span>Com Roger</span>
                <strong>Estrutura primeiro.<br />Operação depois.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tension section-light">
        <div className="shell split-copy">
          <div>
            <p className="section-kicker">O incômodo que trouxe você até aqui</p>
            <h2>Você faz o certo. Guarda dinheiro. E mesmo assim parece que não sai do lugar.</h2>
          </div>
          <div className="prose-stack">
            <p>Você recebe, paga as contas, tenta separar um pouco e coloca em uma caixinha, CDB, fundo ou alguma opção que parece segura.</p>
            <p>O dinheiro até cresce. Mas cresce devagar demais para mudar a sensação de que, desse jeito, construir algo de verdade continua distante.</p>
            <p>Quando você olha para cripto, vê oportunidade e, no mesmo minuto, vem o freio: golpe, pirâmide, moeda errada, aplicativo errado, senha, carteira, gráfico e volatilidade.</p>
            <p className="lead-line">Você volta para onde já conhece. Não porque está satisfeito, mas porque ninguém mostrou uma entrada que faça sentido.</p>
          </div>
        </div>
      </section>

      <section className="belief-section section-dark">
        <div className="shell belief-grid">
          <div className="belief-number">01</div>
          <div className="belief-copy">
            <p className="section-kicker section-kicker-accent">A primeira coisa que muda tudo</p>
            <h2>Não comece pela moeda.</h2>
            <p className="large-quote">“Qual moeda eu compro?”</p>
            <p>Essa parece ser a primeira pergunta. Mas antes da moeda existe algo mais importante: a estrutura.</p>
            <p>Onde sua conta fica. Como você protege o acesso. Como movimenta o dinheiro. Como entende uma operação. Como separa investimento de aposta. Como cria uma rotina que não depende de palpite, notícia ou guru.</p>
            <div className="principle-card">
              <span>O princípio do Projeto Você S.A.</span>
              <strong>Estrutura primeiro. Operação depois.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="workshop section-cream" id="workshop">
        <div className="shell">
          <div className="section-heading centered">
            <p className="section-kicker">O que é o workshop</p>
            <h2>Três encontros para tirar o mercado cripto da névoa.</h2>
            <p>Roger monta o caminho junto com você, mostrando a base operacional e a lógica que usa no dia a dia. Você entende onde está pisando, o que precisa configurar e como começar de forma manual e consciente.</p>
          </div>
          <div className="workshop-summary">
            <div><strong>3</strong><span>encontros ao vivo</span></div>
            <div><strong>2h</strong><span>aproximadamente por dia</span></div>
            <div><strong>0</strong><span>promessas de lucro fácil</span></div>
          </div>
        </div>
      </section>

      <section className="agenda section-cream">
        <div className="shell">
          <div className="agenda-header">
            <p className="section-kicker">A estrutura dos encontros</p>
            <h2>Em 3 dias, organize o que hoje parece complicado.</h2>
          </div>
          <div className="day-list">
            {workshopDays.map((day) => (
              <article className="day-card" key={day.number}>
                <span className="day-number">{day.number}</span>
                <div>
                  <p className="card-label">Dia {Number(day.number)}</p>
                  <h3>{day.title}</h3>
                  <p>{day.description}</p>
                  <div className="day-outcome"><CheckIcon /> {day.outcome}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clarity section-light">
        <div className="shell clarity-grid">
          <div className="clarity-title">
            <p className="section-kicker">Sem promessa mágica</p>
            <h2>Não é ficar rico amanhã. É parar de investir no escuro.</h2>
          </div>
          <div className="clarity-copy">
            <p>Se você procura uma moeda secreta, lucro garantido ou um atalho para multiplicar dinheiro sem risco, este workshop não foi feito para isso.</p>
            <p>Investimento pede método, capacidade de conviver com oscilações, clareza sobre a entrada e consistência para não abandonar o plano a cada manchete, guru ou queda de mercado.</p>
            <p className="clarity-emphasis">Parece menos emocionante que uma promessa de fortuna rápida. E justamente por isso faz mais sentido para quem quer construir patrimônio de verdade.</p>
          </div>
        </div>
      </section>

      <section className="audience section-petrol">
        <div className="shell audience-grid">
          <div className="audience-intro">
            <p className="section-kicker section-kicker-accent">Para quem faz sentido</p>
            <h2>Você não precisa chegar pronto. Precisa querer entender.</h2>
            <p>O ponto de partida é a curiosidade com responsabilidade, não o domínio de termos técnicos.</p>
          </div>
          <div className="audience-list">
            {audience.map((item) => (
              <div className="audience-item" key={item}>
                <CheckIcon />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="not-for section-light">
        <div className="shell not-for-grid">
          <div>
            <p className="section-kicker">Um limite importante</p>
            <h2>Não é para todo mundo.</h2>
            <p className="section-description">Aqui, a ideia é simples: primeiro clareza. Depois decisão.</p>
          </div>
          <div className="not-for-list">
            {notFor.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="authority section-dark">
        <div className="shell authority-grid">
          <div className="authority-image">
            <Image
              src="/images/roger-autoridade.png"
              alt="Roger em seu espaço de trabalho"
              width={1448}
              height={1086}
              sizes="(max-width: 800px) 92vw, 48vw"
            />
            <div className="authority-stamp">
              <span>Projeto</span>
              <strong>Você S.A.</strong>
            </div>
          </div>
          <div className="authority-copy">
            <p className="section-kicker section-kicker-accent">Quem é Roger</p>
            <h2>Ele também começou querendo fazer o dinheiro render melhor sem transformar a vida em uma aposta.</h2>
            <p>Roger passou por fundos imobiliários, CDBs, ações e outras alternativas. Quando chegou ao mercado cripto, encontrou potencial, mas também percebeu que oportunidade sem estrutura vira confusão.</p>
            <p>A virada veio quando parou de correr atrás de velocidade e passou a seguir um plano.</p>
            <p>Hoje, é o criador do Criptobot e do Projeto Você S.A., mantém uma comunidade ativa, faz lives recorrentes e usa o próprio canal para mostrar sua rotina, operações e a evolução do projeto.</p>
            <blockquote>O workshop nasceu para transformar excesso de informação em um caminho que dá para seguir.</blockquote>
          </div>
        </div>
      </section>

      <section className="method section-cream">
        <div className="shell">
          <div className="section-heading method-heading">
            <p className="section-kicker">O mecanismo</p>
            <h2>Uma ordem simples muda a forma de entrar no mercado.</h2>
            <p>O erro comum é tentar ganhar dinheiro antes de saber operar. O Projeto Você S.A. inverte essa ordem.</p>
          </div>
          <div className="method-grid">
            {methodSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="method-analogy">É como aprender a dirigir antes de colocar o carro no piloto automático.</p>
        </div>
      </section>

      <section className="no-bonus section-light">
        <div className="shell no-bonus-grid">
          <div className="no-bonus-mark">3x</div>
          <div>
            <p className="section-kicker">Sem bônus para inflar preço</p>
            <h2>O valor está no que realmente importa.</h2>
            <p>Três encontros ao vivo, aplicação prática e uma estrutura que você pode acompanhar junto com Roger.</p>
            <ul>
              <li><CheckIcon /> Sem biblioteca de PDFs que você nunca abre.</li>
              <li><CheckIcon /> Sem 20 bônus usados para esconder uma aula fraca.</li>
              <li><CheckIcon /> Você entra para entender, organizar e fazer.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="offer section-dark" id="inscricao">
        <div className="shell">
          <div className="section-heading centered offer-heading">
            <p className="section-kicker section-kicker-accent">Investimento</p>
            <h2>Escolha o lote em que você vai entrar.</h2>
            <p>O lote vigente e as condições finais serão confirmados no checkout oficial.</p>
          </div>
          <div className="lot-grid">
            {lots.map((lot, index) => (
              <article className={`lot-card ${index === 0 ? "lot-featured" : ""}`} key={lot.name}>
                {index === 0 ? <span className="lot-badge">Primeira janela</span> : null}
                <p>{lot.name}</p>
                <strong>{lot.price}</strong>
                <span>{lot.condition}</span>
              </article>
            ))}
          </div>
          <div className="checkout-card">
            <div>
              <span>Próximo passo</span>
              <h3>Entre no Workshop Projeto Você S.A.</h3>
              <p>O link oficial de inscrição ainda precisa ser configurado. Assim que estiver disponível, este será o ponto de acesso ao checkout.</p>
            </div>
            <button className="button button-disabled" type="button" disabled>
              Link de inscrição em configuração
            </button>
          </div>
          <div className="offer-notes">
            <p><strong>Formato:</strong> 3 encontros ao vivo, com aproximadamente 2 horas por dia e sem replay do workshop.</p>
            <p><strong>Garantia:</strong> o material fornecido não define uma política de garantia. Confira as condições apresentadas no checkout oficial antes de concluir a inscrição.</p>
          </div>
        </div>
      </section>

      <section className="risk section-light">
        <div className="shell risk-card">
          <span className="risk-icon">!</span>
          <div>
            <p className="section-kicker">Antes de entrar</p>
            <h2>Uma coisa precisa ficar clara.</h2>
            <p>Mercado cripto envolve risco e volatilidade. Resultados variam conforme capital, estratégia, condições de mercado, disciplina e decisões do próprio investidor.</p>
            <p>O workshop não vende lucro garantido e não elimina risco. Ele entrega educação, estrutura, prática guiada e uma forma mais consciente de entender o mercado antes de tomar decisões com o seu dinheiro.</p>
          </div>
        </div>
      </section>

      <section className="faq section-cream" id="duvidas">
        <div className="shell faq-grid">
          <div className="faq-heading">
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2>O que normalmente aparece antes de começar.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-petrol">
        <div className="shell final-cta-inner">
          <p className="section-kicker section-kicker-accent">A decisão que importa</p>
          <h2>Você não precisa acreditar em cripto. Precisa entender o que está olhando.</h2>
          <p>Depois de três dias, sua decisão deixa de vir do medo, da manchete ou da promessa de alguém. Ela começa a vir da clareza.</p>
          <a className="button button-primary" href="#inscricao">
            Quero entender antes de decidir
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div>
            <strong>Projeto Você S.A.</strong>
            <span>Workshop ao vivo com Roger</span>
          </div>
          <p>Investimentos em criptoativos envolvem riscos e volatilidade. Rentabilidade passada não garante resultados futuros. Este workshop tem caráter educacional e não constitui promessa de retorno.</p>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href="#inscricao">Ver lotes e inscrição <ArrowIcon /></a>
      </div>
    </main>
  );
}
