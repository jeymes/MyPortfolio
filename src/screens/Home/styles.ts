import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.COLORS.BACKGROUND,
    },
    subContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerTitle: {
        width: '90%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    title: {
        fontSize: 17,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.TITLE,
    }
})