import { useParams } from 'react-router-dom';
import { Button, Container, ImageDropper, Slider } from '../Components/UI';
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

import {
  GltfLogo_SVG,
  Commerce3DLogo_SVG,
  BrowserLogo_SVG,
  Devices_SVG,
} from '../assets/images/svgs';

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
      <section className=' bg-[#f5f5f5]'>
        <Container className='solution-container flex flex-col-reverse md:flex-row h-[70vh] gap-20 justify-end md:justify-between min-h-[80vh] bg-transparent '>
          <div className='flex flex-col gap-5 justify-center'>
            <Slider>
              <h2 className='text-lg '>Industry Specific customization</h2>
            </Slider>
            <Slider>
              <h2 className='text-lg '>3DCommerce Compliance</h2>
            </Slider>
            <Slider
              options={[
                'Smartphone, Tablet, PC',
                ' iOS, Android, Window',
                'Google Chrome, Microsoft Edge, Apple Safari, Mozilla Firefox etc',
              ]}>
              <h2 className='text-lg '>Devices, Browsers, Technologies</h2>
            </Slider>
            <Slider>
              <h2 className='text-lg '>Devices, Browsers, Technologies</h2>
            </Slider>
            <div className='flex gap-3 ml-5 mt-5 '>
              <a
                href='http://gandivam.co.in/dist/'
                target='active'
                className='bg-primary-red rounded-full text-white px-5 py-2 shadow-md shadow-slate-400 hover:scale-105 hover:bg-primary-red/70 transition-scale transition-bg duration-300'>
                Try Store3D Demo
              </a>
              <a
                href='/pricing'
                className='bg-gray-500 rounded-full text-white px-5 py-2 shadow-md shadow-slate-400 hover:scale-105 hover:bg-gray-400 transition-scale transition-bg duration-300'>
                Pricing
              </a>
            </div>
          </div>
          <div className='grid place-items-center'>
            <iframe
              className='hidden md:block'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/QGJ1ZZosgp4'
              title='YouTube video player'
              // frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
            <iframe
              className='mt-20 md:hidden'
              width='full'
              height='auto'
              src='https://www.youtube.com/embed/QGJ1ZZosgp4'
              title='YouTube video player'
              // frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
          </div>
        </Container>
      </section>
      {/* <section className='w-full py-24'>
        <Container>
          <div className=' drop-shadow-2xl'>
            <img src={VisCommerce_levels} alt='' className='rounded-2xl' />
          </div>
        </Container>
      </section> */}
      <section className='w-full py-24'>
        <Container className='flex flex-col items-center'>
          <h1 className='font-bold text-4xl py-10'>Custom Solutions</h1>
          <div className='flex flex-col gap-6'>
            {Store3DCardData.map((item, i) => (
              <div
                key={i}
                className={clsx(
                  'flex flex-col-reverse md:flex-row gap-4 justify-between p-16 py-28 rounded-xl',
                  {
                    'bg-[#FFE3E3]': i == 0,
                    'bg-[#FFF3E6]': i == 1,
                    'bg-[#D2FFF6]': i == 2,
                    'bg-[#E2E8FF]': i == 3,
                    'bg-[#C9F5FF]': i == 4,
                  }
                )}>
                <div className='md:w-1/2'>
                  <h2 className='text-lg font-bold'>{item.title}</h2>
                  <ul className='ml-5 flex flex-col gap-2'>
                    {item.details.map((item, i) => (
                      <li key={item + i} className='text-black/40'>
                        &middot; {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='grid place-items-center'>
                  <img
                    src={item.image}
                    alt=''
                    className='w-[240px] aspect-[9/4]'
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className='bg-[#f5f5f5] py-10'>
        <Container className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold py-10'>3DCommerce Compliant</h1>
          <div className='grid md:grid-cols-2 gap-5'>
            <div className='rounded-xl bg-[#ABEDBC] flex flex-col p-5 gap-5'>
              <img src={Commerce3DLogo_SVG} alt='' className='h-16' />
              <div>
                <p className='text-lg font-bold'>3D Commerce Assets</p>
                <ul className='ml-5'>
                  <li className=''>
                    https://github.com/KhronosGroup/3DC-Asset-Creation
                  </li>
                  <li>File Size</li>
                  <li>Draw Calls</li>
                  <li>Number of Triangles</li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#CEEBAD] flex flex-col p-5 gap-5'>
              <img src={GltfLogo_SVG} alt='' className='h-16' />
              <div>
                <p className='text-lg font-bold'>glTF</p>
                <ul className='ml-5'>
                  <li className=''>https://www.khronos.org/gltf</li>
                  <li>PBR</li>
                  <li>Draco</li>
                  <li>KTX2</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='py-10'>
        <Container className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold py-10'>
            Devices, Browsers, Technologies
          </h1>
          <div className='grid md:grid-cols-2 md:grid-rows-2 gap-5'>
            <div className='rounded-xl bg-[#f5f5f5] flex flex-col md:flex-row-reverse items-center p-5 gap-5'>
              <img src={Devices_SVG} alt='' className='h-32' />
              <div>
                <p className='text-lg font-bold'>Devices</p>
                <ul className='ml-5'>
                  <li>Smartphones, Tablets, PCs</li>
                  <li>iOS, Android, Windows</li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#f5f5f5] flex flex-col md:flex-row-reverse items-center p-5 gap-5'>
              <img src={BrowserLogo_SVG} alt='' className='h-32' />
              <div>
                <p className='text-lg font-bold'>Browsers</p>
                <ul className='ml-5'>
                  <li>Google Chrome, Microsoft Edge, Apple Safari</li>
                  <li>Mozilla Firefox, Opera, Brave</li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#f5f5f5] md:col-span-2 flex flex-col gap-2 items-center justify-center'>
              <h2 className='font-bold'>Technologies</h2>
              <div className='px-5 text-center'>
                {[
                  'glTF (3D Content)',
                  'Threejs (Runtime and Framework)',
                  'HTML5, CSS3, JavaScript (ES6)',
                  'Bootstrap5',
                  'ReactJS Nodejs',
                  ' Blender Cycles, Python API',
                ].map((item) => (
                  <span className='px-3 border-r-2 border-primary-red last:border-none'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='bg-[#f5f5f5] py-10'>
        <Container className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold py-10'>Features</h1>
          <div className='grid md:grid-cols-2 grid-rows-2 gap-5'>
            <div className='rounded-xl bg-[#ABECFF] p-5 py-10'>
              <div>
                <p className='text-lg font-bold'>Basic</p>
                <ul className='ml-5'>
                  <li>Zoom, Pan, Rotate</li>
                  <li>Viewpoints</li>
                  <li>Video Tour</li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#CAC5FF] p-5 py-10'>
              <div>
                <p className='text-lg font-bold'>Advanced (Product level)</p>
                <ul className='ml-5'>
                  <li>Configurator (colours, textures, materials)</li>
                  <li>
                    Animation (e.g. simulate height changes of ergonomic table)
                  </li>
                  <li>Measurements (e.g. lengths, angles)</li>
                  <li>Trials (e.g. try amongst various chairs)</li>
                  <li>
                    Arrangement (e.g. layout chairs, tables for optimal
                    ergonomics)
                  </li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#E9CDFF] p-5 py-10'>
              <div>
                <p className='text-lg font-bold'>Lighting & Rendering</p>
                <ul className='ml-5'>
                  <li>Indoor & Outdoor lighting</li>
                  <li>Lighting controls (on/off, intensity, colour)</li>
                  <li>Lighting effects (reflection, shadows …)</li>
                  <li>
                    Photo realistic rendered images and videos
                    (blender/cycles/python)
                  </li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#FFDAED] p-5 py-10'>
              <div>
                <p className='text-lg font-bold'>Collaboration</p>
                <ul className='ml-5'>
                  <li>
                    Real time sync of changes in peer 3D models (e.g. between
                    seller & buyer)
                  </li>
                  <li>Real time comments synced (In context)</li>
                  <li>Version control of 3D scenes</li>
                  <li>Share 3D Scenes via URL's (Google docs style)</li>
                  <li>Audio, Video, Chat Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* <section className='w-full'>
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
      </section> */}
      {/* <section className='w-full flex flex-col gap-10'>
        {GifSectionData.map((item, i) => {
          if (i > 3 && !showMoreGifs) return null;

          return (
            <>
              <div
                key={item.title}
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
      </section> */}
      <section className='py-10'>
        <Container className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold py-10'>
            Quality, Performance, UI / UX
          </h1>
          <div className=' grid md:grid-cols-3 gap-5'>
            <div className='rounded-xl bg-[#ffd8d8] p-5 py-10'>
              <div>
                <p className='text-lg font-bold '>Quality</p>
                <ul className='ml-5'>
                  <li>Device coverage</li>
                  <li>https://www.browserstack.com</li>
                  <li>Automated Regression Testing</li>
                  <li>https://imagemagick.org</li>
                  <li>https://pptr.dev/ (Puppeteer)</li>
                  <li>Performance testing</li>
                  <li>https://developer.chrome.com/en/docs/lighthouse/</li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#e5eac0] p-5 py-10'>
              <div>
                <p className='text-lg font-bold'>Performance</p>
                <ul className='ml-5'>
                  <li>Draco</li>
                  <li>https://google.github.io/draco/</li>
                  <li>KTX2</li>
                  <li>CDN</li>
                  <li>Spector.JS</li>
                  <li>WebGPU</li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-[#c3ece9] p-5 py-10'>
              <div>
                <p className='text-lg font-bold'>Performance</p>
                <ul className='ml-5'>
                  <li>Per customer specification</li>
                  <li>
                    https://developer.adobe.com/xd/uxp/design/user-interface/
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* <section className='bg-[#f5f5f5] py-5'>
        <Container className=' flex flex-col md:felx-row items-center gap-5 my-20 '>
          <div className='flex flex-col  md:flex-row justify-between items-center gap-5 md:items-start'>
            <img src={techStack} alt='' />
            <div className='flex flex-col md:w-1/2 gap-5'>
              <h1 className='font-bold text-3xl'>
                Technologies and System Requirements
              </h1>
              {SolutionTechnologies.map((item, i) => {
                if (i > 1 && !showMoreTech) return null;
                return (
                  <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-bold'>{item.title}</h2>
                    {item.desc.map((desc, i) => (
                      <p key={i}>&#x2022; {desc}</p>
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
      </section> */}
      <section className='bg-primary-red py-5 mb-10'>
        <Container className='flex flex-col md:flex-row text-center justify-center gap-3'>
          {[
            'https://modelviewer.dev/',
            'https://threejs.org/',
            'https://www.khronos.org/gltf/',
          ].map((item, i) => (
            <a
              key={item}
              className='p-2 px-10 bg-white/70 rounded-full text-primary-red font-bold hover:cursor-pointer'>
              {i == 0 && 'ModelViewer >'}
              {i == 1 && 'ThreeJS >'}
              {i == 2 && 'glTF >'}
            </a>
          ))}
        </Container>
      </section>
      <section className='pb-20'>
        <Container>
          <ImageDropper buttonText='DRM (Digital Rights Management)' imgsrc=''>
            <DigitalRightsManagement />
          </ImageDropper>
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
              key={item.innerText}
              to={item.link}
              className={({ isActive, isPending }) =>
                clsx(
                  `font-medium relative after:block after:w-[2px] p-3 px-8 outline outline-1 outline-gray-300 rounded-full transition-bg duration-500  `,
                  {
                    'text-white bg-primary-red/60 ': isActive,
                  }
                )
              }>
              {item.innerText}
            </NavLink>
          );
        })}
      </div>

      <motion.div className='hidden md:flex flex-col items-center   my-10'>
        {exp === 'userExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-16'>User Experience</h1>
            {UserExperience.desktop.map((src) => (
              <img key={src} src={src} className='bg-[#FFFEDF] ' alt='' />
            ))}
          </>
        )}
        {exp === 'visCommerceExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-16'>VisCommerce Experience</h1>
            {VC_Experienve.desktop.map((src) => (
              <img key={src} src={src} className='bg-[#F5E4D9]  ' alt='' />
            ))}
          </>
        )}
        {exp === 'brandExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-16'>
              Brand Experience with MySpace3D App
            </h1>
            {BrandExperience.desktop.map((src) => (
              <img
                key={src}
                src={src}
                className='bg-[#E0FFF1] rounded-3l'
                alt=''
              />
            ))}
          </>
        )}
        {exp === 'whiteExperience' && (
          <>
            <h1 className='text-3xl font-bold mb-16'>
              VisCommerce MySpace3D - White Labeling
            </h1>
            {WhiteLabeling.desktop.map((src) => (
              <img
                key={src}
                src={src}
                className='bg-[#F3FFDF]  rounded-3l'
                alt=''
              />
            ))}
          </>
        )}
      </motion.div>
      <div className='md:hidden flex flex-col'>
        {exp === 'userExperience' &&
          UserExperience.mobile.map((src) => (
            <img key={src} src={src} alt='' />
          ))}
        {exp === 'visCommerceExperience' &&
          VC_Experienve.mobile.map((src) => <img key={src} src={src} alt='' />)}
        {exp === 'brandExperience' &&
          BrandExperience.mobile.map((src) => (
            <img key={src} src={src} alt='' />
          ))}
        {exp === 'whiteExperience' &&
          WhiteLabeling.mobile.map((src) => <img key={src} src={src} alt='' />)}
      </div>
    </Container>
  );
};
