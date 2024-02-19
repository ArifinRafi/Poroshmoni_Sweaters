import React from 'react';
import Carousel from '../components/Carousel';
import AboutUs from './AboutUs';
import Services from './Services';
import Machines from './Machines';
import { NavbarSimple } from '../components/Navbar';
import Products from './Products';
import NewCarousel from '../components/NewCarousel';
import OurFactory from '../components/OurFactory';
import Certifications from './Certifications';
import CarouselUpdated from '../components/CarouselUpdated';

const Home = () => {
        
        return (
                <div className='w-full'>
                     <CarouselUpdated></CarouselUpdated>
                     <AboutUs></AboutUs>
                     <Services></Services>
                     {/* <Products></Products> */}
                     <OurFactory></OurFactory>
                     <Certifications></Certifications>

                     
                </div>
        );
};

export default Home;