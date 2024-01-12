import React from 'react';
import bsci from '../assets/images/bsci.png'
import sedex from '../assets/images/sedex.png'
import okeo from '../assets/images/okeo.png'

const Certifications = () => {
        return (
                <div>
                       <div className='flex justify-center mt-12'> <h1 className='text-2xl font-bold text-blue-900'>Our Certifications</h1></div>
                <div className='flex flex-col lg:flex-row items-center justify-items max-w-screen-xl mx-auto gap-32 mt-32'>
                    <img src={bsci} alt="" className='w-64 h-64' />    
                    <img src={sedex} alt="" className='w-64 h-64' />    
                    <img src={okeo} alt="" className='w-64 h-64' />    
                </div>
                
                </div>
        );
};

export default Certifications;