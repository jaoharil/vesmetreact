import React from 'react';
import BannerImg from '../../assets/banner/bluevesva.png';
import Jalan from '../../assets/banner/jalan.png';
import { motion } from 'framer-motion';
import { fadeUp } from '../Products/Products';

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* banner section img */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, y: -100, rotate: -100, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
            src={BannerImg}
            alt=""
            className="w-[300px] md:w-[400px] mx-auto relative z-10"
          />
          <motion.img initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }} src={Jalan} alt="" className="absolute bottom-0 z-0" />
        </div>
        {/* banner text info section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1 initial="hidden" animate="show" variants={fadeUp(0.7)} className="text-3xl lg:text-4xl font-semibold">
              Vesva Mtych Motor Impian
            </motion.h1>
            <motion.p initial="hidden" animate="show" variants={fadeUp(0.9)} className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim dolores, natus labore distinctio iste? Aspernatur dolorem facere asperiores quasi magnam eligendi, impedit, incidunt excepturi aliquid laudantium id optio
              voluptatibus tenetur delectus, hic maxime adipisci iusto temporibus ducimus quam fugiat repellendus.
            </motion.p>
            {/* <button className="!mt-2 border-2 border-blue-300 hover:bg-blue-300 hover:text-white text-blue-300 font-semibold py-2 px-4 rounded duration-300">Shope Now</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
