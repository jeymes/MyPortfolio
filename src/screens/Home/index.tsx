import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, FlatList } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { CardProject } from '../../components/CardProject';

export function Home() {

  const [data, setData] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.subContainer}
      >
      <Header/>

      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: '90%'}}
      >
      <View style={styles.containerTitle}>
      <Text style={styles.title}>
        Novos Projetos
      </Text>
      </View>

      {/* <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
      <CardProject
      />
      )}
      /> */}

      <CardProject/>
      <CardProject/>
      <CardProject/>
      <CardProject/>
      <CardProject/>


      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}