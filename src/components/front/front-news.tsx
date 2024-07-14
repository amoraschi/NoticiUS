import Link from 'next/link'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

interface FrontNewsProps {
  title: string
  subtitle: string
  image: string
  href: string
}

export default function FrontNews ({
  title,
  subtitle,
  image,
  href
}: FrontNewsProps) {
  const date = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  })

  return (
    <Dialog
    >
      <DialogTrigger
        asChild
      >
        <li
          className='relative overflow-hidden cursor-pointer first:col-span-2 first:row-span-2 h-fit hover:shadow-lg transition duration-300'
        >
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className='w-full grayscale hover:grayscale-0 hover:scale-110 transition duration-300'
          />
          <span
            className='absolute pointer-events-none bottom-2 left-2 text-lg leading-tight drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,1)] text-white font-bold line-clamp-2'
          >
            <span
              className='text-sm font-normal bg-black bg-opacity-50 p-0.5'
            >
              {date}
            </span>
            <br />
            {title}
          </span>
        </li>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <span>
            {date}
          </span>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogDescription>
            {subtitle}
          </DialogDescription>
        </DialogHeader>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className='w-full rounded-md'
        />
        <Link
          href={href}
          target='_blank'
          className='text-sm hover:underline w-fit'
        >
          Leer más
        </Link>
      </DialogContent>
    </Dialog>
  )
}
