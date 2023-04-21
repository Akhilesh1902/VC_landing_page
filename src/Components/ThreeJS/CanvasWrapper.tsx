import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Sofa from './Sofa';
import Floor from './Floor';
import Lightings from './Lightings';
import { useLocation } from 'react-router-dom';
import { Box } from '@react-three/drei';
import SolutionModel from './SolutionModel';

type Props = {};

const CanvasWrapper = (props: Props) => {
  const location = useLocation();
  console.log(location);

  return (
    <Canvas shadows>
      <Lightings />
      <Floor />

      <Suspense>
        {location.pathname === '/' ? <Sofa /> : <SolutionModel />}
      </Suspense>
    </Canvas>
  );
};

export default CanvasWrapper;
