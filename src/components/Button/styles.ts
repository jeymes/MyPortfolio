import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: theme.COLORS.SECONDARY,
    },
    title: {
        fontSize: 17,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.PRIMARY,
    }
})