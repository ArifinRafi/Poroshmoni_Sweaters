import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrAchievement } from "react-icons/gr";
import clothings from '../assets/images/clothings.jpg'

const AboutUs = () => {
        return (
                <div className='max-w-screen-xl shadow-2xl p-10 my-24 mx-auto'>
                     <div className='grid grid-cols-1 lg:grid-cols-2  lg:w-[800px]'>
                     <img  src={clothings} className='' alt="" /> 
                     <div className='lg:mx-24 w-[400px]'>
                        <h1 className='text-3xl mt-24 text-blue-800 font-semibold'>About Us</h1>
                        <h1 className='text-xl mb-12 text-gray-700 font-semibold'>We Are Providing Service Since 2003 </h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe vitae dicta, quia rerum harum ducimus reprehenderit nemo,
                        consequuntur commodi animi suscipit aliquid eos nostrum dignissimos 
                        accusantium? Perspiciatis soluta quidem amet. <br />
                        <div className='grid grid-cols-2'>
                        <div className='bg-blue-800 w-[200px] shadow-2xl h-[150px] text-white'>
                        <div className='mx-4'> <h1 className='text-2xl flex justify-center pt-4 font-semibold'>20+ </h1>  Years of Experiences <br /><GrAchievement className='w-[80px] h-[50px] mt-2 ml-[40px]' /></div>
                       
                        </div>
                       <div>
                       <ul className='flex justify-center w-[190px]'>
                        <IoMdCheckmarkCircleOutline className='text-blue-900 w-[30px] h-[20px]' /> <div>100% export oriente</div>
                        </ul>
                        <ul className='flex justify-center w-[210px]'>
                        <IoMdCheckmarkCircleOutline className='text-blue-900 w-[30px] h-[20px]' /> <div>23+ years of experince</div>
                        </ul>
                        <ul className='flex justify-center w-[192px]'>
                        <IoMdCheckmarkCircleOutline className='text-blue-900  w-[30px] h-[20px]' /> <div>Modern machineries</div>
                        </ul>
                        <ul className='flex justify-center w-[215px]'>
                        <IoMdCheckmarkCircleOutline className='text-blue-900  w-[30px] h-[20px]' /> <div>Quality Control System</div>
                        </ul>
                        <ul className='flex justify-center w-[230px]'>
                        <IoMdCheckmarkCircleOutline className='text-blue-900  w-[30px] h-[20px]' /> <div>Highly Professional Team</div>
                        </ul>
                       </div>
                        

                        </div>
                     </div>
                        </div>  
                </div>
        );
};

export default AboutUs;