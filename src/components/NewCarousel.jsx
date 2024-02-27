import React from 'react';
import banner from '../assets/images/new_cover.jpg';
import {animate, motion} from 'framer-motion';


const NewCarousel = () => {
        const openPdf =()=> {
          window.open('https://drive.google.com/file/d/1-drryiXECQfW2n13wSjDPrqE0beDEim1/view?usp=sharing')
        }
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
      <img className='h-[750px] w-full' src={banner} alt="" />
      <motion.div variants={fadeInDown} initial='initial' whileInView={'animate'}
    transition={{duration:0.5, delay:0.5}} className='text-center text-white absolute'>
        <h1 className='text-5xl font-bold'>Welcome to Proshmoni Sweaters</h1>
        <h2 className='text-xl'>100% export oriented factory</h2> <br />
        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center'>
        <button className='btn btn-primary w-52 bg-blue-900 text-white'>Explore more!</button>
        <button onClick={openPdf} className='btn w-52 w-52 btn-primary bg-blue-900 text-white'>Company Profile</button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewCarousel;
