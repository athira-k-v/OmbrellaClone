import React, { useState } from 'react'
import ModalForm from './ModalForm'



function InfraPage() {

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div>
       <div className='container2'>
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
        <img
          src="https://i.postimg.cc/BZdmZPB9/bridge-828c5106-Z2m-Jk-Oa.webp"
          alt="Example Image"
          className=" h-4/5 rounded-lg shadow-lg w-" style={{border:'solid 1px ', borderRadius:'30px'}}
        />
      </div>
      <div className="md:w-1/2 p-4">
      <p className=" font-bold mb-4"><i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i>  AI INFRASTRUCTURE INSPECTION</p>
      
        <h1  className=" font-bold mb-4 text-4xl">
        Enhances Efficiency, Safety, and <br />
         Cost-Effectiveness
         
         </h1>
        <p className="text-black-700 text-1xl">
        Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.        </p>
        <ul class="list-disc">
  <li>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
</ul>
<ul class="list-disc">
  <li>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
</ul>
<ul class="list-disc">
  <li> Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
</ul>
<ul class="list-disc">
  <li>Safety: AI inspections in infrastructure reduce manual work in hazardous areas, enhancing worker safety</li>
</ul> <br /><br />
        <button   onClick={handleModalOpen}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Schedule Call
            </button>
            {showModal && <ModalForm onClose={handleModalClose} />}

            <a href='https://www.ombrulla.com/ai-infrastructure-inspection' className="  text-white font-bold py-2 px-4 rounded ml-4">
            <span style={{color:"black"}}>   Read More <i class="fa-solid fa-arrow-right fa-rotate-300" style={{color:'blue'}}></i></span>
            </a>
      </div>
     
    </div>
    </div> 







{/* <div>
    <img src="https://i.postimg.cc/3xyS3jPT/3.webp" alt="" />
</div> */}





<div className='bg2 text-white'>
        <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-5" style={{padding:'100px'}}>
      <p className=" font-bold mb-4"><i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i>  PETRAN</p>
      <br />
      <p>PErformance - TRacking - ANalytics</p>

        <h1  className=" font-bold mb-4 text-4xl">
        AIoT Enabled Asset
Performance Management Software
         </h1>
        <p className="text-black-700 text-1xl">
        PETRAN offers an Asset Management software (APM) that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable predictive maintenance and operational equipment effectiveness
        </p>
        <br /><br />
      

        <button    onClick={handleModalOpen} style={{border:'1px white solid'}} className="-hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Schedule Call
            </button>
            {showModal && <ModalForm onClose={handleModalClose} />}

            <button className="  text-white font-bold py-2 px-4 rounded ml-4">
            <span style={{color:"white"}}> <i class="fa-solid fa-circle-play fa-2xl" style={{color:'white'}}></i>  Watch Video</span>
            </button>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src="https://i.postimg.cc/cLRn4R2g/3.webp"
          alt="Example Image"
          className="" 
        />
      </div>
    </div>

    </div>











    </div>
  )
}

export default InfraPage