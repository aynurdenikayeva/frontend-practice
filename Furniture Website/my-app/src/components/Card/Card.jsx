import React from 'react'
import { HistoryOutlined, ShoppingOutlined, CreditCardOutlined, DollarOutlined } from '@ant-design/icons'

const FeatureSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4">

      <div className="max-w-328 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4.75 mb-6">
            <div className="w-15.5 h-15.5 flex items-center justify-center border border-black rounded-full text-2xl text-[#1d2129] shrink-0">
              <HistoryOutlined />
            </div>
            <h3 className="w-42.75 h-8.75 text-[29px] font-bold text-[#1d2129] font-['Product_Sans'] leading-[100%] flex items-center">
              Shop online
            </h3>
          </div>
          <p className="w-76.75 h-42 text-[23px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-[140%] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4.75 mb-6">
            <div className="w-15.5 h-15.5 flex items-center justify-center border border-black rounded-full text-2xl text-[#1d2129] shrink-0">
              <ShoppingOutlined />
            </div>
            <h3 className="w-42.75 h-8.75 text-[29px] font-bold text-[#1d2129] font-['Product_Sans'] leading-[100%] flex items-center">
              Free shipping
            </h3>
          </div>
          <p className="w-76.75 h-42 text-[23px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-[140%] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4.75 mb-6">
            <div className="w-15.5 h-15.5 flex items-center justify-center border border-black rounded-full text-2xl text-[#1d2129] shrink-0">
              <CreditCardOutlined />
            </div>
            <h3 className="w-42.75 h-8.75 text-[29px] font-bold text-[#1d2129] font-['Product_Sans'] leading-[100%] flex items-center">
              Return policy
            </h3>
          </div>
          <p className="w-76.75 h-42 text-[23px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-[140%] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4.75 mb-6">
            <div className="w-15.5 h-15.5 flex items-center justify-center border border-black rounded-full text-2xl text-[#1d2129] shrink-0">
              <DollarOutlined />
            </div>
            <h3 className="w-42.75 h-8.75 text-[29px] font-bold text-[#1d2129] font-['Product_Sans'] leading-[100%] uppercase flex items-center">
              PAYMENT
            </h3>
          </div>
          <p className="w-76.75 h-42 text-[23px] font-normal text-[#8d94a0] font-['Product_Sans'] leading-[140%] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio
          </p>
        </div>

      </div>
    </section>
  )
}

export default FeatureSection
