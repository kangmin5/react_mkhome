import React from 'react'
import CV from '../../assets/카페.png'

export default function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn'>Contact to Me</a>
    </div>
  )
}
