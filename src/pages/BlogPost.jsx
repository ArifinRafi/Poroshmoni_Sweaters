import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../JsonData/BlogData.json';
import women from '../assets/images/women-garments.jpg'
import jaq from '../assets/images/jaq.jpg'
import industry from '../assets/images/sweter_industry.jpg'
import fadeInDown from '../components/NewCarousel';
import {animate, motion} from 'framer-motion';
const BlogPost = () => {
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
    const { index } = useParams();

    const blogImages = [
        { img: women, title: 'Impact of Women', content: 'Content for Impact of Women blog post...' },
        { img: jaq, title: 'The rise of Jaqcuard machines', content: 'Content for The rise of Jaqcuard machines blog post...' },
        { img: industry , title: 'Impact of Women', content: 'Content for Impact of Women blog post...' },
    ];

    const blogImage = blogImages[index];
    const blog = blogs[index];

    return (
        <motion.div variants={fadeInDown} initial='initial' whileInView={'animate'}
        transition={{duration:0.5, delay:0.5}} className='max-w-screen-2xl mx-auto flex flex-col justify-center items-center'>
            <img className='w-1/2' src={blogImage.img} alt="" />
            <h2 className='text-3xl'>{blog.title}</h2>
            <p>{blog.content}</p>
            {/* You can add the image here if needed */}
            {/* <img src={blog.img} alt={blog.title} /> */}
        </motion.div>
    );
};

export default BlogPost;
