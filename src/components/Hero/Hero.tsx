import React from 'react';
import styles from './Hero.module.css';
import CoworkingImg from '/src/assets/Coworking.png';

const Hero: React.FC = () => {
  return (
    <section className='flex flex-row-reverse max-md:block mb-6'>
        <div id={styles.HeroRight} className='md:pb-24 max-md:bg-none'>
            <img src={CoworkingImg} alt="Coworking" className='md:mt-[2.625rem] mx-auto' />
        </div>
        <div id={styles.HeroLeft} className='md:w-2/3 max-md:pt-5'>
        {/* max-md:text-xl max-md:font-semibold max-md:leading-6 text-[3.625rem] */}
            <h1 className='text-xl font-semibold leading-6 tracking-[-0.063rem] px-5 md:px-[5rem] lg:px-[7.5rem] md:text-4xl md:leading-10 md:mt-20 lg:text-[3.625rem] lg:font-bold lg:leading-[4.387rem]'>
                Host your meeting with world-class amenities. Starting at <span className='text-primary-200'>₹199/-!</span>
            </h1>
        </div>
    </section>
  );
};

export default Hero;