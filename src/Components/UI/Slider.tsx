import { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

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
        className='capitalize whitespace-break-spaces font-bold hover:bg-transparent'>
        {props.children}
      </Button>
      {showOptions && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
          exit={{ x: 50, opacity: 0 }}
          className='flex flex-col items-start gap-2 w-full rounded ml-10'>
          {props.options &&
            props.options.map((item) => (
              <p
                onClick={handleOptionSelect}
                className='text-sm text-black/50 font-bold capitalize text-start w-[70%] hover:bg-transparent'>
                {item}
              </p>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default Slider;
