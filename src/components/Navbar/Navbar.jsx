import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav-Main'>
        <h1>Should<span>You?</span></h1>
        <div className="Nav-Main-Wrapper">
            <a href="https://github.com/Hellacious1702/ShouldYou" target='_blank'>Project Files</a>
            <a href="https://github.com/Hellacious1702/" target='_blank'>Github</a>
            <a href="https://hellacious1702.github.io/portfolio/" target='_blank'>Creator Portfolio</a>
        </div>
    </div>
  )
}

export default Navbar