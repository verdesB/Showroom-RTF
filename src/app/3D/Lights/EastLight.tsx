
export function EastLight() {
    return (
        <pointLight
            color={0xFFFFF3}
            intensity={20000}
            distance={1000}
            position={[100, 80, -20]}
            castShadow={false}
            shadow-mapSize-width={11512}
            shadow-mapSize-height={11512}
        />
    )
}