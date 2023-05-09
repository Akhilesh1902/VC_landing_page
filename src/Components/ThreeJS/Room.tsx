import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';

type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  materialIndex: number;
};

const Room = (props: Props) => {
  const { scene, parser } = useGLTF('./table.glb');
  console.log(scene);

  const { camera } = useThree();
  useEffect(() => {
    camera.position.y = 3;
  }, []);
  useEffect(() => {
    if (scene) {
      scene.scale.set(0, 0, 0);
      // gsap.to(scene.scale, {
      //   duration: 1.5,
      //   ease: "ease-in",
      //   x:  1,
      //   y:  1,
      //   z:  1,
      // });
    }
  }, [scene]);

  console.log(scene);

  useFrame((_state, delta) => {
    if (scene) scene.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
  });

  scene.traverse(async (item) => {
    if (item instanceof THREE.Mesh) {
      item.castShadow = true;
      item.receiveShadow = true;

      if (item.name === 'Lamp_shade') {
        item.material.roughness = 0.5;
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
  const lamp = scene.getObjectByName('Lamp');
  lamp?.traverse((item) => {
    if (
      item instanceof THREE.Mesh &&
      item.material.name === 'Mat_Laptop_Front'
    ) {
      item.material.roughness = 0.4;
    }
  });

  if (lamp) {
    props.setLightPosition(lamp.position);
  }

  return (
    <>
      <group>
        <primitive object={scene}></primitive>
      </group>
    </>
  );
};

export default Room;
