"use client"
import {Vector3} from "three";
import {useRef} from "react";
// @ts-ignore
export const createControlsOptions = (moveRight: React.MutableRefObject<boolean>, moveForward: React.MutableRefObject<boolean>, moveBackward: React.MutableRefObject<boolean>, moveLeft: React.MutableRefObject<boolean>) => {

    const velocity = new Vector3();
    const direction = new Vector3();
    const speed = 40 ;



    // @ts-ignore
    const onKeyDown = (event) => {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                moveForward.current = true;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                moveLeft.current = true;
                break;
            case 'ArrowDown':
            case 'KeyS':
                moveBackward.current = true;
                break;
            case 'ArrowRight':
            case 'KeyD':
                moveRight.current = true;
                break;
        }
        return {moveForward, moveBackward, moveLeft, moveRight};
    };

    // @ts-ignore
    const onKeyUp = (event) => {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                moveForward.current = false;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                moveLeft.current = false;
                break;
            case 'ArrowDown':
            case 'KeyS':
                moveBackward.current = false;
                break;
            case 'ArrowRight':
            case 'KeyD':
                moveRight.current = false;
                break;
        }
        return {moveForward, moveBackward, moveLeft, moveRight};
    };

    return {onKeyDown, onKeyUp, velocity, direction, speed};
}