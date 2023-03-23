import {StyleSheet} from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 100
    },

    Placeholder: {
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.COLORS.SECONDARY,
        backgroundColor: theme.COLORS.SECONDARY,
    },

    PlaceholderTitle: {
        fontSize: 12,
        fontFamily: theme.FONT_FAMILY.TEXT,
        color: theme.COLORS.DESCRIPTION,
        textAlign: 'center',
    }
})