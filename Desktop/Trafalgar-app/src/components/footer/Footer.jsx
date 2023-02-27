import React from 'react'
import './footer.css'

import FooterComp from './footer_comp'
import Data2 from './data2'
function Footer() {
    
  return (
    <div>
        <div className="footer_container">
            
            <div className="foot_left">
                <h2>Trafalgar</h2>
                <p >
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </p>
                <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>
            <div className="foot_right">


                {

                    Data2.map((obj)=>{

                        return(

                            <FooterComp 
                                heading={obj.heading}
                                element1={obj.element1}
                                element2={obj.element2}
                                element3={obj.element3}
                                element4={obj.element4}
                            
                            />


                        )
                        
                    })

                }
                



            </div>
        </div>
      
    </div>
  )
}

export default Footer
