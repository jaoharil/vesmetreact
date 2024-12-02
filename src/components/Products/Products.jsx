import React from 'react';
import P1 from '../../assets/yellowvespa.png';
import P2 from '../../assets/gren.png';
import P3 from '../../assets/redvesva.png';
import { motion } from 'framer-motion';

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ProductData = [
  {
    id: 1,
    title: 'Yellow Vespa',
    image: P1,
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    delay: 0.5,
  },
  {
    id: 2,
    title: 'Red Vespa',
    image: P3,
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    delay: 1.1,
  },
  {
    id: 3,
    title: 'Green Vespa',
    image: P2,
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    delay: 0.8,
  },
];

const Product = () => {
  return (
    <>
      <div className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1 initial="hidden" animate="show" variants={fadeUp(0.2)} className="text-3xl font-bold text-center pb-10">
            Products
          </motion.h1>
          {/* section card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProductData.map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                animate="show"
                variants={fadeUp(item.delay)}
                className="flex flex-col justify-center items-center p-5 max-w-[400px] mx-auto shadow-lg rounded-xl bg-white hover:scale-105 duration-300 hover:border-2 hover:border-blue-400 "
              >
                <img src={item.image} alt="" className="w-[200px] mb-4 hover:rotate-[30deg] hover:scale-110 duration-300" />
                <div className="text-center space-y-3">
                  <h1 className="text-2xl  font-bold font-handwriting text-center">{item.title}</h1>
                  <p className="text-center text-sm text-gray-600">{item.description}</p>
                  <button className="!mt-2 border-2 border-blue-300 hover:bg-blue-300 hover:text-white text-blue-300 font-semibold py-2 px-4 rounded duration-300">Buy Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
