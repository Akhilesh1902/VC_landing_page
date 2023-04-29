import { useRef } from 'react';
import { PointLight, PointLightHelper, Vector3 } from 'three';
import { useHelper } from '@react-three/drei';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<Vector3>>;
  lightPositon: Vector3;
  lightActive: boolean;
};

const Lightings = (props: Props) => {
  const lampLightRef = useRef<PointLight>(null);
  // useHelper(lampLightRef, PointLightHelper, 0.5);
  // console.log(props.lightSettings);

  return (
    <>
      <ambientLight intensity={0.2} color={0xffffff} />
      {/* <directionalLight
        intensity={0.3}
        color={0xffffff}
        position={[5, 5, 5]}
        castShadow
      /> */}
      <pointLight
        ref={lampLightRef}
        position={props.lightPositon}
        intensity={props.lightActive ? 1 : 0}
        distance={7}
        color={0xf0d58b}
      />
    </>
  );
};

export default Lightings;
