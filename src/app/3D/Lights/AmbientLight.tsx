export function AmbientLight() {
    return(
        <ambientLight
            color={0xffffff} // couleur du ciel

            intensity={1} // intensité de la lumière
            position={[0, 100, 0]} // position de la lumière
        />
    )
}