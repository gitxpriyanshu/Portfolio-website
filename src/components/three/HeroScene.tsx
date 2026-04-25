import React, { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useInView } from '@/hooks/useInView';

/**
 * 3D Particle Field
 * Optimized for frame rate and visibility.
 */
const ParticleField = ({ count = 180, isVisible }: { count?: number; isVisible: boolean }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return [pos];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !isVisible) return;
    
    // Performance: Frame rate cap logic (approx 60fps)
    if (delta > 0.1) return; // Ignore large jumps (tab switching)

    pointsRef.current.rotation.y += 0.05 * delta;
    const targetX = state.mouse.x * 0.5;
    const targetY = state.mouse.y * 0.5;
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, targetX, 0.02);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetY, 0.02);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

/**
 * The Central Polyhedron
 */
const RotatingGeometry = ({ isVisible }: { isVisible: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (!meshRef.current || !isVisible) return;
    
    // Performance: Scale rotation by delta to maintain constant speed regardless of FPS
    meshRef.current.rotation.y += 0.2 * delta;
    meshRef.current.rotation.x += 0.1 * delta;

    const targetRotationX = -state.mouse.y * 0.1;
    const targetRotationY = state.mouse.x * 0.1;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05);
  });

  return (
    <Icosahedron ref={meshRef} args={[1.8, 1]}>
      <meshStandardMaterial
        color="#e8d5b7"
        wireframe
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
      />
    </Icosahedron>
  );
};

/**
 * HeroScene Component
 * Optimized for rendering efficiency and browser performance.
 */
const HeroScene = React.memo(() => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [containerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: false });
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    // Performance: Track tab visibility to pause expensive 3D rendering
    const handleVisibility = () => setIsTabVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const shouldRender = inView && isTabVisible;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ 
            alpha: true, 
            antialias: true,
            powerPreference: 'high-performance'
          }}
          dpr={[1, 2]}
          onCreated={({ gl }) => {
            // Performance: Proper cleanup of GPU resources
            return () => {
              gl.dispose();
              gl.forceContextLoss();
            };
          }}
        >
          <ambientLight intensity={0.1} color="#ffffff" />
          <pointLight position={[2, 3, 4]} intensity={0.8} color="#e8d5b7" />
          <pointLight position={[-3, -2, 2]} intensity={0.3} color="#4a90e2" />

          <RotatingGeometry isVisible={shouldRender} />
          {!isMobile && <ParticleField isVisible={shouldRender} />}
        </Canvas>
      </Suspense>
    </div>
  );
});

HeroScene.displayName = 'HeroScene';
export default HeroScene;
