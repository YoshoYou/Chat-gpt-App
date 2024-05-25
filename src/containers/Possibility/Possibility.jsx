import React from 'react'
import './Possibility.css'
import {AiFace} from '../../components/imports.js'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding section__margin' id='possibility' >
      <div className="gpt3__possibility-image">
        <img src={AiFace} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get started</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond our imagination
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum eaque in sunt nulla aliquam non quis quasi laboriosam veniam?</p>
        <h4>Request Early Access to Get started</h4>
        
      </div>
    </div>
  )
}

export default Possibility