import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../JsonData/BlogData.json';

const BlogPost = () => {
        const {index} = useParams();

            const blog = blogs[index];
        return (
                <div className='flex max-w-screen-2xl mx-auto flex-col justify-center items-center'>
                <img src={blog.img} alt="Shoes" />
                 <h2 className='text-bold text-4xl'>{blog.title}</h2>  
                 <p className='text-sm text-gray-800'>{blog.content}</p> 

                  <div className='grid lg:grid-cols-3 max-w-screen-2xl mx-auto justify-items-center gap-8 mt-12'>
                        {blogs.map((blog, index)=> (
                                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={blog.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.description}</p>
                                
                        
                         </div>
                         </div> 

                        ))}
                        
                 </div>    
                </div>
        );
};

export default BlogPost;