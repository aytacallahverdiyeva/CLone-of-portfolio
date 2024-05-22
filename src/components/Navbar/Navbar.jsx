import React from 'react';
import './Navbar.css';
// ^ React icons
import { FiMenu } from "react-icons/fi";

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

                <button class="menu-btn" onClick={()=> {}}>
                   <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                    <FiMenu />
                   </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar