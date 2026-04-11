import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import WaitlistForm from '@/components/waitlist-form'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Runaid is in development. One plan, two price points. 49 kr/month at launch, 79 kr/month regular.',
}

const included = [
  'Personalised training plans that adapt as you develop',
  'Workout assessment from your coaching team',
  'Strava integration — automatic session sync',
  'Strength and conditioning programming',
  'Conversational coaching — ask questions, flag concerns',
  'Training plan adjustments based on your actual response',
]

export default function PricingPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Pricing
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            One plan. Everything included. No tiers, no add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Launch price */}
          <div className="bg-secondary text-white rounded-xl p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
              Launch price
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span
                className="text-5xl font-bold"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                49
              </span>
              <span className="text-xl font-medium">kr</span>
              <span className="text-white/70 ml-1">/month</span>
            </div>
            <p className="text-white/70 text-sm mb-8">
              For early members who join before launch.
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regular price */}
          <div className="bg-white ring-1 ring-foreground/10 rounded-xl p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Regular price
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span
                className="text-5xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                79
              </span>
              <span className="text-xl font-medium text-foreground">kr</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">
              Standard pricing after the launch period.
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        <div className="bg-white ring-1 ring-foreground/10 rounded-xl p-6 mb-12 max-w-2xl">
          <h2 className="font-semibold mb-2 text-foreground">A note on where we are</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Runaid is in active development. The product is not yet available. The
            waitlist is for people who want to be among the first to use it when it is.
            Early members will get access at the launch price for as long as they
            remain subscribed. We&apos;ll be in touch before we open access.
          </p>
        </div>

        {/* Waitlist form */}
        <div className="max-w-md">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join the waitlist
          </h2>
          <p className="text-on-surface-variant mb-6 text-sm">
            Get notified when Runaid launches — and lock in the early member price.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  )
}
