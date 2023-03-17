import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    containerInput: {
        width: '75%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        paddingRight: 25,
        paddingLeft: 5,
        backgroundColor: theme.COLORS.SECONDARY,
    },
    input: {
        height: 45,
        width: '100%',
        color: theme.COLORS.TEXT,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 45,
        height: 45,
        backgroundColor: theme.COLORS.SECONDARY,
    }
})