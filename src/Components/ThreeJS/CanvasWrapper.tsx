import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lightings from './Lightings';
import { OrbitControls } from '@react-three/drei';
import SolutionModel from './SolutionModel';
import Room from './Room';
import { useState } from 'react';
import { Color, ColorRepresentation, Vector3 } from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import { useControls, button, useStoreContext, levaStore } from 'leva';

type Props = {};

const CanvasWrapper = (props: Props) => {
  const { light, lightIntensity, canvasColor, tableMaterials } = useControls({
    light: false,
    lightIntensity: {
      value: 10,
      min: 0,
      max: 100,
      step: 2,
    },
    tableMaterials: {
      options: {
        brown: 0,
        lightBrown: 1,
        black: 2,
      },
    },
    canvasColor: '#F5F5F5',
    button: button(() => {
      console.log('clicked');
      levaStore.set({ canvasColor: '#f5f5f5' }, true);
    }),
  });

  const data = useStoreContext();
  console.log(levaStore);

  const [lightPosition, setLightPosition] = useState(new Vector3());
  console.log(canvasColor);

  return (
    <>
      <Canvas shadows>
        <color
          attach={'background'}
          args={[new Color(canvasColor as ColorRepresentation)]}
        />
        <Lightings
          lightActive={light}
          lightPosition={lightPosition}
          lightIntensity={lightIntensity}
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
            materialIndex={tableMaterials}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
