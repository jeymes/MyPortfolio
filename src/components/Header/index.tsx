import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import happy from "../../assets/icon.png";
import { Searchs } from '../Searchs';

type Props = {
title: string;
type?: boolean;
onChange: any
value: any;
onSearch: () => void;
onClear: () => void;
}

export function Header({onSearch, onClear, onChange, value, type = false, title}: Props) {
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

        <Searchs
        value={value}
        onChangeText={onChange}
        onClear={onClear}
        onSearch={onSearch}
        />

      </View>
    </View>
  );
}