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
import Blogs from './Blogs';

const Home = () => {
        
        return (
                <div className='w-full'>
                     <NewCarousel></NewCarousel>   
                     {/* <CarouselUpdated></CarouselUpdated> */}
                     <AboutUs></AboutUs>
                     <Services></Services>
                     {/* <Products></Products> */}
                     <OurFactory></OurFactory>
                     <Blogs></Blogs>
                     <Certifications></Certifications>

                     
                </div>
        );
};

export default Home;