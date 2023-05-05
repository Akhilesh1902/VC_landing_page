import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Sofa from './Sofa';
import Floor from './Floor';
import Lightings from './Lightings';
import { useLocation } from 'react-router-dom';
import { Box, Environment, Html, OrbitControls } from '@react-three/drei';
import SolutionModel from './SolutionModel';
import Room from './Room';
import { useState } from 'react';
import { Color, Vector3 } from 'three';
import DatGuiContext, { useDatGUIContext } from './DatGuiContext';
import MyDatGui from './MyDatGui';
import { degToRad } from 'three/src/math/MathUtils';

type Props = {};

const CanvasWrapper = (props: Props) => {
  const location = useLocation();
  console.log(location);

  const [lightActive, setLightActive] = useState(false);
  const [lightPosition, setLightPosition] = useState(new Vector3());
  const { lightSettings } = useDatGUIContext();
  console.log(lightSettings.bg_color.split('#'));

  return (
    <>
      <Canvas shadows>
        <color attach={'background'} args={[`#${lightSettings.bg_color}`]} />
        <Lightings
          lightActive={lightActive}
          setLightPosition={setLightPosition}
          lightPosition={lightPosition}
        />
        {/* <Floor /> */}
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={5}
          maxPolarAngle={degToRad(80)}
          minPolarAngle={degToRad(50)}
          minAzimuthAngle={degToRad(300)}
          maxAzimuthAngle={degToRad(60)}
        />

        <Environment preset={lightSettings.hdri} />
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
      <MyDatGui />
    </>
  );
};

export default CanvasWrapper;
