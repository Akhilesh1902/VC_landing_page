import { useRef } from 'react';
import { PointLight, PointLightHelper, Vector3 } from 'three';
import { useHelper } from '@react-three/drei';

type Props = {
  lightPosition: Vector3;
  lightActive: boolean;
  lightIntensity?: number;
};

const Lightings = (props: Props) => {
  const lampLightRef = useRef<PointLight>(null);

  // useHelper(lampLightRef, PointLightHelper, 0.5);
  // console.log(props.lightSettings);
  console.log(props.lightPosition);
  return (
    <>
      <ambientLight intensity={0.5} color={0xffffff} />
      <directionalLight
        intensity={1}
        color={0xffffff}
        position={[5, 5, 5]}
        castShadow
      />
      <pointLight
        ref={lampLightRef}
        position={props.lightPosition}
        position-y={props.lightPosition.y + 0.2}
        intensity={props.lightActive ? 10 : 0}
        distance={4}
        // decay={3}
        color={0xffd7aa}
      />
    </>
  );
};

export default Lightings;
