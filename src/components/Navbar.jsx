// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white'>
      {/* START LOGO */}
      <Link href={'/'} className='flex items-center gap-1'>
        {/* <Image src={'/logo.svg'} alt={'logo'} width={"60"} height={"60"} /> */}
        <p className='text-3xl text-gray-700'>Next Shop</p>
      </Link>
      {/* END LOGO */}

      <div className='flex items-center space-x-2.5 text-sm'>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900">Home page</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900">All products</Link>
        </nav>
        <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
          Log in
        </button>
        <button className='button bg-transparent border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white'>
          Sign Up
        </button>
      </div>
    </header>
  )
}

export default Navbar