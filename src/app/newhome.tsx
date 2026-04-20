import Image from "next/image";

const launchPillars = ["Cinematic 3D", "White-label Saas", "Server-side control"];

const featureCards = [
  {
    number: "Corp 01",
    title: "White-Label Testing Engine",
    text:
      "Fully branded CBT platform for your logo, domain, and identity across every workflow.",
  },
  {
    number: "Corp 02",
    title: "Student Management",
    text:
      "Institutes can batch students, control enrollments, and monitor each learner profile at scale.",
  },
  {
    number: "Corp 03",
    title: "Test Management",
    text:
      "Create and schedule MCQ, MSQ, and NAT exams with deterministic scoring behavior.",
  },
  {
    number: "Corp 04",
    title: "Live Monitoring & Reports",
    text:
      "Real-time exam telemetry, proctor insight, and detailed batch-level analytics.",
  },
];

const depthTips = [
  "Use a tilted foreground panel with perspective.",
  "Place secondary cards behind it with offset transforms.",
  "Add soft glowing orbs and a mesh background.",
  "Animate movement subtly so it feels premium.",
];

export default function NewHome() {
  return (
    <main className="nh-page">
      <header className="nh-topbar">
        <div className="nh-brand">
          <span className="nh-brand-dot" aria-hidden="true" />
          <strong>Proctera</strong>
        </div>
        <p className="nh-topline">B2B testing infrastructure | Premium white-label exam delivery</p>
        <div className="nh-badges">
          <span className="nh-badge">Launching soon</span>
          <span className="nh-square">6</span>
        </div>
      </header>

      <section className="nh-layout">
        <div className="nh-left">
          <p className="nh-chip">Cinematic 3D Interface</p>
          <p className="nh-overline">// Coming Soon</p>
          <h1 className="nh-heading">
            Turn your
            <br />
            exam platform
            <br />
            into a
            <br />
            premium
            <br />
            product.
          </h1>
          <p className="nh-subtext">
            Proctera gives coaching institutes a white-label testing engine with exam delivery,
            monitoring, and reporting under one brand.
          </p>

          <div className="nh-actions">
            <button type="button" className="nh-btn nh-btn-primary">
              Request demo
            </button>
            <button type="button" className="nh-btn nh-btn-ghost">
              View capabilities
            </button>
          </div>

          <div className="nh-pillars">
            {launchPillars.map((pillar) => (
              <article key={pillar} className="nh-pillar">
                <span className="nh-pillar-label">Launch style</span>
                <h3>{pillar}</h3>
              </article>
            ))}
          </div>

          <div className="nh-feature-grid">
            {featureCards.map((card) => (
              <article key={card.number} className="nh-feature-card">
                <div className="nh-feature-top">
                  <span className="nh-mini-icon" aria-hidden="true" />
                  <span>{card.number}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <div className="nh-footer-columns">
            <article className="nh-copy-card">
              <p className="nh-overline">// Depthwise style</p>
              <h3>Start with a sharper first impression.</h3>
              <p>
                A cinematic first fold helps your institute brand look confident and intentional.
              </p>

              <div className="nh-founders">
                <div className="nh-founder">
                  <Image src="/sujal.jpg" alt="Sujal Solanki" width={32} height={32} />
                  <div>
                    <strong>Sujal Solanki</strong>
                    <span>sujalkumarofficial2005@...</span>
                  </div>
                </div>
                <div className="nh-founder">
                  <Image src="/kamlesh.jpg" alt="Kamlesh Suhar" width={32} height={32} />
                  <div>
                    <strong>Kamlesh Suhar</strong>
                    <span>kamleshsuhar.dev@gmail...</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="nh-tip-card">
              <p className="nh-overline">// Fine-tune stack</p>
              <h3>What makes the 3D feel real</h3>
              <ul>
                {depthTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <aside className="nh-right" aria-label="3D mockup preview">
          <div className="nh-mockup-wrap">
            <Image src="/hero.png" alt="Product interface preview" fill className="nh-mockup-image" />
          </div>

          <div className="nh-score-strip" role="list" aria-label="Launch metrics">
            <article role="listitem">
              <strong>62</strong>
              <span>Days</span>
            </article>
            <article role="listitem">
              <strong>02</strong>
              <span>Hours</span>
            </article>
            <article role="listitem">
              <strong>17</strong>
              <span>Min</span>
            </article>
            <article role="listitem" className="is-accent">
              <strong>55</strong>
              <span>Sec</span>
            </article>
          </div>
        </aside>
      </section>
    </main>
  );
}
