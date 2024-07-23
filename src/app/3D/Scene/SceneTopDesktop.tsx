import {Suspense, useEffect, useRef, useState} from "react";
import {OBJs} from "@/app/3D/OBJs/dataModels";
import {Canvas} from "@react-three/fiber";
import {AmbientLight} from "@/app/3D/Lights/AmbientLight";
import {EastLight} from "@/app/3D/Lights/EastLight";
import {WestLight} from "@/app/3D/Lights/WestLight";
import {WestLight2} from "@/app/3D/Lights/WestLight2";
import {Model} from "@/app/3D/OBJs/ModelsInit";
import {Painting} from "@/app/3D/OBJs/Paintings/PaintingsInit";
import {CameraAndControls} from "@/app/3D/Controls/CameraAndControls";
import FloorTop from "@/app/3D/Environment/FloorTop";
import {Gallery} from "@/app/3D/OBJs/Paintings/paintingsData";
import {InteractiveBox} from "@/app/3D/Interactions/InteractiveBox";
import {Physics} from "@react-three/cannon";

interface SceneBottomTopProps {
    helpers: JSX.Element;
    isClicked: boolean;
    selectedGallery?: Gallery
    sceneTopRef: React.Ref<HTMLDivElement>
}

const SceneTopDesktop = ({helpers, isClicked, selectedGallery}: SceneBottomTopProps) => {
    const [controlsLocked, setControlsLocked] = useState(false);
    const models = OBJs;
    const sceneTopRef = useRef<HTMLCanvasElement>(null);


    console.log('scene desktop top');
    const handleSceneClick = () => {
        if (isClicked && sceneTopRef.current) {
            setControlsLocked(true);
        }
    };
    useEffect(() => {
        if (controlsLocked && sceneTopRef.current) {
            setTimeout(() => {
                if (sceneTopRef.current && document.body.contains(sceneTopRef.current)) {
                    sceneTopRef.current.requestPointerLock();
                }
            }, 100);
        }
    }, [controlsLocked, sceneTopRef]);



    return (
        <div  style={{ width: '100%', height: '100%', position: 'relative' }} onClick={handleSceneClick}>
            {helpers}
            <Canvas ref={sceneTopRef} gl={{ antialias: true }} shadows={true} color='#ffffff' style={{pointerEvents: 'none'}} camera={{ fov: 60, position: [15.3, 17, -48]  }} >
                <Suspense fallback={"loading"}>

                    <AmbientLight />
                    <EastLight />
                    <WestLight />
                    <WestLight2 />
                    <FloorTop />

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
}
export default SceneTopDesktop