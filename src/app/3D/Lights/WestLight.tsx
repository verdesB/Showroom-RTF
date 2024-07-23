export function WestLight() {
    return (
        <pointLight
            color={0xFFFFF3}
            intensity={12000}
            distance={900}
            position={[-70, 80, -47]}
            castShadow={true}
            shadow-mapSize-width={11512}
            shadow-mapSize-height={11512}
            shadow-bias={-0.001}

            shadow-camera-left={-10}     // Ajustez les paramètres de la caméra d'ombre
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            shadow-camera-near={1}
            shadow-camera-far={50}
            shadow-radius={10}
        />
    )
}