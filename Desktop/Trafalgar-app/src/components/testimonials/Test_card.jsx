import React from 'react'
import './test_card.css';

function Test_card(props) {
  return (
    <div id="test_card">
        <div className="test_card_container">

            <div className='test_up'>
            <div className="test_heading">
                <h1>{props.heading}</h1>
            </div>

            <div className="test_line"></div>
            

            </div>

            <div className="test_down">
                <div className="test_left">

                    <div className='img_container'>

                    <img className="test_img" src={props.test_img} alt="" />
                        
                    </div>
                    <div className='img_name'>
                        <h3>{props.name}</h3>
                        <h4>{props.designation}</h4>
                    </div>

                </div>

                <div className="test_right">

                    <p>{props.content}</p>


                </div>
            </div>
            





        </div>
      
    </div>
  )
}

export default Test_card
