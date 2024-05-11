import React, { useState } from 'react'
import ModalForm from './ModalForm'


function VisualPage() {
  const [showModal, setShowModal] = useState(false);


  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  return (
    <div className='container2'>
        <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
      <p className=" font-bold mb-4"><i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i>  AI VISUAL INSPECTION</p>

        <h1  className=" font-bold mb-4 text-4xl">
        Enhancing quality through
         <br />
          AI-based visual inspection
         </h1>
        <p className="text-black-700 text-1xl">
        Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.
        </p>
        <ul class="list-disc">
  <li>AI visual inspection ensures consistent performance with unmatched accuracy</li>
</ul>
<ul class="list-disc">
  <li>It boosts throughput and cuts down on labour expenses</li>
</ul>
<ul class="list-disc">
  <li> By minimizing recalls and rework, AI inspection enhances brand reputation</li>
</ul>
<ul class="list-disc">
  <li>Real-time data and analytics enable scalability in AI-based visual inspection</li>
</ul><br /><br />
        <button   onClick={handleModalOpen} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Schedule Call
            </button>
            {showModal && <ModalForm onClose={handleModalClose} />}

            <a href='https://www.ombrulla.com/ai-infrastructure-inspection' className="  text-white font-bold py-2 px-4 rounded ml-4">
            <span style={{color:"black"}}>   Read More <i class="fa-solid fa-arrow-right fa-rotate-300" style={{color:'blue'}}></i></span>
            </a>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src="https://i.postimg.cc/52zpF4pY/ai-food2-7e761c87-TNwbv.webp"
          alt="Example Image"
          className=" h-4/5 rounded-lg shadow-lg w-" style={{border:'solid 1px ', borderRadius:'30px'}}
        />
      </div>
    </div>

    </div>

  
  )
}

export default VisualPage