import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';
function App(): JSX.Element {
  return (
    <>
      <StatusBar
      backgroundColor='transparent'
      translucent
      barStyle='light-content'
      />
      <Routes/>
    </>
  );
}

export default App;
