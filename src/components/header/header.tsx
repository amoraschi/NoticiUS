import Image from 'next/image'
import { HeaderNavigation } from '@/components/header/header-navigation'

export default function Header () {
  return (
    <div
      className='h-min w-11/12 p-4 border-[1px] shadow-md rounded-md bg-white fixed'
    >
      <div
        className='flex items-center mb-2'
      >
        <Image
          src='/logo.png'
          alt='Header'
          height={40}
          width={40}
        />
        <div
          className='flex flex-col mx-2'
        >
          <span
            className='text-2xl tracking-tighter'
          >
            Notici
            <span
              className='font-bold text-2xl tracking-tighter text-palette-us'
            >
              US
            </span>
          </span>
          <span
            className='text-sm text-gray-500'
          >
            Noticias de la Universidad de Sevilla
          </span>
        </div>
      </div>
      <HeaderNavigation />
    </div>
  )
}
