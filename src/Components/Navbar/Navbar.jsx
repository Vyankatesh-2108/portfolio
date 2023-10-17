import React,{useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
  // code to toggle on and off
  const [active, setActive] = useState('navBar')

  //this will bring in the navbar from the top
  const showNavBar = () =>{
    setActive('navBar activeNavBar')
  }

  //this will hide the navbar again
  const removeNavBar = () =>{
    setActive('navBar')
  }

  //set background color to header
  const[activeHeader, setactiveHeader] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 10){
      setactiveHeader('header activeHeader')
    }
    else{
      setactiveHeader('header')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <header className={activeHeader}>
    <div className='logoDiv'>
      <h1 className='logo'><a href='#home'>Vyanky</a></h1>
    </div>

    <div className={active}>
      <ul onClick={removeNavBar} className='navLists'>
        <li className='navItem'>
          <a href='#about' className='navLink'>
            <span className='headerNumber'>1.</span>About
          </a>
        </li>

        <li className='navItem'>
          <a href='#skills' className='navLink'>
          <span className='headerNumber'>2.</span>Skills
          </a>
        </li>


        <li className='navItem'>
          <a href='#projects' className='navLink'>
          <span className='headerNumber'>3.</span>Projects
          </a>
        </li>


        <li className='navItem'>
          <a href='#contact' className='navLink'>
          <span className='headerNumber'>4.</span>Contact
          </a>
        </li>

        <button className='btn'>
          <a className='res' href=''>Resume</a>
        </button>

        <div onClick={removeNavBar} className='closeNavBar'>
        <AiFillCloseCircle id='icon'/>
        </div>

      </ul>
    </div>

    <div onClick={showNavBar} className='toggleNavBar'>
      <TbGridDots id='icon'/>
    </div>
    </header>
  )
} 

export default Navbar
