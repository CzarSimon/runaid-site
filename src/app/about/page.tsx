import type { Metadata } from 'next'
import WaitlistForm from '@/components/waitlist-form'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why Runaid exists, the coaching philosophy behind it, and what makes it different from a plan generator.',
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          About Runaid
        </h1>
        <p
          className="text-xl text-muted-foreground mb-12 italic leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Training that thinks like a coach.
        </p>

        <div
          className="space-y-6 text-lg text-foreground leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <p>
            Runaid exists because there is a meaningful gap between what training apps
            deliver and what good coaching looks like.
          </p>
          <p>
            Most apps give you a plan. A schedule of sessions built from a template,
            adjusted for your current fitness level, handed over for you to execute.
            There is value in that — a structured plan is better than no structure. But
            it is not coaching.
          </p>
          <p>
            Coaching is responsive. It reads what happened this week and adjusts what
            happens next week. It connects the fatigue from Tuesday to the decision
            about Thursday. It notices when the prescribed threshold pace is consistently
            too fast or too slow and recalibrates, rather than leaving you to guess. It
            asks about your sleep and your job and your life, because the body does not
            distinguish between training stress and life stress.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The coaching philosophy
          </h2>
          <p>
            Runaid&apos;s coaching is built on three foundations: sports science,
            coaching tradition, and the individual.
          </p>
          <p>
            Sports science gives us a detailed and well-evidenced understanding of how
            the body adapts to training: the physiological determinants of running
            performance, the mechanisms of adaptation, the relationship between training
            load and tissue capacity. This knowledge is real and it matters.
          </p>
          <p>
            But sports science has structural limits. Research isolates variables; coaching
            integrates them. Studies report group averages; coaching addresses one person.
            Short-duration trials cannot describe the compound effect of years of
            consistent training. The move from a general physiological principle to a
            specific session on a specific day for a specific person requires judgment
            that the research does not — and is not designed to — provide.
          </p>
          <p>
            That judgment is where coaching tradition comes in. Decades of empirical
            knowledge from coaches working with real athletes over real timeframes — how
            to periodise, how to progress, how to balance the competing demands of volume,
            intensity, recovery, and life. This knowledge is not less real than
            laboratory research. It is a different kind of real.
          </p>
          <p>
            And then there is the individual. Two runners with identical goal times may
            need fundamentally different training, because their limiters are different.
            The science and the tradition provide the menu of options. The individual
            determines the order.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What makes it different
          </h2>
          <p>
            Runaid is not a plan generator with a chat interface layered on top. The
            coaching relationship is the product. The plan is the starting point and the
            diagnostic tool. What matters is what the coaching team does with the
            information that comes back from your training.
          </p>
          <p>
            We are honest about what we know and what we don&apos;t. When we make a
            judgment call — and we make them constantly, because coaching individuals
            under real-world conditions is an exercise in informed judgment under
            uncertainty — we say so. When the evidence for something is mixed, we say
            so. When we change our mind based on how your training is going, we explain
            why.
          </p>
          <p>
            Trust is built not by claiming certainty but by being honest about the basis
            for every recommendation. That is how Runaid coaches.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Who built this
          </h2>
          <p>
            Runaid is built by Simon Lindgren — a CTO and product leader by profession, a
            self-coached runner by obsession.
          </p>
          <p>
            The professional background matters for how the product works: a decade
            building digital products at startups and scaleups in Stockholm, several years
            integrating AI into clinical decision-making in the med-tech space, and enough
            time spent working alongside doctors and physiologists to develop a genuine
            understanding of the science beneath the coaching.
          </p>
          <p>
            The running background matters for why the product exists. Simon started
            running in late 2022 with a 56-minute 10k. Three and a half years later:
            16:56 for 5k, 34:53 for 10k, 1:18:13 for the half marathon, 2:55:35 for the
            marathon. All self-coached. All while working a demanding full-time job and
            raising a young family. No training camps, no professional support team, no
            life structured around running. Just structured, consistent training informed
            by a deep engagement with the physiology and coaching traditions that
            Runaid&apos;s articles describe.
          </p>
          <p>
            That progression is not elite. But it is the product of exactly the process
            Runaid is built to deliver: study the science, understand the coaching
            traditions, apply them to the specific individual, adapt based on what
            actually happens, and sustain the work over years. Runaid exists because that
            process — the reading, the reasoning, the integration of evidence and
            experience — should not require years of self-education. It should be
            accessible to any serious runner willing to train with intent.
          </p>
          <p>
            Simon is not a certified coach. Runaid does not rest its credibility on
            coaching credentials. It rests on the quality of the coaching philosophy, the
            depth of the physiological reasoning, and — ultimately — whether the product
            delivers results for the athletes who use it. The articles on this site lay
            out the thinking in full. The product is the test of whether that thinking
            translates into practice.
          </p>
          <p className="flex gap-4 text-base" style={{ fontFamily: 'var(--font-sans)' }}>
            <a
              href="https://www.strava.com/athletes/106875673"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline decoration-secondary/40 hover:decoration-secondary transition-colors"
            >
              Strava
            </a>
            <a
              href="https://www.linkedin.com/in/simon-lindgren-269102a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline decoration-secondary/40 hover:decoration-secondary transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>{/* end prose */}

        {/* Waitlist */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join the waitlist
          </h2>
          <p className="text-on-surface-variant mb-6">
            Runaid is in development. Join the list and we&apos;ll be in touch when
            it&apos;s ready.
          </p>
          <WaitlistForm />
          <p className="mt-3 text-sm text-muted-foreground">
            79 kr/month &middot; 49 kr/month at launch.
          </p>
        </div>
      </div>
    </div>
  )
}
