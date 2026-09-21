import React from "react";
import rect5 from '../../assets/Rectangle 5.png'
import rect6 from "../../assets/Rectangle 6.png";
import rect7 from "../../assets/Rectangle 7.png";
import rect8 from "../../assets/Rectangle 8.png";
import rect10 from "../../assets/Rectangle 10.png";
import rect11 from "../../assets/Rectangle 11.png";
import rect13 from "../../assets/Rectangle 13.png";
import rect15 from "../../assets/Rectangle 15.png";
import rect19 from "../../assets/Rectangle 19.png";
import rect20 from "../../assets/Rectangle 20.png";
import img from "../../assets/“.png";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      {/* // ! Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-[#2B2B2B] sm:text-4xl tracking-tight mb-4">
            Products of the week
          </h1>
          <p className="text-[#ABABAB] text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="group relative ">
            <div>
              <span className="absolute top-6 left-6 z-10 text-[#BFBFBF] text-xs font-bold uppercase px-3 py-1 ">
                Sale
              </span>
              <div className="w-full  bg-[#F5F5F5]  overflow-hidden mb-4">
                <img
                  src={rect6}
                  alt="Pot"
                  className="w-full h-full object-cover object-center "
                />
              </div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-1">Pot</h3>
            </div>
            <p className="text-xl font-bold text-[#929292] mt-2">$ 223,00</p>
          </div>

          <div className="group relative ">
            <div>
              <span className="absolute top-6 left-6 z-10 text-[#BFBFBF] text-xs font-bold uppercase px-3 py-1 ">
                New
              </span>
              <div className="w-full  bg-[#F5F5F5]  overflow-hidden mb-4">
                <img
                  src={rect7}
                  alt="Lamp"
                  className="w-full h-full object-cover object-center "
                />
              </div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-1">
                Lamp
              </h3>
            </div>
            <p className="text-xl font-bold text-[#929292] mt-2">$ 223,00</p>
          </div>

          <div className="group relative ">
            <div>
              <span className="absolute top-6 left-6 z-10 text-[#BFBFBF] text-xs font-bold uppercase px-3 py-1 ">
                Sold
              </span>
              <div className="w-full  bg-[#F5F5F5]  overflow-hidden mb-4 relative">
                <img
                  src={rect5}
                  alt="Chair"
                  className="w-full h-full object-cover object-center "
                />
              </div>
              <h3 className="text-lg font-semibold text-[#8C8C8C] mb-1">
                Chair
              </h3>
            </div>
            <p className="text-xl font-bold text-[#929292] mt-2">$ 223,00</p>
          </div>
        </div>
      </section>

      {/*//! Photo and Video Section */}
      <section className="w-full flex flex-col">
        <div
          className="w-full min-h-120 bg-cover bg-center flex items-center justify-end px-6 md:px-20 lg:px-32 py-12"
          style={{ backgroundImage: `url(${rect8})` }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="max-w-146.75 w-full min-h-21 flex items-center justify-center p-2">
              <p
                className="text-[#727272] text-[23px] font-normal leading-[100%] text-center tracking-normal opacity-100"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat dolor odio odio malesuada at condimentum adipiscing
                iaculis semper.
              </p>
            </div>
            <div className="w-auto flex justify-center text-[#FFFFFF]">
              <Button />
            </div>
          </div>
        </div>

        <div className="group relative w-full aspect-21/9 min-h-87.5 overflow-hidden cursor-pointer">
          <img
            src={rect10}
            alt="Video Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-24.75 h-24.75 rounded-full border bg-transparent transition-all duration-300  overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 backdrop-blur-2xl transition-all duration-300 group-hover:opacity-100" />
              <div className="relative z-10 w-0 h-0 ml-2 border-t-14 border-t-transparent border-b-14 border-b-transparent border-l-24 border-l-white rounded-sm transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>
      {/* //!Blocks */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              <h2
                className="text-3xl font-bold tracking-wide text-[#2B2B2B] uppercase mb-4"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                STYLISH CHAIRS
              </h2>
              <p className="text-[#ABABAB] text-sm leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat dolor odio odio malesuada at condimentum adipiscing
                iaculis semper.
              </p>
              <div className="w-fit text-[#272727]">
                <Button />
              </div>
            </div>

            <div className="w-full max-w-145 h-auto aspect-square rounded-2xl overflow-hidden bg-[#F5F5F5] mx-auto lg:ml-auto lg:mr-0">
              <img
                src={rect11}
                alt="Stylish Chairs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex flex-col items-center text-center max-w-md mx-auto md:order-2">
              <h2
                className="text-3xl font-bold tracking-wide text-[#2B2B2B] uppercase mb-4"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                TABLE
              </h2>
              <p className="text-[#ABABAB] text-sm leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat dolor odio odio malesuada at condimentum adipiscing
                iaculis semper.
              </p>
              <div className="w-fit text-[#272727]">
                <Button />
              </div>
            </div>

            <div className="w-full max-w-145 h-auto aspect-square rounded-2xl overflow-hidden bg-[#F5F5F5] mx-auto lg:ml-auto lg:mr-0">
              <img
                src={rect13}
                alt="Table"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              <h2
                className="text-3xl font-bold tracking-wide text-[#2B2B2B] uppercase mb-4"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Contemporery Lamps{" "}
              </h2>
              <p className="text-[#ABABAB] text-sm leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat dolor odio odio malesuada at condimentum adipiscing
                iaculis semper.
              </p>
              <div className="w-fit text-[#272727]">
                <Button />
              </div>
            </div>
            <div className="w-full max-w-145 h-auto aspect-square rounded-2xl overflow-hidden bg-[#F5F5F5] mx-auto lg:ml-auto lg:mr-0">
              <img
                src={rect15}
                alt="Contemporary Lamps"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* //!Order */}
      <section className="w-full bg-white py-24 flex justify-center">
        <div
          className="max-w-full w-full min-h-70.25 bg-[#EFEFEF] flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 md:py-0 opacity-100"
          style={{ angle: "0deg" }}
        >
          <p
            className="text-[#2B2B2B] text-2xl sm:text-[36px] font-normal leading-[100%] text-center tracking-normal"
            style={{ fontFamily: "'Product Sans', sans-serif" }}
          >
            {" "}
            order now for an{" "}
            <strong className="font-bold text-[#2B2B2B]">
              express delivery in 24h !
            </strong>
          </p>
          <div className="w-fit text-[#272727]">
            <Button text="View more" />
          </div>
        </div>
      </section>
      {/* //! CArd */}
      <Card />
      {/* //!Block 2 */}
      <section className="w-full bg-white py-16 px-4 flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
        <div className="flex flex-col items-center text-center max-w-153.5 w-full">
          <div className="w-full max-w-153.5 h-116.75 overflow-hidden rounded-lg mb-6 shadow-sm">
            <img
              src={rect19}
              alt="image "
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[20px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-normal mb-3">
            29 sep,2022 / by soroush norozy
          </p>
          <h2 className="text-[23px] font-bold text-[#1d2129] font-['Product_Sans'] leading-snug mb-5 max-w-125">
            Your office should have only natural materials
          </h2>
          <button className="text-[20px] font-normal text-[#1d2129] font-['Product_Sans'] leading-none underline underline-offset-4 decoration-solid bg-transparent border-none p-0 cursor-pointer hover:text-blue-600 transition-colors">
            read more
          </button>
        </div>

        <div className="flex flex-col items-center text-center max-w-153.5 w-full">
          <div className="w-full max-w-153.5 h-116.75 overflow-hidden rounded-lg mb-6 shadow-sm">
            <img
              src={rect20}
              alt="image "
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[20px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-normal mb-3">
            29 sep,2022 / by soroush norozy
          </p>
          <h2 className="text-[23px] font-bold text-[#1d2129] font-['Product_Sans'] leading-snug mb-5 max-w-125">
            Your office should have only natural materials
          </h2>
          <button className="text-[20px] font-normal text-[#1d2129] font-['Product_Sans'] leading-none underline underline-offset-4 decoration-solid bg-transparent border-none p-0 cursor-pointer hover:text-blue-600 transition-colors">
            read more
          </button>
        </div>
      </section>
      {/* //!Final */}
      <section className="w-full bg-[#EFEFEF] py-24 px-6 md:px-12 relative flex items-center justify-center min-h-125">
        <button className="absolute left-6 md:left-12 w-13.75 h-13.75 text-gray-800  cursor-pointer bg-transparent border border-transparent rounded-full flex items-center justify-center p-0 text-2xl">
          <LeftOutlined />
        </button>
        <div className="max-w-187.5 w-full flex flex-col items-center text-center">
          <div className="w-12.75 h-31.5 mb-6 flex items-center justify-center">
            <img
              src={img}
              alt="quote"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[23px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-[130%] mb-10 max-w-155">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna
            facilisi ridiculus luctus amet. Aliquam
          </p>
          <h4 className="text-[21px] font-bold text-[#1d2129] font-['Product_Sans'] leading-none mb-2">
            Soroush Norozy
          </h4>
          <p className="text-[15px] font-normal text-[#1d2129] font-['Product_Sans'] leading-none">
            Designer
          </p>
        </div>
        <button className="absolute right-6 md:right-12 w-13.75 h-13.75 text-gray-800  cursor-pointer bg-transparent border border-transparent rounded-full flex items-center justify-center p-0 text-2xl">
          <RightOutlined />
        </button>
      </section>
    </div>
  );
};

export default Home;
