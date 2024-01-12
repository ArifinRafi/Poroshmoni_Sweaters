import React from 'react';
import banner from '../assets/images/sweater.jpg';
import {animate, motion} from 'framer-motion';


const NewCarousel = () => {
        const fadeInDown = {
                initial:{
                  opacity:0,
                  y:400,
                  
                },
                animate:{
                  opacity:1,
                  y:0,
                },
                transition:{
                  delay:1,
                  duration:2
                }
        }
  return (
    <div className='relative w-full flex items-center justify-center'>
      <img src={banner} alt="" />
      <motion.div variants={fadeInDown} initial='initial' whileInView={'animate'}
    transition={{duration:0.5, delay:0.5}} className='text-center text-white absolute'>
        <h1 className='text-4xl font-bold'>Welcome to Proshmoni Sweaters</h1>
        <h2 className='text-xl'>100% export oriented factory</h2>
      </motion.div>
    </div>
  );
};

export default NewCarousel;
