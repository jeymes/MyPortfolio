import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    uri: string | null;
    title: string;
    width?: number;
    fontSize?: number
}

export function Photo({ uri, title, width = 100, fontSize = 12 }: Props) {

    if (uri) {
        return <Image 
        style={styles.image} 
        source={{ uri }} />;
    }

  return (
    <View style={[styles.Placeholder, { width: width, height: width}]}>
        <Text style={[styles.PlaceholderTitle, { fontSize: fontSize}]}>
           {title}
        </Text>
    </View>
  );
}