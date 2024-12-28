import React from 'react';
import Logo from '/src/assets/Logo.png'
import Call from '/src/assets/call.svg'

const Header: React.FC = () => {
  return (
    <header className='flex justify-between sticky top-0 bg-white py-[1.125rem] md:py-[1.563rem] px-5 md:px-[7.5rem] z-20'>
        <img src={Logo} alt="BHIVE" className='h-8 md:h-10 my-auto' />

        <a href="tel:+1234567890" className='no-underline p-[5px] md:p-2 border rounded border-primary-100 my-auto'>
          <img src={Call} alt="Call" className='h-6' />
        </a>
    </header>
  );
};

export default Header;