import React from 'react';
import hoodie from '../assets/images/hoodie.png'

const CarouselUpdated = () => {
        return (
                <div className='max-w-screen-xl mx-auto'>
                        <div className='flex flex-row justify-around '>
                                <div className=''>
                                <h2 className='text-5xl mt-12'>Proshmoni Sweater Limited <br />
                                <h3 className='text-sm'>We are a 100% export oriented industry. We have 10+ years experience of producing high quality sweaters for global buyers</h3></h2>
                                <button className='btn btn-primary bg-blue-800 w-64 mt-12'>Explore More!</button>
                                </div>
                                <img className='w-[40%]' src={hoodie} alt="" />
                        </div>
                </div>
        );
};

export default CarouselUpdated;