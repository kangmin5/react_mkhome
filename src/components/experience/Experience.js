import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>우리가 지내온 길</h5>
      <h2> Experience</h2>
      
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend 개발</h3>
          <div  className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>약간</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>약간</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>약간</small>
            </div>
            </article>
          </div>
        </div>
      
        <div className='experience__backend'>
          <h3>Backend 개발</h3>
          <div  className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>약간</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>약간</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>약간</small>
            </div>
            </article>
          </div>
        </div>
      
      
      </div>




    </section>
  )
}
