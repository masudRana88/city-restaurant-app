import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateContainer from './components/CreateContainer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { createcontainer } from './utils/path';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className='flex flex-col w-screen h-auto bg-primary'>
      <Header/>
      <main className='w-full px-3 mt-20 mb-6 md:px-16 md:mt-28 md:mb-8'>
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path={createcontainer} element={<CreateContainer/>}/>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
