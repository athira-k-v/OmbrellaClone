




import React from 'react';

const Brands = () => {
  return (
   <div >
    <div>
    <p className=" font-bold mb-4 text-center"><i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i>  BRANDS WE WORK WITH <i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i></p>
<h1 className='text-center text-6xl  font-bold'>Trusted by Thousands of Businesses</h1>
    </div>
    <br /><br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container1 border-slate-800" style={{backgroundColor:'#f5f2f2', border:'1px solid #e0dcdc'}}>
          <div className="  p-4 hover:bg-black-700 hover:shadow-lg transition-shadow duration-300"><img className='h-40' src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="" /></div>
          <div className=" p-4 hover:bg--700 hover:shadow-lg transition-shadow duration-300"><img className='h-40' src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="" /></div>
          <div className="p-4 hover:bg-700 hover:shadow-lg transition-shadow duration-300"><img className='h-40' src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="" /></div>
          <div className=" p-4 hover:bg-700 hover:shadow-lg transition-shadow duration-300"><img className='h-40' src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="" /></div>
          <div className=" p-4 hover:bg-700 hover:shadow-lg transition-shadow duration-300"><img className='h-40' src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="" /></div>
          <div className=" p-4 hover:bg-700 hover:shadow-lg transition-shadow duration-300"><img  className='h-40'src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="" /></div>
        </div>
   </div >
  );
};

export default Brands;