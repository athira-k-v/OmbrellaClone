// CorporateVideoPage.js
import React from 'react';

const VideoPage = () => {
  return (
<div className='container1 w- bg1'>
        <div className="  mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h1 className="text-3xl font-bold mb-4"><i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i> Leader in AI Visual Inspection</h1>
          <p className="text-lg mb-6"><span className='text-6xl' >Crafting Tomorrow's</span > <br />
         <span className='text-6xl'>  World with  <span style={{color:'blue'}}>AI</span></span>
           <br /> <span className='text-6xl' style={{color:'blue'}}>Excellence</span> </p>
          
          <div className="text-lg mb-6">
            <p>Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting valuable information from various sources like photos, videos, and data lakes.</p>
            <p>Our AI visual inspection system enables businesses to enhance their bottom line through precise defect detection and actionable insights.</p>
          </div>
          <div className="flex justify mb-6">
            <a href='https://www.youtube.com/watch?v=RHrTxizgOjc&t=6s' className=" text-dark font-bold py-2 px-4 rounded">
            <i class="fa-solid fa-circle-play fa-2xl" style={{color:'blue'}}></i>     Watch Corporate Video
            </a>
          </div>
        </div>
</div>
  );
};

export default VideoPage;