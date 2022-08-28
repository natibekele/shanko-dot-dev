import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Plane from '../Plane.js';
// import VideoPlane from '../VideoPlane'
import * as styles from './image-sway.module.css';


function ImageSway () {
	const isBrowser = typeof window !== 'undefined';
	const CAMERA_START = isBrowser ? window.innerHeight * 2 : 0;
	const canvas = useRef();
	return (
		<Canvas className={styles.canvas} camera={{ position: [0,0,CAMERA_START]}} ref={canvas}>
			<Camera startPos={CAMERA_START} />
			<Suspense fallback={null}>
				{/*<ambientLight color={'#000'}/>*/}
				{/* <pointLight position={[0, 0, 20]} color={'#dddddd'} intensity={0.1}/> */}
				
				<Plane position={[ 0, 0, 0]} src={'/SAN_FRAN.jpg'}/>
				<Plane position={[ -2, 0, -5]} src={'/sub-frame.jpg'}/>
				<Plane position={[ 2, 0, -10]} src={'/float.jpg'}/>
				<Plane position={[ -2, 0, -15]} src={'/woman-lines.jpg'}/>
				<Plane position={[ 2, 0, -20]} src={'/DELOREAN.jpg'}/>
				<Plane position={[ -2, 0, -25]} src={'/DONDA.jpg'}/>
				<Plane position={[ 2, 0, -30]} src={'/MIAMI.jpg'}/>
				<Plane position={[ -2, 0, -35]} src={'/LA-1.jpg'}/>
				<Plane position={[ 2, 0, -40]} src={'/MIRRORS.jpg'}/>
				<Plane position={[ -2, 0, -45]} src={'/PR.jpg'}/>
				<Plane position={[ 2, 0, -50]} src={'/NY.jpg'}/>
				
				{/* TODO <VideoPlane position={[0, 0, -30]}/> */}
			</Suspense>
		</Canvas>
	)
}

function Camera(props) {
	const { startPos } = props;

	const handleScroll = (e, camera) => {
		camera.position.z = (startPos - (window.scrollY )) / 20;
		if (camera.position.z < -45) camera.position.z = -45;
	}

	const { camera } = useThree();
	useEffect(() => {
		window.addEventListener('scroll', (e) => handleScroll(e, camera));

		return function cleanup () {
			window.removeEventListener('scroll', (e) => handleScroll(e, camera));
		};
	}, []);
	return null
}

export default ImageSway;