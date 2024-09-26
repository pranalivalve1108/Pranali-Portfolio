import React from 'react';
import Header from './Header';

import './Contact.css';
import SocialIcons from './SocialIcons';
import HorizontalNavbar from './HorizontalNavbar';



const Contact = () =>{
    return(
        <div className="section-container">
             <Header Heading="Get in touch" 
            subHeading="Feel free to drop me an email!" />

            <div className="contact-form-container">
                <form  action="https://formspree.io/f/manwgvgp"
                    method="POST" className="contact-form">
                    <input type="email" required name="_replyto" placeholder="Your Email ID" 
                    className="input-box email-input" >
                    </input>
                    <textarea type="text" required placeholder="Write your message here" name="message"
                    className="input-box text-input" >
                    </textarea>
                    <button type="submit" className="contact-btn" >Send Email</button>
                </form>
            </div>

            <SocialIcons/>
            <HorizontalNavbar/>
           
            <div className="vector-frame">
                <img src="./Images/about_vector.png" className="about-vector" alt="about" />
            </div>
        </div>

    )
}

export default Contact