import React from 'react'

function Products() {
  return (
    <div>
        <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 p-4 h-100">
        <div className="bg-white  rounded-lg p-6">
        <p><i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i>    PRODUCTS</p>
          <h2 className="text-2xl font-bold mb-4">Tracking Tools</h2>
          <p>AI and IoT-enabled tracking tools enhance workplace safety by providing real-time monitoring of workers' movements and vital signs. Simultaneously, they contribute to environmental sustainability by optimizing energy usage, improving waste management, and promoting resource efficiency.</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-4">
        <div className=" shadow-md  p-6 border  bg-slate-200">
          <h2 className="text-2xl font-bold mb-4">RTLS - Workplace Safety</h2>
          <p>IoT and AI integration improves workplace safety by continuously monitoring vital signs and locations in real-time for proactive hazard detection.</p>
          <img style={{height:'200px'}} src="https://www.ombrulla.com/_astro/safetyr.6f7bac17_2OxpR.webp" alt="" />
          <a href='https://calendly.com/anoop-ombrulla/30min?month=2024-05' className="btn btn-primary mt-4">Book For Demo<i class="fa-solid fa-arrow-right fa-rotate-300" style={{color:'blue'}}></i></a>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-4">
        <div className=" shadow-md   p-6 border  bg-slate-200 h-100">
          <h2 className="text-2xl font-bold mb-4">Environmental Sustainability</h2>
          <p>AI and IoT enhance environmental sustainability by optimizing energy use, improving waste management, and promoting resource efficiency.</p>
          <img style={{height:'200px'}} src="https://www.ombrulla.com/_astro/envsafety.45f1043e_Z8wyMD.webp" alt="" />
          <a href='https://calendly.com/anoop-ombrulla/30min?month=2024-05' className="btn btn-primary mt-4">Book For Demo<i class="fa-solid fa-arrow-right fa-rotate-300" style={{color:'blue'}}></i></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Products