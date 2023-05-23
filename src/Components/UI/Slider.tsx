import { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
  options?: string[];
}

const Slider = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const openDropDown = () => {
    console.log('opening slider');
    setShowOptions((p) => !p);
  };
  const handleOptionSelect = () => {
    setShowOptions(false);
  };
  return (
    <div className='relative'>
      <Button
        type='button'
        onClick={openDropDown}
        className={clsx(
          'capitalize whitespace-break-spaces font-bold hover:bg-transparent hover:text-primary-red/50  flex items-center gap-3',
          { 'text-primary-red': showOptions }
        )}>
        {!showOptions ? (
          <AiOutlinePlusCircle size={24} />
        ) : (
          <AiOutlineMinusCircle size={24} />
        )}
        {props.children}
      </Button>
      {showOptions && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
          exit={{ x: 50, opacity: 0 }}
          className='flex flex-col items-start gap-2 w-fit rounded ml-10'>
          {props.options &&
            props.options.map((item) => (
              <p
                onClick={handleOptionSelect}
                className='text-sm text-black/50 font-bold capitalize text-start w-full hover:bg-transparent'>
                {item}
              </p>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default Slider;
