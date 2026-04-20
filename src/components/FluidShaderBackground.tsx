"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uIsDark;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;

  for (int i = 0; i < 6; i++) {
    value += amp * noise(p);
    p *= 2.02;
    amp *= 0.52;
  }

  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);

  vec2 p = (uv - 0.5) * aspect;
  vec2 mouse = (uMouse - 0.5) * aspect;

  float t = uTime * mix(0.17, 0.13, uIsDark);
  vec2 flow = vec2(
    fbm(p * 1.8 + vec2(t, -t * 0.7)),
    fbm(p * 1.8 + vec2(-t * 0.5, t))
  );

  vec2 warped = p + (flow - 0.5) * 0.75;
  float mouseField = exp(-4.5 * length(warped - mouse));

  float layerA = fbm(warped * 1.6 + vec2(t * 0.9, -t * 0.5));
  float layerB = fbm(warped * 2.4 - vec2(t * 0.7, t * 0.35));
  float layerC = fbm((warped + mouse * 0.35) * 3.1 + vec2(-t * 0.45, t * 0.65));

  vec3 base = mix(uColorB, uColorA, smoothstep(0.26, 0.84, layerA));
  base = mix(base, uColorC, smoothstep(0.35, 0.92, layerB) * mix(0.84, 0.55, uIsDark));
  base += uColorA * layerC * mix(0.38, 0.22, uIsDark);
  base += uColorA * mouseField * mix(0.34, 0.2, uIsDark);

  float edge = smoothstep(0.55, 0.9, layerB);
  base = mix(base, uColorC, edge * mix(0.34, 0.08, uIsDark));

  float alpha = mix(0.9, 0.56, uIsDark);
  gl_FragColor = vec4(base, alpha);
}
`;

function FluidPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const smoothMouse = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uColorA: { value: new THREE.Color("#e4b600") },
      uColorB: { value: new THREE.Color("#ecebd2") },
      uColorC: { value: new THREE.Color("#0d0d0d") },
      uIsDark: { value: 0 },
    }),
    []
  );

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

  useEffect(() => {
    const updateThemeColors = () => {
      const root = getComputedStyle(document.documentElement);
      const isDark = document.documentElement.classList.contains("dark");
      const yellow = root.getPropertyValue("--brand-yellow").trim() || "#e4b600";
      const bg2 = root.getPropertyValue("--brand-bg2").trim() || "#ecebd2";
      const black = root.getPropertyValue("--brand-black").trim() || "#0d0d0d";

      uniforms.uColorA.value.set(yellow);
      uniforms.uColorB.value.set(bg2);
      uniforms.uColorC.value.set(black);
      uniforms.uIsDark.value = isDark ? 1 : 0;

      if (!isDark) {
        uniforms.uColorA.value.lerp(new THREE.Color("#b88400"), 0.4);
        uniforms.uColorB.value.lerp(new THREE.Color("#f7f5e7"), 0.5);
        uniforms.uColorB.value.lerp(uniforms.uColorC.value, 0.22);
        uniforms.uColorC.value.lerp(new THREE.Color("#1a1711"), 0.36);
      }
    };

    updateThemeColors();
    const observer = new MutationObserver(updateThemeColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, [uniforms]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      targetMouse.current.set(
        event.clientX / Math.max(window.innerWidth, 1),
        1 - event.clientY / Math.max(window.innerHeight, 1)
      );
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_state, delta) => {
    if (!materialRef.current) return;

    uniforms.uTime.value += delta;
    smoothMouse.current.lerp(targetMouse.current, 1 - Math.exp(-delta * 4.2));
    uniforms.uMouse.value.copy(smoothMouse.current);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        transparent
        depthWrite={false}
        depthTest={false}
        toneMapped={false}
      />
    </mesh>
  );
}

export function FluidShaderBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 1.8]}>
        <FluidPlane />
      </Canvas>
    </div>
  );
}
