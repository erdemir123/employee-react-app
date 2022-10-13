import React from 'react'
import "./header.css"
const Header = (props) => {
    
  return (
    <div>
      <p>(Employess {props.count} and {props.count+5})</p>
    </div>
  )
}

export default Header
