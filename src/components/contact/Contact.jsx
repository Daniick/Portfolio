import React from 'react'
import './contact.css';
import {MdEmail} from 'react-icons/md'
import {PiMessengerLogoLight} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_svtrf6d', 'template_uu6uf5z', form.current, 'R-af3L1YXKdeiJ5b9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>david.ortega.pajaro1@gmail.com</h5>
            <a href="mailto:naruto_pajaro@hotmail.com?Subject=Oferta%20Laboral" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <PiMessengerLogoLight className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>David Ortega Pajaro</h5>
            <a href="https://m.me/daviandres.ortegapajaro/" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789 </h5>
            <a href= "https://wa.me/+573013871040" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
