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
  const [search, setSearch] = useState('')

  function handlechange(id: string){
    navigation.navigate("register", {id});
  }

 function FetchProjects(value: string) {
  const formattedValue = value.toLowerCase().trim();
  const collections = ["mobile", "web"]; // Array com os nomes das coleções

  const promises = collections.map((collection) => { // Executa a consulta em cada coleção
    return firestore()
      .collection(collection)
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then(response => {
        return response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        }) as ProjectsProps[];
      })
      .catch(() => [] as ProjectsProps[]);
  });

  Promise.all(promises).then((results) => { // Combina os resultados em uma única lista
    const data = results.reduce((acc, cur) => {
      return [...acc, ...cur];
    }, []);

    setData(data);
  }).catch(() => Alert.alert("Consulta", "Não foi possivél realizar a consulta"));
}

function handleSearch(){
  FetchProjects(search);
}

function handleSearchClear(){
  setSearch('');
  FetchProjects('');
}

  useFocusEffect(useCallback(() => {
    FetchProjects('')
  }, []));
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.subContainer}
      >
      <Header
      onChange={setSearch}
      value={search}
      onClear={handleSearchClear}
      onSearch={handleSearch}
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
      onPress={() => handlechange(item.id)}
      data={item}
      />
      )}
      />


      </KeyboardAvoidingView>
    </View>
  );
}