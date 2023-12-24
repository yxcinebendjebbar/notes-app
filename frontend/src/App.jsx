import 'vite/modulepreload-polyfill';
import React from 'react';
import NotePage from './pages/NotePage';
import NotesList from './pages/NotesList';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

const App = () => {
  




  return ( 
    <Router>
      <div className='flex flex-col items-center justify-center w-screen h-screen text-white bg-slate-950'>
      <div className="flex flex-col items-center justify-center w-3/4 gap-4 bg-slate-950">
        <div className='w-full'>
          <Navbar />

        </div>
        <Routes>
        <Route path='/' exact Component={NotesList} />
        <Route path='/notes/:id' Component={NotePage} />
        </Routes>
      </div>
  </div>
    </Router>
  );
};

export default App;