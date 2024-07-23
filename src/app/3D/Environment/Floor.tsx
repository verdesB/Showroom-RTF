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
        shininess: 30,
        specular: 0x222222,

        clearCoat:5 ,// Ajoute un effet de finition brillante
        clearCoatRoughness: 0, // Rend la finition complètement lisse
        reflectivity: 1 ,// Haut niveau de réflexion
        // Faible rugosité pour un effet de surface lisse
        metalness: 0,// Aucun effet métallique



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
