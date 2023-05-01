import React from 'react';
import clsx from 'clsx';
import MyDropDown, { DropDownOptions } from './DropDown';
import { useNavigate } from 'react-router-dom';

interface DefaultProps extends React.PropsWithChildren {
  className?: string;
  shadow?: boolean;
  innertext?: string;
}
interface ButtonProps extends DefaultProps {
  onClick: (e: React.MouseEvent) => void;
  rounded?: boolean;
  url?: string;
  varient?: 'primary' | 'secondary' | 'transparent' | null;
  type: 'button';
}

interface DropdownProps extends DefaultProps {
  // dropdown?: boolean;
  type: 'dropdown';
  options: DropDownOptions[];

  optionSelect: () => void;
}

type Props = ButtonProps | DropdownProps;

const Button = (props: Props) => {
  if (props.type === 'dropdown')
    return (
      <>
        {props.options && (
          <MyDropDown
            options={props.options}
            optionSelcect={props.optionSelect}>
            {props.children}
          </MyDropDown>
        )}
      </>
    );

  const navigateto = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(props.url);
    if (props.url) {
      navigateto(props.url);
    }
    props.onClick(e);
  };

  return (
    <button
      onClick={(e) => {
        if (props.url) {
          handleClick(e);
          return;
        }
        props.onClick ? props.onClick(e) : handleClick(e);
      }}
      className={clsx(
        'capitalize text-base whitespace-nowrap px-4 py-2 transition-background duration-300 ',
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
      )}
      data-innertext={props.innertext}>
      {props.children}
    </button>
  );
};

export default Button;
