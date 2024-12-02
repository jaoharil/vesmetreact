import React from 'react';
import Logo from '/img/logo.png';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';

const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    link: '#',
  },
  {
    id: 2,
    title: 'Categories',
    link: '#',
  },
  {
    id: 3,
    title: 'Blog',
    link: '#',
  },
  {
    id: 4,
    title: 'About',
    link: '#',
  },
  {
    id: 5,
    title: 'Contact',
    link: '#',
  },
];

const Navbar = () => {
  return (
    <div className=" text-white xl:py-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[100px]" />
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li>
                <UpdateFollower mouseOptions={{ backgroundColor: 'white', zIndex: 99999, followSpeed: 1.5, scale: 5, mixBlendMode: 'difference' }}>
                  <a href={item.link} className="inline-block text-base font-semibold py-2 px-3 uppercase">
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: 'white',
                zIndex: 99999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: 'difference',
              }}
            >
              <button className="text-xl ps-14">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        {/* hamburger icon */}
        <div className="md:hidden">
          <AiOutlineMenuFold className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
