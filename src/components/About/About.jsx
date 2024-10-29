import React from 'react'
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
const About = () => {
  return (
    <main className='about-grid-container'>
        
        <Header/>
    
        

        <section className='owner'>
            
            <div>
                <h1>Meet The Developer</h1>
                {/* <img src="src\assets\imgs\owner.jpg" alt="" /> */}
                <p>
                <span>Jon</span>, An aspiring web developer with a focus on crafting user-friendly interfaces and efficient solutions with React. 
                </p>
                <p>With a strong foundation in modern web technologies, I am constantly exploring new ways to create seamless digital experiences. </p>
                
                <div>
                    <button className='contact-button'>Contact <img src={contactIcon} alt="" /></button>
                    <button className='resume-button'>Resume <img src={fileIcon} alt="" /></button>
                </div>
                
                
                
            </div>
            {/* <img src="src/assets/imgs/owner.jpg" alt="" /> */}
            
        </section>

        <section className='developer-projects'>
            <img src="src/assets/imgs/scifihead.gif" alt="" />
            <div>
                
                
                <p>
                From API-driven dashboards to secure file storage applications, my work combines both front-end and back-end solutions. 
                </p>
                
                <a href="https://github.com/jonnyboi42" target="_blank">
                    <button>View Projects <img src={githubIcon} alt="" /></button>
                </a>
            </div>
            

        </section>

        {/* <section className='education'>
            <h2>About</h2>
            <h1>Education <img src={diplomaIcon} alt="" /></h1>
            <p>Bachelors Computer Science Texas State University</p>

            <h1>Work Experience <img src={workIcon} alt="" /></h1>
            <p>IT End User Support Level II: Texas A&M - 4 yrs</p>
            <p>Educational Technologist: Austin Community College - 1.5 yrs</p>

            <h1>Interests</h1>
            <p>Electronics</p>
            <p>UI/UX</p>
            <p>Prop Making</p>
            

        </section> */}

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
                </div>
            </div>

        </section>


        {/* <section className='contact-email'>
            <p>Email: connelljon9@gmail.com</p>
        </section> */}


    

    </main>

    
  )
}

export default About





