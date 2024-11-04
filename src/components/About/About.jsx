import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Header from '../Header/Header';
import * as Icons from '../../assets/icons/icons';
import meetOwnerGif from '../../assets/imgs/meetowner.gif';
import cityGif from '../../assets/imgs/whitecity.jpg';
import headPhoto from '../../assets/imgs/headphoto.jpg';
import cube from '../../assets/imgs/cube.webp';

const About = () => {
  const [showEmail, setShowEmail] = useState(false);

  // Refs for GSAP animations
  const ownerRef = useRef(null);
  const developerProjectsRef = useRef(null);
  const skillsRef = useRef(null);
  
  useEffect(() => {
    
    // Animation for 'owner' section
    gsap.fromTo(ownerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
    
    // Animation for 'developer-projects' section
    gsap.fromTo(skillsRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.8, delay: 1.3, ease: 'power3.out' });

    // Animation for 'skills' section
    gsap.fromTo(developerProjectsRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.9, delay: 1.8, ease: 'power3.out' });
  }, []);

  const toggleEmail = () => {
    setShowEmail(prevShowEmail => !prevShowEmail);
  };

  return (
    <main className='about-grid-container'>
      <Header/>
      
      <section className='owner' ref={ownerRef}>
        <div>
          <h1>Meet The <span>Developer!</span> </h1>
          <p>
            <span>Jon</span>, An aspiring web developer with a focus on crafting user-friendly interfaces and efficient solutions with React. 
          </p>
          <p>With a strong foundation in modern web technologies, I am constantly exploring new ways to create seamless digital experiences.</p>
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

      <section className='developer-projects' ref={developerProjectsRef}>
        <img src={cube} alt="" />
        <div>
          <p>
            From API-driven dashboards to secure file storage applications, my work combines both front-end and back-end solutions.
          </p>
          <a href="https://github.com/jonnyboi42" target="_blank" rel="noopener noreferrer">
            <button>View Projects <img src={Icons.githubIcon} alt="" /></button>
          </a>
        </div>
      </section>

      <section className='skills' ref={skillsRef}>
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
        <img src={cube} alt="" />
      </section>
    </main>
  );
};

export default About;
