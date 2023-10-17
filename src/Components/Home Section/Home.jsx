import React from 'react'
import './home.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiRightArrow} from 'react-icons/bi'
import {TbChevronsDown} from 'react-icons/tb'

const Home = () => {
  return (
    <section id='home' className='home section'>
      {/* <div className='leftIcons'>
        <div className='socials grid'>
          <a href='' target='_blank'>
            <AiFillGithub id='icon'/>
          </a>
          <a href='' target='_blank'>
            <AiFillLinkedin id='icon'/>
          </a>
          <div className='line'> 
          </div>
        </div>
      </div> */}

      {/* Home Content*/}
      <div className='container homeContainer'>
      <span className='introText'>
        Hi my name is,
      </span>
      <h1 className='title'>
        Vyankatesh Khetri
      </h1>
      <span className='subTitle'>
        I develope scalable web based applications and
        software.
      </span>
      <p className='homeParagraph'>
        I code within required coding standards and styles to serve the exact need.
      </p>

      <div className='lowerHomeSection'>
        <button className='contactBtn'>
          <a href='#contact' id='btn1' className='flex'>
            Contact Me <BiRightArrow id='icon'/>
          </a>
        </button>

        <div className='scrollDiv'>
          <a href='#about' className='flex'>
            <h6 className='scroll'>Scroll Down</h6> <TbChevronsDown id='icons'/>
          </a>
        </div>
      </div>
      </div>

      {/* right div with email*/}
      {/* <div className='rightEmail'>
        <div>
          <div className='emailAddress'>
            <a href='https://mailto:vyankateshkhetri07@gmail.com' target='_blank'>
              vyankateshkhetri07@gmail.com
            </a>
          </div>

          <div className='line'></div>
        </div>
      </div> */}

    </section>
  )
}

export default Home
