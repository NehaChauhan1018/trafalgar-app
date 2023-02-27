import React from 'react';
import About from './components/about/About';
import Services from './components/services/Services'
import Download from './components/download/Download'
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer'
import "../src/App.css"
import ContactUs from './components/contactUs/ContactUs';

function App() {
  return (
    <div className="bg">
        <About />
        <Services />
        <Download />
        <Testimonials />
        <ContactUs />
        <Footer />
        
    </div>
  )
}

export default App