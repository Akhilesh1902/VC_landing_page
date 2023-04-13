import React from 'react';
import clsx from 'clsx';
import MyDropDown from './DropDown';

interface Props extends React.PropsWithChildren {
  varient?: 'primary' | 'secondary' | 'transparent' | null;
  onClick: () => void;
  className?: string;
  rounded?: boolean;
  shadow?: boolean;

  dropdown?: boolean;
  options?: string[];
}

const Button = (props: Props) => {
  if (props.dropdown)
    return (
      <MyDropDown options={props.options} optionSelcect={props.onClick}>
        {props.children}
      </MyDropDown>
    );
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        'uppercase px-4 py-2 transition-background duration-300 ',
        {
          'bg-primary-red text-slate-50': props.varient === 'primary',
          'bg-gray-400 text-slate-800': props.varient === 'secondary',
          'bg-transparent text-slate-800 border-2 border-slate-800':
            props.varient === 'transparent',
          'bg-transparent text-slate-800': props.varient === null,
          'rounded-lg': props.rounded,
          'shadow-lg': props.shadow,
        },
        'hover:bg-lime-200 hover:text-slate-800',
        props.className
      )}>
      {props.children}
    </button>
  );
};

export default Button;
