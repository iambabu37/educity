import { useState } from 'react'
import './App.css'
import Navbar  from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Program from './component/programs/Programs';
import Title from  './component/Title/Title'
import About from './component/About/About';
import Campus from './component/Campus/campus';
import Testimonals from './component/Testimonials/Testimonals';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer'
function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <Title subtitle="Our program" title ="what we offer"/>
    <Program/>
    <div className="container">
      <About/>
      <Title subtitle="gallary"title="campus photos"/>
      <Campus/>
      <Title subtitle="TESTIMONIALS"title="What Students Says"/>
      <Testimonals/>
      <Title subtitle="Contact Us" title = "Get in Touch"/>
      <Contact/>
    </div>
      <Footer/>

    </div>
  );
}

export default App
