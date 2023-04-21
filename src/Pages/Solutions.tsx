import { useParams } from 'react-router-dom';
import { Button, Container } from '../Components/UI';
import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserExperience,
  VC_Experienve,
  WhiteLabeling,
  BrandExperience,
  VisCommerce_levels,
  bedroomImage,
  techStack,
} from '../assets/images';
import { useFrame } from '@react-three/fiber';
import { DigitalRightsManagement } from '../Components/Benefits/Store3dBenefits';

type Props = {};

const Solutions = (props: Props) => {
  const { type } = useParams();
  return (
    <div className='bg-transparent w-full'>
      {type === 'myspace3d' ? (
        <MySpace3d />
      ) : type === 'store3d' ? (
        <Store3d />
      ) : (
        <Store3d2 />
      )}
    </div>
  );
};

export default Solutions;

const Store3d = () => {
  return (
    <div className='overflow-clip w-full'>
      <Container className='solution-container  min-h-[80vh] bg-transparent '>
        <section className='flex flex-col-reverse md:flex-row h-[70vh] justify-between relative after:block after:absolute after:w-[3000px] after:h-56 after:translate-x-1/2 after:right-1/2 after:-rotate-6 after:-z-10 after:-bottom-12 after:bg-primary-red'>
          <div className='flex flex-col gap-5 justify-center'>
            <h1 className='text-3xl font-bold'>
              Build Your Strore With
              <br />
              <span className='text-white md:text-primary-red'>
                Immersive Experience
              </span>
            </h1>
            <div className='ml-5 flex flex-col gap-2 text-black/50'>
              <p>&#x2022; Make your custom interactive room with room3d</p>
              <p>
                &#x2022; Get your Store online with interactive 3d elements
                using store3D
              </p>
            </div>
            <div className=' flex gap-3'>
              <Button
                type='button'
                rounded
                varient={'primary'}
                onClick={() => {}}
                className='bg-white !text-primary-red md:!text-white md:bg-primary-red '>
                Try Store3D Demo
              </Button>
              <Button
                type='button'
                rounded
                varient={'secondary'}
                onClick={() => {}}>
                Pricing
              </Button>
            </div>
          </div>
          <div className='grid place-items-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/2WLuNmKMXo0'
              title='YouTube video player'
              // frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
          </div>
        </section>
        <section className='w-full mt-20 py-10'>
          <div className=' drop-shadow-2xl'>
            <img src={VisCommerce_levels} alt='' className='rounded-2xl' />
          </div>
        </section>
        <section className='w-full'>
          <div className='w-full flex flex-wrap py-10 justify-center gap-4'>
            {new Array(5).fill('hi').map(() => (
              <div className='w-[30%] aspect-[9/4] relative'>
                <img
                  src={bedroomImage}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
                <p
                  style={{ textShadow: '#000 1px 0 10px' }}
                  className='absolute bottom-0 text-white font-bold p-2  '>
                  Lightings
                </p>
                <div className='absolute hidden hover:flex bg-primary-red/90 bottom-0 text-white '>
                  <p>Lighting</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, obcaecati?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className=' flex flex-col items-center gap-5 my-10'>
          <div className='flex  justify-between items-start'>
            <img src={techStack} alt='' />
            <div className='flex flex-col w-1/2 gap-5'>
              <h1 className='font-bold text-3xl'>
                Technologies and System Requirements
              </h1>
              <div className='flex flex-col gap-2'>
                <h2 className='text-lg font-bold'>3D content</h2>
                <p className='ml-5'>
                  &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
                <p className='ml-5'>
                  &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-lg font-bold'>3D content</h2>
                <p className='ml-5'>
                  &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
                <p className='ml-5'>
                  &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-lg font-bold'>3D content</h2>
                <p className='ml-5'>
                  &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
                <p className='ml-5'>
                  &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <Button type='button' varient={'primary'} onClick={() => {}}>
            Read More
          </Button>
        </section>
        <section>
          <DigitalRightsManagement />
        </section>
      </Container>
    </div>
  );
};

const Store3d2 = () => {
  const ContainerRef = useRef<HTMLDivElement>(null);

  console.log(ContainerRef.current?.clientHeight);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    console.log(e);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

  return (
    <div className=''>
      <Container className='solution-container  min-h-[80vh] bg-transparent '>
        <div ref={ContainerRef}>
          <section className='flex h-[70vh] flex-col gap-5 justify-center'>
            <h1 className='text-3xl font-bold'>
              Build Your Strore With
              <br />
              <span className='text-primary-red'>Immersive Experience</span>
            </h1>
            <div className=' flex gap-3'>
              <Button
                type='button'
                rounded
                varient={'primary'}
                onClick={() => {}}>
                Try Store3D Demo
              </Button>
              <Button
                type='button'
                rounded
                varient={'secondary'}
                onClick={() => {}}>
                Pricing
              </Button>
            </div>
          </section>
          <section className='h-[70vh] w-full flex flex-col justify-center'>
            <h1 className='font-bold text-xl'>Zoom Controls</h1>
          </section>
          <section className='h-[70vh] w-full flex flex-col justify-center'>
            <h1 className='font-bold text-xl'>Pan Controls</h1>
          </section>
          <section className='h-[70vh] w-full flex flex-col justify-center'>
            <h1 className='font-bold text-xl'>Rotation Controls</h1>
          </section>
          <section className='h-[70vh] w-full flex flex-col justify-center'>
            <h1 className='font-bold text-xl'>Animation Controls</h1>
          </section>
          <section className='h-[70vh] w-full flex flex-col justify-center'>
            <h1 className='font-bold text-xl'>Materials Controls</h1>
          </section>
          <section className='h-[70vh] w-full flex flex-col justify-center'>
            <h1 className='font-bold text-xl'>Tiles Controls</h1>
          </section>
        </div>
      </Container>
    </div>
  );
};

const initialBtnState = [
  {
    innerText: 'User Experience',
    active: true,
    link: '/solutions/myspace3d/userExperience',
  },
  {
    innerText: 'VisCommerce Experience',
    active: false,
    link: '/solutions/myspace3d/visCommerceExperience',
  },
  {
    innerText: 'Brand Experience',
    active: false,
    link: '/solutions/myspace3d/brandExperience',
  },
  {
    innerText: 'White Labeling',
    active: false,
    link: '/solutions/myspace3d/whiteExperience',
  },
];

const MySpace3d = () => {
  const [button, setButton] = useState(initialBtnState);

  const { exp } = useParams();

  return (
    <Container className='flex flex-col  items-center '>
      <div className='my-10 flex gap-3'>
        {button.map((item) => {
          return (
            <NavLink
              to={item.link}
              className={({ isActive, isPending }) =>
                clsx(
                  `font-bold relative after:block after:w-[2px] after:h-full after:bg-black after:absolute after:top-1/2 after:-translate-y-1/2 last:after:hidden after:-right-2 `,
                  { 'text-primary-red': isActive }
                )
              }>
              {item.innerText}
            </NavLink>
          );
        })}
      </div>

      <motion.div className='hidden md:block'>
        {exp === 'userExperience' &&
          UserExperience.desktop.map((src) => <img src={src} alt='' />)}
        {exp === 'visCommerceExperience' &&
          VC_Experienve.desktop.map((src) => <img src={src} alt='' />)}
        {exp === 'brandExperience' &&
          BrandExperience.desktop.map((src) => <img src={src} alt='' />)}
        {exp === 'whiteExperience' &&
          WhiteLabeling.desktop.map((src) => <img src={src} alt='' />)}
      </motion.div>
      <div className='md:hidden flex flex-col'>
        {exp === 'userExperience' &&
          UserExperience.mobile.map((src) => <img src={src} alt='' />)}
        {exp === 'visCommerceExperience' &&
          VC_Experienve.mobile.map((src) => <img src={src} alt='' />)}
        {exp === 'brandExperience' &&
          BrandExperience.mobile.map((src) => <img src={src} alt='' />)}
        {exp === 'whiteExperience' &&
          WhiteLabeling.mobile.map((src) => <img src={src} alt='' />)}
      </div>
    </Container>
  );
};
