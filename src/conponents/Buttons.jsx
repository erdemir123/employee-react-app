import React from 'react'
import "./button.css"

const Buttons = (props) => {
  return (
    <div>
      <button className="btn" value="prev" onClick={props.func}>PREW</button>
      <button className="btn" value="next" onClick={props.func}>NEXT</button>
    </div>
  )
}

export default Buttons
