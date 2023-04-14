import React from 'react';
import { PRS, RM, STL } from '../../assets/images';
import { Container } from '../UI';
import clsx from 'clsx';
type Props = {};

const MySpace3dBenefits = (props: Props) => {
  return (
    <div className=''>
      <div className='relative bg-primary-red w-screen py-10'>
        <Container className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <h1 className='text-white text-center font-bold text-md mb-10 md:m-0 md:text-xl tracking-wider'>
            MySpace3D benefits
            <br /> For Businesses in Home Decor Sector
          </h1>
          <div className=' md:w-[30vw] max-w-xl aspect-[9/5]'>
            <iframe
              // width='560'
              // height='315'
              width={'100%'}
              height={'100%'}
              src='https://www.youtube.com/embed/f0iavIsMG1g?start=1'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
          </div>
        </Container>
      </div>
      <Container className='flex flex-col md:flex-row my-16 gap-5'>
        <BenefitsCard
          image={PRS}
          title='Profitable Revenue Stream'
          color='green'
        />
        <BenefitsCard image={RM} title='Renovation Market' color='red' />
        <BenefitsCard image={STL} title='Shop The Look' color='blue' />
      </Container>
    </div>
  );
};

export default MySpace3dBenefits;

interface CardProps {
  image: string;
  title: string;
  color: 'red' | 'green' | 'blue';
}

const BenefitsCard = (props: CardProps) => {
  return (
    <div
      className={clsx('p-5 flex flex-col items-center rounded-lg', {
        'bg-green-200': props.color === 'green',
        'bg-red-200': props.color === 'red',
        'bg-sky-200': props.color === 'blue',
      })}>
      <div className='h-64 my-10'>
        <img src={props.image} alt='' className='h-full object-contain' />
      </div>
      <div className='flex flex-col my-10 gap-4'>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        <p>&#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <p>&#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <p>&#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <p>&#x2022; Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
