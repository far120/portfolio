import React from "react";
import "./aside.css";
import profileImage from "./mostafa.jpg"; // Ensure the path is correct
import { Link } from "react-router-dom";

export default function Aside() {
  const userInfo = {
    name: "Mostafa Mahmoud ElFar",
    title: "Web Developer",
    phone: "+20 1102453675",
    location: "Giza",
    email: "mostafa.m.elfar@gmail.com",
    birthday: "Feb 20, 2004",
    socialLinks: {
      facebook: "https://www.facebook.com/tata.far.77?locale=ar_AR",
      github: "https://github.com/far120",
      instagram: "https://www.facebook.com/tata.far.77?locale=ar_AR",
      linkedin: "https://www.linkedin.com/in/mostafa-mahmoud-el-far-6a67732b5/",
      whatsapp: "https://wa.me/+201102453675",
    },
  };

  return (
    <aside className="aside">
      <div className="aside-header">
        <img src={profileImage} alt="User Avatar" className="avatar" />
      </div>

      <div className="aside-content">
        <div className="profile-section">
          <h2>{userInfo.name}</h2>
          <h3 className="title">{userInfo.title}</h3>
          <div className="social-icons">
            {Object.entries(userInfo.socialLinks).map(([key, link]) => (
              <Link
                to={link}
                key={key}
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${key}`}></i>
              </Link>
            ))}
          </div>
        </div>

        <div className="contact-info">
          <div className="detail">
            <i className="fas fa-mobile-alt icon"></i>
            <div className="info">
              <p>Phone</p>
              <p>
                <Link to={`tel:${userInfo.phone}`}>{userInfo.phone}</Link>
              </p>
            </div>
          </div>

          <div className="detail">
            <i className="fas fa-map-marker-alt icon"></i>
            <div className="info">
              <p>Location</p>
              <p>{userInfo.location}</p>
            </div>
          </div>

          <div className="detail">
            <i className="fas fa-envelope icon"></i>
            <div className="info">
              <p>Email</p>
              <p>
                <Link to={`mailto:${userInfo.email}`}>{userInfo.email}</Link>
              </p>
            </div>
          </div>

          <div className="detail">
            <i className="fas fa-calendar-alt icon"></i>
            <div className="info">
              <p>Birthday</p>
              <p>{userInfo.birthday}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
