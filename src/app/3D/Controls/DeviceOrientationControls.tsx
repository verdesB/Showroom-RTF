import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import {DeviceOrientationControls} from "three-stdlib";


interface DeviceOrientationControlsProps {
    permissionGranted: boolean;
    // autres props...
}

export const DeviceOrientationControlsCustom: React.FC<DeviceOrientationControlsProps> = ({ permissionGranted }) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef<DeviceOrientationControls | null>(null);

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

    // Renvoyer null car DeviceOrientationControls n'est pas un composant React
    return null;
};


export default DeviceOrientationControls;
