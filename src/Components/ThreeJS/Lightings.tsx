import { useRef } from 'react';
import { PointLight, PointLightHelper, Vector3 } from 'three';
import { useHelper } from '@react-three/drei';
import { useDatGUIContext } from './DatGuiContext';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<Vector3>>;
  lightPosition: Vector3;
  lightActive: boolean;
};

const Lightings = (props: Props) => {
  const lampLightRef = useRef<PointLight>(null);

  const { lightSettings } = useDatGUIContext();

  // useHelper(lampLightRef, PointLightHelper, 0.5);
  // console.log(props.lightSettings);
  console.log(props.lightPosition);
  return (
    <>
      {/* <ambientLight intensity={0.7} color={0xffffff} /> */}
      {/* <directionalLight
        intensity={0.3}
        color={0xffffff}
        position={[5, 5, 5]}
        castShadow
      /> */}
      <pointLight
        ref={lampLightRef}
        position={props.lightPosition}
        position-y={props.lightPosition.y + 0.2}
        intensity={lightSettings.active ? lightSettings.intensity : 0}
        distance={4}
        // decay={3}
        color={0xffd7aa}
      />
    </>
  );
};

export default Lightings;
