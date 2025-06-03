import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Header } from './components/Header/Header';

function Model() {
  const { scene } = useGLTF('/models/shoes_test_1-v1.glb');
  return <primitive object={scene} scale={2} />;
}

const App: React.FC = () => (
  <div>
    <Header />
    <h1>Детский доктор Анна Иванова!</h1>
    <div style={{ width: 400, height: 400, margin: '0 auto' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  </div>
);

export default App; 