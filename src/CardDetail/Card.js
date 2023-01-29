import React from "react";
import './Card.css';



function Card(props){
    return(
    <>
  <div className="container">
          <div className="card">
              <img 
              src={props.imgsrc} 
              alt="Poster"
              className='card_img'/>              
              <div className="card_info">
                  <h1 className="card-heading"><span className="sname">{props.name}</span></h1>
                     <div className="btn"><a 
                      href={props.link}  
                      target="_blank">
                          <button >Watch now</button>
                      </a>
                      </div>               
              </div>
          </div>
      </div>
      </>
    )
  }

  export default Card;