import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lightings from './Lightings';
import { OrbitControls } from '@react-three/drei';
import SolutionModel from './SolutionModel';
import Room from './Room';
import { useState } from 'react';
import { Vector3 } from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import { EffectComposer, SSAO, SMAA, SSR } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

type Props = {
  lightActive: boolean;
  tableMaterialIndex: 0 | 1 | 2;
  animation: 'up' | 'down';
  postProcessing: 'SSAO' | 'SMAA' | 'SSR' | 'none';
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
          maxPolarAngle={degToRad(0)}
          minPolarAngle={degToRad(60)}
          minAzimuthAngle={degToRad(300)}
          maxAzimuthAngle={degToRad(60)}
        />

        {/* <Environment preset={'forest'} /> */}
        <Suspense>
          {/* {location.pathname === '/' ? <Sofa /> : <SolutionModel />} */}
          <Room
            lightActive={props.lightActive}
            setLightPosition={setLightPosition}
            materialIndex={props.tableMaterialIndex}
          />
        </Suspense>
        <EffectComposer>
          {props.postProcessing === 'SSAO' ? (
            <SSAO
              worldDistanceThreshold={1}
              worldDistanceFalloff={1}
              worldProximityFalloff={1}
              worldProximityThreshold={1}
              // blendFunction={BlendFunction.MULTIPLY} // Use NORMAL to see the effect
              // samples={31}
              // radius={5}
              // intensity={30}
            />
          ) : (
            <></>
          )}
          {props.postProcessing === 'SMAA' ? (
            <SMAA blendFunction={BlendFunction.MULTIPLY} />
          ) : (
            <></>
          )}
          {props.postProcessing === 'SSR' ? <SSR /> : <></>}
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
