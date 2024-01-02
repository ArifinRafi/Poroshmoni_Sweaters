import React from 'react';
import home from '../assets/images/sweater.jpg'


const Carousel = () => {
        return (
                <div>
                       <div className=" w-full">
  <div>
    <div id="slide1" className="carousel-item relative w-full">
    <img src={home} className="w-full py-24 lg:py-0" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
    <div className='absolute flex flex-col'>
      
      <h2 className='text-4xl font-bold text-white lg:mx-[50%] mx-[15%] mt-[25%] lg:mt-[50%]  w-full' >
        Welcome to Proshmoni Sweaters Limited</h2>
        <h3 className='text-xl font-bold text-white mx-[15%]  lg:mx-[70%]  w-full'>
      100% Export oriented Sweater Factory <br />
      </h3>
      <button className='btn btn-primary w-[150px] h-[50px] border-white bg-transparent text-white hover:bg-red-800 hover:border-red-800  my-[20px] lg:mx-[10%] lg:my-[20px]'>Learn More!</button>
    </div>

    
    
    
  </div> 
  </div>
  
</div> 

                </div>
        );
};

export default Carousel;