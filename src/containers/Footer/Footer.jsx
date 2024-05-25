import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/Logo.png'
const footer = () => {
  return (
    <div className="gpt3__footer section__padding ">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text"> Do You want to step in to future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={ gpt3Logo } alt="Logo" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Aperiam.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overones</p>
          <p>Social Media</p>
          <p> Counters</p>
          <p>Contact</p>
         
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p> Contact</p>         
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Phone Number</p>
          <p> info@Payme.net</p>         
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@ 2021 GPT-3 All Right reserved. </p>
      </div>
    </div>
  )
}

export default footer