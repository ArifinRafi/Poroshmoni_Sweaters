import React from 'react';
import machine1 from '../assets/images/machine1.jpg'
import machine2 from '../assets/images/machine2.jpg'
import machine3 from '../assets/images/machine3.jpg'
import machine4 from '../assets/images/machine4.jpg'


const Machines = () => {
        return (
                <div>
                        {/* machine1 */}
                        <div className='grid mt-20 grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl ml-24 font-semibold'>Jacquard Knitting Machine</h1> <br />
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
                                
                                <td>140 Nos.</td>
                              </tr>
                            </tbody>
                          </table>
</div>
                                <p></p>
                                </div>
                                <img className='rounded-xl shadow-2xl' src={machine1} alt="" />   
                </div>


                {/* machine2 */}
                <div className='grid mt-20 grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl ml-24 font-semibold'> Dial Linking Machine</h1> <br />
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
                                <img className='shadow-2xl rounded-xl w-[550px] h-[500px]' src={machine2} alt="" />   
                </div>



                {/* machine3 */}

                <div className='grid mt-20 grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl ml-24 font-semibold'> Dial Linking Machine</h1> <br />
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
                         <img className='shadow-2xl rounded-xl w-[550px] h-[500px]' src={machine3} alt="" />   
                                     </div>

                  {/* machine4 */}

                  <div className='grid mt-20 grid-cols-2 text-blue-900 max-w-screen-2xl mx-auto'>
                                <div className=''>
                                <h1 className='text-2xl  font-semibold'> Latest Washing Machine & Iron Machine Plant</h1> <br />
                                               <div className="overflow-x-auto">
                 <table className="table">
                   {/* head */}
                   
                   <tbody>
                     {/* row 1 */}
                     <tr className="hover">
                       <th>1</th>
                       <th>Washing</th>
                       <th>M/C</th>
                       <td>2 Nos.</td>
                     </tr>

                     <tr className="hover">
                       <th>2</th>
                       <th>Hydrostructer</th>
                       <th>M/C</th>
                       <td>2 Nos.</td>
                     </tr>

                     <tr className="hover">
                       <th>3</th>
                       <th>Dryer</th>
                       <th>M/C</th>
                       <td>2 Nos.</td>
                     </tr>

                     <tr className="hover">
                       <th>4</th>
                       <th>Boiler</th>
                       <th>M/C</th>
                       <td>2 Nos.</td>
                     </tr>

                     <tr className="hover">
                       <th>5</th>
                       <th>Iron</th>
                       <th>M/C</th>
                       <td>2 Nos.</td>
                     </tr>

                     <tr className="hover">
                       <th>Total</th>
                       <th></th>
                       <th></th>
                       <th>30 Nos.</th>
                     </tr>
                     
                   </tbody>
                 </table>
</               div>
                         <p></p>
                         </div>
                         <img className='shadow-2xl rounded-xl w-[550px] h-[500px]' src={machine4} alt="" />   
                                     </div>
                                </div>
               

                
                       );
};               

export default Machines;