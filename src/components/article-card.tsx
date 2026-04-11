import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'

interface ArticleCardProps {
  article: ArticleMeta
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="h-full bg-white ring-1 ring-foreground/10 rounded-xl p-6 hover:ring-secondary/40 hover:shadow-sm transition-all">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Article {article.order}
          </span>
          <span className="text-xs text-muted-foreground">
            {article.readingTime} min read
          </span>
        </div>
        <h3
          className="text-lg font-bold leading-snug mb-2 group-hover:text-secondary transition-colors"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {article.title}
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {article.subtitle}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-secondary">
          Read article
          <svg
            className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
