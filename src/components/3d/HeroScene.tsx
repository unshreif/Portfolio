'use client';

import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} ref={sphereRef}>
      <MeshDistortMaterial 
        color="#8352FD"
        attach="material" 
        distort={0.5} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export default function HeroScene() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Add state to track if component is mounted (client-side)
  const [isMounted, setIsMounted] = useState(false);

  // Only render Three.js content on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const canvasVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] } }
  };

  // Return a placeholder with the same dimensions during server rendering
  if (!isMounted) {
    return (
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black" />
    );
  }

  return (
    <motion.div 
      ref={ref}
      className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={canvasVariants}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8352FD" />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </motion.div>
  );
}