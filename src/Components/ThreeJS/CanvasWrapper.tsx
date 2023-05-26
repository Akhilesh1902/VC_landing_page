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
import Sofa from './Sofa';

type Props = {
  lightActive: boolean;
  tableMaterialIndex: 0 | 1 | 2;
  animation: 'up' | 'down' | null;
  postProcessing: 'SSAO' | 'SMAA' | 'SSR' | 'none';
};

const CanvasWrapper = (props: Props) => {
  const [lightPosition, setLightPosition] = useState(new Vector3());
  return (
    <>
      <Canvas shadows camera={{ position: [0, 5, 5] }}>
        <OrbitControls
          target={[0, 2, 0]}
          enableZoom={true}
          enablePan={false}
          zoomSpeed={3}
          minDistance={3}
          maxDistance={8}
          maxPolarAngle={degToRad(0)}
          minPolarAngle={degToRad(70)}
          minAzimuthAngle={degToRad(300)}
          maxAzimuthAngle={degToRad(60)}
        />
        {/* <Environment preset={'forest'} /> */}
        <Suspense>
          {/* {location.pathname === '/' ? <Sofa /> : <SolutionModel />} */}
          <group position-y={-0.5}>
            <Lightings
              lightActive={props.lightActive}
              lightPosition={lightPosition}
            />
            <Room
              lightActive={props.lightActive}
              setLightPosition={setLightPosition}
              materialIndex={props.tableMaterialIndex}
              animation={props.animation}
            />
            <Sofa
              lightActive={props.lightActive}
              setLightPosition={setLightPosition}
              materialIndex={props.tableMaterialIndex}
              animation={props.animation}
            />
          </group>
        </Suspense>
        <EffectComposer>
          {props.postProcessing === 'SSAO' ? (
            <SSAO
              worldDistanceThreshold={1}
              worldDistanceFalloff={1}
              worldProximityFalloff={1}
              worldProximityThreshold={1}
            />
          ) : (
            <></>
          )}
          {props.postProcessing === 'SMAA' ? (
            <SMAA blendFunction={BlendFunction.MULTIPLY} />
          ) : (
            <></>
          )}
          {props.postProcessing === 'SSR' ? (
            <SSR
              ENABLE_BLUR={true}
              rayStep={0.1}
              intensity={1}
              ENABLE_JITTERING={false}
              jitter={0.1}
              jitterSpread={0.1}
              jitterRough={0.1}
              maxRoughness={1}
              MAX_STEPS={20}
              NUM_BINARY_SEARCH_STEPS={5}
              maxDepth={1}
              maxDepthDifference={3}
              thickness={10}
              ior={1.45}
              STRETCH_MISSED_RAYS={false}
              USE_MRT={true}
              USE_NORMALMAP={true}
              USE_ROUGHNESSMAP={true}
            />
          ) : (
            <></>
          )}
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
