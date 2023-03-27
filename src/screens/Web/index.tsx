import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { CardProject } from '../../components/CardProject';
import { Button } from '../../components/Button';

export function Web() {
  return (
    <View style={styles.container}>
        <Header
        title='Projetos Web'
        type={true}
        />

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.subContainer}
      >

      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: '100%'}}
      >

      </ScrollView>
      <Button
      title='Cadastrar novo projeto'
      />

      </KeyboardAvoidingView>
    </View>
  );
}