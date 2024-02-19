import React from 'react';
import home from '../assets/images/sweater.jpg';
import {animate, motion} from 'framer-motion';


const Carousel = () => {
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
                <div>
                       <div className=" w-full">
  <div>
    <div id="slide1" className="carousel-item mb-24 relative w-full">
    <img src={home} className="w-full pt-0 h-full  lg:h-full lg:py-0" />
    <motion.div
    variants={fadeInDown}
    initial='initial'
    whileInView={'animate'}
    transition={{duration:0.5, delay:0.5}}
    className='absolute flex flex-col  lg:mx-96 justify-center items-center'>
      
      <h2 className='lg:text-4xl text-2xl font-bold text-white mt-[15%] ml-12 lg:mt-60 lg:px-20  w-full' >
        Welcome to Proshmoni Sweaters </h2> 
        <div><h3 className='lg:text-xl text-sm font-bold text-white w-full'>
         A 100% export oriented Sweater Industry <br />
      </h3></div>
      <button className='btn btn-primary w-[150px] h-[30px] border-white bg-transparent text-white hover:bg-blue-900 hover:border-blue-900  my-[10px] lg:mx-[10%] lg:my-[20px]'>Learn More!</button>
    </motion.div>

    
    
    
  </div> 
  </div>
  
</div> 

                </div>
        );
};

export default Carousel;