import React from 'react';
import clsx from 'clsx';
import MyDropDown, { DropDownOptions } from './DropDown';
import { useNavigate } from 'react-router-dom';

interface DefaultProps extends React.PropsWithChildren {
  className?: string;
  shadow?: boolean;
}
interface ButtonProps extends DefaultProps {
  onClick: () => void;
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

// interface Props extends React.PropsWithChildren {
//   varient?: 'primary' | 'secondary' | 'transparent' | null;
//   onClick: () => void;
//   className?: string;
//   rounded?: boolean;
//   shadow?: boolean;
//   url?: string;

//   dropdown?: boolean;
//   options?: string[];
//   optionsUrl?: string[];
// }

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

  const handleClick = () => {
    if (props.url) {
      navigateto(props.url);
      return;
    }
    props.onClick();
  };

  return (
    <button
      onClick={handleClick}
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
