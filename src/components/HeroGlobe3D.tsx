"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.45;
    ref.current.rotation.x += delta * 0.15;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.7} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.05, 128, 128]} scale={1.1}>
        <MeshDistortMaterial
          color="#e4b600"
          roughness={0.18}
          metalness={0.45}
          distort={0.35}
          speed={1.4}
          emissive="#8a6f00"
          emissiveIntensity={0.45}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroGlobe3D() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(228,182,0,0.2),rgba(13,13,13,0.78))]">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 48 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} intensity={1.2} color="#ffd76a" />
        <directionalLight position={[-2, -1, -2]} intensity={0.45} color="#ecebd2" />
        <Stars radius={25} depth={25} count={450} factor={3} saturation={0} fade speed={0.35} />
        <Orb />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/50 to-transparent" />
    </div>
  );
}