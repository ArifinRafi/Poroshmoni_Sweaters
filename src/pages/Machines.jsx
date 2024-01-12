import React from 'react';
import machine1 from '../assets/images/jaq.jpg'
import machine2 from '../assets/images/knitting_machine.jpg'
import machine3 from '../assets/images/machine3.jpg'
import machine4 from '../assets/images/washing.jpg'


const Machines = () => {
        return (
                <div>
                        {/* machine1 */}
                        <div className='grid mt-20 gid-cols-1 lg:grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl lg:ml-24 pl-10 w-full font-semibold'>Jacquard Knitting Machine</h1> <br />
                                <div className="overflow-x-auto">
                          <table className="table">
                            {/* head */}
                            
                            <tbody>
                              {/* row 1 */}
                              <tr className="hover">
                                <th>1</th>
                                <th>3GG</th>
                                <td>M/C</td>
                                <td>20 Nos.</td>
                              </tr>
                              {/* row 2 */}
                              <tr className="hover">
                                <th>2</th>
                                <th>5GG</th>
                                <td>M/C</td>
                                <td>20 Nos.</td>
                              </tr>
                              {/* row 3 */}
                              <tr className="hover">
                                <th>3</th>
                                <th>7GG</th>
                                <td>M/C</td>
                                <td>20 Nos.</td>
                              </tr>
                              <tr className="hover">
                                <th>4</th>
                                <th>Multi GG</th>
                                <td>M/C</td>
                                <td>20 Nos.</td>
                              </tr>
                              <tr className="hover">
                                <th>5</th>
                                <th>12 GG</th>
                                <td>M/C</td>
                                <td>60 Nos.</td>
                              </tr>
                              <tr className="hover">
                                
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <td>140 Nos.</td>
                              </tr>
                            </tbody>
                          </table>
</div>
                                <p></p>
                                </div>
                                <div className='flex justify-center items-center'>
                                <img className='rounded-xl shadow-2xl w-[35rem]' src={machine1} alt="" />
                                  </div>   
                </div>


                {/* machine2 */}
                <div className='grid mt-20 gid-cols-1 lg:grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl ml-12 lg:ml-24 font-semibold'> Dial Linking Machine</h1> <br />
                                <div className="overflow-x-auto">
                                  <table className="table">
                                    {/* head */}
                                    
                                    <tbody>
                                      {/* row 1 */}
                                      <tr className="hover">
                                        <th>1</th>
                                        <th>3,5,7 & 12 GG </th>
                                        <td>400 Nos.</td>
                                      </tr>
                                      {/* row 2 */}
                                      <tr className="hover">
                                        <th>2</th>
                                        <td>Packet Machine</td>
                                        <td>06 Nos.</td>
                                      </tr>
                                      {/* row 3 */}
                                      <tr className="hover">
                                        <th>3</th>
                                        <th>Dusting Machines</th>
                                        <td>2 Nos.</td>
                                      </tr>
                                    </tbody>
                                  </table>
                               </div>
                                <p></p>
                                </div>
                                <div className='flex justify-center items-center'>
                                <img className='shadow-2xl rounded-xl w-full lg:w-[35rem] lg:mt-0 mt-20 lg:h-[500px]' src={machine2} alt="" />   
                                </div>
                            </div>



                {/* machine3 */}

                <div className='grid mt-20 gid-cols-1 lg:grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl ml-12 lg:ml-0 font-semibold'> Dial Linking Machine</h1> <br />
                                               <div className="overflow-x-auto">
                 <table className="table">
                   {/* head */}
                   
                   <tbody>
                     {/* row 1 */}
                     <tr className="hover">
                       <th>1</th>
                       <th>All GG</th>
                       <th>M/C</th>
                       <td>10 Sets</td>
                     </tr>
                     
                   </tbody>
                 </table>
</               div>
                         <p></p>
                         </div>
                         <div className='flex justify-center items-center'>
                         <img className='shadow-2xl rounded-xl w-full lg:w-[35rem] lg:h-[500px]' src={machine3} alt="" />   
                         </div>
                         
                         </div>

                  {/* machine4 */}

                  <div className='grid mt-20 gid-cols-1 lg:grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl ml-12 lg:ml-0 font-semibold'> Latest Dryer and Washing Machines</h1> <br />
                                               <div className="overflow-x-auto">
                 <table className="table">
                   {/* head */}
                   
                   <tbody>
                     {/* row 1 */}
                     <tr className="hover">
                       <th>2</th>
                       <th>Hydrostructurer</th>
                       <th>M/C</th>
                       <td>2 NOS</td>
                     </tr>

                     <tr className="hover">
                       <th>3</th>
                       <th>Dryer</th>
                       <th>M/C</th>
                       <td>2 NOS</td>
                     </tr>

                     <tr className="hover">
                       <th>4</th>
                       <th>Boiler</th>
                       <th>M/C</th>
                       <td>2 NOS</td>
                     </tr>
                     <tr className="hover">
                       <th>1</th>
                       <th>Iron</th>
                       <th>M/C</th>
                       <td>2 NOS</td>
                     </tr>
                     
                   </tbody>
                 </table>
</               div>
                         <p></p>
                         </div>
                         <div className='flex justify-center items-center'>
                         <img className='shadow-2xl rounded-xl w-full lg:w-[35rem] lg:h-[500px]' src={machine4} alt="" />   
                         </div>
                         
                         </div>

                  {/* machine4 */}
                                </div>
               

                
                       );
};               

export default Machines;