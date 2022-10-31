import Link from 'next/link'
export default function Navbar(){
  return(
    <>
      <nav className="bg-white shadow dark:bg-gray-800 sticky top-0 z-50">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link href='/'>
          <a className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6">home</a>
        </Link>
        <Link href='/products'>
          <a className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200  mx-1.5 sm:mx-6">Products</a>
        </Link>
        </div>
      </nav>
    </>
  )
}