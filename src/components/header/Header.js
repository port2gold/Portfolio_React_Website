import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <div className='header'>
    <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h2>Abdulkabir Omotoso</h2>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA/>
    </div>
    </div>
    

  )
}

export default Header