import React from 'react'
import '../styles/navBar.css'

export const NavBar = () => {
  return (
    <>
        <nav className='nav'>
            <ul className='nav__list'>
                <li><a href="#" className='nav__item'>about me</a></li>
                <li><a href="#" className='nav__item'>Real project</a></li>
                <li><a href="#" className='nav__item'>Practices</a></li>
                <li><a href="#" className='nav__item'>Work experience</a></li>
            </ul> 
        </nav>
    </>
  )
}
