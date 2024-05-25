import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.jpg';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'  >
      <div className="gpt3__header-content">
        <h1 className="gradient__text" >
          Let's Bulid Something amazing With Gpt-3 OpenAi
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae aut odit nihil magnam delectus labore voluptatibus perspiciatis ab, excepturi suscipit rem illo alias ex?</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <p>641 people requested access</p>
        </div>
        </div>
        <div className="gpt3__header-image">
          <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Header