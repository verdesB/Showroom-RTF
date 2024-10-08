import { useRef } from "react";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface InteractiveBoxProps {
    handleBoxClick: () => void;
}

export const InteractiveBox: React.FC<InteractiveBoxProps> = ({ handleBoxClick }) => {
    const [ref] = useBox(() => ({ mass: 1, position: [16, 1, -43] }));
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.001;
            meshRef.current.rotation.y += 0.001;
        }
    });

    const handleClick = () => {
        console.log("Box clicked");
        handleBoxClick();
    };

    return (
        <mesh
            ref={meshRef}
            onClick={handleClick}
            position={[15, 1, -49]}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
};
