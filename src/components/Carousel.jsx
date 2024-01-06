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
    <img src={home} className="w-full pt-0 h-[500px] lg:h-full lg:py-0" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
    <motion.div
    variants={fadeInDown}
    initial='initial'
    whileInView={'animate'}
    transition={{duration:0.5, delay:0.5}}
    className='absolute flex flex-col mx-[30%] justify-center  items-center'>
      
      <h2 className='text-4xl font-bold text-white mt-32  lg:mt-[40%]  w-full' >
        Welcome to Proshmoni Sweaters Limited</h2>
        <div><h3 className='text-xl font-bold text-white w-full'>
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