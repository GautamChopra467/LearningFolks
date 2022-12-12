import React from 'react'
import "../css/AboutFooterStyles.css" ;
import {BsWhatsapp} from "react-icons/bs" ;
import {FaInstagram} from "react-icons/fa" ;
import {IoLogoLinkedin } from "react-icons/io" ;
import {AiOutlineYoutube} from "react-icons/ai" ;
import {BsDiscord} from "react-icons/bs" ;
import {SiGmail} from "react-icons/si" ;
function AboutFooter() {

  return (
    <>
    <div className='footer_heading'>
        <h1>Contact Us & Collaborate</h1>
    </div>
    <div className="about_footer_section">
       <div className='icon'>
        <FaInstagram/>
        <p className='icon_title'>Join us at Instagram</p>
       </div>
       <div className='icon'>
        <IoLogoLinkedin/>
        <p className='icon_title'>Connect via Linkedin</p>
       </div>
       <div className='icon'>
        <BsDiscord/>
        <p className='icon_title'>Join our Discord Channel</p>
       </div>
       <div className='icon'>
        <AiOutlineYoutube/>
        <p className='icon_title'>Join us at Youtube</p>
       </div>
       <div className='icon'>
        <BsWhatsapp/>
        <p className='icon_title'>Join our Whatsapp Community</p>
       </div>
       <div className='icon'>
        <SiGmail/>
        <p className='icon_title'>Contact us via mail</p>
       </div>
    </div>
    </>
  )
}

export default AboutFooter