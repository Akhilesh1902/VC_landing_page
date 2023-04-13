import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Hero, Nav } from './Components';
import { Container } from './Components/UI';
import Pages from './Pages';

function App() {
  return (
    <>
      <Nav />
      <Pages />
    </>
  );
}

export default App;
