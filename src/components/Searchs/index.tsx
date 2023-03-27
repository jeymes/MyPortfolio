import React from 'react';
import { TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { X, Search } from 'react-native-feather';
import theme from '../../theme';

type Props = TouchableOpacityProps & TextInputProps &{
  onSearch: () => void;
  onClear: () => void;
}

export function Searchs({ onSearch, onClear, ...rest }:Props) {
  return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
            <TextInput
            {...rest}
            placeholder='pesquisar...'
            placeholderTextColor={theme.COLORS.BORDER}
            style={styles.input}
            />
            <TouchableOpacity
            onPress={onClear}
            {...rest}
            >
            <X
            width={20}
            height={20}
            color={theme.COLORS.DESCRIPTION}
            />
            </TouchableOpacity>

        </View>
        <TouchableOpacity
            onPress={onSearch}
        {...rest}
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