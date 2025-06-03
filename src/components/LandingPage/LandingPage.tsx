import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
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

function DoctorModel() {
  const { scene } = useGLTF('models/man.glb');
  return <primitive object={scene} scale={2} />;
}

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
        <div style={{ width: 300, height: 300, margin: '24px auto 0 auto' }}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            <Suspense fallback={null}>
              <DoctorModel />
            </Suspense>
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
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