import {
  Plane,
  Reflector,
  useGLTF,
  useTexture,
  MeshReflectorMaterial,
} from '@react-three/drei';
import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo, useState } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
import useGsapAnimation from '../../hooks/useGsapAnimation';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  materialIndex: number;
  lightActive: boolean;
  animation: 'up' | 'down' | null;
};

const Room = (props: Props) => {
  const { scene, parser, animations } = useGLTF('./table12.glb');
  // console.log(animations);
  console.log(scene);

  const { camera, scene: _scene } = useThree();

  const lamp = scene.getObjectByName('LampShade')!;
  // const lampMesh = scene.getObjectByName('LampMesh')!;
  // const tableBaseFrame = scene.getObjectByName('TableBaseFrame')!;

  const [setgsapAnimation] = useGsapAnimation(
    ['LampShade', 'TableBaseFrame', 'LampMesh'],
    _scene
  );

  useEffect(() => {
    setgsapAnimation(props.animation);
  }, [props.animation]);

  useEffect(() => {
    if (scene) {
      scene.scale.set(0, 0, 0);
    }
  }, [scene]);

  useFrame((_state, delta) => {
    if (scene) scene.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
    // mixer.update(delta);
  });

  scene.traverse(async (item) => {
    if (item instanceof THREE.Mesh) {
      item.castShadow = true;
      item.receiveShadow = true;

      if (item.name === 'LampShade') {
        item.material.roughness = 0.4;
        item.material.color = new THREE.Color('#d6ad67');

        // console.log(item);
        item.material._transmission = 0.5;
        item.material.emissive = new THREE.Color('#ffd94f');
        item.material.emissiveIntensity = props.lightActive ? 0.5 : 0;
        // item.material.emissive = new THREE.Color('#dea049');
      }
      if (item.name === 'Table_Top_Mesh') {
        const varientArr =
          item.userData.gltfExtensions.KHR_materials_variants.mappings;
        const mapping = varientArr.find((mapping: any) =>
          mapping.variants.includes(props.materialIndex)
        );
        if (mapping) {
          item.material = await parser.getDependency(
            'material',
            mapping.material
          );
          parser.assignFinalMaterial(item);
        }
      }
    }
  });

  if (lamp) {
    // console.log('here');
    props.setLightPosition(lamp.position);
  }
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
    <group>
      <primitive object={scene}></primitive>
      <Plane
        rotation-x={-degToRad(90)}
        scale={15}
        position-y={-0.03}
        receiveShadow={true}>
        <MeshReflectorMaterial
          // color={0xffffff}
          blur={[512, 512]}
          resolution={1024}
          mixBlur={1}
          mixStrength={5}
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
      </Plane>
    </group>
  );
};

export default Room;
