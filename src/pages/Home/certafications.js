import Aside from '../Aside/aside';
import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

export default function Certifications() {
  
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
          <h1>Certifications</h1>
          <p>Below are some of my certifications:</p>
          <p><Link to="https://drive.google.com/file/d/18UEMYdy5Y7cfCfz8GYdCGy49pyxyf7X1/view?usp=sharing" target="_blank" >HUAWEI TRAINING COURSE OF ARTIFICIAL INTELLIGENCE<i class="fa-solid fa-link"></i> </Link></p>
          <p><Link to="https://drive.google.com/file/d/1wYayVb4NfltGgzoM6l4CNerbXZ2UQ2nF/view?usp=sharing" target="_blank">HUAWEI TALENT ONLINE<i class="fa-solid fa-link"></i> </Link></p>
          <p><Link to="https://drive.google.com/file/d/1W4PYk6iLNOxyyQvMDgQyK50JNIzBTpfJ/view?usp=sharing" target="_blank">NEW HORIZONS<i class="fa-solid fa-link"></i> </Link></p>
          <p><Link to="https://coursera.org/share/6795dd924b6803fc0026e3dd04b28538" target="_blank" >Introduction to Front-End Development<i class="fa-solid fa-link"></i> </Link></p>
          <p><Link to="https://coursera.org/share/6701eba45b7d71f0c147767121da7ccd" target="_blank" >Introduction to Back-End Development<i class="fa-solid fa-link"></i> </Link></p>
          


          <Link to="/" className="btn btn-primary" style={{margin:"5px"}}>Home page</Link>
            <Link to="/contact" className="btn btn-primary" style={{margin:"5px"}}>Contact Me</Link>
            <Link to="/about" className="btn btn-primary" style={{margin:"5px"}}>About Me</Link>
        
           
             
        </div>
        </div>
        </div>

    );
}
