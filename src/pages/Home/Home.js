import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Files from "./Mostafa-Mahomoud-Hosny-FlowCV-Resume-20241126 (1).pdf"

export default function Home() {
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
    <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', minHeight: '100vh' }}>
      <div className="home-container">
        <div className="user-info">
          <Aside />
        </div>
        <div className="content-container">
          <button className="btn btn-primary " onClick={toggleTheme} >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          <nav className="nav">
            <div className="nav-item card">
              <Link to="/" className="card-link">
                <i className="fas fa-home"></i>
                <h3>home page</h3>
                <p>Navigate to the homepage to explore recent updates.</p>
              </Link>
            </div>
            <div className="nav-item card">
              <Link to="/workexperinse" className="card-link">
              <i className="fas fa-briefcase"></i>
              <h3>Work Experience</h3>
              <p>View a list of our professional experiences.</p>
              </Link>
              </div>
            <div className="nav-item card">
              <Link to="/skills" className="card-link">
                <i className="fas fa-file-alt"></i>
                <h3>Skills</h3>
                <p>Discover the skills and technologies we excel in.</p>
              </Link>
            </div>
            <div className="nav-item card">
              <Link to="/certifications" className="card-link">
                <i className="fas fa-file-signature"></i>
                <h3>Certifications</h3>
                <p>View a list of certifications and achievements.</p>
              </Link>
            </div>
            <div className="nav-item card">
              <Link to="/projects" className="card-link">
                <i className="fas fa-file-archive"></i>
                <h3>Projects</h3>
                <p>Explore various projects and case studies.</p>
              </Link>
            </div>
            <div className="nav-item card">
              <Link to="/about" className="card-link">
                <i className="fas fa-info-circle"></i>
                <h3>About</h3>
                <p>Learn more about us and our journey.</p>
              </Link>
            </div>
            <div className="nav-item card">
              <Link to="/contact" className="card-link">
                <i className="fas fa-address-card"></i>
                <h3>Contact</h3>
                <p>Reach out to us for any inquiries or questions.</p>
              </Link>
            </div>
            <div className="nav-item card">
            <a href={Files} download>
              <i className="fas fa-file-pdf"></i>
              <h3>Resume</h3>
                <button className='btn'>Download My Resume
                </button>
              </a>
            </div>
             
          </nav>
        </div>
      </div>
    </div>
  );
}
