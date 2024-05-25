import React from 'react'
import { Article } from '../../components'
import {Ai2,Ai,AiFace,art,art2} from '../../components/imports.js'
import './blog.css'

const blog = () => {
  return (
    <div className="gpt3__blog section-padding section__margin" id="blog" >
      <div className='gpt3__blog-heading'>
        <h1 className="gradient__text">Alot is Happening , blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <Article imgUrl={Ai} date="sep 26, 2021" title=" open Ai is the future, let us explore how it is ??" />
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={Ai2} date="sep 26, 2021" title=" open Ai is the future, let us explore how it is ??" />
        < Article imgUrl={AiFace} date="sep 26, 2021" title=" open Ai is the future, let us explore how it is ??" />
        <Article imgUrl={art} date="sep 26, 2021" title=" open Ai is the future, let us explore how it is ??" />
        <Article  imgUrl={art2} date="sep 26, 2021" title=" open Ai is the future, let us explore how it is ??" />
        </div>
      </div>
    </div>
  )
}

export default blog