import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Container from './Container';
import clsx from 'clsx';
import { TbPhysotherapist } from 'react-icons/tb';

interface Props extends React.PropsWithChildren {
  buttonText: string;
  imgsrc: string;
  imageBg?: string;
}

const ImageDropper = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: `${props.imageBg || 'white'}` }}
      className={clsx(
        'relative   w-full md:mx-4 ',
        `!bg-[${props.imageBg || '#ffffff'}]`,
        {
          'rounded-full': !open,
          'rounded-t-[30px] ': open,
        }
      )}>
      <button
        className={clsx(
          'rounded-full z-20 asolute py-4 px-8 w-full flex justify-between items-center outline outline-1 outline-gray-200 bg-white text-black text-sm md:text-base font-bold shadow-lg',
          {
            'text-primary-red': open,
          }
        )}
        onClick={() => {
          setOpen((p) => !p);
        }}>
        <p>{props.buttonText}</p>
        {!open ? <BiChevronDown size={24} /> : <BiChevronUp size={24} />}
      </button>
      {open && (
        <Container className='w-[95%] -10 mt-5 !p-0'>
          {props.children}
          <img src={props.imgsrc} alt='' className='' />
        </Container>
      )}
    </div>
  );
};

export default ImageDropper;
