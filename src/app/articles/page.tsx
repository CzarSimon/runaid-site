import type { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/article-card'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'The science, principles, and thinking behind Runaid\'s approach to training. Written for runners who want to understand what they\'re doing and why.',
}

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Articles
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            The science, principles, and thinking behind Runaid&apos;s approach to
            training. Written for runners who want to understand what they&apos;re doing
            and why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
