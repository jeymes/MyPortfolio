import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

export function Input() {
  return (
    <View style={styles.containerInputSkill}>
    <Text style={styles.labelSkill}>Nome</Text>
    <TextInput
    style={styles.inputNomeSkill}
    />
</View>
  );
}