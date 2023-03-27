import React, { useCallback, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { CardProject } from '../../components/CardProject';
import { ProjectsProps } from '../Register';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState<ProjectsProps[]>([]);

  function handleOpen(id: string){
    navigation.navigate("register", {id});
  }

  function FetchProject(value: string){
    const formattedValue = value.toLowerCase().trim();

    firestore()
    .collection('mobile')
    .orderBy('name_insensitive')
    .startAt(formattedValue)
    .endAt(`${formattedValue}\uf8ff`)
    .get()
    .then(response => {
      const data = response.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      }) as ProjectsProps[];

      setData(data)
    })
    .catch(() => Alert.alert("Consulta", "Não foi possivél realizar a consulta"))
  }
  useFocusEffect(useCallback(() => {
    FetchProject('')
  }, []));
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.subContainer}
      >
      <Header
      title='My Portfólio'
      />

      <View style={styles.containerTitle}>
      <Text style={styles.title}>
        Novos Projetos
      </Text>
      </View>

      <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
      <CardProject
      onPress={() => handleOpen(item.id)}
      data={item}
      />
      )}
      />


      </KeyboardAvoidingView>
    </View>
  );
}