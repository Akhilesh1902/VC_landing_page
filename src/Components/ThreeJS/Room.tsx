import { Html, Sphere, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  setLightActive: React.Dispatch<React.SetStateAction<boolean>>;
  lightActive: boolean;
  lightPosition: THREE.Vector3;
};

const Room = (props: Props) => {
  const { scene } = useGLTF('./my_small_room8.glb');
  const sphereRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  //   camera.position.z = 3;
  console.log(scene);

  scene.traverse((item) => {
    if (item instanceof THREE.Mesh) {
      console.log('here');
      item.castShadow = true;
      item.receiveShadow = true;
      if (item.name === 'Lamp_shade') {
        item.material.roughness = 0.2;
        item.material.emissiveIntensity = props.lightActive ? 0.5 : 0.1;
        item.material.emissive = new THREE.Color(0xf0d58b);
        console.log(item);
      }
    }
  });
  const lamp = scene.getObjectByName('Lamp_shade');

  if (lamp) {
    props.setLightPosition(lamp.position);
  }

  useFrame((_, delta) => {
    // scene.rotation.y += delta;
  });
  return (
    <>
      <group>
        <primitive object={scene}></primitive>
        <Sphere ref={sphereRef} position={props.lightPosition} scale={0.2}>
          <meshStandardMaterial
            emissive={0xf0d58b}
            emissiveIntensity={props.lightActive ? 1 : 0}
          />
        </Sphere>
        <Html
          position={lamp?.position}
          position-x={lamp ? lamp.position.x - 1 : null}
          position-y={lamp ? lamp.position.y - 1 : null}
          distanceFactor={6}>
          <button
            className='bg-primary-red/80 text-white tracking-widest w-fit whitespace-nowrap p-2 rounded font-bold '
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
