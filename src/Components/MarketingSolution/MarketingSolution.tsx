import { Marketing_Solution } from '../../assets/images';
import { Button, Container } from '../UI';
import { FiPlayCircle } from 'react-icons/fi';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { LandingPageYoutubeUrls } from '../constants';
type Props = {};

const MarketingSolution = (props: Props) => {
  return (
    <div className='w-full bg-white'>
      <TopSection />
      <Container className=' py-10 flex flex-col'>
        <h1 className='font-bold text-center text-2xl'>
          3D Commerce Solution For Home-Decor
        </h1>
        <img src={Marketing_Solution} alt='' />
      </Container>
    </div>
  );
};

export default MarketingSolution;

const TopSection = () => (
  <div className='bg-primary-red p-5 mt-10 text-xs font-bold flex gap-4 justify-center flex-wrap'>
    {LandingPageYoutubeUrls.map((item, i) => (
      <a
        href={item.url}
        target='_blank'
        className='font-normal bg-white rounded-full w-fit flex items-center gap-2 px-5 py-3 md:text-xl hover:bg-lime-200 hover:text-slate-800'>
        {item.title} <BsFillPlayCircleFill className='text-primary-red' />
      </a>
    ))}
  </div>
);
