import React from 'react';
import Container from './UI/Container';
import CanvasWrapper from './ThreeJS/CanvasWrapper';
import Slider from './UI/Slider';

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className='relative flex flex-col-reverse md:flex-row  justify-between h-[70vh] items-center'>
      <div className='absolute z-10 left-0 md:relative '>
        <Slider
          options={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          ]}>
          <div className='flex items-center'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Slider>
        <Slider
          options={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          ]}>
          <div className='flex items-center'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Slider>
        <Slider
          options={[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          ]}>
          <div className='flex items-center'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Slider>
      </div>

      <div className='w-full md:w-1/2 h-full'>
        <CanvasWrapper />
      </div>
    </Container>
  );
};

export default Hero;
