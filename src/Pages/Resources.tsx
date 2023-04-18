import { useState } from 'react';
import { Marketing_Solution } from '../assets/images';
import { Button, Container } from '../Components/UI';

type Props = {};

const ButtonArr = ['all', 'store 3d', 'my space 3d'];

const initialBtnArr = [
  {
    name: 'all',
    active: false,
  },
  {
    name: 'store 3d',
    active: false,
  },
  {
    name: 'my space 3d',
    active: false,
  },
];

const Resources = (props: Props) => {
  const [btnArr, setBtnArr] = useState([
    ...initialBtnArr,
    { name: 'all', active: true },
  ]);

  return (
    <div>
      <div className='relative bg-primary-red w-screen py-2 md:py-10'>
        <h1 className='text-white text-center font-bold text-md  md:text-xl tracking-wider'>
          Resources
        </h1>
      </div>
      <div>
        <Container>
          <div className='my-10 flex flex-col items-center md:flex-row justify-center gap-10'>
            {btnArr.map((item, i) => (
              <Button
                type='button'
                varient={item.active ? 'primary' : 'transparent'}
                rounded
                key={item.name + i}
                className='w-[240px] font-bold'
                onClick={() => {}}>
                {item.name}
              </Button>
            ))}
          </div>
          <div className='flex gap-5 justify-center flex-wrap my-16'>
            {new Array(10).fill('a').map((item, i) => (
              <ResorceCard
                description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, expedita! ${
                  i === 3 &&
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, expedita!'
                } `}
                imgsrc={Marketing_Solution}
                title='Resource Card title'
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Resources;

interface ResorceCardProps {
  imgsrc: string;
  title: string;
  description: String;
}
const ResorceCard = (props: ResorceCardProps) => {
  return (
    <div className='bg-white w-[300px] p-4 rounded shadow-lg flex flex-col gap-3'>
      <img src={props.imgsrc} alt='' className='w-full aspect-[9/5]' />
      <h2 className='font-bold text-2xl'>{props.title}</h2>
      <p className='text-base opacity-70 leading-snug'>{props.description}</p>
      <Button
        type='button'
        varient={'primary'}
        onClick={() => {}}
        rounded
        className='self-start justify-self-end mt-auto'>
        Read More
      </Button>
    </div>
  );
};
