import React from 'react';
import Landing from './Landing';
import { Route, Routes } from 'react-router-dom';
import Solutions from './Solutions';
import Benefits from './Benefits';
import Resources from './Resources';
import Company from './Company';
import Pricing from './Pricing';

type Props = {};

const index = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/solutions/:type' element={<Solutions />} />
      <Route path='/benefits/:type' element={<Benefits />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='company/:type' element={<Company />} />
    </Routes>
  );
};

export default index;
