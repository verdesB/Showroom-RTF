import React from 'react';
import { useLoader, extend } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

// Étendre PlaneGeometry pour être utilisé dans react-three-fiber
extend({ PlaneGeometry: THREE.PlaneGeometry });

function Floor() {
    // Charger la texture
    //@ts-ignore
    const texture = useLoader(TextureLoader, './textures/floorTexture3.jpg'); // Remplacez par le chemin de votre texture

    const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        side: THREE.DoubleSide,
        color: 0xffffff,
        transparent: true,
    });

    const floorWidth = 38;
    const floorDepth = 100.5;

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow={true} >
            <planeGeometry attach="geometry" args={[floorWidth, floorDepth]} />
            <meshStandardMaterial attach="material" {...material} />
        </mesh>
    );
}

export default Floor;
