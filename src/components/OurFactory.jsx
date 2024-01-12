import React from 'react';
import video1 from '../assets/images/video1.mov';

const OurFactory = () => {
  return (
    <div className='grid grid-cols-2 gap-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='video-container'>
        <video autoPlay loop muted className='w-full h-auto rounded-lg'>
          <source src={video1} type='video/mp4' />
        </video>
      </div>
      <div className='flex justify-center shadow-xl'>
        <h1 className='bg-blue-900 h-16 pt-4 w-full text-white text-2xl font-bold text-center'>
          We have the latest technology machines
        </h1>
      </div>
    </div>
  );
};

export default OurFactory;
