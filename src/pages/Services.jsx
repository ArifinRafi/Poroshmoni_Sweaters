import React from 'react';
import circle from '../assets/images/circle.png'
import { FaBookOpen } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineReduceCapacity } from "react-icons/md";

const Services = () => {
        return (
                <div className='grid grid-cols-1 lg:grid-cols-3 max-w-screen-2xl mx-auto '>
                    <div className=' hover:bg-blue-900 shadow-2xl border-blue-900 text-blue-900 hover:text-white  lg:mx-12 w-[400px] flex flex-col  items-center rounded-3xl h-[300px]'><FaBookOpen className='mt-4 w-[100px] h-[50px]' /><h1 className='font-semibold  text-2xl'>Our Story</h1><br />
                    
                    <h3 className='px-4'>We the Proshmoni Sweater Ltd., like to introduce ourself as a sweater manufacturer factory in Dhaka, Bangladesh. We ensure you the quality and on time Delivery.</h3>
                    </div>

                    <div className=' hover:bg-blue-900  shadow-2xl border-blue-900 text-blue-900 hover:text-white  lg:mx-12 w-[400px] flex flex-col  items-center rounded-3xl h-[300px]'><MdProductionQuantityLimits className='mt-4 w-[100px] h-[50px]' /><h1 className='font-semibold  text-2xl'>Product Items</h1><br />
                    <h3 className='px-4'>We make all kinds of Sweaters maintaining the international Standard</h3>
                    </div>  

                    <div className=' hover:bg-blue-900 shadow-2xl  text-blue-900 hover:text-white lg:mx-12 w-[400px] flex flex-col  items-center rounded-3xl h-[300px]'><MdOutlineReduceCapacity className='mt-4 w-[100px] h-[50px]' /><h1 className='font-semibold text-2xl'>Production Capacity</h1><br />
                    <h3 className='px-4'>Currently our production capacity is 7500 DZ per month. Also, we have 45000 sft. floor space with emergency exit stairs. We have 1000 male and female workers and 35 office staffs in our team </h3>
                    </div>

                    
                    
                        
                        
                    
                </div>
        );
};

export default Services;