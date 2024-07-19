'use client'

import { useEffect, useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { firstUpperCase } from '@/lib/utils'
import FrontNews from '@/components/front/front-news'
import FrontPagination from '@/components/front/front-pagination'

export default function Front () {
  const [news, setNews] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [maxPage, setMaxPage] = useState(0)
  const [loading, setLoading] = useState(false)
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
        setLoading(true)
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

        setNews(data.news)
        setMaxPage(data.last)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }

    fetchNews()

    return () => {
      setLoading(false)
      abortController.abort('Unmounted')
    }
  }, [page])

  return (
    <div
      className='flex items-center flex-col bg-white rounded-md w-5/6 mb-2 p-4'
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
            className='grid grid-cols-4 grid-rows-2 pb-4 w-full'
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
          <RefreshCw
            className='w-8 h-8 my-8 animate-spin'
            strokeWidth={1}
          />
        )
      }
      <FrontPagination
        page={page}
        setPage={setPage}
        last={maxPage}
        loading={loading}
      />
    </div>
  )
}
