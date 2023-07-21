import React from 'react';
import CV from '../../assest/cv.pdf';

const CTA = () => (
    <div className='cta'>
      <a href={CV} download className='btn'> Download CV</a>
      <a href={CV} className='btn btn-primary'> Let's Talk CV</a>
    </div>
  )


export default CTA
