import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import {DeviceOrientationControls} from "three-stdlib";

interface props {
    permissionGranted: boolean;
}

const DeviceOrientationControlsCustom = ({ permissionGranted }: props) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef<DeviceOrientationControls | null>(null);

    useEffect(() => {
        if (permissionGranted) {
            controlsRef.current = new DeviceOrientationControls(camera);

            if (controlsRef.current instanceof DeviceOrientationControls) {
                controlsRef.current.connect();
            }

        } else {
            if (controlsRef.current) {
                if (controlsRef.current instanceof DeviceOrientationControls) {
                    controlsRef.current.dispose();
                }
            }
        }
        return () => {
            if (controlsRef.current) {
                if (controlsRef.current instanceof DeviceOrientationControls) {
                    controlsRef.current.dispose();
                }
            }
        };
    }, [permissionGranted, camera]);

    useEffect(() => {
        const handleResize = () => controlsRef.current && controlsRef.current?.update();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return null;
};

export default DeviceOrientationControls;
