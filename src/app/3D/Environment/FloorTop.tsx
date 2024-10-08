import React from 'react';
import { useLoader, extend } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

// Étendre PlaneGeometry pour être utilisé dans react-three-fiber
extend({ PlaneGeometry: THREE.PlaneGeometry });

function FloorTop() {
    // Charger la texture
    //@ts-ignore
    const texture = useLoader(TextureLoader, './textures/floorTexture3.jpg'); // Remplacez par le chemin de votre texture

    const material = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
        color: 0xffffff,
        transparent: true,
        shininess: 30,
        specular: 0x222222,
        reflectivity: 0.8,
    });

    const floorWidth = 21;
    const floorDepth = 100.5;

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[7.5, 13.9, 0]} receiveShadow={true} >
            <planeGeometry attach="geometry" args={[floorWidth, floorDepth]} />
            <meshPhongMaterial attach="material" {...material} />
        </mesh>
    );
}

export default FloorTop;
