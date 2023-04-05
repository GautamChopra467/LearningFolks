import React from 'react';
import "../css/HiringBanner.css";
import { useNavigate } from "react-router-dom";
import HiringBannerImage from "../../../img/banner/HiringBannerImage.jpeg";

const HiringBanner = () => {
    const navigate  = useNavigate() ;

  return (
    <div>
      <div className='main_container_hiring_banner'>
        <div className='imagecont'>
            <img className='hiring_banner_image' src={HiringBannerImage} alt=" " />
        </div>
        <div className='top_section_hiring_banner3 '>
            <h2>WE ARE HIRING<span className='astrisk_hiring'>*</span></h2>
            <p>Find a role where you can build an exceptional experience and a <span className='hiring_hashtag'>#BetterWorkingWorld</span> for all.</p>
            <div className='apply_home_button_container'>
            <button className="apply_home_page_btn" onClick={() => navigate("/about#career")}>Apply Now !</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default HiringBanner ;
