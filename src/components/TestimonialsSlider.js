





import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TestimonialsSlider = ({ testimonials }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
  <div style={{backgroundColor:' #051a3b'}} >
     <div>
    <p className=" font-bold mb-4 text-white p-5 "><i class="fa-solid fa-square fa-sm" style={{color:'blue'}}></i>  OUR TESTIMONIALS </p>
<h1 className='text-white ps-5 text-4xl'>What Customers Say About Us</h1>
    </div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}>
          {testimonials.map((testimonial, index) => (
            <div key={index} >
<div style={{ padding:'45px'}}>
   
<div  >
    
                      <p style={{color:'black',backgroundColor:'white',padding:'50px' }}   className="text-lg font-medium "><i style={{color:"blue"}} class="fa-solid fa-quote-left"></i><br />{testimonial.quote} <br /><i style={{color:"blue"}} class="fa-solid fa-quote-right"></i></p>
<div style={{display: 'flex', alignItems: 'center',backgroundColor:'#5d6066'}}>
                           <img style={{height:'80px', marginRight: '10px', border:'solid white', borderRadius:'40px'}} src={testimonial.img} alt="" />
                           <p  style={{color:'black', backgroundColor:'#5d6066'}} className="text-800 w-100"> -<b> {testimonial.name}</b>,<br /> <span style={{color:'blue'}}>{testimonial.role}</span></p>
    
</div>    
</div>    
</div>            </div>
          ))}
        </Carousel>
  </div>
  );
};

export default TestimonialsSlider;