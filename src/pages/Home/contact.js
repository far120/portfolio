import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

export default function Contact() {
  
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
          <div className="">
  <h1>Contact</h1>
  <p>
    Feel free to reach out to me via email at 
    <a href="mailto:your@email.com" className="contact-email">
      your@email.com
    </a>
    or connect with me on social media platforms below.
  </p>

  <h2>Social Media</h2>
  <ul className="">
    <li>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
    </li>
    <li>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> GitHub
      </a>
    </li>
    <li>
      <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i> Twitter
      </a>
    </li>
    <li>
      <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i> Facebook
      </a>
    </li>
  </ul>
</div>


          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/skills">Skills</Link> | <Link to="/projects">Projects</Link> | <Link to="/workexperinse">Work Experience</Link> | <Link to="/certifications">Certifications</Link> | <Link to="/contact">Contact</Link>
        
           
             
        </div>
        </div>
        </div>

    );
}
