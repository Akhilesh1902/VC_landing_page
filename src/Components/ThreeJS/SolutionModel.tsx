import { Box } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

type Props = {};

const SolutionModel: React.FC = (props: Props) => {
  const boxRef =
    useRef<THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>>(null);
  console.log(boxRef.current);
  const { camera } = useThree();
  console.log(camera.zoom);

  useFrame(({ clock }) => {
    if (boxRef.current)
      switch (
        (
          window.scrollY /
          document.querySelector('.solution-container')!.clientHeight
        ).toFixed(1)
      ) {
        case '0.2': {
          boxRef.current.position.lerp(new THREE.Vector3(0, 0, 0), 0.01);
          camera.position.z = Math.abs(Math.sin(clock.elapsedTime)) + 2;
          break;
        }
        case '0.3': {
          boxRef.current.rotation.y = 0;
          boxRef.current.position.x = Math.sin(clock.elapsedTime) + 1;
          camera.position.lerp(new THREE.Vector3(0, 0, 5), 0.01);

          break;
        }
        case '0.4': {
          boxRef.current.position.lerp(new THREE.Vector3(1, 0, 0), 0.01);
          boxRef.current.rotation.y = Math.sin(clock.elapsedTime);
          camera.position.lerp(new THREE.Vector3(0, 0, 5), 0.01);

          break;
        }
        default: {
          boxRef.current.position.lerp(new THREE.Vector3(0, 0, 0), 0.01);
          camera.position.lerp(new THREE.Vector3(0, 0, 5), 0.01);
          boxRef.current.rotation.y = 0;
        }
      }
  });
  return (
    <>
      <Box ref={boxRef}>
        <meshStandardMaterial color={'red'} />
      </Box>
    </>
  );
};

export default SolutionModel;
