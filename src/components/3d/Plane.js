import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function Plane(props) {
	const texture = useLoader(TextureLoader, props.src || '/stairs.jpg');

	const mesh = useRef();
	// useFrame((state, delta) => mesh.current.rotation.x += delta);
	return (
		<mesh ref={mesh} {...props} >
			<planeGeometry args={[3,3]}/>
			<meshBasicMaterial map={texture}/>
		</mesh>
	);
}

export default Plane;