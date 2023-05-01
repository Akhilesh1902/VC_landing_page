import { useState } from 'react';
import { Button, Container, ImageDropper } from '../UI';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFillPlayCircleFill } from 'react-icons/bs';

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
          className={` relative p-10 w-full flex md:justify-center z-10 gap-10 overflow-scroll md:overflow-cli`}>
          <Card name='furniture' imgsrc={landingCards.Sofa} />
          <Card name='furniture' imgsrc={landingCards.Light} />
          <Card name='paint' imgsrc={landingCards.Paint} />
          <Card name='tiles' imgsrc={landingCards.Tiles} />
          <Card name='sanitaryWare' imgsrc={landingCards.Bathtub} />
        </Container>
      </div>
      <Container className='mt-16 pb-10'>
        <ImageDropper
          buttonText='My Space 3D - Demonstrating Interior Design'
          imgsrc={MySpace3D_Demo}>
          <div
            style={{ backgroundColor: '#EFFCF9' }}
            className='p-10 hidden md:block'>
            <div className=' bg-emerald-400/20 pb-10 flex gap-3 text-center rounded-3xl p-5 font-bold '>
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
                  Empowers user to design homes with infinite combinations while
                  saving time and money.
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
        <div className='p-10 mt-10 grid grid-cols-2'>
          {PartnersData.map((item, i) => (
            <div className='flex flex-col gap-2  items-center '>
              <div
                className={clsx('flex flex-col w-1/2 gap-3', {
                  hidden: !partnerIndex[i],
                })}>
                <img src={item.image} alt='' />
                <p>{item.desc}</p>
              </div>

              <Button
                type='button'
                rounded
                shadow
                onClick={() => {
                  setPartnerIndex((p) =>
                    p.map((item, j) => (j === i ? !item : item))
                  );
                }}>
                {item.title}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DemoSection;

type CardProps = {
  name: string;
  imgsrc: string;
};

const Card = (props: CardProps) => {
  return (
    <div className='shadow-card flex flex-col gap-3 w-ma rounded-xl p-4 items-center bg-white'>
      <h1 className='font-bold capitalize '>{props.name}</h1>
      <div className='w-36 h-36'>
        <img
          src={props.imgsrc}
          alt=' card '
          className='object-contain w-full h-full'
        />
      </div>
      <Button
        type='button'
        onClick={() => {}}
        varient={'primary'}
        className='rounded-full'>
        <div className='flex  items-center gap-2'>
          <p className='capitalize'>Try Demo</p>
          <BsFillPlayCircleFill />
        </div>
      </Button>
    </div>
  );
};
