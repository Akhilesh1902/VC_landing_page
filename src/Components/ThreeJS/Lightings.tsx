import { useRef } from 'react';
import { PointLight, PointLightHelper, Vector3 } from 'three';
import { useHelper } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

type Props = {
  lightPosition: Vector3;
  lightActive: boolean;
  lightIntensity?: number;
};

const Lightings = (props: Props) => {
  const lampLightRef = useRef<PointLight>(null);

  // useHelper(lampLightRef, PointLightHelper, 0.4, 'red');
  const { camera, scene } = useThree();
  const LampShade = scene.getObjectByName('LampShade');
  // console.log(LampShade);
  // console.log(camera.position);
  // console.log(props.lightSettings);
  // console.log(props.lightPosition);

  useFrame(() => {
    if (lampLightRef.current && LampShade) {
      lampLightRef.current.position.x = LampShade.position.x;
      lampLightRef.current.position.y = LampShade.position.y;
      lampLightRef.current.position.z = LampShade.position.z;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} color={0xffffff} />
      <directionalLight
        intensity={2}
        color={0xffffff}
        position={[5, 5, 5]}
        castShadow
      />
      <pointLight
        // castShadow
        ref={lampLightRef}
        position={props.lightPosition}
        intensity={props.lightActive ? 10 : 0}
        distance={4}
        // decay={3}
        color={0xffd7aa}
      />
    </>
  );
};

export default Lightings;
