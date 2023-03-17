import { StyleSheet } from "react-native";
import theme from "../../theme";
import { getBottomSpace, getStatusBarHeight,  } from 'react-native-iphone-x-helper';

const getHeight = getStatusBarHeight() + 100
const getBottom = getBottomSpace() + 34

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: getHeight,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: getBottom,
        backgroundColor: theme.COLORS.PRIMARY,
    },
    subContainer: {
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    containerLogo:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    logo:{
        width: 30, 
        height: 30,
    },
    title: {
        color: theme.COLORS.TITLE,
        fontSize: 15,
        paddingLeft: 10,
        fontFamily: theme.FONT_FAMILY.TITLE
    }
})