import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{width: '100%'}}
      >
      <Header/>
      </KeyboardAvoidingView>
    </View>
  );
}