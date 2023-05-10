import { AnimatePresence } from 'framer-motion';
import { Footer, Nav } from './Components';
import Pages from './Pages';
import Modal from './Components/UI/Modal';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModel] = useState(false);
  const [modalType] = useState<'email'>('email');
  console.log(openModal);
  return (
    <>
      <AnimatePresence>
        <Nav />
        <div className='absolute z-0 w-screen'>
          <Pages />
          <Footer setOpenModel={setOpenModel} />
        </div>
        {openModal && <Modal type={modalType} setOpenModel={setOpenModel} />}
      </AnimatePresence>
    </>
  );
}

export default App;
