import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { ProjectsProps } from '../../screens/Register';

type Props = TouchableOpacityProps & {
    data: ProjectsProps;
  }

export function CardProject({ data, ...rest }:Props) {

  return (
    <TouchableOpacity
    {...rest}
    style={styles.container}>
        <View style={styles.subContainer}>

            <View style={styles.containerImage}>
                <Image style={styles.image}
                source={{ uri: data.photo_url }}
                />
            </View>

            <View style={styles.containerInfo}>
                <Text 
                numberOfLines={1}
                style={styles.title}>{data.name}</Text>
                <Text
                numberOfLines={3}
                style={styles.description}>
                    {data.description}
                </Text>
            </View>

        </View>
    </TouchableOpacity>
  );
}