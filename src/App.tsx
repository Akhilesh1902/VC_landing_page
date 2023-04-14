import { AnimatePresence } from 'framer-motion';
import { Footer, Nav } from './Components';
import Pages from './Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <Nav />
          <Pages />
          <Footer />
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
