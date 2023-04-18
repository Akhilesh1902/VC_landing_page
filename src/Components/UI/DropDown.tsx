import { useState } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export interface DropDownOptions {
  innerText: string;
  url?: string;
}
interface Props extends React.PropsWithChildren {
  options: DropDownOptions[];
  optionSelcect: () => void;
}

const DropDown = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigateTo = useNavigate();
  const openDropDown = () => {
    setShowOptions((p) => !p);
  };
  const handleOptionSelect = () => {
    console.log('handeling dropdown select');
    setShowOptions(false);
    props.optionSelcect();
  };
  return (
    <div className='relative'>
      <Button type='button' onClick={openDropDown}>
        {props.children}
      </Button>
      {showOptions && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className='absolute z-10 bg-white top-full flex flex-col w-full shadow-md shadow-gray-300 rounded'>
          {props.options &&
            props.options.map((item, i) => (
              <Button
                key={i}
                type='button'
                onClick={handleOptionSelect}
                url={item.url}
                rounded
                className='m-2'>
                {item.innerText}
              </Button>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default DropDown;
