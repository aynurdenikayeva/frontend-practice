import React from 'react';
import frame11 from '../../assets/frame 11.png';
import rectangle from '../../assets/Rectangle 2.png';
import vector1 from '../../assets/Vector 186.png';
import vector2 from '../../assets/Vector 187.png';
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[20px] bg-[#c4e0e2] flex flex-col md:flex-row items-center min-h-[450px] lg:min-h-[500px]">
          
       
          <div className="relative z-10 px-8 md:px-10 lg:px-12 py-10 md:w-[60%] lg:w-[50%] flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Buy your <br /> dream plants
            </h1>

           
            <div className="mt-7 flex items-center gap-8">
              <div>
                <p className="text-2xl font-medium text-gray-900">50+</p>
                <p className="mt-1 text-sm text-gray-600">Plant Species</p>
              </div>
              <div className="h-12 w-px bg-gray-400" />
              <div>
                <p className="text-2xl font-medium text-gray-900">100+</p>
                <p className="mt-1 text-sm text-gray-600">Customers</p>
              </div>
            </div>


            <div className="mt-10 flex w-full max-w-md items-center rounded-xl bg-white p-1 shadow-sm focus-within:ring-2 focus-within:ring-[#1d1d1d]/20 transition-all">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none text-gray-800 placeholder:text-gray-400" 
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c4e0e2] text-gray-800 hover:bg-[#b5d5d7] active:scale-95 transition-all">
                <Search size={20} />
              </button>
            </div>
            <img src={vector1} alt="vector-bg-1" className="absolute top-70 left-130 w-50 " />
          </div>

        
          <div className="relative w-full h-[300px] md:h-full md:absolute md:right-0 md:top-0 md:w-[40%] lg:w-[50%] flex items-end justify-center overflow-hidden">
            <img src={vector2} alt="vector-bg-2" className="absolute bottom-56 right-5 w-23 " />
            <img src={rectangle} alt="accent-shape" className="absolute bottom-0 w-[80%] max-w-[400px] max-h-200 object-contain dynamic-adjust" />
            
           
            <img 
              src={frame11} 
              alt="Dream plant" 
              className="relative z-10 max-h-[90%] w-auto object-contain bottom-0" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
