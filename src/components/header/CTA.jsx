import React from 'react';
import CV from '../../assest/contacto.pdf';

const CTA = () => (
    <div className='cta'>
      <a href={CV} download className='btn' target = 'noreferrer' > Download CV</a>
      <a href={CV} className='btn btn-primary' target = 'noreferrer'> Let's Talk CV</a>
    </div>
  )


export default CTA
