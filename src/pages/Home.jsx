import React from 'react';
import Carousel from '../components/Carousel';
import AboutUs from './AboutUs';
import Services from './Services';
import Machines from './Machines';
import { NavbarSimple } from '../components/Navbar';
import Products from './Products';
import NewCarousel from '../components/NewCarousel';

const Home = () => {
        
        return (
                <div className='w-full'>
                     <NewCarousel></NewCarousel>
                     <AboutUs></AboutUs>
                     <Services></Services>
                     {/* <Products></Products> */}
                </div>
        );
};

export default Home;