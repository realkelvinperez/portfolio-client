import { Canvas } from 'react-three-fiber'
import ProjectLaptopModel from '../public/assets/3d/Project-laptop-model.js'

export default function ProjectLaptop() {
    return (
        <Canvas>
            <ProjectLaptopModel />
        </Canvas>
    );
}
