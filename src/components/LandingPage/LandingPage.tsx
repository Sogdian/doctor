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


export const LandingPage: React.FC = () => {
  return (
    <div>
      <Canva />
    </div>
  )
};

export default LandingPage; 