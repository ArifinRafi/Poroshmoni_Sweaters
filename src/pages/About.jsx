import React from 'react';
import azad from '../assets/images/AZAD-GROUP-MD.jpg'

const AboutDirector = () => {
        return (
                <div className='max-w-screen-2xl mx-auto'>
                 <div className='flex flex-col lg:flex-row  gap-8 mt-12 items-center  justify-around '>
                    <img className='w-96' src={azad} alt="" />    
                    <div className='flex flex-col'>
                        <div className='flex bg-blue-900 items-center justify-center'><h1 className='text-4xl py-2 font-bold text-white '>MESSAGE FROM MD</h1></div>
                        <h1 className='text-4xl'>A.K AZAD</h1>
                        <h3 className='text-2xl'>Managing Director</h3>
                        <p className='text-sm'>
                        We the Proshmoni Sweater Ltd., Like to introduce our-self as a sweater manufacturer factory in Dhaka, Bangladesh.
                        Our factory has been running production since 2003. <br /> <br /> At present we have 140 set fully computerized jacquard machines and 400 set hand drive knitting machines, also we have 10 set auto linking machines for early production.
                        We can assure you the quality and on time delivery. We have a very strong follow-up in every section from winding to finishing to ensure the quality. If you have any development program, please let us do it for you.
                        I will request you to place a few orders to see our quality, commitment and timing of delivery, if you feel happy with our service you can continue with us.
                        Beside this we can ensure you worker unrest fee factory. <br /><br /> I’m sure we can satisfy you with our service. Our main export market in Europe is 80% and in Latin America is 20%.
                        We are the memof A.K.AZAD Group of industry in Bangladesh. Our production capacity is 1,00,000 pcs per month. You are always welcome to visit our factory.      
                        </p>
                    </div>
                </div>


                <div className=' mt-12 '>
                        <div className='bg-blue-900 w-full flex justify-center'><h1 className='p-2 font-bold text-4xl text-white'>AT A GLANCE OUR COMPANY </h1></div>
                        <div className=' mt-12 grid lg:grid-cols-3'>
                              <div className=''>
                              <h2 className='text-2xl font-bold'>Name of the company</h2> <br />  
                              <h2 className='text-2xl font-bold'>Address(Company)</h2>  <br /> <br />
                              <h2 className='text-2xl font-bold'>Address(Head Office)</h2> <br /><br /> <br />  <br />
                              <h2 className='text-2xl font-bold'>Contanct Person</h2> <br /> 
                              <h2 className='text-2xl font-bold'>Mobile</h2> <br /> 
                              <h2 className='text-2xl font-bold'>Email</h2>  <br />
                              <h2 className='text-2xl font-bold'>Web Address</h2>  <br />
                              <h2 className='text-2xl font-bold'>Bank Details</h2>    <br />
                              </div>
                              <div>
                                <p className='text-2xl'>:</p><br />
                                <p className='text-2xl'>:</p><br /> <br />
                                <p className='text-2xl'>:</p> <br /> <br /> <br /> <br />
                                <p className='text-2xl'>:</p> <br />
                                <p className='text-2xl'>:</p>  <br />
                                <p className='text-2xl'>:</p> <br />
                                <p className='text-2xl'>:</p> <br />
                                <p className='text-2xl'>:</p> <br />
                              </div>

                              <div>
                              <h2 className='text-xl '>Proshmoni Sweater Limited</h2> <br />
                              <h2 className='text-xl '>Azad Complex, 1160 East Kolomessor,Board Bazar</h2> <br />
                              <h2 className='text-xl '>  Musafir Tower, 90 Kakrail(4thFloor), Dhaka-1000,Bangladesh. <br />Tel:+88-02-8300033</h2> <br />
                              <h2 className='text-xl '>A.K Azad, Managing Director</h2> <br />
                              <h2 className='text-xl '>+88-071711546968</h2> <br />
                              <h2 className='text-xl '>azadpsltd@gmail.com</h2> <br />
                              <h2 className='text-xl '>azadgroup-bd.com</h2> <br />
                              <h2 className='text-xl '> 1. SOUTHEAST BANK LTD,Uttara Branch, Dhaka-1230, Bangladesh
                                                                                 SWIFT: SEBDBDDHUT
                                                                                 A/C No: 001311100014179 <br />
                                                                                 
                                                                                 2. The Premier Bank Ltd. Banani Branch, Dhaka-1213,Bangladesh. SWIFT CODE: PRMRBDDHBNN A/C No: 104111000824411
                                                                                  </h2> <br /> <br />
                                                                                 

                              </div>
                        </div>
                </div>
                </div>
        );
};

export default AboutDirector;