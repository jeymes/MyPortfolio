import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    buttonUpgradSkill: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: theme.COLORS.SECONDARY,
    },
    titleButtonSkill: {
        fontSize: 12,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.PRIMARY,
        textAlign: 'center',
    },
})