import { Html, Sphere, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  setLightActive: React.Dispatch<React.SetStateAction<boolean>>;
  lightActive: boolean;
};

const Room = (props: Props) => {
  const { scene } = useGLTF('./my_small_room4.glb');
  const sphereRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  //   camera.position.z = 3;
  //   console.log(scene);

  scene.traverse((item) => {
    if (item instanceof THREE.Mesh) {
      console.log('here');
      item.castShadow = true;
      item.receiveShadow = true;
    }
    if (item.name === 'Floor_Lamp') {
      console.log(item);
    }
  });
  const lamp = scene.getObjectByName('Floor_Lamp');

  if (lamp) {
    props.setLightPosition(lamp.position);
  }

  useFrame((_, delta) => {
    // scene.rotation.y += delta;
  });

  return (
    <>
      <group position-y={-1}>
        <primitive object={scene}></primitive>
        <Sphere ref={sphereRef} position={lamp?.position} scale={0.1}>
          <meshStandardMaterial
            emissive={0xf0d58b}
            emissiveIntensity={props.lightActive ? 1 : 0}
          />
        </Sphere>
        <Html
          position={lamp?.position}
          position-x={lamp ? lamp.position.x + 1 : null}
          distanceFactor={6}>
          <button
            className='bg-primary-red/50 w-fit whitespace-nowrap p-2 rounded'
            type='button'
            onClick={() => {
              props.setLightActive((p) => !p);
            }}>
            Toggle Light
          </button>
        </Html>
      </group>
    </>
  );
};

export default Room;
