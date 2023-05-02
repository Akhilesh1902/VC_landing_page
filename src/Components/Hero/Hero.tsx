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
          className='absolute w-full z-10 left-0 md:relative '>
          <Slider
            options={[
              'Store3D solution Furniture, Lighting, Paits, Tiles, Carpet, Sanitaryware companies',
            ]}>
            <div className='flex items-center text-start'>
              <p className='text-xl'>3DCommerce for Home-Decor</p>
            </div>
          </Slider>
          <Slider
            options={[
              'Empower Consumers to design homes using 3D digital twin of home-decor items and homes',
            ]}>
            <div className='flex text-start items-center'>
              <p className='text-xl'>Interior Design Solution for Home</p>
            </div>
          </Slider>
          <Slider options={[]}>
            <div className='flex text-start w-full items-center'>
              <p className='text-xl'>3D, Web, AI, Blockchain Technologies.</p>
            </div>
          </Slider>
        </motion.div>

        <div className='w-full md:w-1/2 grid place-items-center h-full'>
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
  <div className=' my-4 bg w-full bottom-10 left z-20 text-primary-red flex justify-center items-center'>
    <p className='p-2 px-12 bg-primary-red/40 w-fit h-fit text-center'>
      Reduce returns by 50% per Harris poll
    </p>
    <p className='p-2 px-12 bg-primary-red/40 w-fit h-fit text-center'>
      Shopify users experiencing 250% increase in sales due to 3D & AR
    </p>
    <p className='p-2 px-12 bg-primary-red/40 w-fit h-fit text-center'>
      Thrill your customers with rich user experiences experiences
    </p>
  </div>
);
