import React, { Suspense, useState } from 'react';
import { Container, ImageDropper, Slider } from '../UI/';
import { VisCommerce_levels } from '../../assets/images';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { BsChevronDown } from 'react-icons/bs';
// import Slider from '../UI/Slider';

const CanvasWrapper = React.lazy(() => import('../ThreeJS/CanvasWrapper'));

type Props = {};

const Hero = (props: Props) => {
  const [lightActive, setLightActive] = useState(false);
  const [tableMaterialIndex, setTableMaterialIndex] = useState<0 | 1 | 2>(1);
  const [animation, setAnimation] = useState<'up' | 'down' | null>(null);
  const [postProcessing, setPostProcessing] = useState<
    'SSAO' | 'SMAA' | 'SSR' | 'none'
  >('none');
  const [formOpen, setFromOpen] = useState(false);

  return (
    <div className='realtive bg-[#f5f5f5] w-full pb-10'>
      <div className='absolute w-[300px] z-10 top-0 right-10 '>
        <form
          action=''
          className='bg-white outline outline-1 text-sm p-4  rounded flex flex-col gap-3'>
          <h2
            className='font-bold flex items-center gap-2 cursor-pointer'
            onClick={() => {
              setFromOpen((p) => !p);
            }}>
            <BsChevronDown /> Controls{' '}
          </h2>
          {formOpen && (
            <div className='flex flex-col gap-3'>
              <label
                htmlFor=''
                className='grid grid-cols-2 gap-3 items-center font-bold'>
                Light
                <input
                  type='checkbox'
                  className='w-4 h-4'
                  onChange={(e) => {
                    setLightActive(e.target.checked);
                  }}
                />
              </label>
              <div>
                <label
                  htmlFor=''
                  className='grid grid-cols-2 flex-col items-center font-bold'>
                  Table Material
                  <div className='flex gap-2 '>
                    <div className='bg-yellow-700 w-6 h-6  '>
                      <input
                        className='w-full h-full opacity-0'
                        type='radio'
                        name='material'
                        onClick={(e) => {
                          setTableMaterialIndex(1);
                        }}
                      />
                    </div>
                    <div className='bg-orange-900 w-6 h-6  '>
                      <input
                        className='w-full h-full opacity-0'
                        type='radio'
                        name='material'
                        onClick={(e) => {
                          setTableMaterialIndex(0);
                        }}
                      />
                    </div>

                    <div className='bg-stone-900 w-6 h-6  '>
                      <input
                        className='w-full h-full opacity-0'
                        type='radio'
                        name='material'
                        onClick={(e) => {
                          setTableMaterialIndex(2);
                        }}
                      />
                    </div>
                  </div>
                </label>
              </div>
              <label htmlFor='' className='grid grid-cols-2 flex-col font-bold'>
                Table Height
                <div className='flex gap-2'>
                  <label htmlFor='' className='flex gap-2 items-center'>
                    Up
                    <input
                      type='radio'
                      name='height'
                      className='w-4 h-4'
                      onClick={(e) => {
                        setAnimation('up');
                      }}
                    />
                  </label>
                  <label htmlFor='' className='flex gap-2 items-center'>
                    Down
                    <input
                      type='radio'
                      name='height'
                      className='w-5 h-5'
                      onClick={(e) => {
                        setAnimation('down');
                      }}
                    />
                  </label>
                </div>
              </label>
              <select
                name='postprocessing'
                id='postprocessing'
                onChange={(e) => {
                  const val = e.target.value as typeof postProcessing;
                  console.log(val);
                  setPostProcessing(val);
                }}>
                <option value='SSAO'>SSAO</option>
                <option value='SMAA'>SMAA</option>
                <option value='SSR'>SSR</option>
                <option value='none'>none</option>
              </select>
            </div>
          )}
        </form>
      </div>
      <Container className='min-h-screen flex flex-col justify-between'>
        <div className='relative flex flex-col-reverse md:flex-row md:grid grid-cols-2 justify-between h-[70vh] items-center'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className='absolute w-fit z-10 left-0 md:relative '>
            <Slider
              options={[
                'Store3D solution Furniture, Lighting, Paits, Tiles, Carpet, Sanitaryware companies',
              ]}>
              <div className='flex items-center text-start gap-2'>
                <p className='text-xl'>&#x2022; 3DCommerce for Home-Decor</p>
                <BsChevronDown />
              </div>
            </Slider>
            <Slider
              options={[
                'Empower Consumers to design homes using 3D digital twin of home-decor items and homes',
              ]}>
              <div className='flex text-start items-center gap-2'>
                <p className='text-xl'>&#x2022; Interior Design for Home</p>
                <BsChevronDown />
              </div>
            </Slider>
            <Slider
              options={[
                'Innovative solutions leveraging foundational technologies of 3D, Web, AI, Blockchain',
              ]}>
              <div className='flex text-start w-full items-center gap-2'>
                <p className='text-xl'>&#x2022; 3D, Web, AI, Blockchain.</p>
                <BsChevronDown />
              </div>
            </Slider>
          </motion.div>

          <div className='w-full bg-gray-70  rounded-xl  grid place-items-center h-full'>
            <Suspense
              fallback={
                <div className='w-full h-full grid place-items-center'>
                  <p className='w-max'>Loading</p>
                </div>
              }>
              <CanvasWrapper
                postProcessing={postProcessing}
                lightActive={lightActive}
                tableMaterialIndex={tableMaterialIndex}
                animation={animation}
              />
            </Suspense>
          </div>
        </div>
        <Marquee>
          <Marque />
        </Marquee>
        <ImageDropper buttonText='Our Offerings' imgsrc={VisCommerce_levels} />
      </Container>
    </div>
  );
};

export default Hero;

const Marque = () => (
  <div className=' my-4 bg w-full bottom-10 left z-20 text-primary-red flex justify-center items-center'>
    <p className='p-2 px-12 bg-primary-red/40 w-fit h-fit text-center'>
      Reduce returns by 50% per Harris poll
    </p>
    <p className='p-2 px-12 bg-primary-red text-white w-fit h-fit text-center'>
      Shopify users experiencing 250% increase in sales due to 3D & AR
    </p>
    <p className='p-2 px-12 bg-primary-red/40 w-fit h-fit text-center'>
      Thrill your customers with rich user experiences experiences
    </p>
  </div>
);
