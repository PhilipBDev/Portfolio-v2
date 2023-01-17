import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-blue-500 flex flex-row text-center justify-between py-4 px-6 shadow w-full text-xl'>
      <div>
        <Link href='/' passHref>
          <h2 className='text-white font-bold'>PhilipBDev</h2>
        </Link>
      </div>
      <div className='flex'>
        <Link href='/' passHref>
          <h2 className='text-white font-bold px-5 hover:text-black'>Home</h2>
        </Link>
        <Link href='/blog' passHref>
          <h2 className='text-white font-bold px-5 hover:text-black'>Blog</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Header
