import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

const Floor = () => {
    return (
        <mesh position={[0, -5.02, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 50]}
                resolution={1024}
                mixBlur={1}
                mixStrength={100}
                roughness={0.3}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#644343"
                metalness={0.4}
            />
        </mesh>
    )

}

export default Floor