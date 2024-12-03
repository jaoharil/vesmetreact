import React from 'react';

import Hero from './components/Hero';
import { UpdateFollower } from 'react-mouse-follower';
import Products from './components/Products/Products';
import Banner from './components/Banner/Banner';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'white',
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero />
        <Products />
        <Banner />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
