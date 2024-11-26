import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import Files from './Mostafa-Mahomoud-Hosny-FlowCV-Resume-20241010.pdf';

export default function About() {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light'); 

  const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme); 
  };
  useEffect(() => {
      document.body.className = theme; 
  }, [theme]);


    return (
<div style={{ backgroundColor: localStorage.getItem("theme") === 'light' ? '#f0f0f0' : '#333', minHeight: '100vh' }}>
        <div className="home-container">
            <div className="user-info">
            <Aside/>
            </div>
            <div className="content-container">
            <button className="btn btn-primary " onClick={toggleTheme} >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          
            <h1 style={{alignItems:"center"}}>About Me</h1>
            <p> Im Passionate about MERN stack development and continuously expanding knowledge. Currently pursuing studies in 
                grade 3. Proficient in creating full-stack web applications using MongoDB, Express.js, React, and Node.js. Expertise in 
                front-end and back-end development. Solid foundation in JavaScript and responsive design. Committed to staying up
                to-date with latest technological advancements. Actively enhances problem-solving skills and technical proficiency 
                through new projects. Thrives in collaborative environments. Eager to contribute to innovative development teams.</p>
            <p>I am currently working remotely, focusing on my personal projects and freelance work. I am open to opportunities to collaborate with other developers and teams. My goal is to contribute to the development of cutting-edge technologies and help clients achieve their goals.</p>
            <a href={Files} download>
      <button className='btn btn-primary'>Download My resume</button>
        </a>
            <Link to="/" className="btn btn-primary" style={{margin:"5px"}}>Home page</Link>
            <Link to="/contact" className="btn btn-primary" style={{margin:"5px"}}>Contact Me</Link>


        
           
             
        </div>
        </div>
        </div>

    );
}
