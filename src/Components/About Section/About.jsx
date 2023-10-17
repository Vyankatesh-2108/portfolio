import React from 'react'
import './about.css'
import {TbCloudDownload} from 'react-icons/tb'
import img from '../../Assets/self.png'

const About = () => {
  return (
    <section id='about' className='about section container'>
      <div className='sectionTitle'>
        <span className='titleNumber'>01.</span>
        <h5 className='titleText'>About Me
        <div className='underline'><span></span></div>
      </h5>
      </div> 

      <div className='sectionContent grid'>
        <div className='textSection'>
          <h4>
          I'm a success-driven, determined Web developer. I have experience using HTML Sass Javascript and PHP to build accessible component-based web pages and systems.<br/>
Ability to deliver quality results while collaborating in rapidly changing work environments and team compositions.<br/>
A passionate person willing to learn more technologies to become a better developer than i was yesterday. So determined and result orietend.
          </h4>

          <div className='aboutBtn'>
              <a href='vyankatesh_khetri.pdf' download="vyankatesh_khetri.pdf" className='flex'>
                Download CV <TbCloudDownload id='icon'/>
              </a> 
          </div>

        </div>

        <div className='aboutImgDiv'>
          <img src={img} alt='Vyankatesh Khetri' className='aboutImg'>
          </img>
        </div>
      </div>

    </section>
  )
}

export default About
