import React from 'react';
import { Button, Container } from '../UI';
import Logo from '../../assets/Logo.svg';

type Props = {
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer = (props: Props) => {
  return (
    <div className='bg-white'>
      <div className='bg-primary-red py-3 w-full flex flex-col md:flex-row items-center justify-center gap-5'>
        <h2 className='text-white font-bold'>Ready for VisCommerce?</h2>
        <Button
          type='button'
          onClick={() => {
            console.log('clicking button');
            props.setOpenModel(true);
          }}
          rounded
          className='bg-white px-10'>
          Reach Us
        </Button>
      </div>
      <Container className='py-14 flex justify-center'>
        <div className='flex w-full flex-col md:flex-row justify-center gap-6 '>
          <div className=''>
            <img src={Logo} alt='' className='h-16' />
          </div>
          <ul className='text-xs flex flex-col gap-3'>
            <li className='font-bold text-sm'>Company</li>
            <li>Team</li>
            <li>Filed with USTPO(US), IPO(India)</li>
          </ul>
          <ul className='text-xs flex flex-col gap-3'>
            <li className='font-bold text-sm'>Resources</li>
            <li>Support</li>
            <li>Terms and Privacy</li>
          </ul>
          <div className='text-xs grid grid-cols-4 grid-rows-4 gap-1'>
            <h1 className='font-bold text-sm col-span-4'>Contact</h1>
            <p className='capitalize font-bold'>Email</p>
            <p className='capitalize col-span-3'>info@viscommerce.com</p>
            <p className='capitalize font-bold'>Phone</p>
            <div className='capitalize col-span-3'>
              <p>India +91-906-324-3163</p>
              <p>US +1-279-666-9172</p>
            </div>
            <p className='capitalize font-bold'>Address</p>
            <p className='capitalize col-span-3'>
              2108 N St STE 200, Sacremento, California, USA - 95816
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
