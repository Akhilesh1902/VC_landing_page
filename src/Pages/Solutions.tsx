import { useParams } from 'react-router-dom';
import { Button, Container } from '../Components/UI';
import { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import {
  UserExperience,
  VC_Experienve,
  WhiteLabeling,
  BrandExperience,
} from '../assets/images';
import { ImGift } from 'react-icons/im';
type Props = {};

const Solutions = (props: Props) => {
  const { type } = useParams();
  return <div>{type === 'myspace3d' ? <MySpace3d /> : <Store3d />}</div>;
};

export default Solutions;

const Store3d = () => {
  return <div></div>;
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
    <Container className='flex flex-col items-center '>
      <div className='my-10 flex gap-3'>
        {button.map((item) => {
          return <NavLink to={item.link}>{item.innerText}</NavLink>;
        })}
      </div>

      <div className='hidden md:block'>
        {exp === 'userExperience' &&
          UserExperience.desktop.map((src) => <img src={src} alt='' />)}
        {exp === 'visCommerceExperience' &&
          VC_Experienve.desktop.map((src) => <img src={src} alt='' />)}
        {exp === 'brandExperience' &&
          BrandExperience.desktop.map((src) => <img src={src} alt='' />)}
        {exp === 'whiteExperience' &&
          WhiteLabeling.desktop.map((src) => <img src={src} alt='' />)}
      </div>
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
