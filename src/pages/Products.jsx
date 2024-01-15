import React from 'react';
import sweater1 from '../assets/images/sweater1.jpg'
import sweater2 from '../assets/images/sweater2.jpg'
import sweater3 from '../assets/images/sweater3.jpg'

const Products = () => {
  const sweaters = [
    {img:sweater2, name:"Sewater 101"},
    {img:sweater3, name:"Hoodie 102"}
      
  ];
  return (
    <div className='lg:grid flex flex-col items-center justify-items-center max-w-screen-xl mx-auto lg:grid-cols-2'>
    {
      sweaters.map((sweater, index)=> (
        <div key={index} className="card p-12 mt-12 w-96 bg-base-100 shadow-xl">
    <figure className=" pt-10">
    <img src={sweater.img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title">{sweater.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
    </div>
      ))
    }
    </div>
  );
};

export default Products;