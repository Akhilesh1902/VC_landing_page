import { Plane } from '@react-three/drei';
import { DoubleSide } from 'three';
import { degToRad } from 'three/src/math/MathUtils';

type Props = {};

const Floor = (props: Props) => {
  return (
    <>
      <Plane
        rotation-x={degToRad(-90)}
        scale={20}
        position-y={-0.9}
        receiveShadow>
        <meshStandardMaterial
          color={0xffffff}
          // opacity={0}
          // transparent={true}
          side={DoubleSide}
        />
      </Plane>
    </>
  );
};

export default Floor;
