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
const About = () => {
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
                
                
            </div>
            {/* <img src="src/assets/imgs/owner.jpg" alt="" /> */}
            
        </section>

        <section className='developer-image'>
            <h1>Meet The Developer</h1>
            <img src="src/assets/imgs/owner.jpg" alt="" />

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
                </div>
            </div>

        </section>

        <section className='projects'>
            <div>
                <h1>Projects</h1>
                <p>
                From API-driven dashboards to secure file storage applications, my work combines both front-end and back-end solutions. 
                </p>
                
                <a href="https://github.com/jonnyboi42" target="_blank">
                    <button>View Projects <img src={githubIcon} alt="" /></button>
                </a>
                
            </div>
        </section>



        {/* <section className='about-section'>
            
            <div>
            <h1>Our Philosophy</h1>
            <p>We believe that architecture should reflect the environment and tell a story. With our commitment to using concrete, glass, and steel, we create spaces that are not only visually striking but also durable and sustainable. Our designs challenge traditional norms, embracing the bold lines and geometric forms characteristic of brutalist style.</p>

            </div>
            <img src="src\assets\imgs\brutalist.jpg" alt="" />
           
        </section> */}



  
                

         
        
    

    </main>

    
  )
}

export default About





