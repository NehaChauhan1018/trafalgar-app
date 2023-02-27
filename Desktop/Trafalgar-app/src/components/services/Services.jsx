import React from 'react'
import "./services.css"
import ServiceCards from '../serviceCards/ServiceCards'
import Logo1 from '../../assets/Frame.png'
import Logo2 from '../../assets/logo2.png'
import Logo3 from '../../assets/logo3.png'
import Logo4 from '../../assets/logo4.png'
import Logo5 from '../../assets/logo5.png'
import Logo6 from '../../assets/logo6.png'
function Services() {
  return (
    <div className='Service'>
        <h1 className='service_head'>Our services</h1>
        <div className="line"></div>
        <p className="para">We provide to you the best choices for you. Adjust it to your health needs and 
            make sure your undergo treatment with our highly qualified doctors you can consult 
            with us which type of service is suitable for your health
        </p>

        <div className='cards'>
            <div className='card_1'>
            <ServiceCards logo = {Logo1} heading={"Search Doctor"} para={"Choose your doctor from thousands of specialist, general, and trusted hospitals"}/>
            <ServiceCards logo = {Logo2} heading={"Online Pharmacy"} para={"Buy  your medicines with our mobile application with a simple delivery system"}/>
            <ServiceCards logo = {Logo3} heading={"Consultation"} para={"Free consultation with our trusted doctors and get the best recomendations"}/>  
            </div>
            <div className='card_2'>
            <ServiceCards logo = {Logo4} heading={"Details Info"} para={"Free consultation with our trusted doctors and get the best recomendations"}/>
            <ServiceCards logo = {Logo5} heading={"Emergency Care"} para={"You can get 24/7 urgent care for yourself or your children and your lovely family"}/>
            <ServiceCards logo = {Logo6} heading={"Tracking"} para={"Track and save your medical history and health data "}/>

            </div>

            <button className='btn_service'>Learn More</button>

        </div>
        
        
        


      
    </div>

  )
}



export default Services;
