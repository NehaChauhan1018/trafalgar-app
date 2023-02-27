import React from 'react'
import TestCard from './Test_card';
//import TestImg from '../../assets/test_img.png'
import "./testimonials.css"
// import { useEffect, useState } from 'react';
import {data} from "./test_data"

function Testimonials() {
return (
    <div id='testimonials'>
        <div className="test_container">
<div className="card_container">

          {
            data.map((obj)=>{

              return (
                <TestCard heading={obj.heading}
                      test_img={obj.test_img}
                      name={obj.name}
                      designation={obj.designation}
                      content={obj.content}
                      
            />
              )
              
            })
          }
            
            
            


            </div>

            



        </div>
    </div>
  )
}

export default Testimonials