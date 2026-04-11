import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Runaid handles your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12 text-sm">Last updated: April 2026</p>

        <div
          className="space-y-8 text-foreground leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem' }}
        >
          <section>
            <h2 className="text-xl font-bold mb-3">1. Who we are</h2>
            <p>
              Runaid is a service for distance runners. The website at www.runaid.app is
              currently a pre-launch marketing site. The controller of your personal data
              is Runaid. For questions about your data, contact us at{' '}
              <a href="mailto:hello@runaid.app" className="text-secondary underline">
                hello@runaid.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Data we collect</h2>
            <p>
              At this stage, the only personal data we collect is your email address,
              submitted voluntarily when you join the waitlist. We do not collect any
              other personal data from visitors to this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Why we collect it</h2>
            <p>
              Your email address is collected solely to notify you when the Runaid
              service is ready to launch and to share relevant updates in the meantime.
              We will not use it for any other purpose without your explicit consent.
            </p>
            <p className="mt-3">
              The legal basis for this processing is your consent (GDPR Article 6(1)(a)),
              given when you submit the waitlist form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Data processor</h2>
            <p>
              We use Kit (formerly ConvertKit) to store and manage email addresses. Kit
              acts as a data processor on our behalf. Kit&apos;s privacy policy is
              available at{' '}
              <a
                href="https://kit.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline"
              >
                kit.com/privacy
              </a>
              . Your data is stored on Kit&apos;s infrastructure, which may involve
              transfers outside the EEA. Kit maintains Standard Contractual Clauses for
              such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. How long we keep your data</h2>
            <p>
              We will retain your email address until the Runaid service launches, or
              until you request deletion — whichever comes first. If you request removal
              from the waitlist, we will delete your data within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Your rights under GDPR</h2>
            <p>If you are located in the EEA, you have the following rights:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>Access:</strong> You can request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Rectification:</strong> You can ask us to correct inaccurate data.
              </li>
              <li>
                <strong>Erasure:</strong> You can ask us to delete your data.
              </li>
              <li>
                <strong>Portability:</strong> You can request your data in a
                machine-readable format.
              </li>
              <li>
                <strong>Withdraw consent:</strong> You can withdraw your consent at any
                time. This does not affect the lawfulness of processing before withdrawal.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email{' '}
              <a href="mailto:hello@runaid.app" className="text-secondary underline">
                hello@runaid.app
              </a>
              . We will respond within 30 days. You also have the right to lodge a
              complaint with your national data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Cookies</h2>
            <p>
              This website does not use tracking cookies or analytics. We may use
              essential cookies required for basic site functionality, but we do not
              use advertising cookies or third-party tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Changes to this policy</h2>
            <p>
              We may update this policy as the Runaid service develops and as the scope
              of data processing changes. Material changes will be communicated to
              waitlist members by email before they take effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Contact</h2>
            <p>
              For any questions about this policy or about how we handle your data,
              contact us at{' '}
              <a href="mailto:hello@runaid.app" className="text-secondary underline">
                hello@runaid.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
