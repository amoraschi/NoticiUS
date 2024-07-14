import Front from '@/components/front/front'
import Header from '@/components/header/header'

export default function Home () {
  return (
    <main
      className='min-h-screen min-w-screen'
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <div
        className='flex justify-center py-8'
      >
        <Header />
      </div>
      <div
        className='flex flex-grow justify-center'
      >
        <Front />
      </div>
    </main>
  )
}
