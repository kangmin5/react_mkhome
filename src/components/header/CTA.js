import React from 'react'
import CV from '../../assets/jejucafe.png'

export default function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>제품소개 [download]</a>
      <a href="#contact" className='btn'>연락처 바로가기</a>
    </div>
  )
}
