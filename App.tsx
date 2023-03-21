import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Register } from './src/screens/Register';
function App(): JSX.Element {
  return (
    <>
      <StatusBar
      backgroundColor='transparent'
      translucent
      barStyle='light-content'
      />
      <Register/>
    </>
  );
}

export default App;
