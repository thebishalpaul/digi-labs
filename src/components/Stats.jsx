import React from 'react'
import "../css/stats.css"
function Stats(props) {
  return (
    <div className='stats-main'>
        <h1 className='purple'>{props.heading}</h1>
        <h4>{props.subHeading}</h4>
        <p className='lightFontColor'>
          {props.description}
        </p>
    </div>
  )
}

export default Stats