import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { useTexture } from "@react-three/drei";

import { useRef, useState } from "react";
import { Perf } from "r3f-perf";
import {
  Environment,
  useHelper,
  OrbitControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Car } from "./Car";
import { Model } from "./Scene";
import { Revuelto } from "./Revuelto";
import * as THREE from "three";

import "./App.css";

function Stage(props) {
  const floorRef = useRef();
  const textures = useTexture({
    map: "./textures/asphalt_03_diff_1k.jpg",
    normalMap: "./textures/asphalt_03_nor_gl_1k.jpg",
    roughnessMap: "./textures/asphalt_03_rough_1k.jpg",
    aoMap: "./textures/asphalt_03_ao_1k.jpg",
  });

  // const directionalLightRef = useRef();
  // const ambientLight = useRef();

  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
  return (
    <group>
      {/* <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[1, 2, -3]}
        intensity={4}
        shadow-mapSize={[1024, 1024]}
      />
      <ambientLight intensity={2} /> */}
      <Environment files="./environment/empty_warehouse_01_4k.hdr" />
      <mesh receiveShadow ref={floorRef} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry></planeGeometry>
        <MeshReflectorMaterial {...textures} color="black" />
      </mesh>
      <mesh rotation-x={-Math.PI * 0.5} position-y={0.001} scale={2.5}>
        <ringGeometry args={[0.95, 1, 40]}></ringGeometry>
        <meshStandardMaterial
          color="#ffffff"
          emissive="white"
          emissiveIntensity={0.0}
          toneMapped={false}
        />
      </mesh>
      <Suspense>
        {/* <Car /> */}
        <Revuelto />
        {/* <Model /> */}
      </Suspense>
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <Perf position="top-left" />
      <gridHelper />
      <OrbitControls makeDefault />
      <color args={["black"]} attach="background" />
      <Stage></Stage>
    </Canvas>
  );
}

export default App;
