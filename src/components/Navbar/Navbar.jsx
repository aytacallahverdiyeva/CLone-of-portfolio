import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <h1 className='logo'>ITICH IT</h1>
                <ul>
                    <li>
                        <a className='menu-item' href="">Home</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">Skills</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">Work Experience</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">Contact Me </a>
                    </li>

                    <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar