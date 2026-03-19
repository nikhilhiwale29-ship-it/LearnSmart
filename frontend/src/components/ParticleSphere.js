import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function InteractiveSphere() {
  const ref = useRef();
  const { mouse, viewport, clock, camera } = useThree();

  const particleCount = 8000;
  const radius = 3;

  const { positions, directions, offsets } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const dirs = [];
    const rand = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      dirs.push(new THREE.Vector3(x, y, z));
      pos.set([x * radius, y * radius, z * radius], i * 3);

      rand[i] = Math.random() * 100;
    }

    return { positions: pos, directions: dirs, offsets: rand };
  }, []);

  useFrame(() => {
    const time = clock.getElapsedTime();
    const array = ref.current.geometry.attributes.position.array;

    // 🎥 Cinematic camera float
    camera.position.x = Math.sin(time * 0.2) * 0.3;
    camera.position.y = Math.cos(time * 0.2) * 0.2;
    camera.lookAt(0, 0, 0);

    // Convert mouse to world-ish space
    const mouseX = mouse.x * viewport.width * 0.5;
    const mouseY = mouse.y * viewport.height * 0.5;

    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      const dir = directions[i];

      // 🌊 Smooth breathing (perfect sphere)
      const breathe =
        Math.sin(time * 0.6 + offsets[i]) * 0.08;

      let targetX = dir.x * (radius + breathe);
      let targetY = dir.y * (radius + breathe);
      let targetZ = dir.z * (radius + breathe);

      // 🖱 Strong smooth repel
      const dx = array[ix] - mouseX;
      const dy = array[iy] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 1.2) {
        const force = (1.2 - dist) * 0.15;
        targetX += dx * force;
        targetY += dy * force;
      }

      // ✨ Exponential smoothing (super smooth)
      array[ix] += (targetX - array[ix]) * 0.05;
      array[iy] += (targetY - array[iy]) * 0.05;
      array[iz] += (targetZ - array[iz]) * 0.05;
    }

    ref.current.rotation.y += 0.0008;
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
      <ambientLight intensity={0.7} />

      <InteractiveSphere />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          intensity={1.6}
        />
      </EffectComposer>
    </Canvas>
  );
}
