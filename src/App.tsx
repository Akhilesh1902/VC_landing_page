import { AnimatePresence } from 'framer-motion';
import { Footer, Nav } from './Components';
import Pages from './Pages';
import { useLocation } from 'react-router-dom';
import CanvasWrapper from './Components/ThreeJS/CanvasWrapper';
import Modal from './Components/UI/Modal';
import { useState } from 'react';
import DatGuiContext from './Components/ThreeJS/DatGuiContext';

function App() {
  const location = useLocation();

  const [openModal, setOpenModel] = useState(false);
  const [modalType] = useState<'email'>('email');
  console.log(openModal);
  return (
    <>
      <AnimatePresence>
        <DatGuiContext>
          {location.pathname === '/solutions/store3d2' && (
            <div className='h-screen w-screen bg-black overflow-x-cli fixed top-0 -z-10  '>
              <CanvasWrapper />
            </div>
          )}
          <Nav />
          <div className='absolute z-0 w-screen'>
            <Pages />
            <Footer setOpenModel={setOpenModel} />
          </div>
          {openModal && <Modal type={modalType} setOpenModel={setOpenModel} />}
        </DatGuiContext>
      </AnimatePresence>
    </>
  );
}

export default App;
