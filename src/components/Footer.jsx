import React from 'react';
import logo from '../assets/images/logo.svg'

const Footer = () => {
        return (
                <footer className="footer p-10 mt-12 bg-blue-900 text-white">
  <aside>
   <img src={logo} className='w-24' alt="" />
    <p>M/S. Proshmoni Sweater Ltd.<br/>100% Export Oriented Industry</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Address</header> 
    <a className="link link-hover">Corporate Office: 90, Kakrail, Musafir Tower(4th Floor), <br />  Dhaka-1000, Bangladesh</a>
    <a className="link link-hover">Factory: Azad Complex, 1160 East Kolomessor, <br /> Board Bazar, Gazipur-1704, Dhaka</a>
  </nav>
</footer>
        );
};

export default Footer;