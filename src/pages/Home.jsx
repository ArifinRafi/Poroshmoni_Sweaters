import React from 'react';
import Carousel from '../components/Carousel';
import AboutUs from './AboutUs';
import Services from './Services';
import Machines from './Machines';
import { NavbarSimple } from '../components/Navbar';
import Products from './Products';

const Home = () => {
        
        return (
                <div className='w-full'>
                     <Carousel></Carousel>  
                     <AboutUs></AboutUs>
                     <Services></Services>
                     <Machines></Machines>
                     {/* <Products></Products> */}
                </div>
        );
};

export default Home;