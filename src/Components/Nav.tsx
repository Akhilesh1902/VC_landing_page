import LogoImg from '../assets/VIsCommercelogo.svg';
import Logo from '../assets/Logo.svg';
import Button from './UI/Button';
import { AiFillCaretDown } from 'react-icons/ai';

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className='flex px-8 '>
      <div className='flex w-full justify-between items-center'>
        <div>
          <img src={Logo} alt='' className='h-16' />
        </div>
        <ul className='hidden md:flex text-xs gap-2 font-medium'>
          <li>
            <Button
              onClick={() => {
                console.log('clicked');
              }}
              dropdown
              options={['option1', 'option2', 'option3']}>
              <div className='flex items-center gap-2'>
                <p>Solution</p>
                <AiFillCaretDown />
              </div>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                console.log('clicked');
              }}
              dropdown
              options={['option1', 'option2', 'option3']}>
              <div className='flex items-center gap-2'>
                <p>BEnifits</p>
                <AiFillCaretDown />
              </div>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                console.log('clicked');
              }}>
              pricing
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                console.log('clicked');
              }}>
              resources
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                console.log('clicked');
              }}
              dropdown
              options={['option1', 'option2', 'option3']}>
              <div className='flex items-center gap-2'>
                <p>Company</p>
                <AiFillCaretDown />
              </div>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                console.log('clicked');
              }}
              varient={'primary'}
              rounded
              className='capitalize'>
              try store 3d demo
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
