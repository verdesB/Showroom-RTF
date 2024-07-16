import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {AmbientLight} from "@/app/3D/Lights/AmbientLight";
import {EastLight} from "@/app/3D/Lights/EastLight";
import {WestLight} from "@/app/3D/Lights/WestLight";
import Floor from "@/app/3D/Environment/Floor";

export const SceneBottomMobile = () => {
    console.log('scene Mobile')
    return(
        <Canvas>
            <Suspense fallback={null}>
                <AmbientLight/>
                <EastLight/>
                <WestLight/>
                <WestLight/>
                <Floor/>

            </Suspense>

        </Canvas>

    )
}