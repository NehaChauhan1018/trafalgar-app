import './footer_comp.css';
function FooterComp(props) {
  return (
    <div>
        <div className="footer_comp">
            <div className="footer_head"><h7>{props.heading}</h7></div>
            <div className="footer_elements">
               <p>{props.element1}</p> 
                <p>{props.element2}</p>
                <p>{props.element3}</p>
                <p>{props.element4}</p>

            </div>
        </div>
      
    </div>
  )
}

export default FooterComp
