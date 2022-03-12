import React from 'react'
import './about.css'
import AI from '../../assets/ai.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>저희를 소개합니다</h5>
      <h2>About US</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={AI} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Backend</h5>
              <small>Spring Boot</small><br/>
              <small>Python Jango</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Frontend</h5>
              <small>React</small><br />
              <small>JavaScript</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>첨부한 5개의 프로젝트를 봐주세요</small>
            </article>
          </div>
          <p>
          위의 구현도구를 사용하여 데이타베이스( Amazon DB와 Mysql) 사용,
          서버,클라이언트 비동기 전송(ajax,axios)구현,
          알고리즘및 디자인 패턴,
          AI(ML,DL)프로젝트를 위한 Numpy,Pandas,SK 및 Kaggle을
          </p>
          <a href='#contact' className='btn btn-primary'>Contact to Us</a>
        </div>
      </div>
    </section>
  )
}
