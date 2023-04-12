import { useState } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

interface Props extends React.PropsWithChildren {
  options?: string[];
  optionSelcect: () => void;
}

const DropDown = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const openDropDown = () => {
    console.log('opening Dropdown');
    setShowOptions((p) => !p);
  };
  const handleOptionSelect = () => {
    setShowOptions(false);
    props.optionSelcect();
  };
  return (
    <div className='relative'>
      <Button onClick={openDropDown}>{props.children}</Button>
      {showOptions && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className='absolute top-full flex flex-col w-full shadow-md shadow-gray-300 rounded'>
          {props.options &&
            props.options.map((item) => (
              <Button onClick={handleOptionSelect} rounded className='m-2'>
                {item}
              </Button>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default DropDown;
