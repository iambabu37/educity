import React from 'react';
import "./Hero.css"
import darkarrow from '../../assets/dark-arrow.png'
const Hero = () =>{
    return (
        <div id = "hero" className='container hero'>
        <div className='herotext'>
        <h1>We Ensure better education for a better world </h1>
            <p>
                Our cutting-edge curiculum is desingn to empower students with the knowledge studd and experience needed to excel in the dyanmc field of education.
            </p>
            <button className='btn'>Explore more<img src = {darkarrow}/></button>
        </div>
               
        </div>
    )

} 

export default Hero

