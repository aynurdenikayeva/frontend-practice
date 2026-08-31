import React from 'react';

const features = [
  {

    iconClass: "fa-solid fa-leaf",
    title: "Large Assortment",
    text: "we offer many different types of products with fewer variations in each category.",
  },
  {
    iconClass: "fa-solid fa-cube",
    title: "Fast & Free Shipping",
    text: "4-day or less delivery time, free shipping and an expedited delivery option.",
  },
  {
    iconClass: "fa-solid fa-phone-volume",
    title: "24/7 Support",
    text: "answers to any business related inquiry 24/7 and in real-time.",
  },
];

const AboutUs = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-14">
      <div className="mx-auto text-center">
        <h2 className="text-2xl font-bold"> About us </h2>
        <p className="mt-4 text-sm text-gray-400">
          Order now and appreciate the beauty of nature
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center rounded-full bg-[#c4e0e2] w-14 h-14">
                  <i className={`${feature.iconClass} text-xl text-[#1e3d3f]`}></i>
                </div>

                <h3 className="mt-5 text-sm font-bold"> {feature.title} </h3>
                <p className="mt-4 text-sm leading-5 text-gray-400">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
