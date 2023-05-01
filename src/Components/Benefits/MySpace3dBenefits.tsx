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
            Home 3D benefits
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
      <Container className='grid md:grid-cols-3 my-16 gap-5'>
        <BenefitsCard
          image={PRS}
          title='Profitable Revenue Stream'
          color='green'
          benefits={[
            'Photo-realistic rendered https://d3dykpiro6a7pn.cloudfront.net/images and videos give consumers an accurate view of their finished design.',
            'Consumers tend to order a few viewpoints of a room before executing on designs, thereby saving time and money',
            'Photo-realist rendered https://d3dykpiro6a7pn.cloudfront.net/images and videos can be economically developed on VisCommerce’s specialized MySpace3D Servers due to the foundation of GPU farms',
            'They offer highly profitable revenue streams to home-decor sector',
          ]}
        />
        <BenefitsCard
          image={RM}
          title='Renovation Market'
          color='red'
          benefits={[
            'Renovation market is significantly larger than new home market.',
            'Consumer requirements tend to be much more clearly defined e.g a paint color that matches existing furniture',
            'MySpace3D App contains a 3D model of consumers space that has been reconstructed from pictures using AI algorithms. It is ensures shape, size and material accuracy',
            'Consumer is empowered to seek products in the market that fit their exact requirement e.g paint-color matching existing sofa.',
            'Huge new markets for biz in Home-Decor',
          ]}
        />
        <BenefitsCard
          image={STL}
          title='Shop The Look'
          color='blue'
          benefits={[
            'Most consumers are not trained architects or interior-designers.',
            `Merchants in the home-decor space can consult interior-designers and create a “look”`,
            'Consumers who can afford the componets in such a “shop the look” offering and like the decor can order the entire set.',
            'Merchants benefit due to the resultant bulk-sales',
          ]}
        />
      </Container>
    </div>
  );
};

export default MySpace3dBenefits;

interface CardProps {
  image: string;
  title: string;
  color: 'red' | 'green' | 'blue';
  benefits: string[];
}

const BenefitsCard = (props: CardProps) => {
  return (
    <div
      className={clsx(' flex flex-col w-full items-center rounded-lg', {
        'bg-green-200': props.color === 'green',
        'bg-red-200': props.color === 'red',
        'bg-sky-200': props.color === 'blue',
      })}>
      <div className='h-32 md:h-64 my-10'>
        <img src={props.image} alt='' className='h-full object-contain' />
      </div>
      <div className='flex flex-col md:px-5 my-10 gap-4'>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        {props.benefits.map((item, k) => (
          <p>&#x2022; {item}</p>
        ))}
      </div>
    </div>
  );
};
