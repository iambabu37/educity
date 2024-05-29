
import React from 'react';
import "./Navbar.css"
import logo from '../../assets/logo.png'
import { useEffect,useState } from 'react';
import menu_icon from "../../assets//menu-icon.png"


const Navbar = () =>{
const [sticky,setsticky] = useState(false)
useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY>50?setsticky(true):setsticky(false);
    },[]); 
})
    const[mobileMenu,setmobileMenu] = useState(false);
    const togglemenu = ()=>{
        mobileMenu ? setmobileMenu(false):setmobileMenu(true)
    }
    return (
        <nav className={`container '${sticky?'  darknav':''}`}>
            <img src={logo} alt="logo_image"/>

            <ul className={mobileMenu ? '':'hide-menu'}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#Campus">Campus</a></li>
                <li><a href="#testimonal">Testimonals</a></li>
                <li><a href="#contact"><button className='btn'>
                Contact Us</button></a></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu}/>
        </nav>
     
        
    )

}

export default Navbar