import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarSimple } from '../components/Navbar';
import Footer from '../components/Footer';
import Navhead from '../components/Navhead';


const Main = () => {
        return (
                <div>    
                        <Navhead></Navhead>
                        <NavbarSimple></NavbarSimple>
                        <Outlet></Outlet>
                        <Footer></Footer>
                        
                </div>
        );
};

export default Main;