import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/ABDULKARIM (2).jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  console.log("What is my name::")
  return (
    <header>
    <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h2>Abdulkabir Omotoso</h2>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA/>
    </div>
    <HeaderSocials/>
    <div className='me'>
      <img src={Me} alt='my me me' />
    </div>
      <a className='scroll__down' href='#contact'>Scroll Down</a>


    </header>
    

  )
}

export default Header