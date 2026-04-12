import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/logos/runaid_logo_navy_transparent.svg"
              alt="Runaid"
              width={180}
              height={54}
              priority
              className="h-12 w-auto"
            />
            <span
              className="text-xl font-semibold"
              style={{ fontFamily: 'var(--font-sans)', color: '#000a1e' }}
            >
              Runaid
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/articles"
              className="text-sm font-medium text-on-surface-variant hover:text-foreground transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-on-surface-variant hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-on-surface-variant hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile: just logo + CTA */}
          <div className="md:hidden">
            <Link
              href="/#waitlist"
              className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
