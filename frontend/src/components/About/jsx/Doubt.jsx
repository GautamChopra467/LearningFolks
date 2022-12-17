import React from 'react'
import "../css/DoubtStyles.css" ;
const Doubt = () => {
  return (
    <>
    <div className='doubt_section'>
            <h1>Doubts ?</h1>
    </div>
    <div className='form_doubt_section'>
        <div>
        <input type="text" placeholder='Name'/>
        </div>
        <div>
        <input type="email" placeholder='Email'/>
        </div>
        <div>
        <input type="text" placeholder='Phone No.'/>
        </div>
        <div>
        <textarea type="text" placeholder='Write Your Text Here...'/>
        </div>
        <div >
            <button className='send_button_doubt_section'>Send</button>
        </div>
    </div>
    </>
  )
}

export default Doubt