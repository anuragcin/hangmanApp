import React from 'react';
import { Hangman } from './components';
import Playarea from './components/Playarea/playarea.component'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>React Hangman</h1>
        <Hangman></Hangman>
        <Playarea></Playarea>
      </div>
    </div>
  );
};

export default App;
