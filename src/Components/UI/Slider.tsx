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
      <Button onClick={openDropDown} className='capitalize font-bold'>
        {props.children}
      </Button>
      {showOptions && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
          exit={{ x: 50, opacity: 0 }}
          className='flex flex-col w-full rounded ml-4'>
          {props.options &&
            props.options.map((item) => (
              <Button
                onClick={handleOptionSelect}
                rounded
                className='text-xs capitalize'>
                {item}
              </Button>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default Slider;
