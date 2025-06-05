import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './LandingPage.module.less';

const DoctorModel = () => {
  const { scene } = useGLTF('models/man.glb');
  return <primitive object={scene} scale={2} />;
};

const Canva = () => {
  return (
  <div
          className="background-3d"
          style={{ width: 300, height: 300, margin: '24px auto 0 auto' }}
          >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <DoctorModel />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  )
};

import mainImg from '../../assets/main-kid.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';

export const LandingPage: React.FC = () => {
  return (
    <div className="pediatric-landing">
      <div className="pediatric-grid">
        <div className="pediatric-main-card">
          <h1 className="pediatric-title">Comprehensive<br />Pediatric<br />Solutions</h1>
          <p className="pediatric-desc">
            Specialized care for children's health, offering personalized treatment with compassion and expertise in a welcoming environment in Belgrade.
          </p>
          <button className="pediatric-btn">Book a Visit</button>
        </div>
        <div className="pediatric-main-img">
          <img src={mainImg} alt="Main kid doctor" />
        </div>
        <div className="pediatric-card pediatric-card1">
          <img src={card1} alt="Kid doctor 1" />
        </div>
        <div className="pediatric-card pediatric-card2">
          <img src={card2} alt="Kid doctor 2" />
        </div>
      </div>
      <Canva />
    </div>
  );
};

export default LandingPage; 