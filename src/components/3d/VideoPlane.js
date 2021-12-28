import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


function VideoPlane(props) {
	const [texture, setTexture] = useState(null);

	useEffect(() => {
		let video = document.getElementById('video');
		let _texture = new THREE.VideoTexture(video) ;
		setTexture(_texture);

		video.play();
	},[]);
	return (
		texture ? 
		<mesh {...props}>
			<planeGeometry args={[8,4.5]}/>
			<meshLambertMaterial map={texture}/>
		</mesh>

		: null
	);
}

export default VideoPlane;