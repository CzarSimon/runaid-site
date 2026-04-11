import Link from 'next/link'
import { Target, BarChart3, Activity, Dumbbell, MessageCircle } from 'lucide-react'
import WaitlistForm from '@/components/waitlist-form'
import ArticleCard from '@/components/article-card'
import { getAllArticles } from '@/lib/articles'

const features = [
  {
    icon: Target,
    heading: 'Personalised training plans that adapt',
    description:
      'Your plan changes as you develop. Not a static schedule — a living structure that responds to how your training is going.',
  },
  {
    icon: BarChart3,
    heading: 'Workout assessment from your coaching team',
    description:
      'Every session is reviewed. Your coaching team reads your data and tells you what it means for your training.',
  },
  {
    icon: Activity,
    heading: 'Strava integration',
    description:
      'Your runs sync automatically. No manual logging, no friction between running and coaching.',
  },
  {
    icon: Dumbbell,
    heading: 'Strength and conditioning programming',
    description:
      'Gym work designed to improve running economy and reduce injury risk, integrated with your running load.',
  },
  {
    icon: MessageCircle,
    heading: 'Conversational coaching',
    description:
      'Ask questions, flag concerns, discuss your training. Your coaching team is accessible, not just present.',
  },
]

const principles = [
  {
    heading: 'Consistency is the master principle',
    description:
      'Consistent, uninterrupted training over months and years is the primary driver of improvement. Every decision we make is evaluated against it.',
  },
  {
    heading: 'Every session has a purpose',
    description:
      'There are no junk sessions in a well-designed plan. Easy runs are not lesser training — they are the answer to a specific question about how to build fitness efficiently.',
  },
  {
    heading: 'Train the limiter',
    description:
      'Improvement comes from identifying which physiological variable is the current constraint and directing training toward it. A generic plan is structurally suboptimal.',
  },
  {
    heading: 'Honesty over comfort',
    description:
      'When you need to hear a hard truth about your goal or your training, we say so. Clearly, constructively, and with care for your long-term development.',
  },
]

export default async function HomePage() {
  const articles = await getAllArticles()
  const featuredArticles = articles.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        style={{ backgroundColor: '#000a1e' }}
        className="text-white py-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              A coaching team that adapts to you.
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
              Runaid combines sports science, training tradition, and your individual
              response to build training that works — and keeps working as you develop.
              Not a plan generator. A coaching relationship.
            </p>
            <div id="waitlist" className="max-w-md">
              <WaitlistForm light />
              <p className="mt-3 text-sm text-white/50">
                79 kr/month &middot; 49 kr/month at launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Runaid Is */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What Runaid is
            </h2>
            <div className="space-y-4 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Most training apps give you a plan. Runaid gives you coaching. The
                difference is responsiveness — to how your training is going, to how
                your life is going, and to how your body responds to the work you&apos;re
                putting in.
              </p>
              <p>
                The coaching team reviews your sessions, tracks patterns across weeks,
                and adjusts your training when the evidence warrants it. When you run a
                threshold session 15 seconds per kilometre too fast, they tell you why
                that matters and what to do differently next time. When a stretch of
                hard work starts to accumulate more fatigue than adaptation, they pull
                the load back before you break down.
              </p>
              <p>
                Runaid is built on the understanding that good coaching requires three
                things: knowledge of the science, familiarity with what has worked
                across many athletes, and close attention to the individual in front of
                you. The science provides the foundation. The coaching tradition extends
                it. You complete it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the coaching works */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            How the coaching works
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-xl">
            Four principles that govern every training plan we produce.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {principles.map((p) => (
              <div key={p.heading} className="bg-white ring-1 ring-foreground/10 rounded-xl p-6">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {p.heading}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/articles/how-we-coach"
            className="text-sm font-medium text-secondary hover:underline"
          >
            Read how we coach in full &rarr;
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What&apos;s included
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-xl">
            Everything you need. Nothing you don&apos;t.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.heading}
                  className="bg-background ring-1 ring-foreground/10 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{f.heading}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {f.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Thinking Behind It */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The thinking behind it
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">
            We&apos;ve written in detail about the science and principles that underpin
            how Runaid coaches. These articles are the foundation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <Link
            href="/articles"
            className="text-sm font-medium text-secondary hover:underline"
          >
            All articles &rarr;
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="final-cta"
        style={{ backgroundColor: '#000a1e' }}
        className="py-24 text-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Training that thinks like a coach.
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Runaid is in development. Join the waitlist and we&apos;ll let you know
              when it&apos;s ready — and what you can expect when it is.
            </p>
            <div className="max-w-md">
              <WaitlistForm light />
              <p className="mt-3 text-sm text-white/50">
                79 kr/month &middot; 49 kr/month at launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
