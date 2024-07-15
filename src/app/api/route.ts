import { parse } from 'node-html-parser'

const lastPageRegex = /page=(\d+)/

export async function GET (request: Request) {
  const url = new URL(request.url)
  const page = url.searchParams.get('page') ?? '0'
  const res = await fetch(`https://www.us.es/actualidad-de-la-us?page=${page}`)

  if (!res.ok) {
    return Response.error()
  }

  const text = await res.text()
  const html = parse(text)

  const blocks = html.querySelectorAll('#views-bootstrap-noticias-de-la-us-cuadricula-block-1 > div > div')
  const news = blocks.map(block => {
    return {
      image: 'https://www.us.es' + block.querySelector('img')?.getAttribute('src') ?? '',
      title: block.querySelector('h3.card-title')?.text.trim() ?? '',
      subtitle: block.querySelector('.card-text')?.text.trim() ?? '',
      href: 'https://www.us.es' + block.querySelector('h3.card-title > a')?.getAttribute('href') ?? ''
    }
  })

  const lastPageHref = html.querySelector('.pager__item--last > a')?.getAttribute('href') ?? ''
  const lastPageMatch = lastPageHref.match(lastPageRegex)
  const last = lastPageMatch ? parseInt(lastPageMatch[1]) : 0

  return Response.json({
    news,
    last
  })
}
