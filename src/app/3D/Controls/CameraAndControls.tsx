//@ts-nocheck
import {useFrame, useThree} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import {PointerLockControls} from "@react-three/drei";
import {Vector3, Box3} from "three";
import {createControlsOptions} from "@/app/3D/Controls/ControlsOptions";
interface ControlProps {
    isClicked: boolean;
    controlsLocked: boolean;
}
export const CameraAndControls = ({isClicked , controlsLocked}: ControlProps) => {
    const { camera, gl } = useThree();

    const controlsRef = useRef<PointerLockControls >(null);

    const prevTimeRef = useRef(performance.now());
    const lastValidPosition = useRef(new Vector3());
    const moveForward = useRef(false);
    const moveBackward = useRef(false);
    const moveLeft = useRef(false);
    const moveRight = useRef(false);

    const { onKeyDown, onKeyUp, velocity, direction, speed } = createControlsOptions(moveRight, moveForward, moveBackward, moveLeft);

    const floorWidth = 38;
    const floorDepth = 100.5;
    const floorMargin = -2;

    const boundaryBox = new Box3(
        new Vector3(-floorWidth / 2 - floorMargin, 0, -floorDepth / 2 - floorMargin),
        new Vector3(floorWidth / 2 + floorMargin, 20, floorDepth / 2 + floorMargin)
    );

    function isInsideBoundary(position) {
        return boundaryBox.containsPoint(position);
    }

    useEffect(() => {
        if (lastValidPosition.current.equals(new Vector3())) {
            lastValidPosition.current.copy(camera.position);
        } else {
            camera.position.copy(lastValidPosition.current);
        }

        camera.updateProjectionMatrix();
        gl.setClearColor('#ffffff');
        lastValidPosition.current.copy(camera.position); // Initial position as the last valid position
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        };
    }, [camera, gl, onKeyDown, onKeyUp]);

    useFrame(() => {
        if (controlsRef.current && controlsRef.current.isLocked) {
            const time = performance.now();
            const delta = (time - prevTimeRef.current) / 1000;
            prevTimeRef.current = time;

            velocity.x -= velocity.x * 5.0 * delta;
            velocity.z -= velocity.z * 5.0 * delta;

            direction.z = Number(moveForward.current) - Number(moveBackward.current);
            direction.x = Number(moveRight.current) - Number(moveLeft.current);
            direction.normalize();

            console.log('Direction:', direction);
            console.log('Velocity:', velocity);

            if (moveForward.current || moveBackward.current) velocity.z -= direction.z * speed * delta;
            if (moveLeft.current || moveRight.current) velocity.x -= direction.x * speed * delta;

            console.log('Updated Velocity:', velocity);

            const potentialPosition = camera.position.clone().add(velocity.clone().multiplyScalar(delta));
            console.log('Potential Position:', potentialPosition);


            if (isInsideBoundary(potentialPosition)) {
                // Appliquer le mouvement et mettre à jour la dernière position valide
                controlsRef.current.moveRight(-velocity.x * delta);
                controlsRef.current.moveForward(-velocity.z * delta);
                lastValidPosition.current.copy(camera.position);
            } else {
                velocity.set(0, 0, 0);
                // Remettre la caméra à la dernière position valide
                camera.position.copy(lastValidPosition.current);
            }
        }
    });

    useEffect(() => {
        if (controlsRef.current) {
            if (isClicked && controlsLocked) {
                controlsRef.current.lock();
            } else {
                controlsRef.current.unlock();
            }
        }
    }, [isClicked, controlsLocked]);

    return <PointerLockControls ref={controlsRef} args={[camera, gl.domElement]} />;
};
