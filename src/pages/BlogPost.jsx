import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../JsonData/BlogData.json';
import women from '../assets/images/women-garments.jpg'
import jaq from '../assets/images/jaq.jpg'
import industry from '../assets/images/sweter_industry.jpg'

const BlogPost = () => {
    const { index } = useParams();

    const blogImages = [
        { img: women, title: 'Impact of Women', content: 'Content for Impact of Women blog post...' },
        { img: jaq, title: 'The rise of Jaqcuard machines', content: 'Content for The rise of Jaqcuard machines blog post...' },
        { img: industry , title: 'Impact of Women', content: 'Content for Impact of Women blog post...' },
    ];

    const blogImage = blogImages[index];
    const blog = blogs[index];

    return (
        <div className='max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
            <img className='w-1/2' src={blogImage.img} alt="" />
            <h2 className='text-3xl'>{blog.title}</h2>
            <p>{blog.content}</p>
            {/* You can add the image here if needed */}
            {/* <img src={blog.img} alt={blog.title} /> */}
        </div>
    );
};

export default BlogPost;
