import React from 'react';
import frame8 from '../../assets/Frame 8.png';
import frame14 from '../../assets/Frame 14.png';
import frame16 from '../../assets/Frame 16.png';

const PLANTS_DATA = [
  {
    id: 1,
    image: frame8,
    name: "Natural Plants",
    price: "₱ 1,400.00",
  },
  {
    id: 2,
    image: frame14,
    name: "Artificial Plants",
    price: "₱ 900.00",
  },
  {
    id: 3,
    image: frame16,
    name: "Artificial Plants",
    price: "₱ 3,500.00",
  },
];

const BestSelling = () => {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-10 items-start">
          
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Best Selling <br className="hidden md:block" /> Plants
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Easiest way to healthy life by buying your favorite plants.
            </p>
            <button className="mt-6 flex items-center gap-2 rounded-xl bg-[#c4e0e2] px-5 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-[#b2d5d8] active:scale-95">
              See more
              <span className="text-base">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANTS_DATA.map((plant) => (
              <div key={plant.id} className="group cursor-pointer">
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-[#f5f5f5]">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="h-full w-full object-cover bg-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-gray-800">
                    {plant.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {plant.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestSelling;
