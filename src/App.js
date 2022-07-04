import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Grid from './components/Grid';

import { useState } from 'react';

function App() {
  return (
    <>
      <Title userName='JUHI' duration={2} />
      <Grid />
    </>
  );
}

export default App;
