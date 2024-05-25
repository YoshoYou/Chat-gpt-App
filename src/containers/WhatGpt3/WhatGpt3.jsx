import React from 'react'
import './whatGpt3.css'
import { Feature } from '../../containers';
const whatGpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is Gpt-3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil pariatur expedita natus rerum repellendus!" />
      </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text ">
              The possibility Is Beyond Your Imagination
          </h1>
          <p>Explore the library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature title="chatBox" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus, beatae culpa velit reprehenderit impedit."/>
          <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus, beatae culpa velit reprehenderit impedit."/>
          <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus, beatae culpa velit reprehenderit impedit."/>
        </div>
    </div>
    
  )
}

export default whatGpt3