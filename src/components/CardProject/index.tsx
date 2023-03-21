import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/brand.png'

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function CardProject() {

    const navigation = useNavigation()

    function handleProjets() {
        navigation.navigate('register')
    }

  return (
    <TouchableOpacity 
    onPress={handleProjets}
    style={styles.container}>
        <View style={styles.subContainer}>

            <View style={styles.containerImage}>
                <Image style={styles.image}
                source={logo}
                />
            </View>

            <View style={styles.containerInfo}>
                <Text 
                numberOfLines={1}
                style={styles.title}>Go Pizza</Text>
                <Text
                numberOfLines={3}
                style={styles.description}>
                    O aplicativo tem uma lista das Pizzas disponível incluindo seus nomes ingredientes tamanhos e preços os garçons poderão usar o aplicativo para acessar rapidamente as informações do dnkcfedkvfke
                </Text>
            </View>

        </View>
    </TouchableOpacity>
  );
}