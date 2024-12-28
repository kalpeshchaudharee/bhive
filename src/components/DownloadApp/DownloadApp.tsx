import React from 'react';
import DownloadAppImg from '/src/assets/DownloadAppBig.png'
import DownloadAppSmall from '/src/assets/DownloadAppSmall.png'
import GooglePlay from '/src/assets/GooglePlay.png'
import AppStore from '/src/assets/AppStore.png'
import Arrow3 from '/src/assets/Arrow 3.png'

const DownloadApp: React.FC = () => {
  return (
    <>

        <div className='px-5 lg:px-[7.5rem] mb-8'>
            <h2 className='text-2xl mb-12 flex'>Download our app now <img src={Arrow3} alt="Arrow" className='ml-auto my-auto md:hidden max-md:visible' /></h2>

            <div className='max-md:bg-white py-7 rounded-lg max-md:border-[0.5px] max-md:border-gray-200'>
                <img src={DownloadAppImg} alt="Download App" className='max-xl:mx-auto px-5 md:px-[7.5rem] md:visible max-md:hidden mb-10 xl:-mb-80' />
                <img src={DownloadAppSmall} alt="Download App" className='mb-3 md:hidden max-md:visible mx-auto' />
                <div className='md:bg-white md:rounded-xl xl:pl-[38rem] md:p-20'>
                  <p className='text-xl text-[#605F5F] font-medium mb-20 md:visible max-md:hidden'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
                  <div className='px-3 mx-auto flex max-md:justify-center gap-5'>
                    <button type="button">
                      <img src={GooglePlay} alt="Google Play" />
                    </button>
                    <button type="button">
                      <img src={AppStore} alt="App Store" />
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default DownloadApp;