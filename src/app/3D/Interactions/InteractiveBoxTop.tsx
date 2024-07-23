import { useRef } from "react";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface InteractiveBoxTopProps {
    handleBoxClick: () => void;
}

export const InteractiveBoxTop: React.FC<InteractiveBoxTopProps> = ({ handleBoxClick }) => {
    const [ref] = useBox(() => ({ mass: 1, position: [16, 1, -43] }));
    const meshRef2 = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef2.current) {
            meshRef2.current.rotation.x += 0.001;
            meshRef2.current.rotation.y += 0.001;
        }
    });

    const handleClick = () => {
        console.log("Box clicked");
        handleBoxClick();
    };

    return (
        <mesh
            ref={meshRef2}
            onClick={handleClick}
            position={[15, 17, -49]}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
};
