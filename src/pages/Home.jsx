import React from 'react';
import { NavbarSimple } from '../components/Navbar';
import Carousel from '../components/Carousel';
import img1 from '../assets/images/sweater.jpg'

const Home = () => {
        return (
                <div className='w-full'>
                     <NavbarSimple></NavbarSimple>
                     <Carousel></Carousel>  
                </div>
        );
};

export default Home;