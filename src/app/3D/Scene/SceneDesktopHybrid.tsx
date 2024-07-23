import { Canvas } from "@react-three/fiber";
import {ReactNode, Suspense, useEffect, useRef, useState} from "react";
import { AmbientLight } from "@/app/3D/Lights/AmbientLight";
import { EastLight } from "@/app/3D/Lights/EastLight";
import { WestLight } from "@/app/3D/Lights/WestLight";
import Floor from "@/app/3D/Environment/Floor";
import FloorTop from "@/app/3D/Environment/FloorTop"; // Importez FloorTop
import { OBJs } from "@/app/3D/OBJs/dataModels";
import { Model } from "@/app/3D/OBJs/ModelsInit";
import { PointerLockControls } from "@react-three/drei";
import { CameraAndControls } from "@/app/3D/Controls/CameraAndControls";
import { WestLight2 } from "@/app/3D/Lights/WestLight2";
import { Painting } from "@/app/3D/OBJs/Paintings/PaintingsInit";
import { Gallery } from "@/app/3D/OBJs/Paintings/paintingsData";
import { InteractiveBox } from "@/app/3D/Interactions/InteractiveBox";
import { Physics } from "@react-three/cannon";
import CameraUpdater from "@/app/3D/Controls/CameraUpdater";
import {Bloom, Noise} from "@react-three/postprocessing";
import {InteractiveBoxTop} from "@/app/3D/Interactions/InteractiveBoxTop"; // Importez CameraUpdater

interface SceneDesktopHybridProps {
    helpers: JSX.Element;
    isClicked: boolean;
    selectedGallery?: Gallery;
    handleBoxClick?: any;
}

function EffectComposer(props: { children: ReactNode }) {
    return null;
}

export const SceneDesktopHybrid: React.FC<SceneDesktopHybridProps> = ({ helpers, isClicked, selectedGallery, handleBoxClick }) => {
    const [controlsLocked, setControlsLocked] = useState(false);
    const [isSecondFloor, setIsSecondFloor] = useState(false); // État pour gérer l'étage
    const models = OBJs;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleSceneClick = () => {
        if (isClicked && canvasRef.current) {
            setControlsLocked(true);
        }
    };

    useEffect(() => {
        if (controlsLocked && canvasRef.current) {
            setTimeout(() => {
                if (canvasRef.current && document.body.contains(canvasRef.current)) {
                    canvasRef.current.requestPointerLock();
                }
            }, 100);
        }
    }, [controlsLocked]);

    const handleBoxClickWrapper = () => {
        console.log("handleBoxClickWrapper called");
        if (handleBoxClick) handleBoxClick();
        if(isSecondFloor) {
            setIsSecondFloor(false)
        } else {
            setIsSecondFloor(true);
        }

    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }} onClick={handleSceneClick}>
            {helpers}
            <Canvas
                ref={canvasRef}
                gl={{ antialias: true }}
                shadows={true}
                color='#ffffff'
                style={{ pointerEvents: 'none' }}
                camera={{ fov: 60, position: [15.3, 4, -48] }} // Position initiale de la caméra
            >
                <Suspense fallback={"loading"}>
                    <Physics>
                        <InteractiveBox handleBoxClick={handleBoxClickWrapper} />
                        <InteractiveBoxTop handleBoxClick={handleBoxClickWrapper}/>
                    </Physics>
                    <AmbientLight />
                    <EastLight />
                    <WestLight />
                    <WestLight2 />
                    <Floor/>
                    {isSecondFloor ? <FloorTop /> : null}
                    {models.map((model) => (
                        <Model key={model.id} {...model} />
                    ))}
                    {selectedGallery && selectedGallery.paintings.map((painting) => (
                        <Painting key={painting.id} painting={painting} />
                    ))}
                    {isClicked && <CameraAndControls isClicked={isClicked} controlsLocked={controlsLocked}  />}
                    <CameraUpdater isSecondFloor={isSecondFloor} />
                    <EffectComposer>
                        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                        <Noise opacity={1}/>
                    </EffectComposer>

                </Suspense>
            </Canvas>
        </div>
    );
};
