import React from 'react';

const Showcase2 = () => {
    return (
        <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer ">
          <img
            className="xl:max-w-6xl w-1/2"
            src="https://i.ibb.co/5LMnWQp/anna-samoylova-w55-Sp-Mmo-Pg-E-unsplash.jpg"
            alt=""
          />
          <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
            <div className="flex justify-between font-bold text-sm">
              <p>Product Review</p>
              <p className="text-gray-400">17th March, 2021</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10">
              Coffee From Heaven
            </h2>
            <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam
              nulla cupiditate saepe sed quis veritatis minus rem adipisci aliquid.
            </p>
            <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
              Read More
            </button>
          </div>
        </section>
      </section>
      
    );
};

export default Showcase2;