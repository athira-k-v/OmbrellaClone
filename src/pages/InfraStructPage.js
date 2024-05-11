import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function InfraStructPage() {
  return (
    <div>
      {/* <Header></Header> */}


      <div className='container2'>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <p className=" font-bold mb-4"><i class="fa-solid fa-square fa-sm" style={{ color: 'blue' }}></i>  AI VISUAL INSPECTION With</p>

            <h1 className=" font-bold mb-4 text-4xl">
              Computer Vision and Drone
              <br />
              Technology
            </h1>
            <p className="text-black-700 text-1xl">
              Computer vision and drone technology are transforming the way inspections are conducted. By combining these two powerful technologies, businesses can inspect assets more efficiently, safely, and in detail.
            </p>
            <ul class="list-disc">
              <li>Construction: Inspect construction sites for safety hazards and monitoring.</li>
            </ul>
            <ul class="list-disc">
              <li>Energy: Inspect power lines, pipelines, and other energy infrastructure.</li>
            </ul>
            <ul class="list-disc">
              <li> Transportation: Inspect bridges, roads, and other transportation infrastructure.</li>
            </ul>
            <br /><br />
            <button
              // onClick={handleModalOpen} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Schedule Call
            </button>
            {/* {showModal && <ModalForm onClose={handleModalClose} />} */}

            <button className="  text-white font-bold py-2 px-4 rounded ml-4">
              <span style={{ color: "black" }}>   Read More <i class="fa-solid fa-arrow-right fa-rotate-300" style={{ color: 'blue' }}></i></span>
            </button>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://www.ombrulla.com/_astro/infrastructure-inspection.bebdb5f9_RTFFy.webp"
              alt="Example Image"
              className=" h-4/5 rounded-lg shadow-lg w-" style={{ border: 'solid 1px ', borderRadius: '30px' }}
            />
          </div>
        </div>

      </div>







      <div className='container1 hover:bg-black-700 hover:shadow-lg transition-shadow duration-300' style={{ border: '1px solid white' }}>
        <p className=" font-bold mb-4 text-center"><i class="fa-solid fa-square fa-sm" style={{ color: 'blue' }}></i>  Use Cases <i class="fa-solid fa-square fa-sm" style={{ color: 'blue' }}></i></p>
        <h1 className='text-center text-6xl  font-bold'>How AI Infrastructure Inspection Improved Accuracy and Efficiency?
        </h1>
        <div className="flex flex-wrap">


          <div className="w-full md:w-1/3 p-4 h-100">
            <div className="bg-white  rounded- p-6">

              <img style={{ height: '200px' }} src="https://www.ombrulla.com/_astro/crack-rebar.ecd23282_ZiJIwb.webp" alt="" /> <br />
              <p>Concrete Structure Inspection</p>
              <h1 className='text-2xl font-bold'>Crack, Rebar, Vegetation and Spalling Detection</h1>
            </div>



          </div>






          <div className="w-full md:w-1/3 p-4 h-100">
            <div className="bg-white  rounded- p-6">

              <img style={{ height: '200px' }} src="  https://www.ombrulla.com/_astro/power-lines.a870b89d_CdpLV.webp" alt="" /> <br />
              <p>AI-Enhanced Utility Inspection</p>
              <h1 className='text-2xl font-bold'>Power Lines, Pipelines and Telecom Tower</h1> <br />
              <p>Crucial for ensuring the reliability, safety, and cost-effectiveness of utility services, which are essential for our daily lives and the functioning of various industries.</p>
            </div>


          </div>




          <div className="w-full md:w-1/3 p-4 h-100">
            <div className="bg-white  rounded- p-6">

              <img style={{ height: '200px' }} src="https://www.ombrulla.com/_astro/corrosion-resting.e0580a3a_1zjcJm.webp" alt="" /> <br />
              <p>AI-powered steel structure inspection</p>
              <h1 className='text-2xl font-bold'>Corrosion, Resting and Paint Damages</h1> <br />
              <p>Utilizing drone and computer vision technology for advanced assessment of the condition, integrity, and safety of steel-based infrastructure, including bridges, buildings, and industrial facilities</p>
            </div>


          </div>



        </div>
      </div>










      <div className='bg2 p-20'>
        <h1 className='text-3xl text-white'>WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7 <br />

          Need A Consultation?</h1>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
          Schedule Call
        </button>

      </div>
      <br />


      <div>
        <h1 className='text-5xl text-center'>Bussiness Benifits</h1>




        <div className="flex flex-wrap " >


          <div className="w-full md:w-1/4 p-4 h-100 " >
            <div className="bg-white  rounded- p-6 hover:bg-black-700 hover:shadow-lg transition-shadow duration-300 "style={{border:'solid 1px white'}}>

            
             
              <h1 className='text-2xl font-bold'>Enhanced detail</h1>
              <p>Computer vision algorithms can be used to analyze drone footage and identify defects which can help businesses to detect problems early on and take corrective action before they cause major damage or outages.</p>
            </div>



          </div>






          <div className="w-full md:w-1/4 p-4 h-100">
            <div className="bg-white  rounded- p-6 hover:bg-black-700 hover:shadow-lg transition-shadow duration-300 " style={{border:'solid 1px white'}}>

              {/* <img style={{ height: '200px' }} src="" alt="" /> <br /> */}
             
              <h1 className='text-2xl font-bold'>Increased efficiency</h1> <br />
              <p>Computer vision and drone technology can automate many of the manual tasks involved in inspections, such as data collection and analysis. This can free up inspectors to focus on more complex tasks and make decisions more quickly.</p>
            </div>


          </div>




          <div className="w-full md:w-1/4 p-4 h-100">
            <div className="bg-white  rounded- p-6 hover:bg-black-700 hover:shadow-lg transition-shadow duration-300 " style={{border:'solid 1px white'}}>

              {/* <img style={{ height: '200px' }} src="" alt="" /> <br /> */}
              
              <h1 className='text-2xl font-bold'>Improved safety</h1> <br />
              <p> Drones can be used to inspect assets that are difficult or dangerous to reach by humans, such as bridges, power lines, and telecom towers. This can help to reduce the risk of accidents and injuries.</p>
            </div>


          </div>


          <div className="w-full md:w-1/4 p-4 h-100">
            <div className="bg-white  rounded- p-6 hover:bg-black-700 hover:shadow-lg transition-shadow duration-300 " style={{border:'solid 1px white'}}>

              {/* <img style={{ height: '200px' }} src=" " alt="" /> <br /> */}
              
              <h1 className='text-2xl font-bold'>Accuracy</h1> <br />
              <p> AI can analyze vast amounts of data quickly, allowing for more comprehensive inspections in a shorter time.</p>
            </div>


          </div>



        </div>
      </div>





      <Footer></Footer>
    </div>
  )
}

export default InfraStructPage