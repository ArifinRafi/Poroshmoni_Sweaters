import React from 'react';
import sweater1 from '../assets/images/sweater1.jpg'
import sweater2 from '../assets/images/sweater2.jpg'
import sweater3 from '../assets/images/sweater3.jpg'
import { Link } from 'react-router-dom';
import sweaters from '../JsonData/ProductsData.json'
import {animate, motion} from 'framer-motion';

const Products = () => {


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
    <motion.div variants={fadeInDown} initial='initial' whileInView={'animate'}
    transition={{duration:0.5, delay:0.5}} className='lg:grid flex flex-col items-center justify-items-center max-w-screen-xl mx-auto lg:grid-cols-2'>
    {
      sweaters.map((sweater, index)=> (
        <div key={index} className="card p-12 mt-12 w-96 bg-base-100 shadow-xl">
    <figure className=" pt-10">
    <img src={sweater.img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title">{sweater.name}</h2>
    <p>High Quality sweaters and hoodies!</p>
    <div className="card-actions">
      <Link to={`/singleProduct/${index}`} className="btn btn-primary bg-blue-900 text-white">See Detail</Link>
    </div>
  </div>
    </div>
      ))
    }
    </motion.div>
  );
};

export default Products;