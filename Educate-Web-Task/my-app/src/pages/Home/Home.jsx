import React from "react";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import image2 from "../../assets/image 2.png";
import ellipse1 from "../../assets/Ellipse 1.png";
import ellipse2 from "../../assets/Ellipse 2.png";
import ellipse3 from "../../assets/Ellipse 3.png";
import ellipse4 from "../../assets/Ellipse 4.png";

const Home = () => {
  return (
    <div className="bg-white min-h-screen font-['Poppins'] px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full space-y-24 md:space-y-32">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Start learning <br /> with us now
            </h1>
            <p className="text-[#00000075] text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laboriosam voluptates sed beatae?
            </p>
            <div className="pt-2">
              <button className="w-auto min-w-35.5 bg-[#682C0E] text-white px-8 py-3.5 rounded-lg font-bold text-[20px] transition-transform hover:scale-105 duration-200">
                Start learning
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={img2}
                alt="Learning illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={img3}
                alt="Online centers"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Welcome to the online centers
            </h1>
            <ul className="space-y-4 text-sm list-disc pl-5 marker:text-[#534B42] text-[#534B42] max-w-xl mx-auto lg:mx-0 text-left">
              <li>Start learning from your experience</li>
              <li>Enhance your skills with us now</li>
              <li>Do your favorite course</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight max-w-xl mx-auto lg:mx-0">
              Start learning by creating free account and get register
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={img4}
                alt="Registration illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="w-full max-w-325 mx-auto flex items-center justify-center p-6 md:py-12 bg-[#F9E0AE] shadow-sm">
          <form className="flex flex-col md:flex-row items-center justify-center gap-5 w-full max-w-5xl">
            <input
              className="w-full md:w-80 px-5 py-4 bg-white border border-[#C24914]/20 text-base focus:outline-none focus:border-[#C24914] placeholder:text-gray-400 text-black transition-colors"
              type="text"
              placeholder="Your name"
            />
            <input
              className="w-full md:w-96 px-5 py-4 bg-white border border-[#C24914]/20 text-base focus:outline-none focus:border-[#C24914] placeholder:text-gray-400 text-black transition-colors"
              type="email"
              placeholder="Your email address"
            />
            <button className="w-full md:w-auto bg-[#C24914] text-white font-bold px-10 py-4 hover:bg-[#a33b0f] transition-colors duration-200 text-base shadow-md whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </section>

        <section className="relative w-full min-h-145 lg:min-h-162.5 bg-white pt-20 pb-12 px-6 md:px-16 font-['Poppins'] overflow-hidden">
          <div className="relative z-30 max-w-2xl text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black leading-[1.15] tracking-tight">
              Start growing with <br /> our community
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>

            <div className="pt-2">
              <button className="bg-[#FC8621] hover:bg-[#d06b19]  w-64 py-3.5 text-white font-semibold text-lg px-9 rounded-xl transition-all duration-200 shadow-sm">
                Join community
              </button>
            </div>
          </div>

          <img
            src={image2}
            alt="Main student"
            className="absolute bottom-0 right-0 h-[85%] md:h-[90%] lg:h-[95%] w-auto object-contain z-10 select-none pointer-events-none"
          />
          <img
            src={ellipse3}
            alt="User 1"
            className="absolute left-[4%] bottom-[25%] lg:left-[5%] lg:bottom-[30%] w-16 h-16 md:w-19 md:h-19 object-cover rounded-full  z-20"
          />
          <img
            src={ellipse1}
            alt="User 2"
            className="absolute left-[30%] bottom-[12%] lg:left-[32%] lg:bottom-[15%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-full  z-20"
          />
          <img
            src={ellipse4}
            alt="User 3"
            className="absolute right-[12%] top-[20%] lg:right-[15%] lg:top-[22%] w-16 h-16 md:w-19.5 md:h-19.5 object-cover rounded-full  z-20"
          />
          <img
            src={ellipse2}
            alt="User 4"
            className="absolute left-[50%] top-[3%] lg:left-[54%] lg:top-[5%] w-14 h-14 md:w-17 md:h-17 object-cover rounded-full  z-20"
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
