import { parse } from 'node-html-parser'

export async function GET () {
  const res = await fetch('https://www.us.es/actualidad-de-la-us')

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

  return Response.json({
    news: news
  })
}
