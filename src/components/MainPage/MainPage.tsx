import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './MainPage.module.less';
import mainImg from '../../assets/main-kid.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import {ModelBb8} from "../Model1";

const Canva = () => {
  return (
    <div className="background-3d">
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={4} />
        <Suspense fallback={null}>
          {/* <Model1 /> */}
          <ModelBb8 />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
};

export const MainPage: React.FC = () => {
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