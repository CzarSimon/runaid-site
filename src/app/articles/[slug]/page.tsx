import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllArticleSlugs, getArticleBySlug, getNextArticle } from '@/lib/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) return {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.runaid.app'

  return {
    title: article.title,
    description: article.subtitle,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.subtitle,
      url: `${siteUrl}/articles/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle,
    },
  }
}

const mdxComponents = {
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith('/')) {
      return (
        <Link
          href={href}
          className="text-secondary underline decoration-secondary/40 hover:decoration-secondary transition-colors"
          {...props}
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary underline decoration-secondary/40 hover:decoration-secondary transition-colors"
        {...props}
      >
        {children}
      </a>
    )
  },
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const nextArticle = getNextArticle(article.order)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.runaid.app'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle,
    publisher: {
      '@type': 'Organization',
      name: 'Runaid',
      url: siteUrl,
    },
    url: `${siteUrl}/articles/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          {/* Header */}
          <header className="mb-12">
            <Link
              href="/articles"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Articles
            </Link>
            <h1
              className="text-4xl font-bold leading-tight mb-3 mt-6"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '2.125rem' }}
            >
              {article.title}
            </h1>
            <p
              className="text-xl text-muted-foreground leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
            >
              {article.subtitle}
            </p>
            <p className="text-sm text-muted-foreground">{article.readingTime} min read</p>
          </header>

          {/* Body */}
          <div
            className="prose-article"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: 'var(--foreground)',
            }}
          >
            <style>{`
              .prose-article p {
                margin-bottom: 1.25em;
              }
              .prose-article h2 {
                font-family: var(--font-serif);
                font-weight: 700;
                font-size: 1.75rem;
                margin-top: 2.5em;
                margin-bottom: 0.75em;
                line-height: 1.3;
                color: var(--foreground);
              }
              .prose-article h3 {
                font-family: var(--font-serif);
                font-weight: 700;
                font-size: 1.375rem;
                margin-top: 2em;
                margin-bottom: 0.5em;
                line-height: 1.4;
                color: var(--foreground);
              }
              .prose-article ul {
                list-style: disc;
                padding-left: 1.5em;
                margin-bottom: 1.25em;
              }
              .prose-article ol {
                list-style: decimal;
                padding-left: 1.5em;
                margin-bottom: 1.25em;
              }
              .prose-article li {
                margin-bottom: 0.5em;
              }
              .prose-article strong {
                font-weight: 700;
                color: var(--foreground);
              }
              .prose-article em {
                font-style: italic;
              }
              .prose-article hr {
                border: none;
                border-top: 1px solid var(--border);
                margin: 2.5em 0;
              }
              .prose-article blockquote {
                border-left: 3px solid var(--secondary);
                padding-left: 1em;
                margin-left: 0;
                color: var(--on-surface-variant);
                font-style: italic;
              }
              .prose-article code {
                font-family: var(--font-mono, monospace);
                font-size: 0.875em;
                background: var(--muted);
                padding: 0.125em 0.3em;
                border-radius: 0.25em;
              }
              /* References section */
              .prose-article h2:last-of-type ~ p,
              .prose-article h2:last-of-type ~ ul,
              .prose-article h2:last-of-type ~ h3 {
                font-size: 0.9375rem;
                color: var(--on-surface-variant);
              }
            `}</style>
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>

          {/* Continue reading */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link
                href="/articles"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                &larr; All articles
              </Link>
              {nextArticle ? (
                <Link
                  href={`/articles/${nextArticle.slug}`}
                  className="text-sm font-medium text-secondary hover:underline text-right"
                >
                  Next: {nextArticle.title} &rarr;
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
