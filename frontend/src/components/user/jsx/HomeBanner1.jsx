import React from 'react';
import "../css/HomeBanner1Styles.css";
import Globe from "../../../img/banner/globe.png";

const HomeBanner1 = () => {
  return (
    <div>
      <div className='main_container_homebanner1'>
        <div className='top_section_homebanner1'>
            <h2>Order Mconsectetur adip <span>orem ipsum dolor sit amet, consectetur adip</span></h2>
            <p>OLorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium etiam nascetur volutpat aliquam mauris accumsan.</p>
        </div>

        <div className='bottom_section_homebanner1'>
            <img src={Globe} alt='banner' />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner1
