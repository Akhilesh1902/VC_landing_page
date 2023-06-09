import { useState } from 'react';
import { Button, Container, ImageDropper } from '../UI';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFillPlayCircleFill, BsChevronUp } from 'react-icons/bs';
import { FiPlayCircle } from 'react-icons/fi';

import { MySpace3D_Demo, landingCards } from '../../assets/images';
import { PartnersData } from '../constants';
import clsx from 'clsx';
type Props = {};

const DemoSection = (props: Props) => {
  const [partnerIndex, setPartnerIndex] = useState([false, false]);
  return (
    <div className='bg-white w-full'>
      <div
        className={`relative after:content-[''] overflow-scroll  after:absolute after:top-full after:-translate-y-full after:z-[5] after:w-full after:h-1/2 after:bg-primary-red`}>
        <Container
          className={` relative p-5 w-full flex md:justify-center z-10 gap-10 overflow-scroll md:overflow-cli`}>
          <Card name='furniture' imgsrc={landingCards.Sofa} />
          <Card name='lightings' imgsrc={landingCards.Light} commingsoon />
          <Card name='paint' imgsrc={landingCards.Paint} commingsoon />
          <Card name='tiles' imgsrc={landingCards.Tiles} commingsoon />
          <Card name='sanitaryWare' imgsrc={landingCards.Bathtub} commingsoon />
        </Container>
      </div>
      <div className='bg-[#F5F5F5]'>
        <Container className='mt-16 p-10'>
          <ImageDropper
            imageBg='#ffffff'
            buttonText='Home3D - Interior Design for Home'
            imgsrc={MySpace3D_Demo}>
            <div
              style={{ backgroundColor: '#ffffff' }}
              className='p-10 hidden md:block'>
              <div className=' bg-[#F5F5F5] pb-10 flex gap-3 text-center rounded-3xl p-5 font-bold '>
                <div className='flex flex-col gap-3 items-center '>
                  <GoPrimitiveDot size={24} className='text-primary-red/50' />
                  <p>
                    Home 3D is an innovative, Personalized Interior Design
                    Solution
                  </p>
                </div>
                <div className='flex flex-col gap-3 items-center '>
                  <GoPrimitiveDot size={24} className='text-primary-red/50' />
                  <p>
                    Empowers user to design homes with infinite combinations
                    while saving time and money.
                  </p>
                </div>
                <div className='flex flex-col gap-3 items-center '>
                  <GoPrimitiveDot size={24} className='text-primary-red/50' />
                  <p>
                    Creates new profitable revenue streams for Biz in Furniture,
                    Lightings, Paints, Tiles sector
                  </p>
                </div>
                <div className='flex flex-col gap-3 items-center '>
                  <GoPrimitiveDot size={24} className='text-primary-red/50' />
                  <p>
                    Built on a platform of Unity, AI, Cloud and Web Technologies
                  </p>
                </div>
              </div>
            </div>
          </ImageDropper>
          <div className='flex flex-col gap-10 md:gap-0  p-10 mt-10 md:grid grid-cols-2'>
            {PartnersData.map((item, i) => (
              <div key={i} className='flex flex-col gap-5  items-center '>
                <div
                  className={clsx('flex flex-col md:w-1/2 gap-3', {
                    hidden: !partnerIndex[i],
                  })}>
                  <img src={item.image} alt='' />
                  <p>{item.desc}</p>
                </div>
                {!partnerIndex[i] ? (
                  <Button
                    type='button'
                    // rounded
                    className='!px-20 py-4 font-bold bg-white rounded-full outline  outline-1 outline-gray-200'
                    shadow
                    onClick={() => {
                      setPartnerIndex((p) =>
                        p.map((item, j) => (j === i ? !item : item))
                      );
                    }}>
                    {item.title}
                  </Button>
                ) : (
                  <BsChevronUp
                    onClick={() => {
                      setPartnerIndex((p) =>
                        p.map((item, j) => (j === i ? !item : item))
                      );
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DemoSection;

type CardProps = {
  name: string;
  imgsrc: string;
  commingsoon?: boolean;
};

const Card = (props: CardProps) => {
  return (
    <div className='bg-white rounded-xl'>
      <div className='shadow-card flex h-full flex-col gap-3 w-ma rounded-xl  p-4 items-center justify-between '>
        <h1 className='font-bold capitalize '>{props.name}</h1>

        <div className='w-36 h-36'>
          <img
            src={props.imgsrc}
            alt=' card '
            className='object-contain w-full h-full'
          />
        </div>
        {props.commingsoon ? (
          <p className='font-normal px-5 py-3 text-center '>Comming Soon</p>
        ) : (
          <a
            // className='rounded-full'
            target='_blank'
            href='http://gandivam.co.in/dist/'
            className='font-normal bg-primary-red  text-white rounded-full w-fit flex items-center gap-2 px-5 py-3  hover:bg-[#FF8279] transition-bg duration-300'>
            <div className='flex  items-center gap-2'>
              <p className='capitalize'>Demo</p>
              <FiPlayCircle />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
