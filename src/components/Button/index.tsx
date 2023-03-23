import React from 'react';
import { TouchableOpacity,TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps &{
  title: any;
}

export function Button({title, ...rest}: Props) {
  return (
    <TouchableOpacity
    {...rest}
     style={styles.container}>
        <Text
        style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}