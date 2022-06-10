import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateContainer from './components/CreateContainer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { createcontainer } from './path';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header/>
      <main className='px-5 md:px-16 mt-20 md:mt-28 mb-6 md:mb-8 w-full'>
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
