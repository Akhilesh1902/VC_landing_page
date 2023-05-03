import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Container } from '../UI';
import { Groww_Revenue_image } from '../../assets/images';
import { testimonialData } from '../constants';
type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className=''>
      <Container className='flex flex-col place-items-center p-5'>
        <h1 className='text-2xl font-bold my-10'>Testimonials</h1>
        <div className='w-full md:w-1/2 '>
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
                  <div className='fex h-full fex-col gap-2 '>
                    <div className='flex items-center'>
                      {/* <img
                        src={Groww_Revenue_image}
                        className='w-16 h-16 row-span-2'
                        alt=''
                      /> */}
                      <div>
                        <h1 className='capitalize  font-bold text-xl'>
                          {item.name}
                        </h1>
                        <h2 className='capitalize font-bold'>
                          {item.designation}
                        </h2>
                      </div>
                    </div>
                    <p className='mt-3 h-full'>{item.message}</p>
                  </div>
                  {/* <p className='font-bold text-sm'>{item.date}</p> */}
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
