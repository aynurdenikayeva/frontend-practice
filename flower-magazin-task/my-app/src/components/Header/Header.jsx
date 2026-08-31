import React from 'react'
import { ShoppingCart, UserRound, Menu } from 'lucide-react';


const Header = () => {
  return (
      <header className="w-full px-6 md:px-10 lg:px-16 py-6">
      <div className=" mx-auto flex items-center justify-between">

        <div className="text-2xl font-serif tracking-tight">
          GREENMIND
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm">
          <a href="#" className="font-semibold">
            Home
          </a>

          <a href="#" className="text-gray-500 hover:text-black">
            Products
          </a>

          <a href="#" className="text-gray-500 hover:text-black">
            Contacts
          </a>
        </nav>

        <div className="flex items-center gap-6">
         <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>

          <div className="h-5 w-px bg-gray-400" />

          <i class="fa-solid fa-bars"></i>
        </div>

      </div>
    </header>
  )
}

export default Header
