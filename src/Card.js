import React from 'react'

function Card(props){
      
    return (
            <>
            <div clasName="cards">
              <div className="card">
                      <img src={props.imgsrc} alt="myPic" className="card__img" />
                      <div className='card__info'>
                        <h3 className='card__title'>{props.title}</h3>
                        <span className='card__category'>{props.subtitle}</span><br/>
                        <a href={props.link} target='_blank' rel="noreferrer">
                           <button className='cardbutton'>Study Now</button>
                        </a>
                      </div>
              </div>
            </div>
                
        
        </>

    )
}

export default Card