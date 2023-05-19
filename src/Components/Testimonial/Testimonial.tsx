import { Container } from '../UI';
import { testimonialData } from '../constants';
import { Carousel } from '3d-react-carousel-ts';
type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className='mb-10'>
      <Container className='flex flex-col place-items-center p-5 '>
        <h1 className='text-2xl font-bold my-10'>Testimonials</h1>
        <div className='w-full mdw-1/2 h-full hidden md:block'>
          <Carousel
            slides={testimonialData.map((item, i) => (
              <div
                className={`flex px-10 w-full h-[300px] flex-col gap-10 justify-between rounded p-3 bg-[#FE8279] text-white pb-16`}>
                <div className='flex flex-col gap-2 '>
                  <div className='flex items-center'>
                    <div>
                      <h1 className='capitalize  font-bold text-xl'>
                        {item.name}
                      </h1>
                      <h2 className='capitalize text-sm'>{item.designation}</h2>
                    </div>
                  </div>
                  <p className='mt-3 h-full'>{item.message}</p>
                </div>
              </div>
            ))}
            autoplay={true}
            interval={5000}
          />
        </div>
        <div className='mobileTestimonial md:hidden flex flex-row gap-2  overflow-scroll w-[90vw]'>
          {testimonialData.map((item, i) => (
            <div
              className={`flex p-2 flex-col gap-10 justify-between rounded bg-[#FE8279] text-white `}>
              <div className='flex w-[75vw] flex-col gap-2 '>
                <div className='flex items-center'>
                  <div>
                    <h1 className='capitalize  font-bold text-xl'>
                      {item.name}
                    </h1>
                    <h2 className='capitalize text-sm'>{item.designation}</h2>
                  </div>
                </div>
                <p className='mt-3 h-ful'>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
