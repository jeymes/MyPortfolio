import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: theme.COLORS.SECONDARY,
    },
    subContainer: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    containerInfo:{
        width: '80%',
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    title: {
        fontSize: 17,
        paddingBottom: 5,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.TEXT,
    },
    description: {
        fontSize: 10,
        fontFamily: theme.FONT_FAMILY.TEXT,
        color: theme.COLORS.DESCRIPTION,
    }
})