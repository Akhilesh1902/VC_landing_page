import React from 'react';
import { DemoSection, Footer, Hero, MarketingSolution } from '../Components';

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <Hero />
      <MarketingSolution />
      <DemoSection />
    </>
  );
};

export default Landing;
