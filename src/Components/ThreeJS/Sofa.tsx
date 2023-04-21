import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {};

const Sofa = (props: Props) => {
  const { scene } = useGLTF('/sofa.glb');
  scene.traverse((item) => {
    if (item instanceof THREE.Mesh) {
      item.castShadow = true;
    }
  });
  useFrame((_, delta) => {
    scene.rotation.y += delta;
  });
  return <primitive object={scene} scale={2} position-y={-1}></primitive>;
};

export default Sofa;
