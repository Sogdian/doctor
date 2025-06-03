import React from 'react';
import './LandingPage.module.less';
import doctorImg from '../../assets/logo.png'; // Временно используем логотип как заглушку

const features = [
  {
    title: '24 hour service',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    icon: '🕑',
  },
  {
    title: '8 years of experience',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    icon: '🎓',
  },
  {
    title: 'High quality care',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    icon: '➕',
  },
];

export const LandingPage: React.FC = () => (
  <div className="landing">
    <nav className="navbar">
      <div className="logo">Doctor<span className="plus">+</span></div>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button className="bookNow">Book Now</button>
    </nav>
    <main className="main">
      <section className="info">
        <div className="subtitle">Dr. Matthew Anderson</div>
        <h1 className="title">A dedicated doctor<br/>you can trust</h1>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.</p>
        <button className="cta">Book an appointment</button>
      </section>
      <section className="illustration">
        <img src={doctorImg} alt="Doctor" className="doctorImg" />
      </section>
    </main>
    <section className="features">
      {features.map((f, i) => (
        <div className="feature" key={i}>
          <div className="icon">{f.icon}</div>
          <div>
            <div className="featureTitle">{f.title}</div>
            <div className="featureDesc">{f.desc}</div>
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default LandingPage; 