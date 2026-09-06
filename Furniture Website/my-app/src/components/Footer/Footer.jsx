import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Loqo / Başlıq hissəsi */}
        <div className="mb-12">
          <p className=" font-sans text-4xl font-bold text-white  ">Soudemy</p>
        </div>

        {/* Grid Struktur */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8">
          
          {/* 1. Sütun: About Us */}
          <div>
            <h3 className="text-[#E9E9E9] font-semibold text-sm mb-6">About Us</h3>
            <p className="text-[#ABABAB] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam
            </p>
          </div>

          {/* 2. Sütun: Useful Links */}
          <div>
            <h3 className="text-[#E9E9E9] font-semibold text-sm mb-6">Useful</h3>
            <ul className="space-y-4 text-[#ABABAB] text-sm font-normal">
              {Array(6).fill("Download product").map((text, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sütun: Social Media / Download */}
          <div>
            <h3 className="text-[#E9E9E9] font-semibold text-sm mb-6">Download</h3>
            <ul className="space-y-4 text-[#ABABAB] text-sm font-normal">
              {["Instagram", "Facebook Integration Services", "Twitter Glossary", "Pinterest", "Youtube"].map((text, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Sütun: Call Center */}
          <div>
            <h3 className="text-[#E9E9E9] font-semibold text-sm mb-6">Call Center</h3>
            <p className="text-[#ABABAB] text-sm mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:soroushnorozyui@gmail.com" className="text-[#ABABAB] hover:text-white hover:underline text-sm w-fit transition-all">
                soroushnorozyui@gmail.com
              </a>
              <a href="tel:+1333555" className="text-[#ABABAB] hover:text-white hover:underline text-sm w-fit transition-all">
                +1 333 555
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
