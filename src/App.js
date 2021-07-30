import React, {useState, useEffect} from 'react'
import SearchForm from './components/SearchForm'
import Buttons from './components/Buttons'
import Stories from './components/Stories'

import './App.css';

function App() {
  
  return (
    <>
    <SearchForm/>
    <Buttons/>
    <Stories/>
    </>
  );
}

export default App;