import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import theme from './src/theme';
function App(): JSX.Element {
  return (
    <View
    style={{flex: 1, backgroundColor: theme.COLORS.GRADIENT}}>
      <StatusBar
      backgroundColor='transparent'
      translucent
      barStyle='light-content'
      />
      <Text>
        Teste
      </Text>
    </View>
  );
}

export default App;
