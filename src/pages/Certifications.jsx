import React from 'react';
import bsci from '../assets/images/bsci.png'
import sedex from '../assets/images/sedex.png'
import okeo from '../assets/images/okeo.png'

const Certifications = () => {
        return (
                <div>
                       <div className='flex justify-center mt-12'> <h1 className='text-2xl font-bold text-blue-900'>Our Certifications and Partners:</h1></div>
                <div className='flex flex-col lg:grid grid-cols-3 items-center justify-items max-w-screen-xl mx-auto gap-32 mt-32'>
                    <img src={bsci} alt="" className='w-44 h-44' />    
                    <img src={sedex} alt="" className='w-44 h-44' />    
                    <img src={okeo} alt="" className='w-44 h-44' />    
                </div>
                
                </div>
        );
};

export default Certifications;