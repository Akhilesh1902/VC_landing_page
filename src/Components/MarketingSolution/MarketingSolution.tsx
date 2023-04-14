import { Marketing_Solution } from '../../assets/images';
import { Button, Container } from '../UI';
import { FiPlayCircle } from 'react-icons/fi';
type Props = {};

const MarketingSolution = (props: Props) => {
  return (
    <div className='w-full bg-white'>
      <TopSection />
      <Container className=' py-10 flex flex-col'>
        <h1 className='font-bold text-center text-2xl'>
          Interactive 3D marketing solutions for Home-Decor sector
        </h1>
        <img src={Marketing_Solution} alt='' />
      </Container>
    </div>
  );
};

export default MarketingSolution;

const TopSection = () => (
  <div className='bg-primary-red p-5 mt-10 text-xs font-bold flex gap-4 justify-center flex-wrap'>
    <Button
      type='button'
      onClick={() => {}}
      className='bg-white rounded-full  '>
      <div className='flex  items-center gap-2'>
        <p className='capitalize'>Basic3D</p>
        <FiPlayCircle />
      </div>
    </Button>
    <Button
      type='button'
      onClick={() => {}}
      className='bg-white rounded-full  '>
      <div className='flex  items-center gap-2'>
        <p className='capitalize'>Advanced3D</p>
        <FiPlayCircle />
      </div>
    </Button>
    <Button
      type='button'
      onClick={() => {}}
      className='bg-white rounded-full  '>
      <div className='flex  items-center gap-2'>
        <p className='capitalize'>Lighting3D</p>
        <FiPlayCircle />
      </div>
    </Button>
    <Button
      type='button'
      onClick={() => {}}
      className='bg-white rounded-full  '>
      <div className='flex  items-center gap-2'>
        <p className='capitalize'>Collaboration</p>
        <FiPlayCircle />
      </div>
    </Button>
    <Button
      type='button'
      onClick={() => {}}
      className='bg-white rounded-full  '>
      <div className='flex  items-center gap-2'>
        <p className='capitalize'>Personalization</p>
        <FiPlayCircle />
      </div>
    </Button>
  </div>
);
