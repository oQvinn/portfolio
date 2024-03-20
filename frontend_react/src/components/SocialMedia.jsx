import React from 'react'
import {BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/quinn-wegner-531425242/' target='_blank' rel='noreferrer'><FaLinkedin/></a>
      </div>
      <div>
        <a href='https://github.com/oQvinn' target="_blank" rel='noreferrer'><FaGithub/></a>
      </div>
      <div>
        <a href='#' target="_blank" rel='noreferrer'><FaInstagram/></a>
      </div>
    </div>
  )
}

export default SocialMedia
