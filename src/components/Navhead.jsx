import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navhead = () => {
        return (
                <div className=''>
                        <div className='bg-blue-900  p-4 w-full text-white flex justify-center lg:justify-between h-[3rem]'>
                     <h3 className='hidden lg:block'>Azad Complex, 1160 East, Board Bazar, Dhaka</h3>  
                     <div className='flex gap-2 justify-center lg:justify-end'>Follow Us: <FaFacebook className='w-4 h-6'/> <FaInstagram className='w-4 h-6'/> </div> 
                </div>
                </div>
        );
};

export default Navhead;