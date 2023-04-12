import clsx from 'clsx';
import React from 'react';

interface Props extends React.PropsWithChildren {
  className?: string;
}

const Container = (props: Props) => {
  return (
    <div className={clsx('w-full max-w-7xl px-4 m-auto ', props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
