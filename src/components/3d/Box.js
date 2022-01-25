import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Box() {
	const mesh = useRef();
	useFrame((state, delta) => mesh.current.rotation.x += delta);
	return (
		<mesh ref={mesh}>
			<boxGeometry args={[1,1,1]}/>
			<meshStandardMaterial color={'hotpink'} />
		</mesh>
	);
}

export default Box;