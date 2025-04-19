
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const GlobeObject = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <>
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('/earth-texture.jpg')}
          bumpMap={new THREE.TextureLoader().load('/earth-bump.jpg')}
          bumpScale={0.15}
          specularMap={new THREE.TextureLoader().load('/earth-specular.jpg')}
          specular={new THREE.Color(0x444444)}
          shininess={15}
        />
      </Sphere>
      <Sphere ref={atmosphereRef} args={[2.1, 64, 64]}>
        <meshPhongMaterial
          transparent
          opacity={0.2}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          color={0x0EA5E9}
        />
      </Sphere>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color={0x0EA5E9} />
    </>
  );
};

const Globe3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true }}
        className="w-full h-full"
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
        <GlobeObject />
      </Canvas>
    </div>
  );
};

export default Globe3D;
