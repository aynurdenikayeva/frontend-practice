import React from 'react';
import img2 from '../../assets/image 6.png';
import img3 from '../../assets/image 3.png';
import img4 from '../../assets/image 4.png';

const products = [
  {
    id: 1,
    name: 'Americano',
    description:
      'The aroma of our Americano brewed with premium roasted coffee grounds and hot water. It has a velvety body, caramel-like aroma with an earthy flavour and bittersweet finish.',
    price: 'RM19.90',
    image: img2,
  },
  {
    id: 2,
    name: 'Cappucino',
    description:
      'With the richness and intensity of espresso, complemented by the creamy and velvety texture of steamed milk, offering a combination of strong coffee notes, subtle sweetness, and a touch of bitterness.',
    price: 'RM19.90',
    image: img3,
  },
  {
    id: 3,
    name: 'Yule Log Cake',
    description:
      'Taste a combination of sweet and rich flavours of our thin sheet of sponge cake filled with a creamy filling, chocolate ganache, buttercream and a cherry on top as a garnish.',
    price: 'RM19.90',
    image: img4,
  },
];

const Product = () => {
  return (
    <section id="menu" className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 group"
          >
            <div className="w-full md:w-100 h-75 shrink-0 overflow-hidden rounded-[40px_0px_40px_0px] shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 pt-2 h-full justify-between min-h-70">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1A1A1A]">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4">
                <span className="text-lg font-semibold text-[#1A1A1A]">
                  {product.price}
                </span>
                <button className="px-8 py-2.5 border-2 border-[#4A2C1B] text-[#4A2C1B] font-medium rounded-full hover:bg-[#4A2C1B] hover:text-white transition-colors duration-300 text-sm md:text-base">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
