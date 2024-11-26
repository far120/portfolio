import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

export default function WorkExprinse() {
  
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
          <div className="work-experience">
  <h2>Work Experience</h2>
  <div className="experience-item">
    <h3>MERN Stack - React Frontend Web Developer</h3>
    <p>
      <strong>Duration:</strong> April 2024 – October 2024 <br />
      <strong>Location:</strong> Giza, Egypt
    </p>
    <ul>
      <li>
        Developed and maintained responsive web applications using React.js,
        optimizing user interfaces with best practices for performance and scalability.
      </li>
      <li>
        Implemented front-end architecture with HTML5, CSS3, and JavaScript, delivering
        responsive designs compatible with modern browsers and devices.
      </li>
      <li>
        Integrated backend services with RESTful APIs developed in Node.js and Express,
        ensuring seamless communication between client and server-side logic.
      </li>
      <li>
        Utilized version control systems like Git and GitHub for collaborative development,
        managing code changes effectively in multi-developer environments.
      </li>
    </ul>
    <Link to="/" className="btn btn-primary" style={{margin:"5px"}}>Home</Link>
            <Link to="/contact" className="btn btn-primary" style={{margin:"5px"}}>Contact Me</Link>
            <Link to="/about" className="btn btn-primary" style={{margin:"5px"}}>About Me</Link>

  </div>
</div>
</div>
</div>
</div>

)
}
