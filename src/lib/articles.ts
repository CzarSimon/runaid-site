import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleFrontmatter {
  title: string
  subtitle: string
  slug: string
  order: number
}

export interface ArticleMeta extends ArticleFrontmatter {
  readingTime: number
}

export interface Article extends ArticleMeta {
  content: string
}

function calculateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / 200)
}

export function getAllArticles(): ArticleMeta[] {
  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const filePath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        title: data.title as string,
        subtitle: data.subtitle as string,
        slug: data.slug as string,
        order: data.order as number,
        readingTime: calculateReadingTime(content),
      }
    })

  return articles.sort((a, b) => a.order - b.order)
}

export function getArticleBySlug(slug: string): Article | null {
  const fileNames = fs.readdirSync(articlesDirectory)

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.mdx')) continue

    const filePath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    if (data.slug === slug) {
      return {
        title: data.title as string,
        subtitle: data.subtitle as string,
        slug: data.slug as string,
        order: data.order as number,
        readingTime: calculateReadingTime(content),
        content,
      }
    }
  }

  return null
}

export function getNextArticle(currentOrder: number): ArticleMeta | null {
  const articles = getAllArticles()
  return articles.find((a) => a.order === currentOrder + 1) ?? null
}

export function getAllArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug)
}
