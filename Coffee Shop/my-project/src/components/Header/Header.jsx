import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <nav className=" w-full flex py-2 px-4 md:px-8 bg-[#351C0F] border-b border-slate-300 min-h-17 relative z-20" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
        <div className="flex-1 flex">
          <p className='text-white'>Coffee Shop</p>
        </div>

        <ul className="flex flex-col gap-8 font-semibold text-sm text-white lg:flex-row max-lg:p-6">
          <li>
            <Link to="/product" >
              Product
            </Link>
          </li>
        </ul>

        <div>
          <a href="#" className='text-white'>Checkout</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
