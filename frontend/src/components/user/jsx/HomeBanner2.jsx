import React from 'react';
import { Link } from 'react-router-dom';
import "../css/HomeBanner2Styles.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper";


const HomeBanner2 = () => {
  return (
    <div>
      <div className='main_container_homebanner2'>
        <div className='top_section_homebanner2'>

        </div>

        <div className='top_section_homebanner2'>
            <p>To do Information of videos To do <br></br>Information of videos To do Information <br></br>of videos To do To do Information of videos To do</p>

            <Link to="/" className='btn_primary_homebanner2'>Notes</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner2
