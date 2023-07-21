import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#header" className='footer__logo'>DAVID <br /> ORTEGA </a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/daviandres.ortegapajaro" target='_blank' rel="noopener noreferrer"><AiFillFacebook/></a>
        <a href="https://instagram.com/david.ortega.p/" target='_blank' rel="noopener noreferrer"><AiFillInstagram/></a>
        <a href="https://linkedin.com/in/davidandresortega/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyrigth">
        <small>&copy; David Andres Ortega Pajaro. All rigths reserved</small>
      </div>
    </footer>
  )
}

export default Footer
