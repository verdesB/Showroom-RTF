import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { DeviceOrientationControls } from 'three-stdlib';
import * as THREE from 'three';

interface UnifiedCameraControlsProps {
    permissionGranted: boolean;
    moveDirectionRef: React.RefObject<string | null>;
}

const UnifiedCameraControls = ({ permissionGranted, moveDirectionRef }: UnifiedCameraControlsProps) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef<DeviceOrientationControls | null>(null);
    const prevTime = useRef(performance.now());
    const velocity = useRef(new THREE.Vector3());
    const speed = 5;

    useEffect(() => {
        if (permissionGranted) {
            controlsRef.current = new DeviceOrientationControls(camera);
            if (controlsRef.current instanceof DeviceOrientationControls) {
                controlsRef.current.connect();
            }
        } else {
            controlsRef.current?.dispose();
            controlsRef.current = null;
        }
        return () => {
            controlsRef.current?.dispose();
        };
    }, [permissionGranted, camera]);

    useEffect(() => {
        const handleResize = () => controlsRef.current?.update();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

export default UnifiedCameraControls;
