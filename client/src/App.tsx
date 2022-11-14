import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import BreedDetail from './components/Pages/BreedDetail';
import Game from './components/Pages/Game';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Results from './components/Pages/Results/Results';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/breed/:breedId' element={<BreedDetail/>}/>
        <Route path='/results/:categorieId' element={<Results />}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
