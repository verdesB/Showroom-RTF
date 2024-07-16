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
        />
    )
}