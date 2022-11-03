import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='htts://linkedin.com' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='htts://github.com' target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href='htts://twitter.com' target="_blank" rel='noreferrer'><AiOutlineTwitter/></a>
    </div>
  )
}
export default HeaderSocials