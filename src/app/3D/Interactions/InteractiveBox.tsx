import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

function InteractiveBox() {
    const boxRef = useRef()
    const [boxProps] = useBox(() => ({ mass: 1, position: [0, 0, 0] }))

    useFrame((state) => {
        // Mettre à jour la boîte à chaque frame
        boxRef.current.rotation.x += 0.01
        boxRef.current.rotation.y += 0.01
    })

    return (
        <Box ref={boxRef} {...boxProps} onClick={(e) => alert('Box clicked')}>
            <meshStandardMaterial color={'orange'} />
        </Box>
    )
}