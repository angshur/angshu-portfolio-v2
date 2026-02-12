import Link from 'next/link'
import { Container, Section, H1, Lead, Card, Badge } from '@/components/ui'
import { getAll } from '@/lib/content'

export const metadata = { title: 'Products' }

export default function ProductsPage() {
  const items = getAll('products')

  return (
    <Section>
      <Container>
        <H1>Products</H1>
        <Lead className="mt-4">
          Flagship systems and platforms I’ve built across AI, data infrastructure, and enterprise marketing workflows.
        </Lead>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item.slug} href={`/products/${item.slug}`} className="block">
              <Card className="group">
                <p className="text-lg font-semibold">{item.meta.title ?? item.slug}</p>
                {item.meta.description ? (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.meta.description}</p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.meta.tags?.slice(0, 4).map((t: string) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white">
                  Read case study →
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}

