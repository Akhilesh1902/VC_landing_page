import {
  Plane,
  useAnimations,
  useGLTF,
  Reflector,
  useTexture,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
type Props = {
  setLightPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  materialIndex: number;
  lightActive: boolean;
};

const Room = (props: Props) => {
  const { scene, parser, animations } = useGLTF('./table_final3.glb');
  // console.log(animations);
  console.log(scene);

  const { camera } = useThree();

  const { actions, mixer } = useAnimations(animations, scene);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (actions) {
  //       // console.log(actions);

  //       const a = actions['Increase_Height'];
  //       if (a) {
  //         a.setLoop(THREE.LoopOnce, 0);
  //         a.play();
  //       }
  //       // console.log(a);
  //     }
  //   }, 1000);
  // }, [actions]);

  // useEffect(() => {
  //   camera.position.y = 3;
  // }, []);

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
      item.material.color = new THREE.Color('#d6ad67');

      console.log(item);
      item.material._transmission = 0.3;
      item.material.emissive = new THREE.Color('#ffd94f');
      item.material.emissiveIntensity = props.lightActive ? 0.5 : 0;
      // item.material.emissive = new THREE.Color('#dea049');
      console.log(item);
    }
  });

  if (lamp) {
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

  // @ts-ignore
  return (
    <>
      <group position-y={-0.5}>
        <primitive object={scene}></primitive>

        {/* <Reflector
          blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
          mixBlur={0.75} // How much blur mixes with surface roughness
          mixStrength={0.25} // Strength of the reflections
          resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
          args={[50, 50]} // PlaneBufferGeometry arguments
          rotation={[-Math.PI * 0.5, 0, 0]}
          position-y={-0.64}
          mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          minDepthThreshold={0.25}
          maxDepthThreshold={1}
          depthScale={50}
          receiveShadow={true}
          castShadow>
          {(Material, props) => (
            // @ts-ignore
            <Material
            shadowSide={}
              color={0xf5f5f5}
              metalness={0.5}
              roughness={0.1}
              {...props}
            />
          )}
        </Reflector> */}

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
