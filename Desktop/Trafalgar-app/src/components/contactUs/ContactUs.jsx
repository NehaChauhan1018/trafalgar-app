import React from 'react'
import './contactUs.css'

function ContactUs() {
  return (
    <div className='ContactUs'>

      <div className="inner">

      <form action="submit" className='inner'>
          <h1>Contact Us</h1>
          <label htmlFor="username" className="left-form">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input className="right-form" type="text" name="username" placeholder='Username' /><br /><br />
            <label htmlFor="email" className="left-form">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input className="right-form" type="email" name="email" placeholder='Email' /><br /><br />
            <label htmlFor="description" className="left-form">Message&nbsp;&nbsp;</label>
            <input className="right-form" type="text" name="description" placeholder='Message' /><br /><br />
            <button className='btn_service'>Submit</button>

        </form>




      </div>

        
      
    </div>
  )
}

export default ContactUs
