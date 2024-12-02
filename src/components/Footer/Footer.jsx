import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import Logo from '/img/logo.png';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container">
        <div className=" text-white grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company detaile section */}
          <div className="space-y-6">
            <img src={Logo} alt="" className="max-w-[100px] " />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone /> +6283192923713
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Lombok Timur
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Vesmet</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Contact</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Contact</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="flex items-center gap-2">
              <FaInstagram />
              _lah1_
            </p>
            <p className="flex items-center gap-2">
              <FaTelegram />
              083192923713
            </p>
            <p className="flex items-center gap-2">
              <FaGoogle />
              rils.vercel.app
            </p>
            <h1>copyright@jaoharilmaknun</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
