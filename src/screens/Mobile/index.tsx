import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { CardProject } from '../../components/CardProject';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Mobile() {
  const navigation = useNavigation();

  function handleOpen(){
    navigation.navigate("register", {});
  }
  return (
    <View style={styles.container}>
        <Header
        title='Projetos Mobile'
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
      {/* <CardProject/>
      <CardProject/>
      <CardProject/> */}

      </ScrollView>

      <Button
      onPress={handleOpen}
      title='Cadastrar novo projeto'
      />

      </KeyboardAvoidingView>
    </View>
  );
}