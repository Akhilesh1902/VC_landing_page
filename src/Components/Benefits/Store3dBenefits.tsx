import React from 'react';
import { Container } from '../UI';
import {
  Enhance_Brand_1,
  DayStore3dLogo,
  Groww_Revenue_image,
  Product_Return_1,
  commerce3d,
  glTfimage,
  Draco_logo,
  KTX_logo,
  DRM,
} from '../../assets/images';
import Footer from '../Footer/Footer';
type Props = {};

const Store3dBenefits = (props: Props) => {
  return (
    <div>
      <div className='bg-primary-red w-screen flex flex-col items-center gap-2 py-5'>
        <div className='w-32'>
          <img src={DayStore3dLogo} alt='store front' className='w-full ' />
        </div>
        <h1 className='text-white font-bold text-xl tracking-wider'>
          Store3D Benefits
        </h1>
      </div>
      <Container className='flex flex-col items-center gap-32'>
        <div className='flex flex-col md:flex-row gap-10 items-center  '>
          <div>
            <img
              src={Groww_Revenue_image}
              alt='grow revenue'
              className='w-96'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight'>
              1 Grow Revenue
            </h1>
            <h2 className='font-bold text-lg'>
              Increase Traffic and Conversions
            </h2>
            <div className='ml-10 flex flex-col gap-2'>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
            </div>
            <h2 className='font-bold text-lg'>Google Analytics</h2>
            <div className='ml-10 flex flex-col gap-2'>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
            </div>
            <h2 className='font-bold text-lg'>Survey Agency</h2>
            <div className='ml-10 flex flex-col gap-2'>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse gap-10 items-center  '>
          <div>
            <img src={Product_Return_1} alt='grow revenue' className='w-96' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight'>
              2 Reduce Product Return
            </h1>
            <div className='ml-10 flex flex-col gap-2'>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10 items-center  '>
          <div>
            <img src={Enhance_Brand_1} alt='grow revenue' className='w-96' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight'>
              2 Enhanced Brand
            </h1>
            <div className='ml-10 flex flex-col gap-2'>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
              <p className='opacity-50'>&#x2022; Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <CardSection />
        <div className='w-full flex flex-col items-center gap-10 mb-10'>
          <h1 className='font-bold text-lg md:text-2xl'>
            DRM (Dgital Rights Management)
          </h1>
          <div
            style={{
              boxShadow: '0px 0px 10px  #42424266',
            }}
            className='flex flex-col md:flex-row w-full justify-center items-center gap-5 pb-10 md:pb-0 bg-yellow-300/30 rounded-xl  '>
            <div className='my-10'>
              <img src={DRM} alt='' className='w-40 object-cover' />
            </div>
            <div className='px-3'>
              <p className=''>&#x2022; Lorem ipsum dolor sit amet.</p>
              <p className=''>
                &#x2022; Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Iusto, dolorum.
              </p>
              <p className=''>
                &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eveniet, temporibus.
              </p>
              <p className=''>
                &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Store3dBenefits;

const CardSection = () => {
  return (
    <div className='flex flex-col  md:grid grid-cols-2 grid-rows-2 gap-5 w-full px-5'>
      <div className='bg-green-300 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={commerce3d} alt='' className='h-8 m-auto' />
        </div>
        <h2 className='font-bold'>3d Commerce Guidelines</h2>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <h2 className='font-bold'>PBR</h2>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='bg-red-300 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={glTfimage} alt='' className='h-8 m-auto' />
        </div>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='bg-orange-200 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={Draco_logo} alt='' className='h-8 m-auto' />
        </div>
        <h2 className='font-bold'>Mesh Compression</h2>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='bg-blue-200 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={KTX_logo} alt='' className='h-8 m-auto' />
        </div>
        <h2 className='font-bold'>3d Commerce Guidelines</h2>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
        <p className='opacity-80'>&#x2022; Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
