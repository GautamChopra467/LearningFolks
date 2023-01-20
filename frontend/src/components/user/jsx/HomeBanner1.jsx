import React from 'react';
import "../css/HomeBanner1Styles.css";
import Globe from "../../../img/banner/globe.png";
import plans from "../../../img/banner/plans.jpeg";

const HomeBanner1 = () => {
  return (
    <div>
      <div className='main_container_homebanner1'>
        <div className='top_section_homebanner1'>
          <h2>“Teaching is the best form of Learning” <span></span></h2>
          <p>Our association with you helps us reach more students where we expand and you benefit from a large network of students from all domains in our community. Better reach helps us transform and realise our vision with more momentum.</p>
        </div>

        <div className='bottom_section_homebanner1'>
          <img src={Globe} alt='banner' />
        </div>

        <div className='ctasection'>
          <div className='imgholder'>
          <img classname="planimg" src={plans} alt='plans' />
          </div>
          <div className='buttonholder'>
            <h2>B.Tech Educational Support Plans</h2>
            <a href="https://courses.learningfolks.in/s/store"><button className='gotocourses'>Go To Courses</button></a>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeBanner1
