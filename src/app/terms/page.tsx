import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Runaid website.',
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Terms of Use
        </h1>
        <p className="text-muted-foreground mb-12 text-sm">Last updated: April 2026</p>

        <div
          className="space-y-8 text-foreground leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem' }}
        >
          <section>
            <h2 className="text-xl font-bold mb-3">1. Informational site</h2>
            <p>
              The website at www.runaid.app is a pre-launch marketing site. No service
              is currently being provided through this website. By using this site you
              acknowledge that it is informational only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Use of the site</h2>
            <p>
              You may use this site for lawful purposes only. You may not use the site
              in any way that is unlawful, harmful, fraudulent, or that infringes the
              rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              3. Intellectual property
            </h2>
            <p>
              All content on this site — including text, articles, the Runaid name, and
              the Runaid logo — is the property of Runaid and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or use any
              content from this site without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. No service guarantee</h2>
            <p>
              Joining the waitlist does not guarantee access to the Runaid service.
              Joining the waitlist does not create any contractual obligation on the part
              of Runaid to provide a service, maintain the listed pricing, or launch on
              any particular timeline. We will communicate material changes to waitlist
              members before they take effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Disclaimer</h2>
            <p>
              The content on this site is provided for informational purposes only.
              Nothing on this site constitutes medical advice, professional coaching
              advice, or a substitute for professional guidance. Running training involves
              physical risk. Consult a medical professional before beginning any new
              exercise programme.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Runaid shall not be
              liable for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of, or inability to use, this website or the
              content it contains. Runaid&apos;s total liability for any claim arising
              from your use of this site shall not exceed zero, as no service is provided
              through this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. External links</h2>
            <p>
              This site may contain links to third-party websites. Runaid has no control
              over and assumes no responsibility for the content, privacy policies, or
              practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Governing law</h2>
            <p>
              These terms are governed by the laws of Sweden. Any disputes arising from
              the use of this website shall be subject to the exclusive jurisdiction of
              the Swedish courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Changes to these terms</h2>
            <p>
              We may update these terms as the Runaid service develops. Continued use of
              the site after changes are published constitutes your acceptance of the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">10. Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
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
