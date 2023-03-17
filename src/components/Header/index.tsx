import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import happy from "../../assets/icon.png"
import { Searchs } from '../Searchs';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        
        <View style={styles.containerLogo}>
        <Image
      style={styles.logo}
      source={happy}/>
        <Text style={styles.title}>
            My Portfólio
        </Text>
        </View>

        <Searchs/>

      </View>
    </View>
  );
}