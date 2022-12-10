import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import "../css/HomeBanner3Styles.css";
import { FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const HomeBanner3 = () => {
  return (
    <div>
      <div className='main_container_homebanner3'>
        <div className='top_section_homebanner3'>
            <h2>Join Our Community</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>

        <div className='bottom_section_homebanner3'>
            <a href='https://react-icons.github.io/react-icons/search?q=linke'><BsLinkedin className='icon1_homebanner3' /></a>

            <a href='https://react-icons.github.io/react-icons/search?q=linke'><FaYoutubeSquare className='icon2_homebanner3' /></a>

            <a href='https://react-icons.github.io/react-icons/search?q=linke'><FaWhatsappSquare className='icon3_homebanner3' /></a>

            <a href='https://react-icons.github.io/react-icons/search?q=linke'><AiFillInstagram className='icon4_homebanner3' /></a>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner3
