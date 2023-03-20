import React from 'react';
import { View, Text, TextProps, ViewProps } from 'react-native';

import { styles } from './styles';
import theme from '../../theme';

type TitleProps = TextProps &{
    color: string;
    title: string;
}

export function BottomTab({ title, color  }: TitleProps) {


  return (
    <View style={styles.container}>

      <Text 
      style={{
        fontSize: 18,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: color
      }}
      >
        {title}
      </Text>

    </View>
  );
}