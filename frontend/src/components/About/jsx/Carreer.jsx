import React from 'react'
import "../css/CarreerStyle.css" ;


const Carreer = () => {
  return (
    <>
    <div className='carreer_section'>
        <h1>Carreer With Us</h1>
    </div>
     <div className='card_container'>
        <div className='card_left'>
        <img src="https://blog.payrollbozz.com/wp-content/uploads/sites/28/2016/08/0o1a5622-1761.jpg" alt='carreer_image'/>
        </div>
        <div className='card_right'>
            <p>Students having sound knowledge in any field, willing to showcase the same to the world, or People interested in working as an intern and entering in our organization, or People willing to enter for campus ambassador publicity. Fill out the form below and don't forget to upload resume separately.</p>
            <div className='apply_btn'>
        <button>Apply</button>
         </div>
        </div>
     </div>
   
     </>
  )
}

export default Carreer