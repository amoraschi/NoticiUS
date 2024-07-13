import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

interface HeaderButtonProps {
  label: string
  href?: string
  icon?: React.ReactNode
  hrefs?: Array<{
    label: string
    href: string
    icon: React.ReactNode
  }>
}

export default function HeaderNavigationItem ({
  label,
  href,
  icon,
  hrefs
}: HeaderButtonProps) {
  if (href == null) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          {label}
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className='flex gap-2 py-2 flex-col'
        >
          <ul>
            {
              hrefs?.map((href, index) => (
                <Link
                  key={index}
                  href={href.href}
                >
                  <Button
                    variant='link'
                    className='text-md'
                  >
                    <span
                      className='flex items-center mr-2 w-4 h-4 text-gray-500'
                    >
                      {href.icon}
                    </span>
                    {href.label}
                  </Button>
                </Link>
              ))
            }
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }
  
  return (
    <NavigationMenuItem>
      <Link
        href={href}
      >
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
        >
          {label}
          {
            icon && (
              <span
                className='ml-2 w-4 h-4 text-gray-500'
              >
                {icon}
              </span>
            )
          }
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
