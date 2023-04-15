import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../Components/UI';
import { ImEye } from 'react-icons/im';
import { TbTargetArrow } from 'react-icons/tb';
import { RiHandCoinFill } from 'react-icons/ri';
import { DayStore3dLogo, Marketing_Solution } from '../assets/images';
import clsx from 'clsx';

type Props = {};

const Company = (props: Props) => {
  const { type } = useParams();

  return <div>{type === 'aboutus' ? <AboutUs /> : <Team />}</div>;
};

export default Company;

const AboutUs = () => {
  return (
    <div>
      <div className='relative bg-primary-red w-screen py-2 md:py-10'>
        <h1 className='text-white text-center font-bold text-md  md:text-xl tracking-wider'>
          About Us
        </h1>
      </div>
      <div>
        <Container>
          <p className='py-10 text-sm md:text-2xl text-center'>
            “VisCommerce is B2B technology company. It is focussed on leveraging
            the
            <br /> power of Visualization for eCommerce.
            <br /> It's solutions are based on{' '}
            <span className='text-primary-red font-medium'>
              3D, AI, Web-Technologies, Blockchain &<br /> Crypto technologies.
            </span>
            VisCommerce is registered in California, USA with
            <br /> development in USA & India."
          </p>
        </Container>
      </div>
      <div className='py-10 bg-white'>
        <Container className='flex flex-wrap gap-10 justify-center '>
          <AboutUsCards icon={ImEye} tittle='Vision'>
            <p>&#x2022; Visualization Powered Commerce</p>
          </AboutUsCards>
          <AboutUsCards icon={TbTargetArrow} tittle='Mission'>
            <p>&#x2022; Empower home decor businesses</p>
            <p>&#x2022; Empower consumers to save time & money</p>
          </AboutUsCards>
          <AboutUsCards icon={RiHandCoinFill} tittle='Values'>
            <p>
              &#x2022; To obsess over customer satisfaction within law & dharma
            </p>
            <p>
              &#x2022; To balance interests of customers, employees & investors
            </p>
            <p>&#x2022; To pursue quality and innovation relentlessly</p>
          </AboutUsCards>
        </Container>
      </div>
    </div>
  );
};

interface AboutUsCardProps extends React.PropsWithChildren {
  icon: any;
  tittle: string;
}

const AboutUsCards = (props: AboutUsCardProps) => {
  return (
    <div
      className='flex flex-col gap-3 w-full md:w-[45%] p-4 rounded-lg'
      style={{ boxShadow: '0px 0px 10px #4a4a4a' }}>
      <props.icon size={48} className={'text-primary-red'} />
      <h1 className='text-3xl font-bold'>{props.tittle}</h1>
      <div>{props.children}</div>
    </div>
  );
};

const Team = () => {
  return (
    <div>
      <div className='relative bg-primary-red w-screen py-2 md:py-10'>
        <h1 className='text-white text-center font-bold text-md  md:text-xl tracking-wider'>
          About Us
        </h1>
      </div>
      <div className='flex flex-col  items-center'>
        {new Array(5).fill('1').map((item, i) => (
          <div
            className={clsx(
              'w-screen flex justify-start items-starts md:pl-[250px]',
              {
                'bg-gray-400/30': i % 2,
              }
            )}>
            <TeamMembers
              imgsrc={Marketing_Solution}
              dark={i % 2 ? true : false}
              details={{
                name: `testname`,
                title: `text title ${
                  i % 2 ? 'asdasdasdadasdaasdasd asdasdssd' : ''
                }`,
                role: 'sdfasdf',
                education: 'sdfsdf',
                interest: 'sfasdfsadf',
                linkedin: 'safsdfasfsfa',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface TeamMembersProps {
  imgsrc: string;
  dark: boolean;
  details: {
    name: string;
    title: string;
    role: string;
    education: string;
    interest: string;
    linkedin: string;
  };
}

const TeamMembers = (props: TeamMembersProps) => {
  return (
    <Container
      className={'flex flex-col m-0  md:flex-row justify-start gap-16 p-10 '}>
      <div
        className='outline overflow-clip w-[240px] aspect-square self-center grid items-center'
        style={{
          borderRadius: '1000px 0px 1000px 1000px',
          boxShadow: '15px 0px 10px #454545',
        }}>
        <img
          src={props.imgsrc}
          alt=''
          className=' h-full w-full object-cover'
        />
      </div>
      <div className='capitalize'>
        <h1 className='font-bold text-primary-red text-2xl'>
          {props.details.name}
        </h1>
        <h2>{props.details.title}</h2>
        <div className='grid grid-cols-2 grid-rows-4 '>
          <p className='font-bold'>Role</p>
          <p>{props.details.role}</p>
          <p className='font-bold'>Education</p>
          <p>{props.details.education}</p>
          <p className='font-bold'>interest</p>
          <p>{props.details.interest}</p>
          <p className='font-bold'>LinkedIn</p>
          <a href={props.details.linkedin} className='underline'>
            {props.details.linkedin}
          </a>
        </div>
      </div>
    </Container>
  );
};
