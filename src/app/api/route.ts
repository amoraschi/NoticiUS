const lastPageRegex = /pager__item--last">\n\s+<a href=".+&amp;page=(.+)" title/
const htmlRegex = /<div class="col col-xs-12 col-sm-4 col-md-3 col-lg-3 "><div class="views-field views-field-nothing"><span class="field-content"><div class="card"><img src="(.+)" alt="Imagen de la Noticia" \/><div class="card-body"><h6 class="card-title">(.+)<span> \| <\/span> <a href=".+" hreflang="es">(.+)<\/a> <\/h6><h3 class="card-title"><a href="(.+)" hreflang="es">(.+)<\/a><\/h3><h4 class="card-text">(.+)\n<\/h4>/g

export async function GET (request: Request) {
  const url = new URL(request.url)
  const page = url.searchParams.get('page') ?? '0'

  const form = new FormData()
  form.append('view_display_id', 'block_1')
  form.append('field_etiquetas_target_id', 'All')
  form.append('page', page)
  form.append('view_name', 'noticias_de_la_us_cuadricula')

  const res = await fetch('https://www.us.es/views/ajax?_wrapper_format=drupal_ajax', {
    method: 'POST',
    body: form
  })

  if (!res.ok) {
    return Response.error()
  }

  const json = await res.json()
  const html = (json[3].data.replaceAll(/\n\s+/g, '')).matchAll(htmlRegex)
  const blocks = new Array(...html)

  const news = blocks.map(block => {
    return {
      image: 'https://www.us.es' + block[1],
      date: block[2],
      category: block[3],
      href: 'https://www.us.es' + block[4],
      title: block[5],
      subtitle: block[6]
    }
  })

  const lastPageMatch = json[3].data.match(lastPageRegex)
  const last = lastPageMatch ? parseInt(lastPageMatch[1]) : 0

  return Response.json({
    news,
    last
  })
}
