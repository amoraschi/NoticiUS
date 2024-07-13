import { cursive } from '@/app/fonts'
import { cn, firstUpperCase } from '@/lib/utils'

export default function Front () {
  return (
    <div
      className='absolute top-48 flex items-center bg-white rounded-md w-11/12'
    >
      <div
        className='px-2 py-4 w-full'
      >
        <span
          className={cn('flex justify-center w-full mb-2 text-2xl', cursive.className)}
        >
          La educación es la mejor defensa contra las noticias falsas.
        </span>
        <span
          className='border-2 border-black p-2 text-lg font-semibold'
        >
          {firstUpperCase(new Date().toLocaleDateString('es-ES', {
            weekday: 'long'
          }))}
        </span>
        <span
          className='bg-black border-2 border-black text-white p-2 text-lg font-semibold'
        >
          {new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
    </div>
  )
}
