import React, { useState } from 'react'
import Header from '../Header/Header'
import figmaIcon from '../../assets/imgs/figma.svg'
import reactIcon from '../../assets/imgs/react.svg'
import htmlIcon from '../../assets/imgs/html.svg'
import cssIcon from '../../assets/imgs/css.svg'
import viteIcon from '../../assets/imgs/vite.svg'
import firebaseIcon from '../../assets/imgs/firebase.svg'
import gitIcon from '../../assets/imgs/git.svg'
import githubIcon from '../../assets/imgs/githubIcon.svg'
import resumeIcon from '../../assets/imgs/resumeIcon.svg'
import diplomaIcon from '../../assets/imgs/diplomaIcon.svg'
import workIcon from '../../assets/imgs/workIcon.svg'
import contactIcon from '../../assets/imgs/contactIcon.svg'
import fileIcon from '../../assets/imgs/file.svg'
import xmarkIcon from '../../assets/imgs/xmarkIcon.svg'
import nodejsIcon from '../../assets/imgs/nodejsIcon.svg'

const About = () => {
  // State to manage email visibility
  const [showEmail, setShowEmail] = useState(false)

  // Toggle email visibility
  const toggleEmail = () => {
    setShowEmail(prevShowEmail => !prevShowEmail)
  }

  return (
    <main className='about-grid-container'>
        <Header/>
        
        <section className='owner'>
            <div>
                <h1>Meet The Developer</h1>
                <p>
                  <span>Jon</span>, An aspiring web developer with a focus on crafting user-friendly interfaces and efficient solutions with React. 
                </p>
                <p>With a strong foundation in modern web technologies, I am constantly exploring new ways to create seamless digital experiences. </p>
                
                <div>
                    <button className='contact-button' onClick={toggleEmail}>
                      Contact <img src={contactIcon} alt="" />
                    </button>
                    <button className='resume-button'>Resume <img src={fileIcon} alt="" /></button>
                </div>

                {showEmail && (
                  <div className='contact-email'>
                    <img 
                      src={xmarkIcon} 
                      alt="Close" 
                      className='xmark-icon' 
                      onClick={toggleEmail} 
                    />
                    <p>connelljon9@gmail.com</p>
                  </div>
                )}
            </div>
        </section>

        <section className='developer-projects'>
            <img src="src/assets/imgs/meetowner.gif" alt="" />
            <div>
                <p>
                  From API-driven dashboards to secure file storage applications, my work combines both front-end and back-end solutions. 
                </p>
                <a href="https://github.com/jonnyboi42" target="_blank" rel="noopener noreferrer">
                    <button>View Projects <img src={githubIcon} alt="" /></button>
                </a>
            </div>
        </section>

        <section className='skills'>
            <div>
                <h1>Skills</h1>
                <p>I've worked with a range of frameworks and technologies to create responsive interfaces and secure, efficient backend solutions. Here are a few key tools I've used in my projects</p>
                <div className="skills-images">
                    <img src={figmaIcon} alt="Figma icon" />
                    <img src={reactIcon} alt="React icon" />
                    <img src={htmlIcon} alt="HTML icon" />
                    <img src={cssIcon} alt="CSS icon" />
                    <img src={viteIcon} alt="Vite icon" />
                    <img src={firebaseIcon} alt="Firebase icon" />
                    <img src={gitIcon} alt="Git icon" />
                    <img src={nodejsIcon} alt="" />
                </div>
            </div>
        </section>
        

        {/* This Section Will Only Display During a Media Query
        It is the Portfolio Head Image */}
        <section className='head-photo'>
            <img src="src/assets/imgs/meetowner.gif" alt="" />
        </section>
    </main>
  )
}

export default About
