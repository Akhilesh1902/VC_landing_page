import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Sofa from './Sofa';
import Floor from './Floor';
import Lightings from './Lightings';
import { useLocation } from 'react-router-dom';
import { Box, Html, OrbitControls } from '@react-three/drei';
import SolutionModel from './SolutionModel';
import Room from './Room';
import { useState } from 'react';
import { Vector3 } from 'three';

type Props = {};

const CanvasWrapper = (props: Props) => {
  const location = useLocation();
  console.log(location);

  const [lightActive, setLightActive] = useState(false);
  const [lightPosition, setLightPosition] = useState(new Vector3());

  return (
    <Canvas shadows>
      <Lightings
        lightActive={lightActive}
        setLightPosition={setLightPosition}
        lightPosition={lightPosition}
      />
      {/* <Floor /> */}
      <OrbitControls enableZoom={false} />
      <Suspense>
        {/* {location.pathname === '/' ? <Sofa /> : <SolutionModel />} */}
        <Room
          setLightPosition={setLightPosition}
          setLightActive={setLightActive}
          lightActive={lightActive}
          lightPosition={lightPosition}
        />
      </Suspense>
    </Canvas>
  );
};

export default CanvasWrapper;
