import Image from 'next/image'
import {
  Cog,
  Diff,
  DraftingCompass,
  FlaskConical,
  Hammer,
  Laptop,
  Leaf,
  Orbit,
  Pill
} from 'lucide-react'
import HeaderNavigationItem from '@/components/header/header-navigation-item'
import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Github } from '@/app/icons'
import { cn } from '@/lib/utils'
import { cursive } from '@/app/fonts'

const buttons = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Facultades',
    hrefs: [
      {
        label: 'Escuela Técnica Superior de Ingeniería',
        href: '/facultades/etsi',
        icon: <Cog />
      },
      {
        label: 'Escuela Técnica Superior de Arquitectura',
        href: '/facultades/etsa',
        icon: <DraftingCompass />
      },
      {
        label: 'Escuela Técnica Superior de Ingeniería de Edificación',
        href: '/facultades/etsie',
        icon: <Hammer />
      },
      {
        label: 'Escuela Técnica Superior de Ingeniería Informática',
        href: '/facultades/etsii',
        icon: <Laptop />
      },
      {
        label: 'Facultad de Biología',
        href: '/facultades/biologia',
        icon: <Leaf />
      },
      {
        label: 'Facultad de Farmacia',
        href: '/facultades/farmacia',
        icon: <Pill />
      },
      {
        label: 'Facultad de Física',
        href: '/facultades/fisica',
        icon: <Orbit />
      },
      {
        label: 'Facultad de Matemáticas',
        href: '/facultades/matematicas',
        icon: <Diff />
      },
      {
        label: 'Facultad de Química',
        href: '/facultades/quimica',
        icon: <FlaskConical />
      }
    ]
  },
  {
    label: 'Información',
    href: '/info'
  },
  {
    label: 'Repositorio',
    href: 'https://github.com/amoraschi/NoticiUS',
    icon: <Github />,
    external: true
  }
]

export default function Header () {
  return (
    <div
      className='p-4 shadow-lg rounded-md bg-white w-5/6'
    >
      <div
        className='flex flex-row gap-2 items-center'
      >
        <Image
          src='/logo.png'
          alt='Header'
          height={40}
          width={40}
          className='w-[40px] h-auto'
        />
        <div
          className='flex flex-col tracking-tighter'
        >
          <span
            className='text-2xl'
          >
            Notici
            <span
              className='text-palette-us font-semibold'
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
      <NavigationMenu
        className='mx-auto my-2'
      >
        <NavigationMenuList>
          {
            buttons.map((button, index) => (
              <HeaderNavigationItem
                key={index}
                {...button}
              />
            ))
          }
        </NavigationMenuList>
      </NavigationMenu>
      <span
        className={cn('flex justify-center text-2xl', cursive.className)}
      >
        La educación es la mejor defensa contra las noticias falsas.
      </span>
    </div>
  )
}
