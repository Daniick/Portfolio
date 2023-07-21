import React from 'react'
import './experience.css';
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoMongodb} from 'react-icons/bi'
import {BiLogoPhp} from 'react-icons/bi'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills i Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
              <h4> HTML</h4>
              <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiLogoCss3 className='experience__details-icon'/>
              <div>
              <h4> CSS</h4>
              <small className='text-ligth'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BiLogoJavascript className='experience__details-icon'/>
              <div>
              <h4> JavaScript</h4>
              <small className='text-ligth'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BiLogoReact className='experience__details-icon'/>
              <div>
              <h4> React</h4>
              <small className='text-ligth'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BiLogoTailwindCss className='experience__details-icon'/>
              <div>
              <h4> Tailwind</h4>
              <small className='text-ligth'>Intermediate</small></div>
            </article>
            
          </div>
        </div>

        {/* Backend */}


        <div className="experience__backend"> 
        <h3>Backend Develepment</h3>
        <div className="experience__content">
        <article className='experience__details'>
              <BiLogoNodejs className='experience__details-icon'/>
              <div>
              <h4> Node Js</h4>
              <small className='text-ligth'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BiLogoMongodb className='experience__details-icon'/>
              <div>
              <h4> MongoDB</h4>
              <small className='text-ligth'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BiLogoPhp className='experience__details-icon'/>
              <div>
              <h4> PHP</h4>
              <small className='text-ligth'>Intermediate</small></div>
            </article>
          
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
