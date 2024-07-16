import { Canvas, useThree } from "@react-three/fiber";
import {Suspense, useEffect, useRef, useState} from "react";
import { AmbientLight } from "@/app/3D/Lights/AmbientLight";
import { EastLight } from "@/app/3D/Lights/EastLight";
import { WestLight } from "@/app/3D/Lights/WestLight";
import Floor from "@/app/3D/Environment/Floor";
import { OBJs } from "@/app/3D/OBJs/dataModels";
import { Model } from "@/app/3D/OBJs/ModelsInit";
import { PointerLockControls } from "@react-three/drei";
import {CameraAndControls} from "@/app/3D/Controls/CameraAndControls";
import {WestLight2} from "@/app/3D/Lights/WestLight2";

interface SceneBottomDesktopProps {
    helpersDesktop: JSX.Element;
    isClicked: boolean;
}

export const SceneBottomDesktop: React.FC<SceneBottomDesktopProps> = ({ helpersDesktop, isClicked }) => {
    const [controlsLocked, setControlsLocked] = useState(false);
    const models = OBJs;
    console.log('scene desktop');
    const handleSceneClick = () => {
        if (isClicked) {
            setControlsLocked(true);
        }
    };




    return (
        <div style={{ width: '100%', height: '100%' }} onClick={handleSceneClick}>
            <Canvas shadows={true} color='#ffffff' style={{pointerEvents: 'none'}} camera={{ fov: 60, position: [15.3, 4, -48],  }} >
                <Suspense fallback={null}>
                    <AmbientLight />
                    <EastLight />
                    <WestLight />
                    <WestLight2 />
                    <Floor />
                    {models.map((model) => (
                        <Model key={model.id} {...model} />
                    ))}
                    {isClicked && <CameraAndControls isClicked={isClicked} controlsLocked={controlsLocked}/> }
                </Suspense>
            </Canvas>
        </div>
    );
};