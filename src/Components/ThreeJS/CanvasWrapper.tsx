import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Sofa from './Sofa';

type Props = {};

const CanvasWrapper = (props: Props) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} color={0xffffff} />
      <directionalLight intensity={1} color={0xffffff} position={[1, 1, 1]} />
      <Suspense>
        <Sofa />
      </Suspense>
    </Canvas>
  );
};

export default CanvasWrapper;
