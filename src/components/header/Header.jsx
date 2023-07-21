import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assest/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container" >
        <h5>Hello I am</h5>
        <h1>David Ortega</h1>
        <h5 className='text-ligth'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" className=''/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
