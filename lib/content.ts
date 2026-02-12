import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type ContentType = 'products' | 'writing' | 'innovation'

export type ContentItem = {
  slug: string
  meta: Record<string, any>
  content: string
}

function dirFor(type: ContentType) {
  return path.join(process.cwd(), 'content', type)
}

export function getAll(type: ContentType): ContentItem[] {
  const dir = dirFor(type)
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []

  return files
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, '')
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const parsed = matter(raw)

      return {
        slug,
        meta: parsed.data ?? {},
        content: parsed.content ?? '',
      }
    })
    .sort((a, b) => {
      const ad = a.meta?.date ? new Date(a.meta.date).getTime() : 0
      const bd = b.meta?.date ? new Date(b.meta.date).getTime() : 0
      return bd - ad
    })
}

export function getBySlug(type: ContentType, slug: string): ContentItem {
  const filePathMdx = path.join(dirFor(type), `${slug}.mdx`)
  const filePathMd = path.join(dirFor(type), `${slug}.md`)

  const filePath = fs.existsSync(filePathMdx) ? filePathMdx : filePathMd
  if (!fs.existsSync(filePath)) throw new Error(`Not found: ${type}/${slug}`)

  const raw = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(raw)

  return {
    slug,
    meta: parsed.data ?? {},
    content: parsed.content ?? '',
  }
}

