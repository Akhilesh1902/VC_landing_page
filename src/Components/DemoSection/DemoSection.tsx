import React from 'react';
import { Button, Container, ImageDropper } from '../UI';
import { FiPlayCircle } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go';
type Props = {};

const DemoSection = (props: Props) => {
  return (
    <div className='bg-white w-full'>
      <div
        className={`relative  after:content-[''] after:absolute after:top-full after:-translate-y-full after:z-[5] after:w-full after:h-1/2 after:bg-primary-red`}>
        <div
          className={` relative p-10 flex justify-center z-10 gap-10 overflow-scroll md:overflow-clip`}>
          <Card name='furniture' imgsrc='./Marketing_Solution.png' />
          <Card name='furniture' imgsrc='./Marketing_Solution.png' />
          <Card name='furniture' imgsrc='./Marketing_Solution.png' />
          <Card name='furniture' imgsrc='./Marketing_Solution.png' />
          <Card name='furniture' imgsrc='./Marketing_Solution.png' />
        </div>
      </div>
      <Container>
        <ImageDropper
          buttonText='My Space 3D - Demonstrating Interior Design'
          imgsrc='./MySpace3D_Demo.png'>
          <div style={{ backgroundColor: '#EFFCF9' }} className='p-10'>
            <div className=' bg-emerald-400/20 pb-10 flex gap-3 text-center rounded-3xl p-5 font-medium'>
              <div className='flex flex-col gap-3 items-center '>
                <GoPrimitiveDot size={24} className='text-primary-red/50' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <div className='flex flex-col gap-3 items-center '>
                <GoPrimitiveDot size={24} className='text-primary-red/50' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <div className='flex flex-col gap-3 items-center '>
                <GoPrimitiveDot size={24} className='text-primary-red/50' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <div className='flex flex-col gap-3 items-center '>
                <GoPrimitiveDot size={24} className='text-primary-red/50' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
        </ImageDropper>
        <div className='p-10 flex justify-around'>
          <Button rounded shadow onClick={() => {}}>
            Partner
          </Button>
          <Button rounded shadow onClick={() => {}}>
            Incubater
          </Button>
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
    <div className='flex flex-col gap-3 w-max  rounded-xl shadow-2xl p-4 items-center bg-white'>
      <h1 className='font-bold capitalize '>{props.name}</h1>
      <div className='w-36 h-36'>
        <img
          src={props.imgsrc}
          alt=' card '
          className='object-cover w-full h-full'
        />
      </div>
      <Button onClick={() => {}} varient={'primary'} className='rounded-full'>
        <div className='flex  items-center gap-2'>
          <p className='capitalize'>Furniture</p>
          <FiPlayCircle />
        </div>
      </Button>
    </div>
  );
};
