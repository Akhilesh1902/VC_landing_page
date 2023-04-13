import React from 'react';

type Props = {};

const Lightings = (props: Props) => {
  return (
    <>
      <ambientLight intensity={0.3} color={0xffffff} />
      <directionalLight
        intensity={1}
        color={0xffffff}
        position={[5, 5, 5]}
        castShadow
      />
    </>
  );
};

export default Lightings;
