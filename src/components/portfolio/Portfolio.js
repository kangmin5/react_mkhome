import React from 'react'
import './portfolio.css'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>개발의 발자취</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          
          </div>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}
