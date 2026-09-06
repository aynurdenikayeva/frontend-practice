import React from 'react';
import { Link } from 'react-router';
import { SearchOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import backgroundImage from '../../assets/Rectangle 4.jpg';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="relative w-full h-screen min-h-150 flex flex-col justify-between text-white overflow-hidden font-sans">
      
      <img src={backgroundImage} alt='background image' className="absolute inset-0 w-full h-full object-cover z-0"/>
      <div className="absolute inset-0 bg-black/10 z-10" />
      <nav  className="relative z-20 flex py-6 px-6 md:px-16 items-center justify-between w-full bg-transparent"aria-label="Main navigation">
        <div className="flex items-center gap-16 flex-1">
          <p className="text-2xl font-light text-white tracking-wide">soudemy</p>

          <ul className="hidden md:flex gap-10 font-medium text-sm text-white/90">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition-colors duration-200">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200">About us</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition-colors duration-200">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-end gap-6 text-xl text-white/90">
          <SearchOutlined className="cursor-pointer hover:text-white transition-colors duration-200" />
          <ShoppingCartOutlined className="cursor-pointer hover:text-white transition-colors duration-200" />
          <MenuOutlined className="cursor-pointer hover:text-white transition-colors duration-200" />
        </div>
      </nav>

      <div className="relative z-20 flex-1 w-full h-full">
        <Swiper  navigation={true} modules={[Navigation]}  className="mySwiper w-full h-full text-white">
<SwiperSlide className="flex flex-col items-center justify-start important:flex important:flex-col important:items-center pt-20 md:pt-28 px-4 h-full text-center w-full">
            <div className="max-w-2xl space-y-5 flex flex-col items-center justify-center w-full mx-auto">
              <h1 className="text-4xl md:text-5xl font-normal tracking-wider uppercase text-white drop-shadow-sm w-full text-center">
                ALL FOR YOUR HOME
              </h1>
              <p className="text-white/85 text-sm md:text-base max-w-lg leading-relaxed font-light mx-auto text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.
              </p>
              <div className="w-full flex justify-center pt-2">
                <button className="group flex items-center justify-center gap-3 border border-white bg-transparent px-8 py-3 text-sm font-light text-white tracking-wide transition-all duration-300 hover:bg-white/10 focus:outline-none">
                  View more 
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&gt;</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

<SwiperSlide className="flex flex-col items-center justify-start important:flex important:flex-col important:items-center pt-20 md:pt-28 px-4 h-full text-center w-full">            <div className="max-w-2xl space-y-5 flex flex-col items-center justify-center w-full mx-auto">
              <h1 className="text-4xl md:text-5xl font-normal tracking-wider uppercase text-white drop-shadow-sm w-full text-center">
                MODERN DESIGNS
              </h1>
              <p className="text-white/85 text-sm md:text-base max-w-lg leading-relaxed font-light mx-auto text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.
              </p>
              <Button/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </header>
  );
};

export default Header;
