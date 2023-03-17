import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import theme from './src/theme';
import { Home } from './src/screens/Home';
function App(): JSX.Element {
  return (
    <>
      <StatusBar
      backgroundColor='transparent'
      translucent
      barStyle='light-content'
      />
      <Home/>
    </>
  );
}

export default App;
