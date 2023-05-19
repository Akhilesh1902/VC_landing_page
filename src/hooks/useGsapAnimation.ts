import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Scene, Vector3 } from 'three';
import gsap from 'gsap';
const offset = 0.5;

const useGsapAnimation = (animationObjects: string[], scene: Scene) => {
  const [animation, setAnimation] = useState<'up' | 'down' | null>(null);
  const [initialPosition, setInitialPosition] = useState<Vector3[]>();

  useEffect(() => {
    const d = animationObjects.map(
      (item) => scene.getObjectByName(item)!.position
    );
    console.log(d);
    if (d) setInitialPosition(d);
  }, []);

  // const { scene } = useThree();

  useEffect(() => {
    if (animation == 'up') {
      animationObjects.forEach((item, i) => {
        const obj = scene.getObjectByName(item);
        if (obj && initialPosition)
          gsap.to(obj.position, {
            // x: obj.position.x + offset,
            y: initialPosition[i].y + offset,
            // z: obj.position.z + offset,
            duration: 2,
          });
      });
    }
    if (animation == 'down') {
      animationObjects.forEach((item) => {
        const obj = scene.getObjectByName(item);
        if (obj)
          gsap.to(obj.position, {
            // x: obj.position.x + offset,
            y: obj.position.y - offset,
            // z: obj.position.z + offset,
            duration: 2,
          });
      });
    }
  }, [animation]);

  return [setAnimation];
};

export default useGsapAnimation;
