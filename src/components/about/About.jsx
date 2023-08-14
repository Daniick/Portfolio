import React from 'react'
import './about.css';
// import ME from '../../assest/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsFolderCheck} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'

 
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
      <div className="about__me-image">
        {/* <img src={ME} alt="" /> */}
      </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <a href="#experience">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>6 Months</small></a>
          </article>

          <article className='about__card' >
            <a href="#experience"> <FiUsers className='about__icon'/>
            <h5>Projects Full Frontend</h5>
            <small>10+ Completed Projects</small></a>
          </article>

          <article className='about__card'>
          <a href="#experience">
            <BsFolderCheck className='about__icon'/>
            <h5>Projects Full Backend</h5>
            <small>10+ Completed Projects</small></a>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Nihil recusandae illo, 
           mollitia consectetur, assumenda quibusdam 
           reprehenderit quam quisquam temporibus nam ipsam 
           consequatur! Sapiente, natus officiis quisquam 
           quos hic esse tempore!
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

      </div>



    </section>
  )
}

export default About
