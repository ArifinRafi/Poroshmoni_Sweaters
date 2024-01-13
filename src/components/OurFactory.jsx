import React from 'react';
import video1 from '../assets/images/video1.mov';

const OurFactory = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-4 max-w-screen-2xl mx-auto mt-24'>
      <div className='video-container'>
        <video autoPlay loop muted className='w-full h-auto rounded-lg'>
          <source src={video1} type='video/mp4' />
        </video>
      </div>
      <div className='flex flex-col  shadow-xl'>
        <h1 className='bg-blue-900 h-16 pt-4 w-full text-white lg:text-2xl font-bold text-center'>
          We have the latest technology machines
        </h1>
        <div className='flex justify-center items-center p-4 lg:mt-[10%]  text-center'><h3>We have 140 sets of fully computarized Jacquard Machines and 400 sets of hand driven Knitting Machines. Also we have 10 sets of Auto Linking Machines for early production. For delelopment program, let us know via email or just a call. You are always welcome to visit our factory.</h3></div>
      </div>
    </div>
  );
};

export default OurFactory;
