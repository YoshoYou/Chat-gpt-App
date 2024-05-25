import React from 'react'
import './features.css';
import {Feature} from '../../containers'


const featuresData = [
  {
    title: 'Hello',
    text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  {
    title: 'Lorem ',
    text:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ratione repellendus sint voluptate sequi sit.'
  },
  {
    title: 'Lore',
    text:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ratione repellendus sint voluptate sequi sit.'
  },
  {
    title: ' ipsum ',
    text:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ratione repellendus sint voluptate sequi sit.s'
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ratione repellendus sint voluptate sequi sit.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container ">
        { featuresData.map( ( item, index ) =>
        (
          <Feature title={ item.title } text={ item.text } key={item.title + index} />
          ))}
      </div>
    </div>
  )
}

export default Features;