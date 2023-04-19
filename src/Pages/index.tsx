import React, { Suspense } from 'react';
// import Landing from './Landing';
import { Route, Routes } from 'react-router-dom';
// import Solutions from './Solutions';
// import Benefits from './Benefits';
// import Resources from './Resources';
// import Company from './Company';
// import Pricing from './Pricing';

const Landing = React.lazy(() => import('./Landing'));
const Solutions = React.lazy(() => import('./Solutions'));
const Benefits = React.lazy(() => import('./Benefits'));
const Resources = React.lazy(() => import('./Resources'));
const Company = React.lazy(() => import('./Company'));
const Pricing = React.lazy(() => import('./Pricing'));

type Props = {};

const index = (props: Props) => {
  return (
    <Suspense
      fallback={
        <div className='h-screen w-full grid place-items-center'>
          <h1 className='w-fit'>Loading ... </h1>
        </div>
      }>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/solutions/:type/' element={<Solutions />} />
        <Route path='/solutions/:type/:exp' element={<Solutions />} />
        <Route path='/benefits/:type' element={<Benefits />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='company/:type' element={<Company />} />
      </Routes>
    </Suspense>
  );
};

export default index;
