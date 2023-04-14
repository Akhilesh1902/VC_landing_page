import React from 'react';
import { Container } from '../Components/UI';
import { VisCommerce_levels } from '../assets/images';

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
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Addon for eCommerce Store</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Addon for eCommerce Store</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Addon for eCommerce Store</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>Addon for eCommerce Store</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                    <p>
                      &#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-start-2 flex flex-col items-center gap-3  bg-white rounded-lg p-5'>
              <h1 className=''>My Space 3D</h1>
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
                  <h2 className='font-bold'>MySpace3D_App</h2>
                  <div className='text-sm ml-5 opacity-60 flex flex-col gap-1'>
                    <p>&#x2022; Customization (eg., billing)</p>
                    <p>&#x2022; Branding</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>MySpace3D Server</h2>
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;
