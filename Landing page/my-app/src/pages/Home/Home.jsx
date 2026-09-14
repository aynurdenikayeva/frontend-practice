import React from 'react'
import {LeftOutlined,RightOutlined ,StarOutlined,ShoppingOutlined} from '@ant-design/icons'
import img1 from '../../assets/vegetables.png'
import img2 from '../../assets/fruits.png'
import img3 from '../../assets/drinks.png'
import img4 from '../../assets/chocolates.png'
import img5 from '../../assets/potato-removebg-preview 1.png'
import img6 from '../../assets/potato-removebg-preview 1 (1).png'
import img7 from '../../assets/potato-removebg-preview 1 (2).png'
import img8 from '../../assets/potato-removebg-preview 1 (3).png'
import img9 from '../../assets/potato-removebg-preview 1 (4).png'
import img10 from '../../assets/potato-removebg-preview 1 (5).png'
import img11 from '../../assets/potato-removebg-preview 1 (6).png'
import img12 from '../../assets/potato-removebg-preview 1 (7).png'
import img13 from '../../assets/potato-removebg-preview 1 (8).png'
import img14 from '../../assets/potato-removebg-preview 1 (9).png'



const Home = () => {
  return (
  <section className='p-6 max-w-7xl mx-auto font-bold'> 
    <div className='w-full h-full '>
<h1 className="text-2xl font-bold text-center mb-6">Explore Our Categories</h1>
    <div className='flex justify-center items-center bg-[#B7FFBE33] rounded-3xl w-300 h-89.75'>
    <LeftOutlined />
    <div >
<img src={img1} alt='vegetable'/>
<button className= 'bg-[#00860D45] w-56.5 h-11.75 border border-[#2CAD483B] rounded-3xl'>Vegetables</button>
    </div>
    <div>
<img src={img2} alt='fruits'/>
<button className= 'bg-[#00860D45] w-56.5 h-11.75 border border-[#2CAD483B] rounded-3xl'>Fruits</button>
    </div>
    <div>
<img src={img3} alt='drink'/>
<button className= 'bg-[#00860D45] w-56.5 h-11.75 border border-[#2CAD483B] rounded-3xl'>Cold drinks</button>
    </div>
<div>
<img src={img4} alt='chocolate'/>
<button className= 'bg-[#00860D45] w-56.5 h-11.75 border border-[#2CAD483B] rounded-3xl'>Chocolates</button>
</div>



<RightOutlined />
</div>

    </div>
  <div className='w-full h-full pt-10'>
      <h1 className="text-2xl font-bold text-center mb-8">Best Selling Products</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto'>
        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img5} alt="potato" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Vegetables</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Potato-1kg</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 4.0
              </button>
              <p className="text-xs text-gray-400">(14)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-[#2CAD48F5]">30 AZN</span>
              <del className="text-xs text-gray-400">40 AZN</del>
            </div>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img6} alt="Chocolates" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Chocolates</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Cadbury 5 Star</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 4.8
              </button>
              <p className="text-xs text-gray-400">(58)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-[#2CAD48F5]">20 AZN</span>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img7} alt="Vegetables" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Vegetables</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Tomato-1kg</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 4.2
              </button>
              <p className="text-xs text-gray-400">(10)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-[#2CAD48F5]">30 AZN</span>
              <del className="text-xs text-gray-400">40 AZN</del>
            </div>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img8} alt="Cold Drinks" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Cold Drinks</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Mirinda-750ml</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 5.0
              </button>
              <p className="text-xs text-gray-400">(22)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-[#2CAD48F5]">40 AZN</span>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img9} alt="Fruits" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Fruits</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Strawberry-200g</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 4.0
              </button>
              <p className="text-xs text-gray-400">(6)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-[#2CAD48F5]">55 AZN</span>
              <del className="text-xs text-gray-400">60 AZN</del>
            </div>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img10} alt="Cookies" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Cookies</p>
            <h3 className="text-base font-bold text-[#2B3E52]">GoodDay-200g</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 4.5
              </button>
              <p className="text-xs text-gray-400">(23)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-[#2CAD48F5]">40 AZN</span>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img11} alt="Vegetables" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Vegetables</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Capsicum-250g</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 4.0
              </button>
              <p className="text-xs text-gray-400">(21)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-[#2CAD48F5]">20 AZN</span>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img12} alt="Chocolates" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Chocolates</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Dairy Milk-46g</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 5.0
              </button>
              <p className="text-xs text-gray-400">(72)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-[#2CAD48F5]">54 AZN</span>
              <del className="text-xs text-gray-400">60 AZN</del>
            </div>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img13} alt="Fruits" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Fruits</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Banana-12p</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 4.0
              </button>
              <p className="text-xs text-gray-400">(13)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-[#2CAD48F5]">60 AZN</span>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
          <div>
            <div className="h-36 flex items-center justify-center mb-3">
              <img src={img14} alt="Jamun" className="max-h-full object-contain" />
            </div>
            <p className="text-gray-500 text-xs">Fruits</p>
            <h3 className="text-base font-bold text-[#2B3E52]">Jamun-250g</h3>
            <div className="flex items-center gap-1 my-1">
              <button className="flex items-center gap-1 text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                <StarOutlined /> 5.0
              </button>
              <p className="text-xs text-gray-400">(58)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-[#2CAD48F5]">60 AZN</span>
            <button className="flex items-center justify-center gap-1 border border-[#2CAD48F5] text-[#00A911] bg-[#DDFFE0] rounded-2xl w-18.75 h-9 font-semibold text-sm hover:bg-[#2CAD48F5] hover:text-white transition-colors">
              Add <ShoppingOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
 
   </section>
  )
}

export default Home
