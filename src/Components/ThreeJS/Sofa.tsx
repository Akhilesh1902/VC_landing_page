import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
// import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import React from 'react';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  materialIndex: number;
  lightActive: boolean;
  animation: 'up' | 'down' | null;
};

const Sofa = (props: Props) => {
  //     const scene = useLoader(GLTFLoader, faceUrl, (loader) => {
  //         const ktxLoader = new KTX2Loader()
  //         ktxLoader.setTranscoderPath('three/examples/js/libs/basis/')
  //         loader.setKTX2Loader(ktxLoader)
  //         loader.setMeshoptDecoder(MeshoptDecoder)
  //       })

  //   console.log(scene);

  return <group>{/* <primitive object={scene}></primitive> */}</group>;
};

export default Sofa;
