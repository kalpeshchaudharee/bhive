import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Amenities from '../../components/Amenities/Amenities';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import DownloadApp from '../../components/DownloadApp/DownloadApp';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Amenities />
      <Products />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default Home;