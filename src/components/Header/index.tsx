import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import happy from "../../assets/icon.png";
import { Searchs } from '../Searchs';

type Props = {
title: string;
type?: boolean;
}

export function Header({type = false, title}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        
        <View style={styles.containerLogo}>
          { type ? false : <Image
        style={styles.logo}
        source={happy}
        />}
        <Text style={styles.title}>
        {title}
        </Text>
        </View>

        <Searchs/>

      </View>
    </View>
  );
}