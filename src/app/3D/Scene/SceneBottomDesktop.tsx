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
import {Painting} from "@/app/3D/OBJs/Paintings/PaintingsInit";
import {Gallery} from "@/app/3D/OBJs/Paintings/paintingsData";
import {InteractiveBox} from "@/app/3D/Interactions/InteractiveBox";
import {Physics} from "@react-three/cannon";
//@ts-nocheck
interface SceneBottomDesktopProps {
    helpers: JSX.Element;
    isClicked: boolean;
    selectedGallery?: Gallery
    handleBoxClick?: any
    showPopup: boolean

}

export const SceneBottomDesktop: React.FC<SceneBottomDesktopProps> = ({ helpers, isClicked, selectedGallery, handleBoxClick, showPopup }) => {
    const [controlsLocked, setControlsLocked] = useState(false);
    const models = OBJs;
    const canvasRef = useRef<HTMLCanvasElement>(null);



    console.log('scene desktop');
    const handleSceneClick = () => {
        if (isClicked && canvasRef.current) {
            console.log('Element exists, setting controlsLocked to true');
            setControlsLocked(true);
        }
    };
    useEffect(() => {
        if (controlsLocked && canvasRef.current) {
            setTimeout(() => {
                console.log('Trying to lock pointer for:', canvasRef.current);
                if (canvasRef.current && document.body.contains(canvasRef.current)) {
                    canvasRef.current.requestPointerLock();
                } else {
                    console.error('Element not in DOM:', canvasRef.current);
                }
            }, 100);
        }
    }, [controlsLocked]);




    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }} onClick={handleSceneClick}>
            {helpers}
            <Canvas ref={canvasRef} gl={{ antialias: true }} shadows={true} color='#ffffff' style={{pointerEvents: 'none'}} camera={{ fov: 60, position: [15.3, 4, -48]  }} >
                <Suspense fallback={"loading"}>
                    <Physics>
                        <InteractiveBox handleBoxClick={handleBoxClick} />
                    </Physics>
                    <AmbientLight />
                    <EastLight />
                    <WestLight />
                    <WestLight2 />
                    <Floor />
                    {models.map((model) => (
                        <Model key={model.id} {...model} />
                    ))}
                    {selectedGallery && selectedGallery.paintings.map((painting) => (
                        <Painting key={painting.id} painting={painting} />
                    ))}
                    {isClicked && <CameraAndControls isClicked={isClicked} controlsLocked={controlsLocked}/> }
                </Suspense>
            </Canvas>
        </div>
    );
};