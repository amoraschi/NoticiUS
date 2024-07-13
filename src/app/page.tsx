import Front from '@/components/front/front'
import Header from '@/components/header/header'

export default function Home () {
  return (
    <main
      className='min-h-screen flex justify-center p-8'
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <Header />
      {/* <Front /> */}
    </main>
  )
}
