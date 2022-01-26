import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Box from '../Box.js';
import Plane from '../Plane.js';
import VideoPlane from '../VideoPlane'
import * as styles from './image-sway.module.css';
import { useSpring, a } from '@react-spring/three';


function ImageSway () {
	let CAMERA_START;
	useEffect(() => {	
		CAMERA_START = window.innerHeight * 2 || 0;
	}, []);
	const canvas = useRef();
	return (
		<Canvas className={styles.canvas} camera={{ position: [0,0,CAMERA_START]}} ref={canvas}>
			<Camera startPos={CAMERA_START} />
			<Suspense fallback={null}>
				{/*<ambientLight color={'#000'}/>*/}
				{/* <pointLight position={[0, 0, 20]} color={'#dddddd'} intensity={0.1}/> */}
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

function Camera(props) {
	if(!window) return;
	const { startPos } = props;

	const handleScroll = (e, camera) => {
		camera.position.z = (startPos - (window?.scrollY )) / 20;
		if (camera.position.z < -26) camera.position.z = -26;
	}

	const { camera } = useThree();
	useEffect(() => {
		window?.addEventListener('scroll', (e) => handleScroll(e, camera));

		return function cleanup () {
			window?.removeEventListener('scroll', (e) => handleScroll(e, camera));
		};
	}, []);
	return null
}

export default ImageSway;