import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";

const faqs = [
  {
    question: "When is Runaid launching?",
    answer: "Runaid is currently in development. Join the waitlist for launch and beta updates.",
  },
  {
    question: "Is Runaid a Strava replacement?",
    answer: "No. Runaid is built to complement Strava workflows by interpreting your training data.",
  },
  {
    question: "Does Runaid provide medical advice?",
    answer: "No. Runaid provides general coaching guidance and safety-focused prompts, not medical diagnosis.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Runaid",
    url: "https://www.runaid.app",
  };

  return (
    <div className="page">
      <Script
        id="runaid-organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero" id="top">
        <div className="content-shell">
        <Image className="logo" src="/icon.png" alt="Runaid logo" width={88} height={88} />
          <p className="eyebrow">Launching soon</p>
          <h1>Runaid is launching soon.</h1>
          <p className="lead">
            Runaid helps dedicated amateur runners make better training decisions by turning Strava
            activity data into clear, day-to-day coaching guidance.
          </p>
          <p className="positioning">Built to complement Strava workflows, not replace Strava.</p>
          <a href="#waitlist" className="cta-button">
            Join the waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="content-shell">
            <h2>What Runaid Does</h2>
            <ul>
              <li>Interprets Strava training data in context, not just as isolated workouts.</li>
              <li>Provides post-run assessment with readiness and fatigue signals.</li>
              <li>Gives practical chat guidance for day-to-day training decisions.</li>
            </ul>
          </div>
        </section>

        <section className="section alt">
          <div className="content-shell">
            <h2>Who It&apos;s For</h2>
            <ul>
              <li>Structured, long-term amateur runners training multiple days each week.</li>
              <li>Runners preparing for goal races and trying to stay consistent.</li>
              <li>Athletes who want clearer context from data they already track in Strava.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="content-shell">
            <h2>How It Works</h2>
            <ol>
              <li>Connect your Strava account.</li>
              <li>Runaid analyzes your training patterns and workload signals.</li>
              <li>Receive adaptive, safety-aware coaching guidance in chat.</li>
            </ol>
          </div>
        </section>

        <section className="section alt" id="positioning">
          <div className="content-shell">
            <h2>Positioning and Safety</h2>
            <ul>
              <li>Runaid is not a social platform and not a Strava replacement.</li>
              <li>Runaid is not a medical product and does not diagnose injuries.</li>
              <li>Training plans are one feature, alongside data interpretation and coaching context.</li>
              <li>No guaranteed performance outcomes are claimed.</li>
            </ul>
          </div>
        </section>

        <section className="section waitlist" id="waitlist">
          <div className="content-shell">
            <h2>Join the Waitlist</h2>
            <p>Get notified when beta access opens.</p>
            <WaitlistForm source="hero" />
          </div>
        </section>

        <section className="section alt">
          <div className="content-shell">
            <h2>FAQ</h2>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="section footer-links">
        <div className="content-shell">
          <p>Runaid is currently in active development.</p>
          <nav>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#top">Back to top</a>
          </nav>
          <WaitlistForm source="footer" />
        </div>
      </footer>
    </div>
  );
}
