import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { X, Search } from 'react-native-feather';
import theme from '../../theme';

export function Searchs() {
  return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
            <TextInput
            placeholder='pesquisar...'
            placeholderTextColor={theme.COLORS.BORDER}
            style={styles.input}
            />
            <X
            width={20}
            height={20}
            color={theme.COLORS.DESCRIPTION}
            />
        </View>
        <TouchableOpacity
        style={styles.button}
        >
            <Search
            width={25}
            height={25}
            color={theme.COLORS.PRIMARY}
            />
        </TouchableOpacity>
    </View>
  );
}