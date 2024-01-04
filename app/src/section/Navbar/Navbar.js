"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky sm:top-0 md:top-3 z-10 flex items-center justify-between flex-wrap p-8 mx-auto max-w-screen-xl lg:px-20 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 md:mt-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link className="font-semibold text-2xl tracking-tight" href="/">Abdul Hakkeem P A</Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-base lg:flex-grow lg:flex lg:justify-end lg:space-x-7">
          {/* <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white">
              Home
          </Link> */}
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-4">
              About
          </Link>
          <Link href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white ">
              Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}
