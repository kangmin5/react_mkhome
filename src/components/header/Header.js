import React from 'react'
import CTA from './CTA'
import './header.css'

import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header id='header'>
      <h1>BitCamp KDT 5기</h1>
      <h5 className="text-light">Fullstack Developer</h5>

      <div className="container header__container">
        <CTA />
        <div className='me'>
          
        </div>
        <HeaderSocials />

      </div>

    </header>
  )
}
