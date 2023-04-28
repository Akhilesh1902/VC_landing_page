import React, { Suspense } from 'react';
import { Container, ImageDropper, Slider } from '../UI/';
import { VisCommerce_levels } from '../../assets/images';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
// import Slider from '../UI/Slider';

const CanvasWrapper = React.lazy(() => import('../ThreeJS/CanvasWrapper'));

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className=' h-screen flex flex-col justify-between'>
      <div className='relative flex flex-col-reverse md:flex-row  justify-between h-[70vh] items-center'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className='absolute z-10 left-0 md:relative '>
          <Slider
            options={[
              'Furniture, Lighting, Paints, Tiles, Carpets, Sanitaryware and related sectors',
              'Increase revenue, reduce product returns and enhance brand value',
            ]}>
            <div className='flex items-center text-start'>
              <p>
                <span className='text-primary-red'>
                  Interactive 3D marketing
                </span>{' '}
                solutions for Home-Decor sector
              </p>
            </div>
          </Slider>
          <Slider
            options={[
              'Home owners empowered to create stunning interior-designs, until now offered only by expensive designers.',
              'Scale, Shape and Material accuracy.',
              'Save time and money.',
            ]}>
            <div className='flex text-start items-center'>
              <p>
                Democratizing{' '}
                <span className='text-primary-red'>Interior Design</span>
              </p>
            </div>
          </Slider>
          <Slider options={[]}>
            <div className='flex text-start items-center'>
              <p>
                Technology platform composed of 3D, AI, BlockChain, Crypto etc.,
              </p>
            </div>
          </Slider>
        </motion.div>

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
      <Marquee>
        <Marque />
      </Marquee>
      <ImageDropper buttonText='Our Offerings' imgsrc={VisCommerce_levels} />
    </Container>
  );
};

export default Hero;

const Marque = () => (
  <div className=' my-4 bg p-1 w-full bottom-10 left z-20 text-primary-red flex justify-center items-center'>
    <p className='p-2 bg-primary-red/40 w-fit h-fit text-center'>
      Reduce returns by 50% per Harris poll
    </p>
    <p className='p-2 bg-primary-red text-white/70 w-fit h-fit text-center'>
      Shopify users experiencing 250% increase in sales due to 3D & AR
    </p>
    <p className='p-2 bg-primary-red/40 w-fit h-fit text-center'>
      Thrill your customers with rich user experiences experiences
    </p>
  </div>
);
