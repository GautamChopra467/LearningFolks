import React from 'react'
import "../css/CommunityStyles.css" ;

const Community = () => {
  return (
    <>
    <div className='community_section'>
         <h1>Community Benefits</h1>
    </div> 
  <div className='community_card'>
  <div className="card1">
      <div class="inner">
        <p class="title">You get benefits of being
associated with a great student
community.</p>
      </div>
  </div>
  <div className="card2">
      <div class="inner">
        <p class="title">Your outreach widens across not
just your campus but other
campuses too.</p>
        
      </div>
  </div>
  <div className="card3">
      <div class="inner">
        <p class="title">A new event always adds to our
experience arsenal where we get
to explore a new beginning to
something unknown.</p>
      </div>
  </div>
  </div>
    </>
  )
}

export default Community