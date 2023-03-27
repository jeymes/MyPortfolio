import React from 'react';
import { TouchableOpacity,TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps &{
  title: any;
  width?: string;
}

export function Button({title, width = '90%', ...rest}: Props) {
  return (
    <TouchableOpacity
    {...rest}
     style={[styles.container, {width: width}]}>
        <Text
        style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}