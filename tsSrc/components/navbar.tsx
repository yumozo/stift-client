import { Route } from 'react-router'
import React from 'react'
import DropDown from './drop-down'

const Navbar = () => {
  return (
    <nav
      className="xl:w-1/2 w-3/5 relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#00000000] mb-3"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center">
          <div
            className="py-2 pl-0 xl:pl-8
            text-2xl font-bold leading-relaxed inline-block
            whitespace-nowrap text-black"
            id='logo'
          >
            <a href='/'>
              Stift
            </a>
          </div>
          <div className='py-2 pr-0 xl:pr-8'>
            <DropDown />
          </div>
          {/* <ul className="flex flex-row list-none ">
            <NextLink href="/record" passHref scroll={false}>
              <a className="text-black px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug hover:opacity-75">
                Make new
              </a>
            </NextLink>
            <NextLink href="/" passHref scroll={false}>
              <a className="text-black px-3 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75">
                Archive
              </a>
            </NextLink>
            <NextLink href="/profile" passHref scroll={false}>
              <a className="text-black px-3 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75">
                Profile
              </a>
            </NextLink>
          </ul> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar