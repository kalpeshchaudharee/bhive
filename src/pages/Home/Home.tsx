import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Amenities from '../../components/Amenities/Amenities';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import DownloadApp from '../../components/DownloadApp/DownloadApp';
import { FetchProvider } from '../../contexts/FetchContext';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-[90rem]'>
        <Hero />
        <Amenities />
        <FetchProvider url="https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json">
          <Products />
        </FetchProvider>
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
};

export default Home;