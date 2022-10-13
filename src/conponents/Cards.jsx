import React from 'react'
import data  from '../helper/data';
import "./card.css"

const Cards = (props) => {

  return (
    (data.slice(props.count,props.count+5).map((item,index)=>
    {
        const {name,id,image,email,age}=item
        return <div key={index} className="container">
<div className="image">
    <img src={image} alt="" />
</div>
<div className="title">
    <p className="name">{name}</p>
    <p className="age">{age}</p>
    <a href={email} className="email">{email}</a>
</div>

        </div>
        
    }
    ))
    
  )
}

export default Cards
