import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

type Props = {};

const Sofa = (props: Props) => {
  const { scene } = useGLTF('./sofa.glb');
  useFrame((_, delta) => {
    scene.rotation.y += delta;
  });
  return <primitive object={scene} scale={2} position-y={-1}></primitive>;
};

export default Sofa;
