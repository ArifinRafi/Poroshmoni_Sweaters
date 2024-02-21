import React from 'react';
// import blog1 from '../assets/images/women-garments.jpg'
// import blog2 from '../assets/images/jaq.jpg'
// import blog3 from '../assets/images/sweter_industry.jpg'
import { Link } from 'react-router-dom';
import blogs from '../JsonData/BlogData.json'
const Blogs = () => {
        return (
                <div className='grid lg:grid-cols-3 max-w-screen-2xl mx-auto justify-items-center gap-8 mt-12'>
                        {blogs.map((blog, index)=> (
                                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={blog.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.description}</p>
                                
                                <div className="card-actions justify-center">
                                <Link to={`/blog/${index}`} className="btn btn-primary">Read More!</Link>
                                </div>
                         </div>
                         </div> 

                        ))}
                        
                 </div>
        );
};

export default Blogs;