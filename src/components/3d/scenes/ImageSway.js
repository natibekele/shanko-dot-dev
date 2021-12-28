import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Box from '../Box.js';
import Plane from '../Plane.js';
import VideoPlane from '../VideoPlane'
import * as styles from './image-sway.module.css';
import { useSpring, a } from '@react-spring/three';


function ImageSway () {
	const canvas = useRef(); 
	return (
		<Canvas className={styles.canvas} camera={{ position: [0,0,20]}} ref={canvas}>
			<Camera />
			<Suspense fallback={null}>
				{/*<ambientLight color={'#000'}/>*/}
				<pointLight position={[0, 0, 20]} color={'#fff'} intensity={0.3}/>
				<Plane position={[ 0, 0, 0]}/>
				<Plane position={[ -2, 0, -5]} src={'/sub-frame.jpg'}/>
				<Plane position={[ 2, 0, -10]} src={'/float.jpg'}/>
				<Plane position={[ -2, 0, -15]} src={'/woman-lines.jpg'}/>
				<Plane position={[ 2, 0, -20]} src={'/triangle.jpg'}/>
				<Plane position={[ -2, 0, -25]} src={'/mountain.jpg'}/>
				<VideoPlane position={[0, 0, -30]}/>
			</Suspense>
		</Canvas>
	)
}

function Camera() {
	// const pZ = x.to([0, 1], [-1.2, 1.2]);

	const handleScroll = (e, camera) => {
		if ((window.innerHeight + window.pageYOffset + 100) >= document.body.offsetHeight) {

			// startAnimation();
			if (camera.position.z > -26) {
				camera.position.z -= e.deltaY/100;
			}
		}
		if (window.pageYOffset === 0) {
			camera.position.z = 20;	
		}
	}

	const { camera } = useThree();
	useEffect(() => {
		document.addEventListener('wheel', (e) => handleScroll(e, camera));

		return function cleanup () {
			document.removeEventListener('wheel', (e) => handleScroll(e, camera));
		};
	}, []);
	return null
}

export default ImageSway;


// import React, { useState, useEffect, useCallback, Suspense } from "react"
// import { Canvas } from "@react-three/fiber"
// import { useGLTF, useTexture, Shadow, meshBounds } from "@react-three/drei"
// // We take the "a" element from /three here because we want to animate threejs objects
// import { a } from "@react-spring/three"

// function Switch({ x, set }) {
//   const { nodes, materials } = useGLTF("/switch.glb")
//   const texture = useTexture("/cross.jpg")
//   // Hover state
//   const [hovered, setHover] = useState(false)
//   useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
//   // Events
//   const onClick = useCallback(() => set((toggle) => Number(!toggle)), [set])
//   const onPointerOver = useCallback(() => setHover(true), [])
//   const onPointerOut = useCallback(() => setHover(false), [])
//   // Interpolations
//   const pZ = x.to([0, 1], [-1.2, 1.2])
//   const rX = x.to([0, 1], [0, Math.PI * 1.3])
//   const color = x.to([0, 1], ["#888", "#2a2a2a"])
//   return (
//     <group scale={[1.25, 1.25, 1.25]} dispose={null}>
//       <a.mesh receiveShadow castShadow material={materials.track} geometry={nodes.Cube.geometry} material-color={color} material-roughness={0.5} material-metalness={0.8} />
//       <a.group position-y={0.85} position-z={pZ}>
//         <a.mesh receiveShadow castShadow raycast={meshBounds} rotation-x={rX} onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
//           <sphereGeometry args={[0.8, 64, 64]} />
//           <a.meshStandardMaterial roughness={0.5} map={texture} />
//         </a.mesh>
//         <a.pointLight intensity={100} distance={1.4} color={color} />
//         <Shadow renderOrder={-1000} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]} />
//       </a.group>
//     </group>
//   )
// }

// export function Scene({ x, set }) {
//   // Create a color interpolation
//   const color = x.to([0, 1], ["#7fffd4", "#c72f46"])
//   return (
//     <Canvas shadows dpr={[1, 2]} camera={{ position: [-10, 10, 10], fov: 35 }}>
//       <ambientLight intensity={0.1} />
//       <directionalLight position={[-20, 20, 20]} intensity={1} />
//       <a.directionalLight position={[-20, -20, -20]} intensity={0.5} color={color} />
//       <a.pointLight position={[0, 0, 5]} distance={5} intensity={5} color={color} />
//       <a.spotLight color={color} position={[10, 20, 20]} angle={0.1} intensity={2} shadow-mapSize-width={2048} shadow-mapSize-height={2048} shadow-bias={-0.00001} castShadow />
//       <Suspense fallback={null}>
//         <Switch x={x} set={set} />
//       </Suspense>
//       <mesh receiveShadow renderOrder={1000} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//         <planeGeometry args={[10, 10]} />
//         <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
//       </mesh>
//     </Canvas>
//   )
// }
