import React, { act } from 'react';
import Yellowvespa from '/img/yellowvespa.png';
import Redvespa from '/img/redvesva.png';
import Bluevespa from '/img/bluevesva.png';
import Grenvespa from '/img/gren.png';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './navbar';
import { motion, AnimatePresence, easeInOut, backIn } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { div, img } from 'framer-motion/client';

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};

const HeroData = [
  {
    id: 1,
    title: 'Vespa S 125 Standard',
    image: Yellowvespa,
    subtitle: 'Recently launched alongside the famous Primavera 150, the Vespa Sprint is one of the Italian brands popular scooter dressed with its iconic classic design yet modern features.',
    price: '$450',
    modal: 'Yellow',
    bgColor: '#FFD700',
  },
  {
    id: 2,
    title: 'Vespa S 125 Standard',
    image: Redvespa,
    subtitle: 'Recently launched alongside the famous Primavera 150, the Vespa Sprint is one of the Italian brands popular scooter dressed with its iconic classic design yet modern features. ',
    price: '$450',
    modal: 'Red',
    bgColor: '#DC143C',
  },
  {
    id: 3,
    title: 'Vespa S 125 Standard',
    image: Grenvespa,
    subtitle: 'Recently launched alongside the famous Primavera 150, the Vespa Sprint is one of the Italian brands popular scooter dressed with its iconic classic design yet modern features.',
    price: '$450',
    modal: 'Green',
    bgColor: '#ADFF2F',
  },
  {
    id: 4,
    title: 'Vespa S 125 Standard',
    image: Bluevespa,
    subtitle: 'Recently launched alongside the famous Primavera 150, the Vespa Sprint is one of the Italian brands popular scooter dressed with its iconic classic design yet modern features.',
    price: '$450',
    modal: 'Blue',
    bgColor: '#00FFFF',
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(HeroData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      {/* navbar component */}
      <motion.div initial={{ backgroundColor: activeData.bgColor }} animate={{ backgroundColor: activeData.bgColor }} transition={{ duration: 0.8 }}>
        <Navbar />
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[505px] ">
          {/* data info */}
          <div className="flex flex-col  justify-center py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1 relative z-40">
            <div className="space-y-2 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: 'white',
                    zIndex: 10,
                    followSpeed: 0.4,
                    scale: 10,
                    mixBlendMode: 'difference',
                  }}
                >
                  <motion.h1 key={activeData.id} variants={SlideRight(0.2)} initial="hidden" animate="show" exit="exit" className="text-3xl md:text-6xl xl:text-7xl font-bold font-handwriting text-shadow">
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p key={activeData.id} variants={SlideRight(0.4)} initial="hidden" animate="show" exit="exit" className="text-xm leading-loose text-white/80">
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.backgroundColor,
                    zIndex: 99999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button key={activeData.id} variants={SlideRight(0.6)} initial="hidden" animate="show" exit="exit" className="px-4 py-2 bg-black inline-block font-normal rounded-sm">
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* list operator */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>Top Recomendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>
              {/* image switcher */}
              {/* bisa di kasih gap 10 juga di bawah ini ya */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} className="grid grid-cols-4 ">
                {HeroData.map((data) => {
                  return (
                    <div onClick={() => handleActiveData(data)} className="cursor-pointer space-y-3 hover:scale-105 transtion-all duration-200">
                      <div className="flex justify-center">
                        <img src={data.image} alt="" className={`w-8px img-shadow ${activeData.image === data.image ? 'opacity-100 scale-110 ' : 'opacity-50'}`} />
                      </div>
                      <div className="text-center !mt-6 spacw-y-1">
                        <p className="text-base line-through opacity-50">{data.price}</p>
                        <p className="text-xl font-bold">{data.price}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
          {/* hero IMG */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[250px] md:w-[500px] xl:w-[650px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.0, ease: easeInOut }}
                exit={{ opacity: 1, transition: { duration: 0.4 } }}
                className="text-white/5 text-[300px] font-poppinscfont-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* whatsapp icon */}
          {/* <div className="text-3xl text-white fixed bottom-20 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
