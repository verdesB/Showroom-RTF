import {useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import {TextureLoader} from "three";

interface PaintingProps {
    painting: {
        id: number,
        url: string,
        positionX: number,
        positionY: number,
        positionZ: number,
        scaleX: number,
        scaleY: number,
        scaleZ: number,
        rotationX: number,
    },
    key?: unknown,
}

export const Painting = ({painting, key, }: PaintingProps) => {
    //@ts-ignore
    const texture = useLoader(TextureLoader, painting.url);
    const typedTexture = texture as THREE.Texture;
    typedTexture.needsUpdate = true;
    typedTexture.colorSpace = "srgb";
    typedTexture.generateMipmaps = true;
    const width = typedTexture.image.width / 100;
    const height = typedTexture.image.height / 100;

    const material = new THREE.MeshPhongMaterial({map: typedTexture});

    const position = new THREE.Vector3(painting.positionX, painting.positionY, painting.positionZ);
    // Assurez-vous de convertir les degrés en radians si nécessaire
    const rotationY = painting.rotationX * Math.PI / 180;

    const scaleX = painting.scaleX;
    const scaleY = painting.scaleY;
    const scaleZ = painting.scaleZ;

    return (
        <mesh key={painting.id} material={material} position={position} rotation={[0, rotationY, 0]}
              scale={[scaleX, scaleY, scaleZ]}>
            <boxGeometry attach="geometry" args={[width, height, 0.2]}/>
            {/* Votre contenu 3D ici */}
        </mesh>
    );
};
