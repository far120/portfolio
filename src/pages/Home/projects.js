import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

export default function Projects() {
  
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
          <h1 className="section-title">Projects</h1>
          <div className="projects">
              <p><Link to="https://full-stack-prouduct.vercel.app/" target="_blank" >E-commerce Platform Using MERN Stack<i class="fa-solid fa-link"></i> </Link></p>
              <p><Link to="https://far-maneger.vercel.app/" target="_blank" >Task Manager with Role-Based Authentication<i class="fa-solid fa-link"></i> </Link></p>
              <p><Link to="https://elfar-movie-app.vercel.app/" target="_blank" >A Dynamic Film Discovery Platform<i class="fa-solid fa-link"></i> </Link></p>
              <p><Link to="https://user-registration-form-one.vercel.app/" target="_blank" >User Registration Form<i class="fa-solid fa-link"></i> </Link></p>
              <p><Link to="https://task-murex-eight.vercel.app/" target="_blank" >TaskMaster<i class="fa-solid fa-link"></i> </Link></p>
            </div>
            <h3>this is email and password of any project</h3>
            <p>email == user@user.com </p>
            <p>password == 123456789 </p>
          <Link to="/" className="btn btn-primary" style={{margin:"5px"}}>Home page</Link>
            <Link to="/contact" className="btn btn-primary" style={{margin:"5px"}}>Contact Me</Link>
            <Link to="/about" className="btn btn-primary" style={{margin:"5px"}}>About Me</Link>

        
           
             
        </div>
        </div>
        </div>

    );
}
