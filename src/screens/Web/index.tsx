import React, { useCallback, useState } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';
import firestore from '@react-native-firebase/firestore';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ProjectsProps } from '../Register';
import { CardProject } from '../../components/CardProject';

export function Web() {
  const navigation = useNavigation();
  const [data, setData] = useState<ProjectsProps[]>([]);
  const [search, setSearch] = useState('')

  function handleOpen(){
    navigation.navigate("register", {});
  }

  function handlechange(id: string){
    navigation.navigate("register", {id});
  }

  function handleSearch(){
    FetchProjectWeb(search);
  }
  
  function handleSearchClear(){
    setSearch('');
    FetchProjectWeb('');
  }

  function FetchProjectWeb(value: string){
    const formattedValue = value.toLowerCase().trim();

    firestore()
    .collection('web')
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
    FetchProjectWeb('')
  }, []));
  return (
    <View style={styles.container}>
        <Header
        onChange={setSearch}
        value={search}
        onClear={handleSearchClear}
        onSearch={handleSearch}
        title='Projetos Mobile'
        type={true}
        />

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.subContainer}
      >


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

      <Button
      onPress={handleOpen}
      title='Cadastrar novo projeto'
      />

      </KeyboardAvoidingView>
    </View>
  );
}