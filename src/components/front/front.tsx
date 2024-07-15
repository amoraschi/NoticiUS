'use client'

import { useEffect, useState } from 'react'
import { CloudDownload } from 'lucide-react'
import { firstUpperCase } from '@/lib/utils'
import FrontNews from '@/components/front/front-news'
import FrontPagination from '@/components/front/front-pagination'

export default function Front () {
  const [news, setNews] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [maxPage, setMaxPage] = useState(0)
  const weekDay = firstUpperCase(new Date().toLocaleDateString('es-ES', {
    weekday: 'long'
  }))

  const date = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    const abortController = new AbortController()
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api?page=${page}`, {
          signal: abortController.signal
        })

        if (!res.ok) {
          return
        }

        const data = await res.json()

        if (data == null) {
          return
        }

        console.log(data)
        setNews(data.news)
        setMaxPage(data.last)
      } catch (err) {
        console.error(err)
      }
    }

    fetchNews()

    return () => {
      abortController.abort('Unmounted')
    }
  }, [page])

  return (
    <div
      className='flex items-center flex-col bg-white rounded-md w-2/3 mb-2 p-4'
    >
      <div
        className='pb-4 w-full'
      >
        <span
          className='p-2 text-sm font-semibold'
        >
          {weekDay}
        </span>
        <span
          className='bg-palette-us text-white p-2 text-sm font-semibold'
        >
          {date}
        </span>
      </div>
      {
        news.length > 0 ? (
          <ul
            className='grid grid-cols-4 grid-rows-2 px-4 pb-4'
          >
            {
              news.map((n, i) => (
                <FrontNews
                  key={i}
                  {...n}
                />
              ))
            }
          </ul>
        ) : (
          <CloudDownload
            className='w-8 h-8 my-8 animate-bounce text-palette-us'
            strokeWidth={1}
          />
        )
      }
      <FrontPagination
        page={page}
        setPage={setPage}
        last={maxPage}
      />
    </div>
  )
}
