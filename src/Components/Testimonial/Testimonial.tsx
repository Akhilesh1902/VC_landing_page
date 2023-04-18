import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Container } from '../UI';
import { Groww_Revenue_image } from '../../assets/images';

type Props = {};

const Testimonial = (props: Props) => {
  const [testimonialData, setTestimonialData] = useState([
    {
      name: 'test Username',
      title: 'tesitin title',
      messsage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem minus voluptatem, totam a sit ipsam incidunt tempore id vero nisi enim ducimus perferendis nobis.',
      date: '1-12-2023',
    },
    {
      name: 'test Username',
      title: 'tesitin title',
      messsage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem minus voluptatem, totam a sit ipsam incidunt tempore id vero nisi enim ducimus perferendis nobis.',
      date: '1-12-2023',
    },
    {
      name: 'test Username',
      title: 'tesitin title',
      messsage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem minus voluptatem, totam a sit ipsam incidunt tempore id vero nisi enim ducimus perferendis nobis.',
      date: '1-12-2023',
    },
    {
      name: 'test Username',
      title: 'tesitin title',
      messsage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem minus voluptatem, totam a sit ipsam incidunt tempore id vero nisi enim ducimus perferendis nobis.',
      date: '1-12-2023',
    },
  ]);

  return (
    <div className=''>
      <Container className='grid place-items-center p-5'>
        <h1 className='text-2xl font-bold my-10'>Testimonials</h1>
        <div className='w-1/2 '>
          <Swiper
            effect='coverflow'
            grabCursor
            centeredSlides
            loop
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}>
            {testimonialData.map((item, i) => (
              <SwiperSlide>
                <div
                  className={`h-full flex flex-col gap-10 justify-between rounded p-3 bg-primary-red/30 pb-16`}>
                  <div className='fex fex-col gap-2 '>
                    <div className='flex items-center'>
                      <img
                        src={Groww_Revenue_image}
                        className='w-16 h-16 row-span-2'
                        alt=''
                      />
                      <div>
                        <h1 className='capitalize font-bold tex-xl'>
                          {item.name}
                        </h1>
                        <h2 className='capitalize'>{item.title}</h2>
                      </div>
                    </div>
                    <p className='mt-3 '>{item.messsage}</p>
                  </div>
                  <p className='font-bold text-sm'>{item.date}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className='slider-controler top-full bsolute  w-full'>
              <div className='swiper-button-prev slider-arrow'></div>
              <div className='swiper-button-next slider-arrow'></div>
              <div className='swiper-pagination'></div>
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
