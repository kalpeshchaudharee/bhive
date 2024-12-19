import React from 'react';
import DownloadAppImg from '/src/assets/DownloadAppBig.png'
import DownloadAppSmall from '/src/assets/DownloadAppSmall.png'
import GooglePlay from '/src/assets/GooglePlay.png'
import AppStore from '/src/assets/AppStore.png'

const DownloadApp: React.FC = () => {
  return (
    <>
        <img src={DownloadAppImg} alt="Download App" className='px-5 md:px-[7.5rem] md:visible max-md:hidden mb-10' />
        <div className='md:hidden max-md:visible px-5 md:px-[7.5rem] mb-8'>
            <h2 className='text-2xl mb-12'>Download our app now</h2>

            <div className='bg-white py-7 rounded-lg border-[0.5px] border-gray-200'>
                <img src={DownloadAppSmall} alt="Download App" className='mb-3' />
                <div className='px-3 flex justify-between'>
                    <img src={GooglePlay} alt="Google Play" />
                    <img src={AppStore} alt="App Store" />
                </div>
            </div>
        </div>
    </>
  );
};

export default DownloadApp;