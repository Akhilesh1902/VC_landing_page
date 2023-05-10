import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lightings from './Lightings';
import { OrbitControls } from '@react-three/drei';
import SolutionModel from './SolutionModel';
import Room from './Room';
import { useState } from 'react';
import { Vector3 } from 'three';
import { degToRad } from 'three/src/math/MathUtils';

type Props = {
  lightActive: boolean;
  tableMaterialIndex: 0 | 1 | 2;
  animation: 'up' | 'down';
};

const CanvasWrapper = (props: Props) => {
  const [lightPosition, setLightPosition] = useState(new Vector3());

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <Lightings
          lightActive={props.lightActive}
          lightPosition={lightPosition}
        />
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={5}
          maxPolarAngle={degToRad(80)}
          minPolarAngle={degToRad(50)}
          minAzimuthAngle={degToRad(300)}
          maxAzimuthAngle={degToRad(60)}
        />

        {/* <Environment preset={'forest'} /> */}
        <Suspense>
          {/* {location.pathname === '/' ? <Sofa /> : <SolutionModel />} */}
          <Room
            setLightPosition={setLightPosition}
            materialIndex={props.tableMaterialIndex}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
