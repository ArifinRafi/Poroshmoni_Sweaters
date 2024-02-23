import React from 'react';
import sweaters from '../JsonData/ProductsData.json'
import { useParams } from 'react-router-dom';
import sw from '../assets/images/hoodie.jpg'


const singleProduct = () => {
        const {index} = useParams();
        const product = sweaters[index];
        return (
                <div className='flex justify-around mt-12 max-w-screen-2xl mx-auto'>
                  <img className='w-96' src={product.img} alt="" /> 
                  <div className='flex p-4  rounded-xl flex-col gap-4'>
                        <h1 className='text-4xl'>{product.name}</h1>
                        <h3 className='text-xl'><span className='font-semibold'>GSM:</span> {product.gsm} </h3>
                        <h3 className='text-xl'><span className='font-semibold'>Quality:</span> {product.quality} </h3>
                        

                  </div>
                </div>
        );
};

export default singleProduct;