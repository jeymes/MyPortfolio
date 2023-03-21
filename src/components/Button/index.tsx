import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
}

export function Button({title}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text
        style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}