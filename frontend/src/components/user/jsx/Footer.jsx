import React from 'react';
import "../css/FooterStyles.css";
import Logo from "../../../img/logo.png";
import { BsLinkedin } from 'react-icons/bs';
import { FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <div className='main_container_footer'>
        <div className='top_section_footer'>
            <img src={Logo} alt='footer' />
            <h1>Learning Folks</h1>
        </div>

        <div className='bottom_section_footer'>
            <div className='bottom_left_section_footer'>
                <p>All rights reserved 2022</p>
            </div>

            <div className='bottom_right_section_footer'>
                <p>Connect With Us On</p>
                <div className='icons_container_footer'>
                    <a href='https://react-icons.github.io/react-icons/search?q=linke'><BsLinkedin className='icon1_footer' /></a>

                    <a href='https://react-icons.github.io/react-icons/search?q=linke'><FaYoutubeSquare className='icon2_footer' /></a>

                    <a href='https://react-icons.github.io/react-icons/search?q=linke'><FaWhatsappSquare className='icon3_footer' /></a>

                    <a href='https://react-icons.github.io/react-icons/search?q=linke'><AiFillInstagram className='icon4_footer' /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
