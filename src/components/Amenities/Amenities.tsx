import React from 'react';
import CommunityEvents from '/src/assets/amenities/CommunityEvents.png';
import Gym from '/src/assets/amenities/Gym.png';
import Wifi from '/src/assets/amenities/Wifi.png';
import Cafe from '/src/assets/amenities/Cafe.png';
import Affordable from '/src/assets/amenities/Affordable.png';
import Lounges from '/src/assets/amenities/Lounges.png';
import QuickBooking from '/src/assets/amenities/QuickBooking.png';
import SportsArea from '/src/assets/amenities/SportsArea.png';

const Amenities: React.FC = () => {
  return (
    <section className='md:mb-24 pb-6 px-5 md:px-[7.5rem]'>
        <h2 className='mb-[1.875rem] md:mb-[5.313rem]'>Why Choose us?</h2>

        <div className='md:flex md:flex-wrap max-md:grid max-md:grid-cols-2 max-md:gap-3'>
            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={CommunityEvents} alt="Community Events" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>Community Events</label>
            </div>

            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={Gym} alt="Gym Facilities" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>Gym Facilities</label>
            </div>

            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={Wifi} alt="High-Speed WiFi" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>High-Speed WiFi</label>
            </div>

            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={Cafe} alt="Cafe & Tea Bar" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>Cafe & Tea Bar</label>
            </div>

            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={Affordable} alt="Affordable" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>Affordable</label>
            </div>

            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={Lounges} alt="Lounges" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>Comfort Lounges</label>
            </div>

            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={QuickBooking} alt="Quick Booking" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>Quick Booking</label>
            </div>

            <div className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white text-center'>
                <img src={SportsArea} alt="Sports Area" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>Sports Area</label>
            </div>
        </div>
    </section>
  );
};

export default Amenities;