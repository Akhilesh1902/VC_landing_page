import React, { Suspense, useState } from 'react';
import { Container, DropDown, ImageDropper } from '../UI/';
// import CanvasWrapper from './ThreeJS/CanvasWrapper';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { VisCommerce_levels } from '../../assets/images';

import Slider from '../UI/Slider';

const CanvasWrapper = React.lazy(() => import('../ThreeJS/CanvasWrapper'));

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className='relative'>
      <div className='relative flex flex-col-reverse md:flex-row  justify-between h-[70vh] items-center'>
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
          <Suspense
            fallback={
              <div className='w-full h-full grid place-items-center'>
                <p className='w-max'>Loading</p>
              </div>
            }>
            <CanvasWrapper />
          </Suspense>
        </div>
      </div>
      <Marque />
      <ImageDropper buttonText='Our Offerings' imgsrc={VisCommerce_levels} />
    </Container>
  );
};

export default Hero;

const Marque = () => (
  <div className=' my-4 bg p-1 w-full z-20 text-primary-red hidden md:flex '>
    <p className='p-2 bg-primary-red/40 w-full text-center'>
      Lorem, ipsum dolor
    </p>
    <p className='p-2 bg-primary-red text-white/70 w-full text-center'>
      Lorem, ipsum dolor
    </p>
    <p className='p-2 bg-primary-red/40 w-full text-center'>
      Lorem, ipsum dolor
    </p>
  </div>
);
