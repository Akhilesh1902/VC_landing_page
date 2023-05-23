import React from 'react';
import { Container, ImageDropper } from '../UI';
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
  Grow_Revenue_Text,
} from '../../assets/images';
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
      <Container className='flex flex-col mt-10 items-center gap-32'>
        <div className='flex flex-col gap-10 items-center  '>
          <h1 className='font-bold text-3xl md:text-5xl tracking-tight'>
            1 Grow Revenue
          </h1>
          <div className='flex flex-col md:flex-row gap-10 items-center  '>
            <div>
              <img
                src={Groww_Revenue_image}
                alt='grow revenue'
                className='w-96'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <img
                src={Grow_Revenue_Text}
                alt='grow revenue'
                className='w-96'
              />
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
              <p className='opacity-50'>
                &#x2022; Average product return rate in eCommerce 20% - 30%
              </p>
              <p className='opacity-50'>
                &#x2022; Using 3D / AR Shopify found returns reduce by 5%
              </p>
              <p className='opacity-50'>&#x2022; Improves bottom-line</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10 items-center  '>
          <div>
            <img src={Enhance_Brand_1} alt='grow revenue' className='w-96' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight'>
              3 Enhanced Brand
            </h1>
            <div className='ml-10 flex flex-col gap-2'>
              <p className='opacity-50'>
                &#x2022; Ergonomic recommendations from osha <br />
                <a href='https://www.osha.gov/ergonomics' className='ml-5'>
                  https://www.osha.gov/ergonomics
                </a>
              </p>
              <p className='opacity-50'>
                &#x2022; Lighting recommendations from standards bodies <br />
                <a
                  href='https://www.iso.org/committee/4418564.html'
                  className='ml-5'>
                  https://www.iso.org/committee/4418564.html
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className='py-10 bg-[#f5f5f5] '>
        <Container className='flex flex-col gap-10'>
          <ImageDropper buttonText='3DCommerce and glTF' imgsrc=''>
            <CardSection />
          </ImageDropper>
          <ImageDropper buttonText='DRM (Digital Rights Management)' imgsrc=''>
            <DigitalRightsManagement />
          </ImageDropper>
        </Container>
      </div>
    </div>
  );
};

export const DigitalRightsManagement = () => (
  <div className='w-full flex flex-col items-center gap-10 mb-10'>
    <h1 className='font-bold text-lg md:text-2xl'>
      DRM (Digital Rights Management)
    </h1>
    <div
      style={{
        boxShadow: '0px 0px 10px  #42424266',
      }}
      className='flex flex-col md:flex-row w-full justify-center items-center gap-5 pb-10 md:pb-0 bg-yellow-300/30 rounded-xl  '>
      <div className='my-10'>
        <img src={DRM} alt='' className='w-40 object-cover' />
      </div>
      <div className='px-3 flex flex-col gap-2'>
        <p className=''>&#x2022; Protect 3D Assets Against theft on the Web.</p>
        <p className=''>
          &#x2022; Varying Level of Crypto can be applied Depending on customer
          requirement.
        </p>
        <p className=''>
          &#x2022; Strong Public-Key Cryptography (RS) coupled with Symmetric
          crypto algorithm (RC2) also available.
        </p>
        <p className=''>&#x2022; Patent Pending.</p>
      </div>
    </div>
  </div>
);

export default Store3dBenefits;

const CardSection = () => {
  return (
    <div className='flex flex-col md:grid grid-cols-2 grid-rows-2 gap-5 w-full px-5'>
      <div className='bg-green-300 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={commerce3d} alt='' className='h-8 m-auto' />
        </div>
        <h2 className='font-bold'>3d Commerce Guidelines</h2>
        <a
          className='opacity-80'
          href='https://github.com/KhronosGroup/3DC-Asset-Creation'>
          &#x2022; https://github.com/KhronosGroup/3DC-Asset-Creation
        </a>
        <h2 className='font-bold'>PBR</h2>
        <p className='opacity-80'>&#x2022; Physically based rendering.</p>
        <p className='opacity-80'>&#x2022; Compliant to laws of Physics.</p>
        <p className='opacity-80'>
          &#x2022; Ability to showcase many materials and their interaction with
          light (e.g Wood, Leather, Glass etc)
        </p>
        <p className='opacity-80'>&#x2022; view pdf</p>
      </div>
      <div className='bg-red-300 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={glTfimage} alt='' className='h-8 m-auto' />
        </div>
        <p className='opacity-80'>
          &#x2022; Graphics Language Transmission Format.
        </p>
        <p className='opacity-80'>
          &#x2022; Industry Standard with broad backing (e.g Google, Microsoft,
          Shopify, Wayfair etc)
        </p>
        <p className='opacity-80'>&#x2022; Describe complete scenes.</p>
        <p className='opacity-80'>
          &#x2022; Windows, Android, iOS - Consistent Visual Fidelity.
        </p>
        <p className='opacity-80'>
          &#x2022; Google Chrome, Microsoft Edge, Safari and other HTML5
          web-browsers - Consistent Visual Fidelity.
        </p>
        <a href='https://www.khronos.org/gltf/' className='opacity-80'>
          &#x2022; https://www.khronos.org/gltf/
        </a>
      </div>
      <div className='bg-orange-200 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={Draco_logo} alt='' className='h-8 m-auto' />
        </div>
        <h2 className='font-bold'>Mesh Compression</h2>
        <p className='opacity-80'>
          &#x2022; 10x to 25x reduction in mesh size.
        </p>
        <p className='opacity-80'>
          &#x2022; Google's innovation contributed to open-source.
        </p>
        <a href='https://google.github.io/draco/' className='opacity-80'>
          &#x2022; https://google.github.io/draco/
        </a>
      </div>
      <div className='bg-blue-200 p-5 shadow-2xl rounded-2xl pb-10'>
        <div className='my-5'>
          <img src={KTX_logo} alt='' className='h-8 m-auto' />
        </div>
        <h2 className='font-bold'>Texture Comparision</h2>
        <p className='opacity-80'>
          &#x2022; Reduces download time and processing (ktx2)
        </p>
        <p className='opacity-80'>&#x2022; Leverages GPU's.</p>
        <a href='https://www.khronos.org/ktx/' className='opacity-80'>
          &#x2022; https://www.khronos.org/ktx/
        </a>
      </div>
    </div>
  );
};
