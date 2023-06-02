import {
  Loader,
  MeshReflectorMaterial,
  Plane,
  useAnimations,
  useGLTF,
  useTexture,
} from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

import React, { useEffect } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
import * as THREE from 'three';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  materialIndex: number;
  lightActive: boolean;
  animation: 'up' | 'down' | null;
};

const Sofa_jpeg = (props: Props) => {
  const { gl, scene: _scene } = useThree();

  //   useEffect(() => {
  //     console.log('here');
  //     const MANAGER = new THREE.LoadingManager();
  //     const DRACO_LOADER = new DRACOLoader(MANAGER);
  //     DRACO_LOADER.setDecoderPath(`/draco/`);
  //     const KTX2_LOADER = new KTX2Loader(MANAGER)
  //       .setTranscoderPath(`/basis/`)
  //       .detectSupport(gl);

  //     const loader = new GLTFLoader(MANAGER)
  //       .setCrossOrigin('anonymous')
  //       .setDRACOLoader(DRACO_LOADER)
  //       .setKTX2Loader(KTX2_LOADER);
  //     // .setMeshoptDecoder( MeshoptDecoder );

  //     const blobURLs = [];

  //     loader.load(
  //       './ktx_sofa.glb',
  //       (gltf) => {
  //         // window.VIEWER.json = gltf;

  //         const scene = gltf.scene || gltf.scenes[0];
  //         const clips = gltf.animations || [];
  //         console.log(scene);

  //         if (!scene) {
  //           // Valid, but not supported by this viewer.
  //           throw new Error(
  //             'This model contains no scene, and cannot be viewed here. However,' +
  //               ' it may contain individual 3D resources.'
  //           );
  //         }

  //         // this.setContent(scene, clips);

  //         // blobURLs.forEach(URL.revokeObjectURL);

  //         // See: https://github.com/google/draco/issues/349
  //         // DRACOLoader.releaseDecoderModule();

  //         // resolve(gltf);
  //       },
  //       undefined
  //     );
  //   }, []);

  const __scene = useLoader(GLTFLoader, './ktx_sofa.glb', (loader) => {
    const ktxLoader = new KTX2Loader();
    const draco = new DRACOLoader();
    draco.setDecoderPath('/draco/');
    loader.setDRACOLoader(draco);
    ktxLoader.setTranscoderPath('/basis2/').detectSupport(gl);
    loader.setKTX2Loader(ktxLoader);
    // loader.setMeshoptDecoder(MeshoptDecoder)
  });

  console.log(__scene);

  const { scene, animations, scenes } = useGLTF(
    './Sofa_jpeg.glb',
    '/gltf/'
    //   (loader) => {
    //     const draco = new DRACOLoader();
    //     draco.setDecoderPath('draco_gltf.js');
    //     loader.setDRACOLoader(draco);
    //   }
  );

  //   console.log(scenes);
  const { actions, mixer } = useAnimations(animations, scene);
  //   console.log({ scene, animations });

  useEffect(() => {
    if (scenes) {
      _scene.add(scenes[1]);
      scenes[1].position.y = 1.5;
      scenes[1].scale.setScalar(2);
    }
    if (actions) {
      //   console.log(actions);
      actions.Back_Rest?.play();
    }
  }, [scene, actions, mixer]);

  useFrame((_state, delta) => {
    mixer.update(delta);
  });

  scene.traverse((item) => {
    if (item instanceof THREE.Mesh && !item.name.includes('Plane')) {
      item.castShadow = true;
      item.receiveShadow = true;
    }
  });

  const woodTexture = useTexture('./woodTexture.png');
  woodTexture.repeat.set(4, 4);
  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
  const woodTexture_rough = useTexture('./woodTexture_rough.png');
  woodTexture_rough.repeat.set(4, 4);
  woodTexture_rough.wrapS = woodTexture_rough.wrapT = THREE.RepeatWrapping;
  const woodTexture_AO = useTexture('./woodTexture_AO.jpg');
  woodTexture_AO.repeat.set(4, 4);
  woodTexture_AO.wrapS = woodTexture_AO.wrapT = THREE.RepeatWrapping;

  return (
    <group position-y={2} scale={2}>
      <primitive object={__scene.scene}></primitive>
      {/* <Plane
        rotation-x={-degToRad(90)}
        scale={4}
        position-y={0}
        receiveShadow={true}>
        <MeshReflectorMaterial
          // color={0xffffff}
          blur={[512, 512]}
          resolution={1024}
          mixBlur={1}
          mixStrength={3}
          // roughness={1}
          depthScale={50}
          minDepthThreshold={0.25}
          maxDepthThreshold={1}
          // metalness={0}
          mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          map={woodTexture}
          roughnessMap={woodTexture_rough}
          // aoMap={woodTexture_AO}
        />
      </Plane> */}
    </group>
  );
};

export default Sofa_jpeg;
