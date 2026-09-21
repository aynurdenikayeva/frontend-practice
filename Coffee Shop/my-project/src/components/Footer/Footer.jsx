import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#351C0F] pt-16 pb-8 px-4 md:px-8 w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left border-b border-white/10 pb-8">
          <h2 className="text-white text-3xl font-bold tracking-wide">
            Coffee Shop
          </h2>
          <a href='#' className="text-[#E9E9E9]/80 text-lg italic max-w-xs">
            One Stop | One Heart | One Cup
          </a>
        </div>

        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            <li>
              <button type="button" className="px-6 py-3 text-[#351C0F] text-base font-semibold rounded-full cursor-pointer bg-[#E9E9E9] hover:bg-white transition-colors">
                Our Company
              </button>
            </li>
            <li>
              <button type="button" className="px-6 py-3 text-[#351C0F] text-base font-semibold rounded-full cursor-pointer bg-[#E9E9E9] hover:bg-white transition-colors">
                Our Coffee
              </button>
            </li>
            <li>
              <button type="button" className="px-6 py-3 text-[#351C0F] text-base font-semibold rounded-full cursor-pointer bg-[#E9E9E9] hover:bg-white transition-colors">
                Our Pastry
              </button>
            </li>
          </ul>
        </nav>

        <div className="text-center md:text-left pt-4">
          <p className="text-sm text-[#E9E9E9]/60">
            &copy; {new Date().getFullYear()} Coffee Shop. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
