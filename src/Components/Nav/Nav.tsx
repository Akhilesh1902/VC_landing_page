import LogoImg from '../assets/VIsCommercelogo.svg';
import Logo from '../../assets/Logo.svg';
import { Button, Container } from '../UI';
import { AiFillCaretDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
type Props = {};

const Nav = (props: Props) => {
  const navigateto = useNavigate();
  return (
    <div className='bg-white'>
      <Container className='flex px-8 py-3 '>
        <div className='flex w-full justify-between items-center'>
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
        </div>
      </Container>
    </div>
  );
};

export default Nav;
