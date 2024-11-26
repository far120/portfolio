import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

export default function Skills() {
  
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
          <h1 style={{alignItems:"center"}}>Skills</h1>
          <div className="data">
            <p>Some of my skills include:</p>
            <ul>
              <li>ReactJS</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>REST API</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              

            </ul>
            <Link to="/" className="btn btn-primary" style={{margin:"5px"}}>Home</Link>
            <Link to="/contact" className="btn btn-primary" style={{margin:"5px"}}>Contact Me</Link>
            <Link to="/about" className="btn btn-primary" style={{margin:"5px"}}>About Me</Link>

            
          </div>
        
           
             
        </div>
        </div>
        </div>

    );
}
