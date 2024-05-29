import React from 'react'
import './Hero.css'
// ? images
import img from "../../images/React-icon.svg.png"

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="" alt="reacticon" />
                </div>
                <img src={img} alt="myphoto" />
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="" alt="htmlicon" />
                </div>
                <div className='tech-icon'>
                    <img src="" alt="cssicon" />
                </div>
                <div className='tech-icon'>
                    <img src="" alt="jsicon" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero