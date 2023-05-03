import { useRef } from 'react';
import { PointLight, PointLightHelper, Vector3 } from 'three';
import { useHelper } from '@react-three/drei';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<Vector3>>;
  lightPosition: Vector3;
  lightActive: boolean;
};

const Lightings = (props: Props) => {
  const lampLightRef = useRef<PointLight>(null);

  // useHelper(lampLightRef, PointLightHelper, 0.5);
  // console.log(props.lightSettings);
  console.log(props.lightPosition);
  return (
    <>
      <ambientLight intensity={0.2} color={0xffffff} />
      <directionalLight
        intensity={0.3}
        color={0xffffff}
        position={[5, 5, 5]}
        castShadow
      />
      <pointLight
        ref={lampLightRef}
        position={props.lightPosition}
        position-y={props.lightPosition.y + 0.08}
        intensity={props.lightActive ? 10 : 0}
        distance={4}
        // decay={3}
        color={0xc99b44}
      />
    </>
  );
};

export default Lightings;
