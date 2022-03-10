import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/mkphoto_nobg6.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>안녕하세요</h5>
        <h1>Kang Min</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ ME } alt="me" className='mkimage' />
        </div>
        <h5 className='scroll'>SCROLL DOWN</h5>
      </div>
    </header>
  )
}
