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
              'Furniture, Lighting, Paits, Tiles, Carpet, Sanitaryware companies',
            ]}>
            <div className='flex items-center text-start'>
              <p>
                <span className='text-primary-red'>
                  3D Commerce solution for
                </span>{' '}
                Home-Decor companies - Store3D
              </p>
            </div>
          </Slider>
          <Slider
            options={[
              'Empower Consumers to design homes using 3D digital twin of home-decor items and homes',
            ]}>
            <div className='flex text-start items-center'>
              <p>
                Interior Design Solution for -{' '}
                <span className='text-primary-red'>Home3D</span>
              </p>
            </div>
          </Slider>
          <Slider options={[]}>
            <div className='flex text-start items-center'>
              <p>
                Innovative Solutions leveraging 3D, Web, AI, Blockchain
                Technologies.
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
