import React from 'react';
import img1 from '../../assets/image1.png';
import { RightOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden  shadow-lg mt-20 mb-20">
      <img
        src={img1}
        alt="Coffee Flavour"
        className="w-full h-auto object-cover"
      />

      <div className="flex flex-col justify-center items-center absolute - top-50   w-150 h-100  rounded-xl bg-[#351C0F]/60 backdrop-blur-sm border border-white/10">
        <h1 className="text-white text-4xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight drop-shadow-md">
          Discover<br />New<br />Flavours
        </h1>
        <p className="text-white/90 text-3xl  mt-4">
          Coffee always sounds like<br />a brilliant idea.
        </p>
      </div>

      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-16 md:right-16">
        <button 
          type="button"
          className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-gray-900 text-xs sm:text-sm font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
        >
          Shop All Products <RightOutlined className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Home;