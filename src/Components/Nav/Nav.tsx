import LogoImg from '../assets/VIsCommercelogo.svg';
import Logo from '../../assets/Logo.svg';
import { Button, Container } from '../UI';
import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
type Props = {};

const Nav = (props: Props) => {
  const navigateto = useNavigate();
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <div className='z-0 bg-white'>
      <Container className='flex px-8 py-3 '>
        <div className='flex  w-full justify-between items-center'>
          <div
            onClick={() => {
              navigateto('/');
            }}
            className='cursor-pointer'>
            <img src={Logo} alt='' className='h-16' />
          </div>
          <ul className='hidden md:flex text-xs gap-2 font-medium capitalize!'>
            <li>
              <Button
                optionSelect={() => {
                  console.log('clicked');
                }}
                type='dropdown'
                options={[
                  {
                    innerText: 'Store3D',
                    url: '/solutions/store3d',
                  },
                  {
                    innerText: 'Home3D',
                    url: '/solutions/home3d/userExperience',
                  },
                ]}>
                <div className='flex items-center gap-2 '>
                  <p>Solution</p>
                  <AiFillCaretDown />
                </div>
              </Button>
            </li>
            <li>
              <Button
                type='dropdown'
                optionSelect={() => {
                  console.log('clicked');
                }}
                options={[
                  {
                    innerText: 'Store3D',
                    url: '/benefits/store3d',
                  },
                  {
                    innerText: 'Home3D',
                    url: '/benefits/home3d',
                  },
                ]}>
                <div className='flex items-center gap-2'>
                  <p>Benefits</p>
                  <AiFillCaretDown />
                </div>
              </Button>
            </li>
            <li>
              <Button
                type='button'
                url='/pricing'
                onClick={() => {
                  console.log('clicked');
                }}>
                pricing
              </Button>
            </li>
            <li>
              <Button
                type='button'
                url='/resources'
                onClick={() => {
                  console.log('clicked');
                }}>
                resources
              </Button>
            </li>
            <li>
              <Button
                optionSelect={() => {
                  console.log('clicked');
                }}
                type='dropdown'
                options={[
                  {
                    innerText: 'About Us',
                    url: '/company/aboutus',
                  },
                  {
                    innerText: 'Team',
                    url: '/company/team',
                  },
                ]}>
                <div className='flex items-center gap-2'>
                  <p>Company</p>
                  <AiFillCaretDown />
                </div>
              </Button>
            </li>
          </ul>
          <AiOutlineMenu
            className='md:hidden text-xl'
            onClick={() => setOpenMobileNav((p) => !p)}
          />
          {openMobileNav && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className='monile-nav fixed md:hidden z-10 bg-white flex flex-col top-0 left-0 w-screen h-screen text-xs gap-2 font-medium capitalize!'>
              <div className='flex my-10 text-2xl justify-between px-5'>
                <p className='font-bold text-primary-red'>Navigation</p>
                <AiOutlineClose onClick={() => setOpenMobileNav((p) => !p)} />
              </div>
              <ul className='flex flex-col  items-center gap-10'>
                <li>
                  <Button
                    type='button'
                    url='/'
                    onClick={() => {
                      console.log('clicked');
                      setOpenMobileNav(false);
                    }}>
                    Home
                  </Button>
                </li>
                <li>
                  <Button
                    optionSelect={() => {
                      console.log('clicked');
                      setOpenMobileNav(false);
                    }}
                    type='dropdown'
                    options={[
                      {
                        innerText: 'Store3D',
                        url: '/solutions/store3d',
                      },
                      {
                        innerText: 'Home3D',
                        url: '/solutions/home3d/userExperience',
                      },
                    ]}>
                    <div className='flex items-center gap-2 '>
                      <p>Solution</p>
                      <AiFillCaretDown />
                    </div>
                  </Button>
                </li>
                <li>
                  <Button
                    type='dropdown'
                    optionSelect={() => {
                      console.log('clicked');
                      setOpenMobileNav(false);
                    }}
                    options={[
                      {
                        innerText: 'Store3D',
                        url: '/benefits/store3d',
                      },
                      {
                        innerText: 'Home3D',
                        url: '/benefits/home3d',
                      },
                    ]}>
                    <div className='flex items-center gap-2'>
                      <p>Benefits</p>
                      <AiFillCaretDown />
                    </div>
                  </Button>
                </li>
                <li>
                  <Button
                    type='button'
                    url='/pricing'
                    onClick={() => {
                      console.log('clicked');
                      setOpenMobileNav(false);
                    }}>
                    pricing
                  </Button>
                </li>
                <li>
                  <Button
                    type='button'
                    url='/resources'
                    onClick={() => {
                      console.log('clicked');
                      setOpenMobileNav(false);
                    }}>
                    resources
                  </Button>
                </li>
                <li>
                  <Button
                    optionSelect={() => {
                      console.log('clicked');
                      setOpenMobileNav(false);
                    }}
                    type='dropdown'
                    options={[
                      {
                        innerText: 'About Us',
                        url: '/company/aboutus',
                      },
                      {
                        innerText: 'Team',
                        url: '/company/team',
                      },
                    ]}>
                    <div className='flex items-center gap-2'>
                      <p>Company</p>
                      <AiFillCaretDown />
                    </div>
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Nav;
