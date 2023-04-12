import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Hero, Nav } from './Components';
import Container from './Components/UI/Container';

function App() {
  return (
    <Container>
      <Nav />
      <Hero />
    </Container>
  );
}

export default App;
