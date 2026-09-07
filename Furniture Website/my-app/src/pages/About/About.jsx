import React from "react";
import rect48 from "../../assets/Rectangle 48.png";
import rect43 from "../../assets/Rectangle 43.png";
import rect49 from "../../assets/Rectangle 49.png";
import rect50 from "../../assets/Rectangle 50.png";

import Card from "../../components/Card/Card";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div>
      <Card />
      <section className="w-full bg-white py-12 px-4 flex justify-center">
        <div className="group relative w-full aspect-21/9 min-h-87.5 overflow-hidden cursor-pointer">
          <img
            src={rect48}
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
      {/* //!-------- */}
      <section className="w-full lg:w-321.25 mx-auto py-12 px-4 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 font-['Product_Sans']">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-[44px] font-bold text-[#1d2129] leading-[115%] mb-6 tracking-tight max-w-112.5">
            Functionality
            <br />
            meets perfection
          </h1>
          <p className="text-[17px] font-normal text-[#8d94a0] leading-[160%] max-w-135">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            massa libero, mattis volutpat id. Egestas adipiscing placerat
            eleifend a nascetur. Mattis proin enim, nam porttitor vitae.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-9 pt-3">
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[19px] font-bold text-[#1d2129]">
                Creativity
              </span>
              <span className="text-[15px] font-bold text-[#1d2129]">72 %</span>
            </div>
            <div className="w-full h-1 bg-[#EFEFEF] relative">
              <div className="absolute top-0 left-0 h-full bg-[#1d2129] w-[72%]" />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[19px] font-bold text-[#1d2129]">
                Advertising
              </span>
              <span className="text-[15px] font-bold text-[#1d2129]">84 %</span>
            </div>
            <div className="w-full h-1 bg-[#EFEFEF] relative">
              <div className="absolute top-0 left-0 h-full bg-[#1d2129] w-[84%]" />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[19px] font-bold text-[#1d2129]">
                Design
              </span>
              <span className="text-[15px] font-bold text-[#1d2129]">72 %</span>
            </div>
            <div className="w-full h-1 bg-[#EFEFEF] relative">
              <div className="absolute top-0 left-0 h-full bg-[#1d2129] w-[72%]" />
            </div>
          </div>
        </div>
      </section>
     {/* //! ------ */}
<section className="w-full bg-white pt-12 pb-4 px-4 flex justify-center">
  <div className="w-full lg:w-321.25 flex justify-between items-center border-b border-transparent pb-4">
    <h2 className="text-[30px] leading-[100%] tracking-normal font-bold text-[#1d2129] font-['Product_Sans'] lowercase">
      last blog post
    </h2>
    <div className="flex items-center gap-6">
      <button className="text-gray-400 hover:text-black transition-colors cursor-pointer bg-transparent border-none p-1 flex items-center justify-center text-sm">
        <LeftOutlined />
      </button>
      <button className="text-gray-400 hover:text-black transition-colors cursor-pointer bg-transparent border-none p-1 flex items-center justify-center text-sm">
        <RightOutlined />
      </button>
    </div>
  </div>
</section>

      {/* //!-------- */}
      <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
        <div className="flex flex-col items-center text-center max-w-153.5 w-full">
          <div className="w-100 max-w-153.5 h-91 overflow-hidden  mb-6 shadow-sm">
            <img
              src={rect43}
              alt="image "
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[20px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-normal mb-3">
            Sep 26, 2022
          </p>
          <h2 className="text-[23px] font-bold text-[#1d2129] font-['Product_Sans'] leading-snug mb-5 max-w-125">
            Paint your office in natural colors only{" "}
          </h2>
          <button className="text-[20px] font-normal text-[#1d2129] font-['Product_Sans'] leading-none underline underline-offset-4 decoration-solid bg-transparent border-none p-0 cursor-pointer hover:text-blue-600 transition-colors">
            read more
          </button>
        </div>
        <div className="flex flex-col items-center text-center max-w-153.5 w-full">
          <div className="w-100 max-w-153.5 h-91 overflow-hidden  mb-6 shadow-sm">
            <img
              src={rect49}
              alt="image "
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[20px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-normal mb-3">
            Sep 26, 2022
          </p>
          <h2 className="text-[23px] font-bold text-[#1d2129] font-['Product_Sans'] leading-snug mb-5 max-w-125">
            Paint your office in natural colors only{" "}
          </h2>
          <button className="text-[20px] font-normal text-[#1d2129] font-['Product_Sans'] leading-none underline underline-offset-4 decoration-solid bg-transparent border-none p-0 cursor-pointer hover:text-blue-600 transition-colors">
            read more
          </button>
        </div>
        <div className="flex flex-col items-center text-center max-w-153.5 w-full">
          <div className="w-100 max-w-153.5 h-91 overflow-hidden  mb-6 shadow-sm">
            <img
              src={rect50}
              alt="image "
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[20px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-normal mb-3">
            Sep 26, 2022
          </p>
          <h2 className="text-[23px] font-bold text-[#1d2129] font-['Product_Sans'] leading-snug mb-5 max-w-125">
            Paint your office in natural colors only{" "}
          </h2>
          <button className="text-[20px] font-normal text-[#1d2129] font-['Product_Sans'] leading-none underline underline-offset-4 decoration-solid bg-transparent border-none p-0 cursor-pointer hover:text-blue-600 transition-colors">
            read more
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
