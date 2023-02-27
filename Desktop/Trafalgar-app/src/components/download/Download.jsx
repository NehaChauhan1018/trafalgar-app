import React from "react";
import "./download.css";
import Img1 from '../../assets/download-img1.png';
import Img2 from '../../assets/download-img2.png';


function Download() {
  return (
    // <div id="download">
      <div className="down_container">

        <div className="up">

        <div className="up_left">
          <img className="up_img" src={Img1} alt="" />
        </div>
        <div className="up_right">
          <h1 className="head">Leading healthcare providers</h1>
          <div className="line1"></div>
          <p className="desc_1">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="btn_up">Learn More</button>
          
        </div>
    </div>






    <div className="up2">

        <div className="up2_left">
          <img className="up_img" src={Img2} alt="" />
        </div>
        <div className="up2_right">
          <h1 className="head">Download our mobile apps</h1>
          <div className="line1"></div>
          <p className="desc_1">
          Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
          </p>
          <button className="btn_up">Download</button>
          
        </div>
    </div>




        

        

      </div>
    // </div>
  );
}

export default Download;
