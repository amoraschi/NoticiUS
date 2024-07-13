import HeaderNavigationItem from '@/components/header/header-navigation-item'
import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Github } from '@/app/icons'
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
        href: '/facultades/etsia',
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
    icon: <Github />
  }
]

export function HeaderNavigation () {
  return (
    <NavigationMenu
      className='mx-auto'
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
  )
}
