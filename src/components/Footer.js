import React from 'react';
// import './App.css';

function Footer() {
  return (
  <div>
    <footer class="bg-gray-800 text-white py-8">
  <div class=" mx-auto px-6">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/4 text-center md:text-left">
        <a href='/' class="text-xl font-semibold mb-6 text-center" >About Us</a>
        <p className='container'>Ombrulla is an AI-driven company providing specialized services like AI Visual Inspection, AI People Tracking, AI Defect Detection, AI Infrastructure Inspection, and AI Data Analytics. Our tailored solutions empower businesses with data-driven decisions, automation, and improved bottom lines. PETRAN, our cutting-edge tracking solution, utilizes AI and IoT to monitor assets, machinery, equipment, people, and facilities, enabling comprehensive performance management and environmental sustainability.</p>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h2 class="text-xl font-semibold mb-6 text-center">Our Services</h2>
        <ul class="list-reset items-center text-sm container">
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="/infra">AI Infrastructure Inspection</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="/visual">AI VISUAL INSPECTION</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">AI DATA ANALYTICS</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">AI PEOPLE TRACKING</a></li>
        </ul>
        <a href='https://www.facebook.com/Ombrulla.UK'><i style={{marginLeft:'70px'}}  class="fa-brands fa-facebook"></i></a>
        <i  style={{marginLeft:'70px'}}  class="fa-brands fa-instagram"></i>
        <i style={{marginLeft:'70px'}}  class="fa-brands fa-twitter"></i>
      </div>
      
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h2 class="text-xl font-semibold mb-6 text-center">Our Solutions</h2>
        <ul class="list-reset items-center text-sm container">
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">ASSET PERFORMANCE MANAGEMENT SOFTWARE</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">RTLS - Workplace Safety</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">Environmental Sustainability</a></li>
        </ul>
        <i style={{marginLeft:"70px"}}  class="fa-brands fa-linkedin"></i>
        <i style={{marginLeft:"70px"}}  class="fa-brands fa-youtube"></i>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h2 class="text-xl font-semibold mb-6 text-center">Reach Us</h2>
        <ul class="list-reset items-center text-sm container">
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">United Kingdom,7 Bell Yard

London, WC2A 2JR

+44 7879 993892</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">Germany, Schützenstraße 51A

Lübeck, 23558

+49 179 512 5812</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">India, No. 154/20, Royal Space

Third Floor TI, HSR Layout,

Bangalore, Karnataka

560102</a></li>
          <li class="mb-2"><a class="inline-block text-gray-400 no-underline hover:text-gray-200 hover:underline py-1" href="#">+91 85900 56435</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  </div>
  );
}

export default Footer;