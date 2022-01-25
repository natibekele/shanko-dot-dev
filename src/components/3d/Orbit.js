import React, { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls } from 'three/examples/js/controls/OrbitControls';

function Orbit() {
	const { camera, gl } = useThree();
	useEffect(() => {
		// const controls = new OrbitControls(camera, gl.domElement);
		// controls.minDistance = 2;
		// controls.maxDistance = 30;
		// return() => {
		// 	controls.dispose();
		// };
	}, [camera, gl]);
	return null;
}

export default Orbit;