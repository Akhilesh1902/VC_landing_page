import { useEffect, useState } from 'react';
import { Scene, Vector3 } from 'three';
import gsap from 'gsap';

const initialPosition = [
  new Vector3(-1.3151025772094727, 2.583855628967285, 0.3104785084724426),
  new Vector3(0.0002736106398515403, 1.5135929584503174, -0.025415688753128052),
  new Vector3(-1.478838562965393, 1.6522538661956787, 0.032681286334991455),
];

const useGsapAnimation = (animationObjects: string[], scene: Scene) => {
  const [animation, setAnimation] = useState<'up' | 'down' | null>(null);
  useEffect(() => {
    animationObjects.forEach((item, i) => {
      const obj = scene.getObjectByName(item);
      if (obj && animation) {
        gsap.to(obj.position, {
          y: initialPosition[i].y + (animation === 'up' ? 0.5 : 0),
          duration: 2,
        });
      }
    });
  }, [animation]);

  return [setAnimation] as const;
};

export default useGsapAnimation;
