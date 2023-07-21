import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/davidandresortega/" ><BsLinkedin/></a>
      <a href="https://github.com/Daniick"> <FiGithub/></a>
      {/* <a href="https://github.com/Daniick"> <FiGithub/></a> */}
      
    </div>
  )
}

export default HeaderSocials
