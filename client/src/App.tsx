import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import BreedDetail from './components/Pages/BreedDetail/BreedDetail';
import Game from './components/Pages/Game';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound/NotFound';
import Results from './components/Pages/Results/Results';
import SearchBar from './components/SearchBar/SearchBar';
import backImg from './media/Icons/logo.png';

function App() {
  return (
    <div className="App">
      <div className='backImg'>
        <img src={backImg} alt="logo" />
      </div>
      <SearchBar />
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
