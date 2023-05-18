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
import {
  GifSectionData,
  SolutionTechnologies,
  Store3DCardData,
} from '../Components/constants';

type Props = {};

const Solutions = (props: Props) => {
  const { type } = useParams();
  return (
    <div className='bg-transparent w-full'>
      {type === 'home3d' ? (
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
  const [showMoreGifs, setShowMoreGifs] = useState(false);
  const [showMoreTech, setShowMoreTech] = useState(false);
  return (
    <div className='overflow-clip w-full'>
      <Container className='solution-container  min-h-[80vh] bg-transparent '>
        <section className='flex flex-col-reverse md:flex-row h-[70vh] gap-20 justify-end md:justify-between relative after:block after:absolute after:w-[3000px] after:h-56 after:translate-x-1/2 after:right-1/2 after:-rotate-6 after:-z-10 after:-bottom-12 after:bg-primary-red'>
          <div className='flex flex-col gap-5 justify-center'>
            <h1 className='text-3xl font-bold'>
              Build Your Strore With
              <br />
              <span className='text-black md:text-primary-red'>
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
              className='hidden md:block'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/2WLuNmKMXo0'
              title='YouTube video player'
              // frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
            <iframe
              className='mt-20 md:hidden'
              width='full'
              height='auto'
              src='https://www.youtube.com/embed/2WLuNmKMXo0'
              title='YouTube video player'
              // frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
          </div>
        </section>
      </Container>
      <section className='w-full mt-20 py-10'>
        <Container>
          <div className=' drop-shadow-2xl'>
            <img src={VisCommerce_levels} alt='' className='rounded-2xl' />
          </div>
        </Container>
      </section>
      <section className='w-full'>
        <Container>
          <div className='w-full flex flex-wrap py-10 justify-center gap-4'>
            {Store3DCardData.map((items, i) => (
              <div className='store3d-card w-[30%] aspect-[9/4] relative rounded-xl'>
                <img
                  src={items.image}
                  alt=''
                  className='w-full h-full object-cover rounded-xl'
                />
                <p
                  style={{ textShadow: '#000 1px 0 10px' }}
                  className='absolute bottom-0 text-white font-bold p-2  '>
                  {items.title}
                </p>
                <div className='store3d-card-details absolute rounded-xl  bg-primary-red/90 bottom-0 flex flex-col gap-2 p-4 h-full text-white '>
                  <p className='font-bold'>{items.title}</p>
                  <p className='text-sm leading-5'>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className='w-full flex flex-col gap-10'>
        {GifSectionData.map((item, i) => {
          if (i > 3 && !showMoreGifs) return null;

          return (
            <>
              <div
                className={clsx('w-full relative m-auto py-10', {
                  'after:absolute after:block w-full after:w-[120%] after:h-full text-white after:bg-primary-red after:-z-10 after:top-0 after:-rotate-3 after:left-1/2 after:-translate-x-1/2':
                    i % 2,
                })}>
                <Container
                  className={clsx(
                    'flex flex-col-reverse w-[60%] justify-between relative md:flex-row items-center',
                    {
                      ' md:!flex-row-reverse ': i % 2,
                    }
                  )}>
                  <div className='md:w-1/2  flex flex-col gap-5'>
                    <h2 className='font-bold text-4xl'>{item.title}</h2>
                    <p className='text-lg'>{item.desc}</p>
                  </div>
                  <div className='w-[400px]'>
                    <img src={item.image} className='w-full h-full' alt='' />
                  </div>
                </Container>
              </div>
            </>
          );
        })}
        <Button
          type='button'
          varient={'primary'}
          className='w-fit self-center'
          onClick={() => {
            setShowMoreGifs((p) => !p);
          }}>
          {showMoreGifs ? 'Read Less' : 'Read More'}
        </Button>
      </section>
      <section>
        <Container className=' flex flex-col md:felx-row items-center gap-5 my-20 '>
          <div className='flex flex-col  md:flex-row justify-between items-center gap-5 md:items-start'>
            <img src={techStack} alt='' />
            <div className='flex flex-col md:w-1/2 gap-5'>
              <h1 className='font-bold text-3xl'>
                Technologies and System Requirements
              </h1>
              {SolutionTechnologies.map((item, i) => {
                if (i > 3 && !showMoreTech) return null;
                return (
                  <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-bold'>{item.title}</h2>
                    {item.desc.map((desc, i) => (
                      <p>&#x2022; {desc}</p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            type='button'
            varient={'primary'}
            onClick={() => {
              setShowMoreTech((p) => !p);
            }}>
            {showMoreTech ? 'Read Less' : 'Read More'}
          </Button>
        </Container>
      </section>
      <section>
        <Container>
          <DigitalRightsManagement />
        </Container>
      </section>
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
    link: '/solutions/home3d/userExperience',
  },
  {
    innerText: 'VisCommerce Experience',
    active: false,
    link: '/solutions/home3d/visCommerceExperience',
  },
  {
    innerText: 'Brand Experience',
    active: false,
    link: '/solutions/home3d/brandExperience',
  },
  {
    innerText: 'White Labeling',
    active: false,
    link: '/solutions/home3d/whiteExperience',
  },
];

const MySpace3d = () => {
  const [button, setButton] = useState(initialBtnState);

  const { exp } = useParams();

  return (
    <Container className='flex flex-col  items-center '>
      <div className='my-10 flex gap-5 '>
        {button.map((item) => {
          return (
            <NavLink
              to={item.link}
              className={({ isActive, isPending }) =>
                clsx(
                  `font-medium relative after:block after:w-[2px] p-3 px-8 outline outline-1 outline-gray-300 rounded-full transition-bg duration-500  `,
                  {
                    'text-white bg-primary-red/60 drop-shadow-3xl': isActive,
                  }
                )
              }>
              {item.innerText}
            </NavLink>
          );
        })}
      </div>

      <motion.div className='hidden md:flex flex-col items-center gap-10  my-10'>
        {exp === 'userExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-5'>User Experience</h1>
            {UserExperience.desktop.map((src) => (
              <img src={src} className='bg-[#FFFEDF] rounded-2xl' alt='' />
            ))}
          </>
        )}
        {exp === 'visCommerceExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-5'>VisCommerce Experience</h1>
            {VC_Experienve.desktop.map((src) => (
              <img src={src} className='bg-[#F5E4D9]  rounded-2xl' alt='' />
            ))}
          </>
        )}
        {exp === 'brandExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-5'>
              Brand Experience with MySpace3D App
            </h1>
            {BrandExperience.desktop.map((src) => (
              <img src={src} className='bg-[#C7E9D9]  rounded-2xl' alt='' />
            ))}
          </>
        )}
        {exp === 'whiteExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-5'>
              VisCommerce MySpace3D - White Labeling
            </h1>
            {WhiteLabeling.desktop.map((src) => (
              <img src={src} className='bg-[#ABEDBC]  rounded-3xl' alt='' />
            ))}
          </>
        )}
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
