import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps &{
    title: string;
}

export function ButtonUpdate({ title, ...rest}:Props) {
  return (
    <TouchableOpacity 
   {...rest}
    style={styles.buttonUpgradSkill}>
    <Text style={styles.titleButtonSkill}>{title}</Text>
    </TouchableOpacity>
  );
}