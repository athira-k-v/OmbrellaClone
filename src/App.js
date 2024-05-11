import { Route, Routes } from 'react-router-dom';
import './App.css';
import AiInsight from './components/AiInsight';
import Brands from './components/Brands';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Header from './components/Header';
import InfraPage from './components/InfraPage';
import Products from './components/Products';
import TestimonialsSlider from './components/TestimonialsSlider';
import VideoPage from './components/VideoPage';
import VisualPage from './components/VisualPage';
// import InfraStructPage from './pages/InfraStructPage';


const testimonials = [
  {   
    img:'https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp',

    quote: 'Ombrulla s AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.',
    name: 'James Joseph',
    role: 'Managing Director, Terranz Dubai, UAE',
  },
  {
    quote: ' We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.',
    name: 'Vinod MN    ',
    role: 'Managing Director, AZEL IT Solutions',
    img:"https://www.ombrulla.com/azelit.webp"
  },
  {
    quote: 'Ombrulla s AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.',
    name: 'Joseph',
    role: 'Terranz Dubai, UAE',
    img:"https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp"
  },
  {
    quote: 'Ombrulla s AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The systems accuracy and real-time insights not only streamline operations but also elevate overall security measures.',
    name: 'Tony Michael',
    role: 'CEO, The Cotillion Hotels, New York, USA',
    img:"https://www.ombrulla.com/wild-leaf.webp"
  },
  {
    quote: 'We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us',
    name: 'David Thomas',
    role: 'Managing Director Best Western, Kansas, USA',
    img:"https://www.ombrulla.com/best-western.webp"
  },
  
];


function App() {
  return (
    <div className="App">


     <Routes> 
      <Route path='/' element={<Header></Header>}></Route>
      <Route path='/' element={ <VideoPage></VideoPage>}> </Route>
      <Route path='/visual' element={  <VisualPage></VisualPage>}></Route>
      <Route path='/infra' element={  <InfraPage></InfraPage>}></Route>
      <Route path='/product' element={   <Products></Products>}></Route>
      {/* <Route path='/infrapage' element={ <InfraStructPage></InfraStructPage>}></Route> */}
      {/* <Route path='/' element={}></Route> */}
      </Routes>

<VideoPage></VideoPage>
<VisualPage></VisualPage>
<InfraPage></InfraPage>
<Products></Products>
   
      <br />
      <br />
      <Customers></Customers>

<br /><br />
<div className="p-8">
    <TestimonialsSlider testimonials={testimonials} />
  </div>
<br /><br />
<Brands></Brands>
<br /><br />
      <AiInsight></AiInsight>
      <br />
      <br />
     
      <Footer></Footer>
    </div>
  );
}

export default App;
