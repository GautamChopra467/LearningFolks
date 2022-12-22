import React from 'react';
import "../css/HomeBanner6Styles.css";
// import Testimonial1 from "../../../img/banner/event1.jpg";

const HomeBanner6 = () => {
  return (
    <div>
      <div className='main_container_homebanner6'>
        <div className='top_section_homebanner6'>
            <h2>Testimonials</h2>
        </div>

        <div className='bottom_section_homebanner6'>
            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3>“Joining Learning Folks gave me insights of this tech world and it’s opportunities.”</h3>
                </div>

                {/* <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        <img src={Testimonial1} alt='testimonial' />
                    </div>
                    <div className='detail_container_homebanner6'>
                        <h4>Dr. Shagun Batra</h4>
                        <p>Rank 1</p>
                    </div>
                </div> */}
            </div>

            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3>“Associating with Learning Folks, it’s a great experience to have a great network of learners and experienced people”</h3>
                </div>

                {/* <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        <img src={Testimonial1} alt='testimonial' />
                    </div>
                    <div className='detail_container_homebanner6'>
                        <h4>Dr. Shagun Batra</h4>
                        <p>Rank 1</p>
                    </div>
                </div> */}
            </div>

            <div className='card_container_homebanner6'>
                <div className='card_top_section_homebanner6'>
                    <h3>“My college life has taken such an impactful jump, has helped me impro my soft skills and personality”</h3>
                </div>

                {/* <div className='card_bottom_section_homebanner6'>
                    <div className='image_container_homebanner6'>
                        <img src={Testimonial1} alt='testimonial' />
                    </div>
                    <div className='detail_container_homebanner6'>
                        <h4>Dr. Shagun Batra</h4>
                        <p>Rank 1</p>
                    </div>
                </div> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner6
