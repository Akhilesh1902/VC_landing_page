import {
  Plane,
  useAnimations,
  useGLTF,
  Reflector,
  useTexture,
  Sphere,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  materialIndex: number;
  lightActive: boolean;
};

const Room = (props: Props) => {
  const { scene, parser, animations } = useGLTF('./table12.glb');
  // console.log(animations);
  console.log(scene);

  const { camera } = useThree();

  const { actions, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    if (scene) {
      scene.scale.set(0, 0, 0);
    }
  }, [scene]);

  // console.log(scene);

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

  const lamp = scene.getObjectByName('LampShade')!;
  // console.log(lamp);
  const tableTop = scene.getObjectByName('Table_Top_Mesh')!;
  const lampMesh = scene.getObjectByName('LampMesh')!;
  const tableBaseFrame = scene.getObjectByName('TableBaseFrame')!;

  if (lamp) {
    // console.log('here');
    props.setLightPosition(lamp.position);
  }
  const woodTexture = useTexture('./woodTexture.jpg');
  woodTexture.repeat.set(4, 4);
  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
  const woodTexture_rough = useTexture('./woodTexture_rough.jpg');
  woodTexture_rough.repeat.set(4, 4);
  woodTexture_rough.wrapS = woodTexture_rough.wrapT = THREE.RepeatWrapping;
  const woodTexture_AO = useTexture('./woodTexture_AO.jpg');
  woodTexture_AO.repeat.set(4, 4);
  woodTexture_AO.wrapS = woodTexture_AO.wrapT = THREE.RepeatWrapping;

  useFrame((_state, delta) => {
    const { clock } = _state;
    const ypos = Math.abs(Math.sin(clock.getElapsedTime())) + 1;
    tableBaseFrame.position.y = ypos;
    lampMesh.position.y = ypos + 0.2;
    lamp.position.y = ypos + 1.15;
  });

  return (
    <>
      <group>
        <primitive object={scene}></primitive>
        <Plane
          rotation-x={degToRad(90)}
          scale={15}
          position-y={-0.03}
          receiveShadow={true}>
          <meshStandardMaterial
            // color={0xff0000}
            attach='material'
            roughness={0}
            metalness={0}
            map={woodTexture}
            roughnessMap={woodTexture_rough}
            aoMap={woodTexture_AO}
            displacementBias={-0.127}
            side={THREE.DoubleSide}

            // // metalness={0.8}
            // reflectivity={1}
          />
        </Plane>
      </group>
    </>
  );
};

export default Room;
