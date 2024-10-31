import React, { useState } from 'react'
import Header from '../Header/Header'
import * as Icons from '../../assets/icons/icons'
import meetOwnerGif from '../../assets/imgs/meetowner.gif';


const About = () => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(prevShowEmail => !prevShowEmail);
  };

  return (
    <main className='about-grid-container'>
      <Header/>
      
      <section className='owner'>
        <div>
          <h1>Meet The Developer</h1>
          <p>
            <span>Jon</span>, An aspiring web developer with a focus on crafting user-friendly interfaces and efficient solutions with React. 
          </p>
          <p>With a strong foundation in modern web technologies, I am constantly exploring new ways to create seamless digital experiences.</p>
          
          <div>
            <button className='contact-button' onClick={toggleEmail}>
              Contact <img src={Icons.contactIcon} alt="" />
            </button>
            <button className='resume-button'>Resume <img src={Icons.fileIcon} alt="" /></button>
          </div>

          {showEmail && (
            <div className='contact-email'>
              <img 
                src={Icons.xmarkIcon} 
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
        <img src={meetOwnerGif} alt="" />
        <div>
          <p>
            From API-driven dashboards to secure file storage applications, my work combines both front-end and back-end solutions.
          </p>
          <a href="https://github.com/jonnyboi42" target="_blank" rel="noopener noreferrer">
            <button>View Projects <img src={Icons.githubIcon} alt="" /></button>
          </a>
        </div>
      </section>

      <section className='skills'>
        <div>
          <h1>Skills</h1>
          <p>I've worked with a range of frameworks and technologies to create responsive interfaces and secure, efficient backend solutions. Here are a few key tools I've used in my projects:</p>
          <div className="skills-images">
            <img src={Icons.figmaIcon} alt="Figma icon" />
            <img src={Icons.reactIcon} alt="React icon" />
            <img src={Icons.htmlIcon} alt="HTML icon" />
            <img src={Icons.cssIcon} alt="CSS icon" />
            <img src={Icons.viteIcon} alt="Vite icon" />
            <img src={Icons.firebaseIcon} alt="Firebase icon" />
            <img src={Icons.gitIcon} alt="Git icon" />
          </div>
        </div>
      </section>

      <section className='head-photo'>
        <img src={meetOwnerGif} alt="" />
      </section>
    </main>
  )
}

export default About;
