import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
interface Props {
  moveDirectionRef:  React.RefObject<string | null>;
}
const CameraMovementControls = ({ moveDirectionRef }:Props) => {
    const { camera } = useThree();
    const speed = 5;
    const prevTime = useRef(performance.now());
    const velocity = useRef(new THREE.Vector3());

    useFrame(() => {
        const delta = (performance.now() - prevTime.current) / 1000;
        prevTime.current = performance.now();

        velocity.current.x -= velocity.current.x * 5.0 * delta;
        velocity.current.z -= velocity.current.z * 5.0 * delta;

        const moveDirection = moveDirectionRef.current;
        if (moveDirection) {
            const dir = new THREE.Vector3();
            camera.getWorldDirection(dir);
            dir.y = 0;
            dir.normalize();

            switch (moveDirection) {
                case 'up':
                    camera.position.addScaledVector(dir, speed * delta);
                    break;
                case 'down':
                    camera.position.addScaledVector(dir, -speed * delta);
                    break;
                case 'left':
                    dir.cross(camera.up).normalize();
                    camera.position.addScaledVector(dir, -speed * delta);
                    break;
                case 'right':
                    dir.cross(camera.up).normalize();
                    camera.position.addScaledVector(dir, speed * delta);
                    break;
                default:
                    break;
            }
        }
    });

    return null;
};

export default CameraMovementControls;
