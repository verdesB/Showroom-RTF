import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
interface CameraUpdaterProps {
    isSecondFloor: boolean,
}
const CameraUpdater = ({ isSecondFloor } : CameraUpdaterProps) => {
    const { camera } = useThree();

    useEffect(() => {
        if (isSecondFloor) {
            camera.position.set(15.3, 17, -48); // Met à jour la position de la caméra
        } else {
            camera.position.set(15.3, 4, -48)
        }
    }, [isSecondFloor, camera]);

    return null;
};

export default CameraUpdater;
