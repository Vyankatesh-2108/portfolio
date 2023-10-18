import React from 'react'
import './skills.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {BsBootstrapFill} from 'react-icons/bs'


const Skills = () => {
  return (
   <section id='skills' className='skills container section'>
    <div className='sectionTitle'>
      <span className='titleNumber'>02.</span>
      <h5 className='titleText'>Skills
      <div className='underline'><span></span></div>
      </h5>
    </div>

    {/*skills container*/}
    <div className='skillsContainer grid'>
      <div className='skillGroup'>
        <div className='groupTitle'>
        <h2 className='title'>Web Development</h2>
        <span className='subTitle'>
            2 Years Experience
        </span>
        </div>

        <div className='generalskills'>

          <div className='singleskill'>
              <div className='iconBox flex'>
                  <TbBrandReactNative id='icon' />
              </div>
              <span className='skillName'>React</span>
          </div>

          <div className='singleskill'>
              <div className='iconBox flex'>
                  <IoLogoJavascript id='icon' />
              </div>
              <span className='skillName'>JavaScript</span>
          </div> 


          <div className='singleskill'>
              <div className='iconBox flex'>
                  <IoLogoSass id='icon' />
              </div>
              <span className='skillName'>Sass</span>
          </div>


          <div className='singleskill'>
              <div className='iconBox flex'>
                  <SiCss3 id='icon' />
              </div>
              <span className='skillName'>Css</span>
          </div>


          <div className='singleskill'>
              <div className='iconBox flex'>
                  <AiFillHtml5 id='icon' />
              </div>
              <span className='skillName'>HTML</span>
          </div>


          <div className='singleskill'>
              <div className='iconBox flex'>
                  <BsBootstrapFill id='icon' />
              </div>
              <span className='skillName'>Bootstrap</span>
          </div>



        </div>

      </div>
    </div>

   </section>
  )
}

export default Skills
