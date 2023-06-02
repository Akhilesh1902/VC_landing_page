import { useGLTF } from '@react-three/drei';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import React from 'react';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  materialIndex: number;
  lightActive: boolean;
  animation: 'up' | 'down' | null;
};

const Sofa = (props: Props) => {
  const { gl } = useThree();

  const scene = useLoader(GLTFLoader, './ktx2_sofa.glb', (loader) => {
    const ktxLoader = new KTX2Loader();
    const draco = new DRACOLoader();
    draco.setDecoderPath('./draco_gltf.js');
    loader.setDRACOLoader(draco);
    ktxLoader.setTranscoderPath('three/examples/js/libs/basis/');
    loader.setKTX2Loader(ktxLoader.detectSupport(gl));
    // loader.setMeshoptDecoder(MeshoptDecoder);
  });

  console.log(scene);

  return (
    <group>
      <primitive object={scene}></primitive>{' '}
    </group>
  );
};

export default Sofa;
