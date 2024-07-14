'use client'

import { useEffect, useState } from 'react'
import { firstUpperCase } from '@/lib/utils'
import { CloudDownload, Disc3 } from 'lucide-react'
import FrontNews from './front-news'

export default function Front () {
  const [news, setNews] = useState<any[]>([])
  const weekDay = firstUpperCase(new Date().toLocaleDateString('es-ES', {
    weekday: 'long'
  }))

  const date = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    if (news.length > 0) {
      return
    }

    const abortController = new AbortController()
    fetch('/api', {
      signal: abortController.signal
    }).then((res) => {
      if (!res.ok) {
        return
      }

      return res.json()
    }).then((data) => {
      if (data == null) {
        return
      }

      console.log(data)
      setNews(data.news)
    })

    return () => {
      abortController.abort('Unmounted')
    }
  }, [])

  return (
    <div
      className='flex items-center flex-col bg-white rounded-md w-2/3 mb-2'
    >
      <div
        className='p-4 w-full'
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
      <div>
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
      </div>
    </div>
  )
}
