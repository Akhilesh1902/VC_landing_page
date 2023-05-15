import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
type Props = {};

type FormValues = {
  name: string;
  email: string;
  message: string;
  phone: number;
};

const Pricing = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const location = useLocation();
  const submit: SubmitHandler<FormValues> = async (data) => {
    if (Number.isNaN(data.phone)) {
      alert('enter valid mobile number');
      return;
    }
    const SERVER_URL = ['commercenexgen.com', 'localhost'];
    const currentpage = location.pathname;
    const addedon = new Date().toLocaleDateString();
    const refUrl = '';
    const ip_res = await axios.get('https://api.ipify.org/?format=json');
    const ipaddress = ip_res.data.ip;

    const dataToSend = { ...data, currentpage, addedon, refUrl, ipaddress };
    console.log(dataToSend);

    const res = await axios.post(
      `http://${SERVER_URL[0]}:3030/newContact`,
      dataToSend
    );
    if (res.status === 200) {
      alert(
        'Thank You for Reaching out to us, Our team will soon reach out to you.'
      );
    } else {
      alert('Something went wrong while sending the mail.');
    }
    formRef.current.reset();
    console.log(res);
    console.log('email form submitted');
  };
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  return (
    <div>
      <div className='relative bg-primary-red w-screen py-2 md:py-10'>
        <h1 className='text-white text-center font-bold text-md  md:text-xl tracking-wider'>
          Pricing
        </h1>
      </div>
      <div className='  py-10 grid place-items-center'>
        <h1 className='text-2xl font-bold mb-10 '>Contact US</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit(submit)}
          className='flex flex-col md:w-[400px] gap-2'>
          <input
            {...register('name')}
            placeholder='User Name'
            className='bg-white p-2 outline-1 outline'
            required
          />
          <input
            {...register('phone', {
              valueAsNumber: true,
              //   validate: (value) => value > 0,
            })}
            className='bg-white p-2 outline-1 outline'
            placeholder='Mobile Number'
          />
          {/* {errors.number && (
                <p className='text-black'>{errors.number.message}</p>
              )} */}

          <input
            type='email'
            {...register('email')}
            placeholder='E-mail'
            className='bg-white p-2 outline-1 outline'
            required
          />
          <textarea
            placeholder='Message'
            {...register('message')}
            className='bg-white p-2 outline-1 outline'
          />

          <input
            type='submit'
            className='bg-primary-red p-2 text-white font-bold'
          />
        </form>
      </div>
    </div>
  );
};

export default Pricing;
