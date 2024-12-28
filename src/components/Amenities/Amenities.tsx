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

    const amenityList = [
        {img: CommunityEvents, name: 'Community Events'},
        {img: Gym, name: 'Gym Facilities'},
        {img: Wifi, name: 'High-Speed WiFi'},
        {img: Cafe, name: 'Cafe & Tea Bar'},
        {img: Affordable, name: 'Affordable'},
        {img: Lounges, name: 'Comfort Lounges'},
        {img: QuickBooking, name: 'Quick Booking'},
        {img: SportsArea, name: 'Sports Area'},
    ]
  return (
    <section className='md:mb-24 pb-6 px-5 md:px-[7.5rem]'>
        <h2 className='mb-[1.875rem] md:mb-[5.313rem]'>Why Choose us?</h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 xl:grid-cols-4'>

            {amenityList.map((amenity) => (
                <div key={amenity.name} className='md:flex md:p-6 md:w-[18.75rem] p-2 gap-4 w-[9.625rem] max-md:rounded-md max-md:bg-white max-sm:mx-auto text-center'>
                    <img src={amenity.img} alt="Sports Area" className='my-auto mx-auto md:mx-0 max-md:mb-3' />
                    <label className='text-sm leading-4 md:text-lg md:leading-[1.361rem] font-medium md:my-auto'>{amenity.name}</label>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Amenities;