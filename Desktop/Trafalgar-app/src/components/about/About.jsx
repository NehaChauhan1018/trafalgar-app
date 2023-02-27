import React from 'react'
import Nav from '../navbar/Nav'

import Image from '../../assets/about.png'
import './about.css'



function About() {
  return (
    <div>

      <Nav />

      <div className="about">
        <div className="left-div">
          <h1>Virtual healthcare for you.</h1>
          <p className='desc'>Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone</p>
            <button className='btn'>Consult Today</button>

        </div>
        <div className="right-div">
          <img className="img" src={Image} alt="" />

        </div>
        
      </div>

    </div>
  )
}

export default About