import {Canvas} from "@react-three/fiber";
import {Suspense, useRef, useState} from "react";
import {AmbientLight} from "@/app/3D/Lights/AmbientLight";
import {EastLight} from "@/app/3D/Lights/EastLight";
import {WestLight} from "@/app/3D/Lights/WestLight";
import Floor from "@/app/3D/Environment/Floor";
import {OBJs} from "@/app/3D/OBJs/dataModels";
import {WestLight2} from "@/app/3D/Lights/WestLight2";
import {Model} from "@/app/3D/OBJs/ModelsInit";
import {Painting} from "@/app/3D/OBJs/Paintings/PaintingsInit";
import {CameraAndControls} from "@/app/3D/Controls/CameraAndControls";
import {requestGyroscopePermission} from "@/app/3D/Controls/RequestGyroscopePermission";
import {MoveDown, MoveLeft, MoveRight, MoveUp} from "lucide-react";
import {PerspectiveCamera, Vector3} from "three";
import CameraMovementControls from "@/app/3D/Controls/CameraAndControlsMobile";
import DeviceOrientationControls, {DeviceOrientationControlsCustom} from "@/app/3D/Controls/DeviceOrientationControls";
import {Gallery} from "@/app/3D/OBJs/Paintings/paintingsData";
import CameraMovementControlsMobile from "@/app/3D/Controls/CameraAndControlsMobile";
import UnifiedCameraControls from "@/app/3D/Controls/UnifiedCameraControls";

//@ts-nocheck
interface SceneBottomMobileProps {
    helpers: JSX.Element;
    isClicked: boolean;
    selectedGallery?: Gallery

}

export const SceneBottomMobile = ({isClicked, selectedGallery ,helpers} : SceneBottomMobileProps) => {
    const [controlsLocked, setControlsLocked] = useState(false);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const moveDirectionRef = useRef<string | null>(null);
    const models = OBJs;

    console.log('scene mobile');
    const handleSceneClick = () => {
        if (isClicked) {
            setControlsLocked(true);
        }
    };
    const handleMove = (direction: string | null) => {
        moveDirectionRef.current = direction;
    };
    const adjustCameraDirection = (camera: PerspectiveCamera) => {
        const dir = new Vector3();
        camera.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        const cross = new Vector3();
        cross.crossVectors(camera.up, dir).normalize();
        camera.lookAt(cross);
    };


    return (
        <div style={{position: 'relative', width: '100%', height: '100%'}} onClick={handleSceneClick}>
            {helpers}
            {!permissionGranted && (
                <button onClick={() => requestGyroscopePermission(setPermissionGranted)}
                        style={{position: 'absolute', top: '10px', left: '10px', zIndex: 1}}>
                    Enable Gyroscope
                </button>
            )}
            <Canvas gl={{ antialias: true }} shadows={false} color='#ffffff' style={{pointerEvents: 'none'}}
                    camera={{fov: 60, position: [15.3, 4, -48]}}>
                <Suspense fallback={"loading"}>
                    <UnifiedCameraControls permissionGranted={permissionGranted} moveDirectionRef={moveDirectionRef} />
                    <AmbientLight/>
                    <EastLight/>
                    <WestLight/>
                    <WestLight2/>
                    <Floor/>
                    {models.map((model) => (
                        <Model key={model.id} {...model} />
                    ))}
                    {selectedGallery && selectedGallery.paintings.map((painting) => (
                        <Painting key={painting.id} painting={painting}/>
                    ))}


                </Suspense>
            </Canvas>
            <div className="virtual-keypad">
                <button onTouchStart={() => handleMove('up')} onTouchEnd={() => handleMove(null)}><MoveUp/></button>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <button onTouchStart={() => handleMove('left')} onTouchEnd={() => handleMove(null)}><MoveLeft/>
                    </button>
                    <button onTouchStart={() => handleMove('down')} onTouchEnd={() => handleMove(null)}><MoveDown/>
                    </button>
                    <button onTouchStart={() => handleMove('right')} onTouchEnd={() => handleMove(null)}><MoveRight/>
                    </button>
                </div>
            </div>
            <style jsx>{`
                .virtual-keypad {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    user-select: none;
                    -webkit-user-select: none; /* for Safari */
                    -moz-user-select: none; /* for Firefox */
                    -ms-user-select: none; /* for IE10+ */
                }

                .virtual-keypad button {
                    width: 45px;
                    height: 45px;
                    background-color: #ccc;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                    -webkit-user-select: none; /* for Safari */
                    -moz-user-select: none; /* for Firefox */
                    -ms-user-select: none; /* for IE10+ */
                }
            `}</style>
        </div>

    )
};