import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'

const About = () =>{
    return (
        <div id='about'className ="about">
            <div className="about-left">
                <img src = {about}  className = "about_img" alt = "about_image" />
                <img className="playimage" src = {play} alt = "play_image" />

            </div>
             <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's leader today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores laborum voluptates laudantium perferendis illo laboriosam tempora repudiandae molestiae ex. Unde suscipit dolorem laudantium ut nam. Blanditiis ex repellendus necessitatibus?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio soluta, exercitationem eveniet repudiandae dicta eius doloremque! Quas quibusdam rerum illum inventore. Iusto repudiandae quae consectetur, adipisci sed voluptatibus laboriosam voluptatum.</p>
             </div>
        </div>
    )
}

export default About