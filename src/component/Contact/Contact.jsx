import React from "react";
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import whitearrow from "../../assets/white-arrow.png"
  
const Contact = ()=>{
    return(
        <div id ="contact" className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" />  </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat molestias blanditiis adipisci iure, nihil fugit maxime voluptate doloremque explicabo quam rerum consequatur expedita accusamus itaque, quisquam minus? Sint, quas.
                Rerum</p>
                <ul>
                    <li> <img src={mail_icon}alt="" />babukanthasamy@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />78578954y4</li>
                    <li>
                        <img src={location_icon} alt="" />contactgreatestak.dev</li>
                </ul>
            </div>
            <div className="contact-col1">
                <form>
                    <label>Your name</label>
                    <input type="text" name='name'placeholder="Enter your name" required/>
                    <label>Phone Number</label>
                    <input name ="phone" type="tel" placeholder="Enter your number"
                    required/>
                    <textarea name="message" id="" rows="6" placeholder="Enter your message"></textarea>
                    <button type = "submit" className="btn darkbtn ">
                        Submit Now
                        <img src={whitearrow} alt="" />
                    </button>
                </form>
                <span>send success fully</span>
            </div>

        </div>
    )
}
export default Contact
