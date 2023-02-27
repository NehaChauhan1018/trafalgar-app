import './serviceCards.css'
function ServiceCards(props)
{
  console.warn(props);
    return(
        <div className="card">
            <img className="card_image"src={props.logo} alt="" />
            <h1 className="card_heading">{props.heading}</h1>
            <p className="card_para">{props.para}</p>
            
        </div>
        
    )
}

export default ServiceCards