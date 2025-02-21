import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGithub, FaLinkedin, FaEnvelope, FaChevronRight, FaCheck } from "react-icons/fa";

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
  <div className="home-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
    <div className="intro-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '80%', textAlign: 'center', flexWrap: 'wrap', gap: '20px' }} >
      <div className="text-content" style={{ flex: 1, textAlign: 'left', lineHeight: '1.8' }} >
        <h1 className="page-title">Hello! 👋</h1>
        <p className="intro-text">I am <span className="highlight">Hyeonwoo Park</span></p>
        <p className="description">An AI researcher and engineer specializing in adaptive intelligence and sound event detection.</p>
      </div>
      <div className="image-content" style={{ flex: 1, textAlign: 'center' }} >
        <img src="/profile.png" alt="Profile" className="profile-image" />
      </div>
    </div>

    
    <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center', gap: '20px' }}>
      <div className="content-container" style={{ width: '100%' }}>
        <div className="section">
          <h3>Research Interests</h3>
          <ul>
            <li>Adaptive & Personalized AI</li>
            <li>Human-Computer Interaction</li>
            <li>Sound Event Detection</li>
          </ul>
        </div>
      </div>

      <div className="content-container" style={{ width: '100%' }}>
        <div className="section">
          <h3>Research Experience</h3>
          <p>Research Student at Advanced Multimedia Computing Lab., Dept. of Computer Engineering, Chosun University, Korea (Jan. 2022 ~ Present)</p>
        </div>
      </div>

      <div className="content-container" style={{ width: '100%' }}>
        <div className="section">
          <h3>Education</h3>
          <p>Chosun University, B.S. in Computer Engineering (GPA: 3.91/4.5)</p>
        </div>
      </div>

      <div className="content-container" style={{ width: '100%' }}>
        <div className="section">
          <h3>Work Experience</h3>
          <p>Taesung Industry Co., Ltd. - Mold Department (2017 - 2021)</p>
        </div>
      </div>
      
      <div className="content-container" style={{ width: '100%' }}>
        <div className="section">
          <h3>Tech Stack</h3>
          <div className="tech-list">
            {['Python', 'Pytorch', 'Arduino', 'Raspberry Pi', 'Jetson Nano', 'TensorRT', 'Android', 'C/C++', 'YOLO v3'].map((tech) => (
              <span key={tech} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="content-container" style={{ width: '100%' }}>
        <div className="section">
          <h3>Projects & Awards</h3>
          <table className="project-table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid gray', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid gray' }}>
                <th style={{ border: '1px solid gray', padding: '8px', width: '30%' }}>Project Name</th>
                <th style={{ border: '1px solid gray', padding: '8px', width: '35%' }}>Awards</th>
                <th style={{ border: '1px solid gray', padding: '8px', width: '15%' }}>Duration</th>
                <th style={{ border: '1px solid gray', padding: '8px', width: '15%' }}>Months</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pill Dispenser for Elderly", "Chosun University President's Award", "21.10 - 22.01", "4 months"],
                ["PetCam & Toy", "Chosun University President's Award, Hanyang University Erica Smart Business Unit Award", "22.05 - 22.08", "4 months"],
                ["DABA, Recycled Plastic Pellets from Waste Fishing Nets", "Hyundai Marine & Fire Insurance Grand Prize, Gwangju Mayor's Award, Gwangju Creative Economy Innovation Center Award", "22.08 - 24.03", "19 months"],
                ["Deep Voice Detection Among Multiple Speakers", "Institute for Information & Communications Technology Planning & Evaluation Award", "24.07 - 24.08", "1 month"],
                ["Fall Accident Model for Elderly", "Institute for Information & Communications Technology Planning & Evaluation Award", "23.12 - 24.08", "9 months"],
                ["STT, TTS Development for Speech-Impaired", "Ongoing (Result on 25.02.05)", "24.05 - 25.02", "10 months"],
                ["AI Model for Emergency Detection in Restrooms", "Sponsored Company Award (Hancom) * Industry-linked Research Lab Verification Project", "24.03 - 24.12", "10 months"],
                ["AI System for Maritime Boundary Reinforcement", "Minister of National Defense Award", "24.08 - 24.12", "5 months"],
              ].map(([name, award, duration, months]) => (
                <tr key={name} style={{ borderBottom: '1px solid gray' }}>
                  <td style={{ border: '1px solid gray', padding: '8px' }}>{name}</td>
                  <td style={{ border: '1px solid gray', padding: '8px' }}>{award}</td>
                  <td style={{ border: '1px solid gray', padding: '8px' }}>{duration}</td>
                  <td style={{ border: '1px solid gray', padding: '8px' }}>{months}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p><strong>Total Awards:</strong> 11</p>
        </div>
      </div>
    </div>

    <div className="content-container" style={{ width: '80%', marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <NavLink to="/projects" className="btn primary-btn" style={{ marginBottom: '20px', width: '93%' }}>
        View Projects
      </NavLink>
      <div className="social-links" style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '40px', justifyContent: 'space-between', width: '100%', maxWidth: '100%', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="https://github.com/AutoStudyP" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/hyeon-woo-park-9a8559281" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:20213120@chosun.ac.kr" className="btn secondary-btn">
          <FaEnvelope /> Email
        </a>
      </div>
      <div className="university-logo" style={{ width: '60px', height: '60px' }}>
          <img src="/chosun.png" alt="Chosun University Logo" style={{ width: '100%', height: '100%' }} />
      </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const sortByDate = (items) => {
    return [...items].sort((a, b) => {
      const bDate = b.period.includes("Present") ? new Date() : new Date(b.period.split(" - ")[1] + "-01");
      const aDate = a.period.includes("Present") ? new Date() : new Date(a.period.split(" - ")[1] + "-01");
      return bDate - aDate;
    });
  };
  

  const projects = sortByDate([
    {
      title: "노인을 위한 알약 자동 토출기",
      subtitle: "아두이노, Raspberry Pi, Yolo V3 Light pretrain 모델 사용",
      description:
        "광학 문자인식으로 복약시간을 설정하고, 사람, 수저, 젓가락 등의 물체를 인식하여 식후, 식전 정확한 복약 가능하도록 돕는 기기 개발",
      period: "Oct 2021 - Jan 2022",
      imageUrl: "/활동/1.png",
      pdfUrl: "/pdfs/MAO.pdf",
    },
    {
      title: "반려동물을 위한 펫 캠& 펫 토이",
      subtitle: "3D 프린터 모델링, 아두이노, Raspberry PI, Yolo V5 pretrain 모델 사용",
      description:
        "펫토이의 개발의 발전에 따라 구매율은 올랐지만, 사용률은 떨어짐. 펫캠과 장난감을 결합하여 반려동물이 등장하면 모터를 동작시켜 간식을 던져주는 기기 개발",
      period: "May 2022 - Aug 2022",
      imageUrl: "/활동/2.png",
    },
    {
      title: "DABA (다시,바다)",
      subtitle: "폐어망 활용 재생 플라스틱 펠릿. 필라멘트 제작",
      description:
        "수집, 세척, 압출, 컷팅 과정을 통하여 폐어망을 재생 PP, PE 제작 및 판매",
      period: "Aug 2022 - Mar 2023",
      imageUrl: "/활동/9.png",
    },
    {
      title: "Sound Event Detection & Rader Peak detection For Human Danger State Detection",
      subtitle: "레이더와 아두이노 메가 활용 peak detection, Sound Event Detection을 통한 낙상 감지",
      description:
        "노인의 낙상은 집에서 60% 이상 발생, 빠른 처치를 통하게 된다면 2차 피해를 막을 수 있음.",
      period: "Dec 2023 - Aug 2024",
      imageUrl: "/활동/4.png",
      pdfUrl: "/pdfs/SRHD.pdf",
    },
    {
      title: "딥보이스 탐정단",
      subtitle: "Audio LDM(폴리)을 통한 환경 잡음 생성, Artifact를 효과적으로 개선하기 위한 Smooth 기법 사용",
      description:
        "다양한 잡음 환경에서의 발화 인원을 파악하고, 인원중 Deepvoice가 있는지 파악하는 AI모델 개발",
      period: "Jul 2024 - Aug 2024",
      imageUrl: "/활동/6.png",
      pdfUrl: "/pdfs/Deepvoice.pdf",
    },
    {
      title: "Sound Add on",
      subtitle: "온 더 에어 상황에서의 악천후에 강건한 Sound Event Detection 해안 초소 경비시스템",
      description:
        "Deepship, Shipsear, HearMyShips 데이터 활용, 선박 데이터와 날씨 데이터를 혼합",
      period: "Aug 2024 - Dec 2024",
      imageUrl: "/활동/7.png",
      pdfUrl: "/pdfs/SoundAddon.pdf",
    },
    {
      title: "이어톡/ 마비말 장애인을 위한 STT, Zero_Shot_TTS 개발",
      subtitle: "Whisper Fine Tune, Coqui TTS Pretrained, Rest API 이용 Webview 기반 AI 서비스",
      description:
        " 뇌 병변장애로 인한 조음장애를 겪는 장애인의 발화를 돕는 STT/TTS 어플리케이션 개발",
      period: "May 2024 - Feb 2025",
      imageUrl: "/활동/5.png",
      pdfUrl: "/pdfs/Eartalk.pdf",
    },
    {
      title: "EchoSafe: Edge-based Emergency Sound Detection for Public Toilet",
      subtitle: "다양한 음성 관련 데이터 증강기법 및 모델 경량화를 통한 지연률 감소",
      description:
        "화장실에서의 위험 상황 발생시 조기 진압이 가능해야함. 눌러서 작동하는 비상벨은 효용성 X, 비상상황이 발생하는 상황에 빠르게 대응가능 하도록 비명에 반응하도록 AI 모델 학습",
      period: "Mar 2024 - Present",
      imageUrl: "/활동/8.png",
      pdfUrl: "/pdfs/Echosafe.pdf",
    }
  ]);

  return (
    <div className="page-template bg-black text-white min-h-screen">
      <h1 className="page-title text-3xl font-bold mb-6">Projects</h1>
      <div className="flex flex-col gap-6 items-center">
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <h3 className="project-subtitle">{project.subtitle}</h3>
              <p className="project-description">{project.description}</p>

              {/* 날짜 + 버튼을 하나의 flex 컨테이너로 배치 */}
              <div className="date-button-container">
                <p className="project-date">📅 {project.period}</p>
                {project.pdfUrl && (
                  <button onClick={() => window.open(project.pdfUrl, "_blank")} className="pdf-button">
                    View PDF
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const Experience = () => {
  const [showAwards, setShowAwards] = useState(true);
  const [showPrograms, setShowPrograms] = useState(true);

  const sortByDate = (items) => {
    return [...items].sort((a, b) => new Date(b.date + "-01") - new Date(a.date + "-01"));
  };

  const awards = sortByDate([
    {
      title: "최우수상",
      organizer: "조선대학교 총장상",
      date: "2022-01",
      image: "/Award/MAO.jpg",
      description: "노인을 위한 알약 자동 토출기"
    },
    {
      title: "최우수상",
      organizer: "정보통신기획평가원장",
      date: "2024-08",
      newsUrl: "https://www.swuniv.kr/60/?bmode=view&idx=57985798",
      image: "/Award/deepvoice.jpg",
      description: "딥보이스 탐정단 [AI부분(딥보이스 탐지)]"
    },
    {
      title: "최우수상",
      organizer: "정보통신기획평가원장",
      date: "2024-08",
      newsUrl: "https://www.newsis.com/view/NISX20240827_0002864861",
      image: "/Award/ICTSmart.jpg",
      description: "SRHD"
    },
    {
      title: "대상",
      organizer: "국방부 장관상",
      date: "2024-12",
      newsUrl: "https://daily.hankooki.com/news/articleView.html?idxno=1168304",
      image: "/Award/SoundAddOn.jpg",
      description: "음향 AI 기반 선박 탐지 및 분류 시스템"
    },
    {
      title: "후원기업상",
      organizer: "한글과컴퓨터 대표이사",
      date: "2024-12",
      newsUrl: "https://www4.chosun.ac.kr/sw/12333/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc3clMkYxMTI5JTJGMjE3NTIxJTJGYXJ0Y2xWaWV3LmRvJTNG",
      image: "/Award/hc.png",
      description: "위급상황을 신속하게 감지하고 대응할 수 있는 AI기반 음원 솔루션"
    },
    {
      title: "대상",
      organizer: "현대해상 대표이사",
      date: "2022-12",
      newsUrl: "https://www.veritas-a.com/news/articleView.html?idxno=459294s",
      image: "/Award/awarddaba.jpg",
      description: "Daba(다시, 바다)"
    },
    {
      title: "3rd",
      organizer: "Enactus National Competition",
      date: "2022-12",
      newsUrl: "https://csu.chosun.ac.kr/bbs/chosun/72/252338/artclView.do",
      image: "/Award/award4.png",
      description: "Daba(다시, 바다)"
    },
    {
      title: "광주광역시장상",
      organizer: "고용노동부",
      date: "2023-11",
      image: "/Award/award5.png",
      description: "Daba(다시, 바다)"
    },
    {
      title: "최우수상",
      organizer: "조선대학교 총장상",
      date: "2022-12",
      image: "/Award/NoseWork.jpg",
      description: "반려동물용 펫 캠&토이"
    },
    {
      title: "최우수상",
      organizer: "조선대학교 IT융합대학장",
      date: "2023-11",
      image: "/Award/Alft.jpg",
      description: "다중발화대처자동자막"
    }
  ]);
    const programs = sortByDate([
    {
      title: "CU 멘토단-Blooming Program",
      organizer: "조선대학교 총장",
      date: "2022-03",
      image: "/Program/blooming_Mentor.jpg",
      description: "컴퓨터 공학과 편입, 전과 학생을 위한 멘토링 프로그램 멘토 참여"
    },
    {
      title: "Enactus Chosun 2기 수료",
      organizer: "인액터스 총장",
      date: "2024-02",
      image: "/Program/Enactus_Program.jpg",
      description: "스타트업 창업을 위한 비즈니스 모델 개발 및 실전 창업 학회"
    },
    {
      title: "I-Corps 실험실 창업 프로그램",
      organizer: "실험실창업혁신단",
      date: "2023-04",
      image: "/Program/ICorps.jpg",
      description: "2023 Mini I-Corps, 본 I-Corps 프로그램 참여, 실험실 창업 프로그램"
    },
    {
      title: "IP창업존 42기 (청년특화반)",
      organizer: "광주지식재산센터",
      date: "2022-09",
      image: "/Program/IP디딤돌.jpg",
      description: "IP 디딤돌 지식재산권 프로그램 참여"
    },
    {
      title: "Knime [Data Science Software] Certification ",
      organizer: "Basic Proficiency in KNIME",
      date: "2025-02",
      image: "/Program/knime Certification.jpg",
      description: "knime을 통하여 Data Science를 공부, AI Flow 이해"
    },
    {
      title: "UC San Diego AI Certification",
      organizer: " Qualcomm Institude, UC San Diego",
      date: "2025-02",
      image: "/Program/UCSDQI.jpg",
      description: "Qualcomm Institute Artificial Inteligence (AI) Development Project"
    },
    {
      title: "사출금형가공전문가 양성",
      organizer: "WOOJIN PLAIMM",
      date: "2016-12",
      image: "/Program/woojinprime.jpg",
      description: "사출 금형 가공 800시간 교육 수료, 모델링, MCT, 범용기기 등"
    },
    {
      title: "국제 청소년 리더 교류 지원 사업",
      organizer: "조선대학교 대외 협력",
      date: "2021-08",
      image: "/Program/국제교류지원.jpg",
      description: "국제 교류지원 사업을 통하여 외국인 학생과 프로젝트를 진행, 발표 및 학교 소개"
    },
  ]);

  return (
    <div className="page-template">
      <h1 className="page-title">Experience</h1>
      
      <div className="title-container" style={{ textAlign: "center" }}>
        <h2 className="section-title" style={{ backgroundColor: "#505050", padding: "10px", borderRadius: "5px", display: "inline-flex", alignItems: "center" }}>
          Awards &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="toggle-button" style={{ backgroundColor: "#505050", border: "none", padding: "5px" }} onClick={() => setShowAwards(!showAwards)}>
            {showAwards ? <FaCheck size={24} color="black" /> : <FaChevronRight size={24} color="black" />}
          </button>
        </h2>
      </div>
      {showAwards && (
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
                {award.newsUrl && (
                  <a href={award.newsUrl} target="_blank" rel="noopener noreferrer" className="news-link">
                    📰 관련 뉴스 보기
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="title-container" style={{ textAlign: "center" }}>
        <h2 className="section-title" style={{ backgroundColor: "#505050", padding: "10px", borderRadius: "5px", display: "inline-flex", alignItems: "center" }}>
          Program &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="toggle-button" style={{ backgroundColor: "#505050", border: "none", padding: "5px" }} onClick={() => setShowPrograms(!showPrograms)}>
            {showPrograms ? <FaCheck size={24} color="black" /> : <FaChevronRight size={24} color="black" />}
          </button>
        </h2>
      </div>
      {showPrograms && (
        <div className="awards-container">
          {programs.map((program, index) => (
            <div key={index} className="award-item">
              <div className="award-image">
                <img src={program.image} alt={`${program.title} 프로그램`} />
              </div>
              <div className="award-info">
                <div className="award-header">
                  <h2 className="award-title">{program.title}</h2>
                  <span className="award-date">{program.date}</span>
                </div>
                <div className="award-organizer">{program.organizer}</div>
                <p className="award-description">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
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