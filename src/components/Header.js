




import React, { useState } from 'react';
import ModalForm from './ModalForm';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

 
  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  return (
    <div className=" mx-auto   md:p-6 lg:p-12 bg-gradient-to-b from-violet-200 to-white-200 ">
      <nav className="flex items-center justify-between flex-wrap   mx-auto ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
           src="https://i.postimg.cc/RF2zGV5r/logo-removebg-preview.png"
           alt="Your Image"
          style={{height:'55px', width:'180px'}} 
         />
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400  hover:text-white ">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="flex-none ml-auto">
            <div className="inline-block text-sm px-4 py-2 leading-none  rounded text-white  hover:border-transparent hover:bg-white mt-4 lg:mt-0">
              <a href="#" className="block">Home</a>
            </div>
            <div className="inline-block text-sm px-4 py-2 leading-none  rounded   hover:border-transparent hover:bg-white mt-4 lg:mt-0 ml-2">
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                <span className="mr-2">Services</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 11.812 5.657 7.586 4.293 9l1.414 1.414L10 14.188z"/></svg>
              </button>
              <div className={`${isOpen ? `block` : `hidden`} absolute top-full   bg-slate-400 text-white mt-2 rounded`}>
                <a href="/visual" className="block text-sm py-1">AI VISUAL INSPECTION</a>
                <a href="/infra" className="block text-sm py-1">AI INFRASTRUCTURE INSPECTION</a>
                <a href="#" className="block text-sm py-1">AI PEOPLE TRACKING</a>
                <a href="#" className="block text-sm py-1">AI DATA ANALYTICS</a>
              </div>
            </div>
            <div className="inline-block text-sm px-4 py-2 leading-none rounded   hover:border-transparent hover:bg-white mt-4 lg:mt-0 ml-2">
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                <span className="mr-2">Product</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 11.8125.657 7.586 4.293 9l1.414 1.414L10 14.188z"/></svg>
              </button>
              <div className={`${isOpen ? `block` : `hidden`} absolute    mt-2 rounded`}>
                <a href="#" className="block text-sm py-1">Asset Performannce Management</a>
               
              </div>
            </div>
            <div className="inline-block text-sm px-4 py-2 leading-none  rounded text-white  hover:border-transparent hover:bg-white mt-4 lg:mt-0 ml-2">
              <a href="#" className="block">About</a>
            </div>
            <div className="inline-block text-sm px-4 py-2 leading-none  rounded text-white  hover:border-transparent hover:bg-white mt-4 lg:mt-0 ml-2">
              <a href="#" className="block">Blog</a>
            </div>
            
          </div>
        </div>
      </nav>
  
  <br /><br /><br /><br />
  <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h1 className=" font-bold mb-4"><span style={{fontSize:'70px'}}> Manual</span>  <br />
        <span style={{fontSize:'70px'}}>  Inspection is</span> <br />
  
           <span style={{color:'blue', fontSize:"40px"}}>Slow & Error-Prone</span></h1>
          <p className="text-black-700">
         Al-powered visual inspection, leveraging computer vision, transforms manufacturing inspection procedures, boosting precision and cost-effectiveness while upholding product excellence. This Al inspection system detects defects with exceptional accuracy, optimizing the overall inspection process.       
         </p>
         <button  
          onClick={handleModalOpen} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
             Schedule Call
           </button>
           {showModal && <ModalForm onClose={handleModalClose} />}
              <button className="  text-white font-bold py-2 px-4 rounded ml-4">
               <a href="https://www.youtube.com/watch?v=RHrTxizgOjc&t=6s" style={{color:"black"}}> <i class="fa-solid fa-circle-play fa-2xl" style={{color:'blue'}}></i>  Watch Video</a>
              </button>
       </div>
     <div className="md:w-1/2 p-4">
          <img
         src="https://i.postimg.cc/pTsHjYkd/ai-visual-inspection-banner-1-f3232628-Zy-IKMH.png"
          alt="Example Image"
          className=" h-auto rounded-lg shadow-lg" style={{border:'solid 1px ', borderRadius:'100%'}} />
         </div>
       </div>

       {/* <ModalForm isOpen={showModal} onClose={handleModalClose} /> */}
       {/* <ModalForm isOpen={isModalOpen} onClose={handleModalClose} /> */}

       {/* {showModal && <ModalForm onClose={handleModalClose} />} */}

    </div>



  );
};

export default Header;
  