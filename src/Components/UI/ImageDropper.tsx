import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Container from './Container';

interface Props extends React.PropsWithChildren {
  buttonText: string;
  imgsrc: string;
}

const ImageDropper = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative w-full md:mx-4 '>
      <button
        className='rounded-full py-4 px-8 w-full flex justify-between items-center bg-white text-primary-red text-sm font-bold shadow-lg'
        onClick={() => {
          setOpen((p) => !p);
        }}>
        <p>{props.buttonText}</p>
        {!open ? <BiChevronDown size={24} /> : <BiChevronUp size={24} />}
      </button>
      {open && (
        <Container className='w-[95%] z-10 !p-0'>
          {props.children}
          <img src={props.imgsrc} alt='' className='' />
        </Container>
      )}
    </div>
  );
};

export default ImageDropper;
