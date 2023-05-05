import { Html, Sphere, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { TbBulb, TbBulbOff } from 'react-icons/tb';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  setLightActive: React.Dispatch<React.SetStateAction<boolean>>;
  lightActive: boolean;
  lightPosition: THREE.Vector3;
};

const Room = (props: Props) => {
  const { scene } = useGLTF('./table.glb');
  const sphereRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  useEffect(() => {
    camera.position.y = 3;
  }, []);

  console.log(scene);

  scene.traverse((item) => {
    if (item instanceof THREE.Mesh) {
      // console.log('here');
      item.castShadow = true;
      item.receiveShadow = true;

      if (item.name === 'Lamp_shade') {
        item.material.roughness = 0.5;
        // item.material.emissiveIntensity = props.lightActive ? 0.5 : 0.1;
        // item.material.emissive = new THREE.Color(0xf0d58b);
        // console.log(item);
      }
    }
  });
  const lamp = scene.getObjectByName('Lamp');
  lamp?.traverse((item) => {
    // console.log(item);
    if (
      item instanceof THREE.Mesh &&
      item.material.name === 'Mat_Laptop_Front'
    ) {
      console.log(item);
      item.material.roughness = 0.4;
      // item.material.emissiveIntensity = props.lightActive ? 0.5 : 0.1;
      // item.material.emissive = props.lightActive
      //   ? new THREE.Color(0xffd7aa)
      //   : new THREE.Color(0x000000);
    }
  });
  // console.log(lamp?.position);
  // console.log(lamp);

  if (lamp) {
    props.setLightPosition(lamp.position);
  }

  // useFrame((_, delta) => {
  //   // scene.rotation.y += delta;
  // });
  return (
    <>
      <group>
        <primitive object={scene}></primitive>
        {/* <Sphere ref={sphereRef} position={props.lightPosition} scale={0.2}>
          <meshStandardMaterial
            emissive={0xf0d58b}
            emissiveIntensity={props.lightActive ? 1 : 0}
          />
        </Sphere> */}
        <Html
          position={lamp?.position}
          position-x={lamp ? lamp.position.x - 0.5 : null}
          position-y={lamp ? lamp.position.y : null}
          distanceFactor={6}>
          <button
            className='bg-primary-red/80 text-white tracking-widest w-fit whitespace-nowrap p-2 rounded-full font-bold '
            type='button'
            onClick={() => {
              props.setLightActive((p) => !p);
            }}>
            {props.lightActive ? <TbBulbOff /> : <TbBulb />}
          </button>
        </Html>
      </group>
    </>
  );
};

export default Room;
