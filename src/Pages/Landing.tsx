import React from 'react';
import {
  DemoSection,
  Hero,
  MarketingSolution,
  Testimonial,
} from '../Components';

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <Hero />
      <MarketingSolution />
      <DemoSection />
      <Testimonial />
    </>
  );
};

export default Landing;
