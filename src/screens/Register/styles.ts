import {StyleSheet} from 'react-native';
import theme from '../../theme';
import { getBottomSpace, getStatusBarHeight,  } from 'react-native-iphone-x-helper';

const getHeight = getStatusBarHeight() + 100
const getBottom = getBottomSpace() + 34

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
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 1,
        // borderColor: 'red'
    },
    header: {
        width: '100%',
        height: getHeight,
        paddingTop: getBottom,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.TITLE,
    },
    content: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    containerLogo: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLORS.SECONDARY,
    },
    titleLogo: {
        fontSize: 12,
        fontFamily: theme.FONT_FAMILY.TEXT,
        color: theme.COLORS.DESCRIPTION,
        textAlign: 'center',
    },
    buttonUpgrad: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: theme.COLORS.SECONDARY,
    },
    titleButton: {
        fontSize: 12,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.PRIMARY,
        textAlign: 'center',
    },
    containerVideo: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLORS.SECONDARY,
    },
    titlevideo: {
        fontSize: 12,
        fontFamily: theme.FONT_FAMILY.TEXT,
        color: theme.COLORS.DESCRIPTION,
        textAlign: 'center',
    },
    containerInput: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 30,
    },
    label:{
        fontSize: 12,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.SECONDARY,
    },
    inputNome: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: theme.COLORS.SECONDARY,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.PRIMARY,
    },
    inputDescription: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: theme.COLORS.SECONDARY,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.PRIMARY,
    },
    titleTecnologias: {
        fontSize: 17,
        width: '100%',
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.SECONDARY,
        textAlign: 'left',
        marginTop: 30,
    },
    containerTech: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        // borderWidth: 1,
        // borderColor: 'red'
    },
    containerSkill: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    subContainerSkills: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    skill: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLORS.SECONDARY,
    },
    titleSkill: {
        fontSize: 10,
        fontFamily: theme.FONT_FAMILY.TEXT,
        color: theme.COLORS.DESCRIPTION,
        textAlign: 'center',
        padding: 3,
    },
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
    containerInputSkill: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelSkill:{
        fontSize: 10,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.SECONDARY,
        marginTop: 10,
    },
    inputNomeSkill: {
        width: 80,
        height: 30,
        borderRadius: 10,
        backgroundColor: theme.COLORS.SECONDARY,
        fontFamily: theme.FONT_FAMILY.TITLE,
        color: theme.COLORS.PRIMARY,
    },
    buttonSalve: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
    }
})