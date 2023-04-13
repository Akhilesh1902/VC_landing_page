import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Sofa from './Sofa';
import Floor from './Floor';
import Lightings from './Lightings';

type Props = {};

const CanvasWrapper = (props: Props) => {
  return (
    <Canvas shadows>
      <Lightings />
      <Floor />
      <Suspense>
        <Sofa />
      </Suspense>
    </Canvas>
  );
};

export default CanvasWrapper;
