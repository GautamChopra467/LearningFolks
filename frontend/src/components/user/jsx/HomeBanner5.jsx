import React from 'react';
import "../css/HomeBanner5Styles.css";
import Event1 from "../../../img/banner/event1.jpg";

const HomeBanner5 = () => {
  return (
    <div>
      <div className='main_container_homebanner5'>
        <div className='top_section_homebanner5'>
            <h2>Events</h2>
        </div>

        <div className='bottom_section_homebanner5'>
            <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event1} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>APR</h4>
                        <h3>15</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2>Conferene de M. HS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event1} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>APR</h4>
                        <h3>15</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2>Conferene de M. HS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>

            <div className='card_container_homebanner5'>
                <div className='card_top_section_homebanner5'>
                    <img src={Event1} alt='event' />
                </div>

                <div className='card_bottom_section_homebanner5'>
                    <div className='card_bottom_left_section_homebanner5'>
                        <h4>APR</h4>
                        <h3>15</h3>
                    </div>

                    <div className='card_bottom_right_section_homebanner5'>
                        <h2>Conferene de M. HS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner5
