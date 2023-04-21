import { AnimatePresence } from 'framer-motion';
import { Footer, Nav } from './Components';
import Pages from './Pages';
import { BrowserRouter, useLocation } from 'react-router-dom';
import CanvasWrapper from './Components/ThreeJS/CanvasWrapper';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        {location.pathname === '/solutions/store3d2' && (
          <div className='h-screen w-screen overflow-x-cli fixed top-0 -z-10  '>
            <CanvasWrapper />
          </div>
        )}
        <div className='absolute z-0 w-screen'>
          <Nav />
          <Pages />
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
