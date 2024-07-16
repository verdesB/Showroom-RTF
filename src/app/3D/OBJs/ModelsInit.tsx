import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from 'three';

interface ModelProps {
    url: string;
    positionX: number;
    positionY: number;
    positionZ: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
    castShadow: boolean;
    receiveShadow: boolean;
    colorMesh: any;
    key: number;
}

export const Model: React.FC<ModelProps> = ({
                                                url,
                                                positionX, positionY, positionZ,
                                                scaleX, scaleY, scaleZ,
                                                rotationX, rotationY, rotationZ,
                                                castShadow, receiveShadow,
                                                colorMesh
                                            }) => {
    const gltf = useGLTF(url);
    const object3D = gltf.scene;
    object3D.castShadow = castShadow;
    object3D.receiveShadow = receiveShadow;

    useEffect(() => {
        const material = new THREE.MeshPhongMaterial({ color: colorMesh, transparent: false });
        material.side = THREE.DoubleSide;

        object3D.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = material;
                (child as THREE.Mesh).castShadow = castShadow;
                (child as THREE.Mesh).receiveShadow = receiveShadow;
                (child as THREE.Mesh).geometry.computeVertexNormals();
            }
        });
    }, [object3D, colorMesh, castShadow]);

    return (
        <primitive
            object={object3D}
            position={[positionX, positionY, positionZ]}
            scale={[scaleX, scaleY, scaleZ]}
            rotation={[rotationX * Math.PI / 180, rotationY * Math.PI / 180, rotationZ * Math.PI / 180]}
        />
    );
};
