import React from 'react';
import { Container } from '../Components/UI';
import { VisCommerce_levels, WhiteLabeling } from '../assets/images';
import { whiteLabelingData } from '../Components/constants';
import clsx from 'clsx';

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div>
      <div className='relative bg-primary-red w-screen py-2 md:py-10'>
        <h1 className='text-white text-center font-bold text-md  md:text-xl tracking-wider'>
          Pricing
        </h1>
      </div>
      <div className=' bg-primary-red/10 py-10'>
        <Container className=''>
          <div className='flex flex-col md:grid lg:mx-20 grid-cols-2 grid-rows-2 gap-5'>
            <div className='flex flex-col items-center gap-3 bg-white rounded-lg p-5'>
              <h1 className=''>Room 3D</h1>
              <h2 className='bg-primary-red w-full text-center text-white rounded'>
                Contact Us - sales@viscommerce.com
              </h2>
              <img src={VisCommerce_levels} alt='' />
            </div>
            <div className='flex flex-col  row-span-2 items-center gap-3 bg-white rounded-lg p-5'>
              <h1 className=''>Store Front 3D</h1>
              <h2 className='bg-primary-red w-full text-center text-white rounded'>
                $2,500 (Starting)
              </h2>
              <div className='flex flex-col w-full px-3 gap-6'>
                <div className='hidden lg:flex flex-col gap-2'>
                  <h2 className='font-bold'>Addon for eCommerce Store</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; Home Décor sector</p>
                    <p>
                      &#x2022; Furniture, lighting, paints, tiles, plants,
                      sanitaryware companies
                    </p>
                    <p>&#x2022; 3DCommerce compliant</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>SKU</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; 50 glTF, optimized models</p>
                    <p>
                      &#x2022; Pricing will proportionally increase with number
                      of SKU's.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Basic</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; Zoom, Pan, Rotate</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Material Varient</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; Colors, Textures, Materials (e.g., Leather, Wood,
                      Glass etc.)
                    </p>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Animation (Movements)</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; E.g. Demonstration of table heights for ergonomic
                      tables
                    </p>
                    <p>&#x2022; E.g. Operating cabinet doors</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Lightings</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; Controls for On/Off, Intensity, Color</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Integration</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; For e.g. with eCommerce systems such as Magento,
                      OpenCart
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Collateral</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; Related Explainer Video, Documentation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-start-2 flex flex-col items-center gap-3  bg-white rounded-lg p-5'>
              <h1 className=''>Home 3D</h1>
              <h2 className='bg-primary-red w-full text-center text-white rounded'>
                Contact Us - sales@viscommerce.com
              </h2>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Store Front 3D</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; See pricing for StoreFront3D</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Home 3D_App</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; Customization (eg., billing)</p>
                    <p>&#x2022; Branding</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Home 3D Server</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; Rendered Images (market price in the $50 to $200
                      range)
                    </p>
                    <p>&#x2022; Revenue Share between VisCommerce and Brand </p>
                  </div>
                </div>
              </div>
            </div>
            <Container className='w-full flex flex-col gap-10 py-10 px-5 items-center col-span-2 mt-10 bg-white'>
              <h1 className='text-2xl font-bold '>
                Viscommerce Room3D - White Labelling
              </h1>
              <div className='flex flex-col md:grid grid-flow-row grid-cols-2 gap-4'>
                {whiteLabelingData.map((item, i) => (
                  <div
                    className={clsx(
                      'text-white p-4 rounded shadow-gray-500 shadow-md',
                      `bg-${item.background}-400`,
                      {
                        'bg-cyan-300': i === 0,
                        'bg-fuchsia-400': i === 1,
                        'bg-blue-400': i === 2,
                        'bg-violet-400': i === 3,

                        'row-span-2 row-start-2 col-start-2 bg-rose-300':
                          i === 4,
                      }
                    )}>
                    <h1 className='capitalize font-bold text-xl'>
                      {item.title}
                    </h1>
                    <h3 className='font-bold mt-4'>{item.subTitle}</h3>
                    <div className='ml-4'>
                      {item.list.map((item, i) => (
                        <p>&#x2022; {item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;
