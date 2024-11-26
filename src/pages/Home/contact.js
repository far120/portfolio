import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css'
import './contact.css'
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
          <div className="contact-section">
  <h1>Contact</h1>
  <p>
    Feel free to reach out to me via email at 
    <a href="mailto:mostafa.m.elfar@email.com" className="contact-email">
      mostafa.m.elfar@email.com
    </a>
    or connect with me on social media platforms below.
  </p>

  <h2>Social Media</h2>
  <ul className="social-media-list">
    <li>
      <a href="https://www.linkedin.com/in/mostafa-mahmoud-el-far-6a67732b5/" target="_blank" >
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
    </li>
    <li>
      <a href="https://github.com/far120" target="_blank" >
        <i className="fab fa-github"></i> GitHub
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/tata.far.77?locale=ar_AR" target="_blank" >
        <i className="fab fa-facebook"></i> Facebook
      </a>
    </li>
    <li>
      <a href="https://wa.me/+021102453675" target="_blank" >
      <i class="fa-brands fa-whatsapp"></i> whatsap
      </a>
    </li>

  </ul>
</div>
            <Link to="/" className="btn btn-primary" style={{margin:"5px"}}>Home</Link>
            <Link to="/contact" className="btn btn-primary" style={{margin:"5px"}}>Contact Me</Link>
            <Link to="/about" className="btn btn-primary" style={{margin:"5px"}}>About Me</Link>
            <Link to="/skills" className="btn btn-primary" style={{margin:"5px"}}>Skills</Link>
            <Link to="/projects" className="btn btn-primary" style={{margin:"5px"}}>Projects</Link>
            <Link to="/workexperinse" className="btn btn-primary" style={{margin:"5px"}}>Work Experience</Link>
            <Link to="/certifications" className="btn btn-primary" style={{margin:"5px"}}>Certafications</Link>

        
           
             
        </div>
        </div>
        </div>

    );
}
