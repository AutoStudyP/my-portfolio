import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => (
  <motion.nav
    className="navbar"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <NavLink to="/" className="logo">
      <FaLaptopCode /> My Portfolio
    </NavLink>
    <div className="nav-links">
      {[
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" }
      ].map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          {name}
        </NavLink>
      ))}
    </div>
  </motion.nav>
);

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <div className="text-section">
        <h1 className="page-title">Hello! 👋</h1>
        <p className="intro-text">I am <span className="highlight">[Your Name]</span></p>
        <p className="description">A passionate full-stack developer researching AI.</p>
        
        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <div className="tech-list">
            {['React', 'Node.js', 'JavaScript', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="cta-buttons">
          <NavLink to="/projects" className="btn primary-btn">
            View Projects
          </NavLink>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="btn secondary-btn">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="image-section">
        <img src="/profile.png" alt="Profile" className="profile-image" />
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectData = {
    title: "AI-Based Aircraft Damage Detection",
    subtitle: "Machine Learning Model for Aircraft Maintenance",
    description:
      "Developed an AI-based system to detect and classify aircraft damage using convolutional neural networks. The model was trained with a dataset of over 10,000 labeled images and achieved an accuracy of 92%.",
    period: "Jan 2024 - Present",
    imageUrl: "/profile.png",
  };

  return (
    <div className="page-template">
      <h1 className="page-title">Projects</h1>
      <div className="project-container">
        <img src={projectData.imageUrl} alt={projectData.title} />
        <div className="project-info">
          <h2>{projectData.title}</h2>
          <h3>{projectData.subtitle}</h3>
          <p>{projectData.description}</p>
          <p className="project-period">📅 {projectData.period}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const awards = [
    {
      title: "대상",
      organizer: "과학기술정보통신부",
      date: "2023년 12월",
      newsUrl: "https://example.com/news",
      image: "/award1.png",
      description: "AI 기반 항공기 손상 탐지 시스템 개발"
    },
    {
      title: "최우수상",
      organizer: "한국정보과학회",
      date: "2023년 9월",
      newsUrl: "https://example.com/news2",
      image: "/award2.png",
      description: "머신러닝 기반 예측 모델 연구"
    }
  ];

  return (
    <div className="page-template">
      <h1 className="page-title">Experience</h1>
      <div className="awards-container">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <div className="award-image">
              <img src={award.image} alt={`${award.title} 상장`} />
            </div>
            <div className="award-info">
              <div className="award-header">
                <h2 className="award-title">{award.title}</h2>
                <span className="award-date">{award.date}</span>
              </div>
              <div className="award-organizer">{award.organizer}</div>
              <p className="award-description">{award.description}</p>
              <a href={award.newsUrl} target="_blank" rel="noopener noreferrer" className="news-link">
                📰 관련 뉴스 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;