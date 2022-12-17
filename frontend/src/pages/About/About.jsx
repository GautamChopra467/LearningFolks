import React from 'react'
import Header from '../../components/user/jsx/Header'
import AboutBanner2 from '../../components/About/jsx/AboutBanner2'
import "../../components/About/css/AboutStyles.css";
import Carreer from '../../components/About/jsx/Carreer';
import Join from '../../components/About/jsx/Join';
import Community from '../../components/About/jsx/Community';
import AboutFooter from '../../components/About/jsx/AboutFooter';
import Doubt from '../../components/About/jsx/Doubt';
function About() {
  return (
    <>
    <Header/>
    <div className='about_page'>
        <div className='banner_sections'> 
        <AboutBanner2/>
        </div>
        <div className="about_second_banner_section">
        <img src="/static/media/logo.abe88664698e890898be.png" alt="learning" />
      </div>
    </div>
    <Carreer/>
    <Join/>
   <Community/>
    <Doubt/>
    <AboutFooter/>
    {/* 
            
    </div> */}
    </>
  )
}

export default About